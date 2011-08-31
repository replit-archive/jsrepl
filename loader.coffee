# Get this loader script_element element.
script_element = document.getElementById 'jsrepl_loader'
# If we are in teh sandbox there would be no loader script with this id.
if script_element?
  # The source of this file.
  THIS_FILE = script_element.src
  # The path that would prefix all files to load.
  BASE_PATH = THIS_FILE.split('/')[...-1].join '/'
  SANDBOX_SRC = "#{BASE_PATH}/sandbox.html"

# Loader module, can load multiple files/js using XHR, if js config settings 
#   is set to true then script loading order is respected.
class Loader
  constructor: ->
    @xhr = window.XMLHttpRequest or ActiveXObject('Microsoft.XMLHTTP')
    # A function to get the body and head tag.
    #   Won't be available if this was called before window load.
    loadfn = ()=>
      @head = document.getElementsByTagName('head')[0]
      @body = document.getElementsByTagName('body')[0]
    # If this file was loaded in an iframe its probably after window load so 
    #   lets try and get the head & body tags anyways.
    loadfn()
    # If we are still before window load then we should create a function queue
    #   to delay till after window load.
    @loadfns = [loadfn]
    # When the window actually loads execute all queued functions.
    window.onload = ()=>
      fn() for fn in @loadfns
    # Child iframe instantiated to null.
    @iframe = null
    # noob
    @noop = ->
    @jsrepl_load_fn = @noop
  
  # Assign a callback for when this file, jsrepl and language definitions are all loaded.
  onload: (callback) ->
    @jsrepl_load_fn = callback or @noop
    
  # Appends an element to the head or body tag, queues call till window load
  #   if the tag in question is not available.
  _appendChild: (tag, elem) ->
    if @[tag]?
      # The tag actually exists just append the elem.
      @[tag].appendChild elem
    else
      # We are before window load, delay the append till window load.
      @loadfns.push () =>
        @[tag].appendChild elem
    
  # Takes a url, success & error callbacks and an index.
  #   calls success with the response text and the given index when operation
  #     is successful.
  #   calls error with the XHR object that caused the error.
  _getXHR: (url, callback, errCallback, index) ->
    http = new @xhr()
    if BASE_PATH?
      url = "#{BASE_PATH}/#{url}"
    http.open 'GET',  url, true
    http.onreadystatechange = ()->
      if http.readyState == 4
        if http.status == 200
          callback http.responseText, index
        else
          errCallback http
    http.send null
  
  # Creates a script with the given src and assigns onload callback.
  _createScript: (src, callback) ->
    script = document.createElement 'script'
    script.type = 'text/javascript'
    script.src = src
    script.async = true
    if script.onreadystatechange?  
      script.onreadystatechange = ()->
        if /^loaded|complete$/.test script.readyState
          callback()
    else
      script.onload = callback
    return script
    
  # Loads a script file using a script tag if the debug option is set to true
  #   otherwise uses regular XHR and evals the reponse.
  #   calls success with the response text.
  #   calls error with the erroneous XHR object.
  _getScript: (src, callback, errCallback) ->
    if @config.debug
      if BASE_PATH?
        src = "#{BASE_PATH}/#{src}"
      @_appendChild 'head', @_createScript src, callback
    else
      cb = (response) ->
        eval(response)
        callback response
      @_getXHR src, cb, errCallback
  
  # Creates a new sandbox (iframe window), and injects self into it.
  #   Calls callback with the new sandbox.
  createSandbox: (callback) ->
    if @iframe?
      @body.removeChild @iframe
    @iframe = document.createElement 'iframe'
    @iframe.src = SANDBOX_SRC
    @iframe.style.display = 'none'
    @iframe.onload = () =>
      sandbox = @iframe.contentWindow
      cb = ()->
        callback(sandbox)
      script = @_createScript THIS_FILE, cb
      sandbox.document.getElementsByTagName('body')[0].appendChild script
    @_appendChild 'body', @iframe

  # Takes an array or a single file and loads them/it.
  #   config params:
  #     (bool) js: Whether the files to be fetched are js files (to eval);
  #     (bool) debug: If true will use regular script injection over XHR for 
  #                   script loading;
  #     (Function) success: Called with an array all responses text;
  #     (Function) error: Called with the XHR object causing the error;
  load: (files, config) ->
    # Config is a success function
    if typeof config == "function"
      config = 
        success: config
    # Check if files is actually is a single file.
    if ({}).toString.call(files) != "[object Array]"
      files = [files]
    # Config defaults
    @config = 
      debug: config.debug or false
      js: config.js or false
      success: config.success or @noop
      error: config.error or @noop
    # Someone stupid wants to load 0 files.
    if files.length == 0
      return @config.success([])
    # Timeout for resource loading, TODO(amasad): implement.
    timeout = null
    # Number of files to be loaded
    files_to_load = files.length
    # An array containing all responses text.
    responses = []
    # The current script index being loaded.
    script_index = 0
    # Success callback wrapper, calls success when all files are loaded.
    cb = (resp, i)=>
      responses[i] = resp
      files_to_load--
      if files_to_load == 0
        @config.success responses
      else if config.js
        # We are loading scripts, respect order bitch!
        script_index++
        getNextScript()
    # Iterator for script loading.
    getNextScript = () => 
      if @config.js
        callCb = (resp)->
          cb resp, script_index
        @_getScript files[script_index], callCb, @config.error

    if @config.js
      # When loading scripts make the first call to the iterator.
      getNextScript()
    else
      # Regular files, fuck order. CHAOS!
      @_getXHR file, cb, @config.error, i for file, i in files

workerSupported = 'Worker' of window
console.log workerSupported
class Sandbox
  # baseScripts: The scripts that loads every time a new worker is created.
  # messages: Message routes to functions.
  constructor: (@baseScripts, @messages) ->
  
  # Defines a new route.
  defineIncoming: (type, fn) ->
    @messages[type] = fn
  
  # Loads a new instance of a worker with the basescripts + the new scripts
  load: (moreScripts) ->
    allScripts = @baseScripts.concat moreScripts
    base = allScripts.shift()
    # onmessage handler for worker.
    onmsg = (event) =>
      # IE fires stupid events to convey its stupidity!
      try
        msg = JSON.parse event.data
        # Route message to funciton.
        @messages[msg.type].call(@, msg.data)
      catch e
    # Function to order worker to start importing scripts.
    startImport = ()=> 
      @post
        type: 'importScripts'
        data: allScripts
    # If we already have a worker then kill that bastard!
    if @worker?
      @kill()
    if not workerSupported
      # Worker is not supported, create a new iframe sandbox replacing the old one.
      JSREPLLoader.createSandbox (sandbox) =>
        @worker = sandbox
        window.onmessage = onmsg
        startImport()
    else
      # Workers are supported \o/
      @worker = new Worker base
      @worker.onmessage = onmsg
      startImport()
      
  post: (msgObj) ->
    # Since all messages are going to the Sandboss, we hardcode it.
    msgObj.type = 'Sandboss.' + msgObj.type
    msgStr = JSON.stringify msgObj
    if workerSupported
      @worker.postMessage msgStr
    else
      # Worker is an iframe, additional origin argument required.
      @worker.postMessage msgStr, '*'
  
  # Only kill actual worker, iframe disposal is taken care of by the loader.
  kill: () -> @worker.terminate() if workerSupported
  
@JSREPLLoader = new Loader
if BASE_PATH?
  # We are in the top window loader.
  @JSREPLLoader.load ["repl.js", "languages.js"],
    success: =>
      # Fire the load callback.
      @JSREPLLoader.jsrepl_load_fn()
    js: on
    debug: true
  # We don't need a sandboss in the iframe
  @Sandboss = 
    create: (config) -> @sandbox = new Sandbox config.baseScripts, config.incoming
  
  