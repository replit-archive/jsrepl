# Get this loader script_element element.
script_element = document.getElementById 'jsrepl-script'

if script_element?
  # The path that would prefix all files to load.
  BASE_PATH = script_element.src.split('/')[...-1].join '/'
  SANDBOX_SRC = "#{BASE_PATH}/sandbox.html"
else
  throw new Error 'JSREPL script element cannot be found. Make sure you have the ID "jsrepl-script" on it.'

class Loader
  constructor: ->
    # A function to get the body and head tag.
    #   Won't be available if this was called before window load.
    loadfn = =>
      @head = document.getElementsByTagName('head')[0]
      @body = document.getElementsByTagName('body')[0]
    # If this file was loaded in an iframe its probably after window load so
    #   lets try and get the head & body tags anyways.
    loadfn()
    # If we are still before window load then we should create a function queue
    #   to delay till after window load.
    @loadfns = [loadfn]
    # When the window actually loads, execute all queued functions.
    window.onload = =>
      fn() for fn in @loadfns
    @iframe = null

  # Appends an element to the head or body tag, or queues call till window load
  # if the element in question is not available.
  _appendChild: (tag, elem) ->
    fn = => @[tag].appendChild elem
    if @[tag]?
      # The tag actually exists just append the elem.
      fn()
    else
      # We are before window load; delay the append till window load.
      @loadfns.push fn
        

  # Creates a new sandbox (iframe window), and injects self into it. Calls
  # callback with the new sandbox.
  createSandbox: (callback) ->
    if @iframe? then @body.removeChild @iframe
    @iframe = document.createElement 'iframe'
    @iframe.src = SANDBOX_SRC
    @iframe.style.display = 'none'
    @iframe.onload = =>
      callback @iframe.contentWindow
    @_appendChild 'body', @iframe


class EventEmitter
  constructor: ->
    @listeners = {}

  makeArray: (obj) ->
    if Object::toString.call(obj) != '[object Array]'
      obj = [obj]
    obj

  on: (types, fn) ->
    return if typeof fn != 'function'
    types = @makeArray types
    for type in types
      if not @listeners[type]?
        @listeners[type] = [fn]
      else
        @listeners[type].push fn
  
  off: (types, fn) ->
    types = @makeArray types
    for type in types
      listeners = @listeners[type]
      continue if not listeners?
      if fn?
        i = listeners.indexOf fn
        if i > -1
          listeners.splice(i, 1)
      else
        @listeners[type] = []
  
  fire: (type, args) ->
    args = @makeArray args
    listeners = @listeners[type]
    return if not listeners?
    args.push type
    # We clone the array of listeners before we fire.
    # Just incase one listener is a "once" listener 
    # Which will screw up the iteration.
    fn.apply @, args for fn in (f for f in listeners)
    
  once: (types, fn) ->
    types = @makeArray types
    cb = (args...) =>
      @off type, cb for type in types
      fn args...
    
    @on type, cb for type in types

workerSupported = 'Worker' of window

class Sandbox extends EventEmitter
  # baseScripts: The scripts that loads every time a new worker is created.
  constructor: (baseScripts, @input_server, listeners = {}) ->
    @baseScripts = (BASE_PATH + '/' + path for path in baseScripts)
    @loader = new Loader
    for type, fn of listeners
      listeners[type] = [fn] if typeof fn is 'function'
    @listeners = listeners
  
  # onmessage handler for worker.
  onmsg: (event) =>
    # IE fires extra events that we want to ignore.
    try
      msg = JSON.parse event.data
      # Execute listeners.
      @fire msg.type, [msg.data]
    catch e
      # Ignore.
  
  # Loads a new instance of a worker with the basescripts + the new scripts.
  load: (moreScripts, workerFriendly=true) ->
    allScripts = @baseScripts.concat moreScripts
    base = allScripts.shift()
    # Kill existing worker if we have one.
    if @worker? then @kill()

    # Called after creating the worker.
    postCreate = =>
      @post type: 'importScripts', data: allScripts
      if @input_server?
        @post type: 'set_input_server', data: @input_server

    # Remove previous onmsg handler on the window if exists.
    window.removeEventListener 'message', @onmsg, false

    if not workerSupported or not workerFriendly
      # Worker not supported; create a new iframe sandbox replacing the old one.
      @loader.createSandbox (sandbox) =>
        @worker = sandbox
        @workerIsIframe = true
        window.addEventListener 'message', @onmsg, false
        postCreate()
    else
      # Workers are supported! \o/
      @worker = new Worker base
      @workerIsIframe = false
      @worker.addEventListener 'message', @onmsg, false
      postCreate()

  post: (msgObj) ->
    msgStr = JSON.stringify msgObj
    if not @workerIsIframe
      @worker.postMessage msgStr
    else
      # Worker is an iframe; additional origin argument required.
      @worker.postMessage msgStr, '*'

  # Terminate worker or delete iframe.
  kill: ->
    @worker.terminate?()
    if @loader.body? and @loader.iframe
      @loader.body.removeChild @loader.iframe
      delete @loader['iframe']

# The Cakefile defines this to be true, to prevent JSREPL from loading files
# that have already been merged in.
# window.__BAKED_JSREPL_BUILD__ = false

# Basic user agent detection.
UA = do ->
  UA_REGEXS =
    firefox_3: /firefox\/3/i
    opera: /opera/i
    chrome: /chrome/i
  for ua, ua_regex of UA_REGEXS
    if ua_regex.test window.navigator.userAgent
      return ua

class JSREPL extends EventEmitter
  constructor: ({ result, error, input, output, progress, @timeout, input_server } = {}) ->
    super()
    if window.openDatabase?
      db = openDatabase 'replit_input', '1.0', 'Emscripted input', 1024
      db.transaction (tx) ->
        tx.executeSql 'DROP TABLE IF EXISTS input'
        tx.executeSql 'CREATE TABLE input (text)'

    input_server ?= {}
    input_server.input_id = Math.floor(Math.random() * 9007199254740992) + 1

    # The definition of the current language.
    @lang = null
    
    # There are two input event types. Abstract that for users.
    @on 'input', input
    
    # Create initial worker.
    baseScripts = ['sandbox.js']
    if not window.__BAKED_JSREPL_BUILD__
      baseScripts = baseScripts.concat ['util/polyfills.js', 'util/mtwister.js']
    

    @sandbox = new Sandbox baseScripts, input_server,
      output: output
      input: =>
        @fire 'input', (data) =>
          @sandbox.post
            type: 'input.write'
            data: data
      error: error
      result: result
      progress: progress
      db_input: =>
        @fire 'input', (data) =>
          @sandbox.fire 'recieved_input', [data]
          db.transaction (tx) ->
            tx.executeSql "INSERT INTO input (text) VALUES ('#{data}')", []
      server_input: =>
        @fire 'input', (data) =>
          @sandbox.fire 'recieved_input', [data]

          url = (input_server.url || '/emscripten/input/') + input_server.input_id
          if input_server.cors
            xhr = new XMLHttpRequest()
            if 'withCredentials' of xhr
              xhr.open 'POST', url, true
            else if XDomainRequest?
              xhr = new XDomainRequest()
              xhr.open 'POST', url
            else
              throw new Error('CORS not supported on your browser')
          else
            xhr = new XMLHttpRequest()
            xhr.open 'POST', url, true
          xhr.send "input=#{data}"
    
  # Only listen to input events to abstract all input types.
  # Proxy other events to the sandbox.
  on: (types, fn) =>
    types = @makeArray types
    for type in types
      if type is 'input'
        super 'input', fn
      else
        @sandbox.on type, fn
  
  off: (types, fn) =>
    types = @makeArray types
    for type in types
      if type is 'input'
        super 'input', fn
      else
        @sandbox.off type, fn

  # Loads the specified language.
  #   @arg lang_name: The name of the language to load, a member of
  #     JSREPL::Languages as defined in languages.coffee.
  #   @arg callback: The function to call after loading finishes.
  #   @arg worker_friendly: Whether we should load the language in a worker.
  loadLanguage: (lang_name, loadInWorker, callback) =>
    if typeof loadInWorker is 'function'
      [callback, loadInWorker] =  [loadInWorker, undefined]

    if not JSREPL::Languages::[lang_name]?
      throw new Error "Language #{lang_name} not supported."
    
    @current_lang_name = lang_name
    # Switch the language.
    @lang = JSREPL::Languages::[lang_name]
    
    # One time ready callback.
    if callback?
      @sandbox.once 'ready', callback
    
    # Load worker with language specific scripts.
    lang_scripts = for script in @lang.scripts
      if typeof script == 'object'
        script[UA] || script['default']
      else
        script
    
    @sandbox.load lang_scripts.concat([@lang.engine]), loadInWorker
  
  # Checks whether the REPL should continue to the next line rather than run
  # the evaluator. Forces evaluation if the last line is empty. Otherwise
  # delegates to the language engine's command completion checker.
  #   @arg command: A string containing the command entered so far.
  checkLineEnd: (command, callback) =>
    if /\n\s*$/.test command
      callback false
    else
      @sandbox.once 'indent', callback
      @sandbox.post
        type: 'getNextLineIndent'
        data: command

  # Evaluates a command in the current engine.
  #   @arg command: A string containing the code to execute.
  eval: (command, callback) =>
    if not @sandbox.workerIsIframe and @timeout? and @timeout.time and @timeout.callback
      t = null
      cb = =>
        @sandbox.fire 'timeout'
        a = @timeout.callback()
        if not a
          t = setTimeout cb, @timeout.time
        else
          unbind()

      t = setTimeout cb, @timeout.time

      listener = (args..., type) =>
        clearTimeout t
        if type is 'input'
          @once 'recieved_input', => 
            t = setTimeout cb, @timeout.time
          bind()

      bind = =>
        @once ['result', 'error', 'input'], listener

      unbind = =>
        @off ['result', 'error', 'input'], listener

      bind()
    
    if typeof callback is 'function'
      @once ['result', 'error'], (args..., type) =>
        if type is 'error'
          callback args[0], null
        else
          callback null, args[0] 

    @sandbox.post
      type: 'engine.Eval'
      data: command
      
  # Evaluates a command in the current engine and return a raw result.
  #   @arg command: A string containing the code to execute.
  rawEval: (command) =>
    @sandbox.post
      type: 'engine.RawEval'
      data: command
  
  # Gets the language config object.
  #   @arg lang_name: The language name to return the config for
  getLangConfig: (lang_name) => 
    JSREPL::Languages::[lang_name or @current_lang_name] or null

# The languages and engines modules.
class JSREPL::Languages

# Export for testing.
class JSREPL::__test__
JSREPL::__test__::Loader = Loader
JSREPL::__test__::EventEmitter = EventEmitter
JSREPL::__test__::Sandbox = Sandbox

# Export JSREPL to the world.
@JSREPL = JSREPL
