# Shorthand for jQuery.
$ = jQuery

# The logo to print at the top of the console.
repl_logo = '''
            \t   _       .---.  .--. .---. .-.
            \t  :_;      : .; :: .--': .; :: :
            \t  .-. .--. :   .': `;  :  _.': :
            \t  : :`._-.': :.`.: :__ : :   : :__
            \t  : :`.__.':_;:_;`.__.':_;   :___.'
            \t.-. :         jsREPL v0.1
            \t`._.' Amjad Masad & Max Shawabkeh
            '''        
    

# The main REPL class. Controls the UI and acts as a parent namespace for all
# the other classes in the project.
class JSREPL
  constructor: ({@JSREPL_dir, @languages, ResultCallback, ErrorCallback, InputCallback, OutputCallback}) ->
    # The definition of the current language.
    @lang = null
    # The interpreter engine of the current language.
    @engine = null
    # The sandbox iframe.
    @sandbox_frame = null
    # The sandbox window global object.
    @sandbox = null
    # Create initial worker.
    @worker = Sandboss.create
      baseScripts: ['jsrepl/sandbox.js', 'util/polyfills.js', 'util/mtwister.js']
      incoming:
        'out': OutputCallback
        'input': ->
          InputCallback (data) =>
            this.post
              type: 'input.write'
              data: data
        'err': ErrorCallback
        'result': ResultCallback
          
      
  # Loads the specified language engine with its examples and calls the callback
  # once all loading is done.
  #   @arg lang_name: The name of the language to load, a member of
  #     JSREPL::Languages as defined in languages.js.
  #   @arg callback: The function to call after loading finishes.
  # TODO(amasad): Consider error handling when loading scripts and examples.
  LoadLanguage: (lang_name, callback) ->
    # Clean up previous engine.
    @engine = null
    # Switch the language.
    @lang = JSREPL::Languages::[lang_name]
    # Callback to get indent.
    indentCB = (data)=> @IndentCallback(data)
    # Define a route for the indent callback.
    @worker.defineIncoming 'indent', indentCB
    # Define a route to the loadlangauge ready callback.
    @worker.defineIncoming 'ready', callback
    # Load worker with language specific scripts.
    @worker.load @lang.scripts.concat([@lang.engine]), @lang.worker_friendly

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
  
  EvaluateSync: (command) ->
    @engine.EvalSync command
    
# The languages and engines modules.
class JSREPL::Languages
class JSREPL::Engines

# Export JSREPL to the world.
@JSREPL = JSREPL

