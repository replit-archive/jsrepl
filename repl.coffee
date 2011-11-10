# The Cakefile defines this to be true, to prevent JSREPL from loading files
# that have already been merged in.
# window.__BAKED_JSREPL_BUILD__ = false


# The main REPL class. Controls the UI and acts as a parent namespace for all
# the other classes in the project.

class JSREPL
  constructor: ({@JSREPL_dir, @languages, ResultCallback, ErrorCallback, InputCallback, OutputCallback, LoadProgressCallback}) ->
    # The definition of the current language.
    @lang = null
    # The interpreter engine of the current language.
    @engine = null
    # The sandbox iframe.
    @sandbox_frame = null
    # The sandbox window global object.
    @sandbox = null
    # Create initial worker.
    baseScripts = ['sandbox.js']
    if not window.__BAKED_JSREPL_BUILD__
      baseScripts = baseScripts.concat ['util/polyfills.js', 'util/mtwister.js']
    @worker = Sandboss.create
      baseScripts: baseScripts
      incoming:
        'out': OutputCallback
        'input': ->
          InputCallback (data) =>
            @post
              type: 'input.write'
              data: data
        'err': ErrorCallback
        'result': ResultCallback
        'progress': LoadProgressCallback

  # Loads the specified language engine with its examples and calls the callback
  # once all loading is done.
  #   @arg lang_name: The name of the language to load, a member of
  #     JSREPL::Languages as defined in languages.coffee.
  #   @arg callback: The function to call after loading finishes.
  #   @arg worker_friendly: Whether we should load the language in a worker.
  # TODO(amasad): Consider error handling when loading scripts.
  LoadLanguage: (lang_name, callback, worker_friendly) ->
    @current_lang_name = lang_name
    # Clean up previous engine.
    @engine = null
    # Switch the language.
    @lang = JSREPL::Languages::[lang_name]
    # Callback to get indent.
    indentCB = (data) => @IndentCallback data
    # Define a route for the indent callback.
    @worker.defineIncoming 'indent', indentCB
    # Define a route to the loadlangauge ready callback.
    @worker.defineIncoming 'ready', callback
    # Load worker with language specific scripts.
    lang_scripts = for script in @lang.scripts
      if typeof script == 'object'
        script[UA] || script['default']
      else
        script
    worker_friendly ?= @lang.worker_friendly
    @worker.load lang_scripts.concat([@lang.engine]), worker_friendly

  # Checks whether the REPL should continue to the next line rather than run
  # the evaluator. Forces evaluation if the last line is empty. Otherwise
  # delegates to the language engine's command completion checker.
  #   @arg command: A string containing the command entered so far.
  CheckLineEnd: (command, callback) ->
    if /\n\s*$/.test command
      callback false
    else
      @worker.post
        type: 'getNextLineIndent'
        data: command
      @IndentCallback = callback

  # Evaluates a command in the current engine.
  #   @arg command: A string containing the code to execute.
  Evaluate: (command) ->
    @worker.post
      type: 'engine.Eval'
      data: command
      
  # Evaluates a command in the current engine and return a raw result.
  #   @arg command: A string containing the code to execute.
  RawEval: (command) ->
    @worker.post
      type: 'engine.RawEval'
      data: command
  
  GetLangConfig: (lang_name) ->
    if lang_name?
      return JSREPL::Languages::[lang_name]
    else
      return JSREPL::Languages::[@current_lang_name] or null
      
# Basic user agent detection.
UA_REGEXS =
  firefox_3: /firefox\/3/i
  opera: /opera/i
  chrome: /chrome/i
UA = ''
for ua, ua_regex of UA_REGEXS
  if ua_regex.test window.navigator.userAgent
    UA = ua

# The languages and engines modules.
class JSREPL::Languages

# Export JSREPL to the world.
@JSREPL = JSREPL
