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
  constructor: ({@languages, @ResultCallback, @ErrorCallback, @InputCallback, @OutputCallback}) ->
    # The definition of the current language.
    @lang = null
    # The interpreter engine of the current language.
    @engine = null
    # The sandbox iframe.
    @sandbox_frame = null
    # The sandbox window global object.
    @sandbox = null
    
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
    Loader.createSandBox (sandbox)=>
      loader = sandbox.Loader
      config = 
        js: true
        debug: true
        success: =>
          
          # When the iframe finishes loading the language scripts, create the
          # language engine and pass along the child window object "sandbox".
          Loader.load @lang.engine,
            js: true
            debug: true
            success: =>
              # TODO(max99x): Debug on all target browsers.
              #               On IE 8 this doesn't work for Lisp.
              # When XHRs are all done instantiate the engine
              Loader.load @lang.libs, (libs)=>
                @engine = new JSREPL::Engines::[lang_name](
                  $.proxy(@InputCallback, this),
                  $.proxy(@OutputCallback, this),
                  $.proxy(@ResultCallback, this),
                  $.proxy(@ErrorCallback, this),
                  sandbox,
                  callback,
                  libs
                )
      loader.load @lang.scripts, config


  # Checks whether the REPL should continue to the next line rather than run
  # the evaluator. Forces evaluation if the last line is empty. Otherwise
  # delegates to the language engine's command completion checker.
  #   @arg command: A string containing the command entered so far.
  CheckLineEnd: (command) ->
    if /\n\s*$/.test command
      return false
    else
      return @engine.GetNextLineIndent command

  # Evaluates a command in the current engine.
  #   @arg command: A string containing the code to execute.
  Evaluate: (command) ->
    @engine.Eval command

# The languages and engines modules.
class JSREPL::Languages
class JSREPL::Engines

# Export JSREPL to the world.
@JSREPL = JSREPL