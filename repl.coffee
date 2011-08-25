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
    # The examples of the current language.
    @examples = null
    # The sandbox iframe.
    @sandbox_frame = null
    # The sandbox window global object.
    @sandbox = null
    # Disable $LAB's funkiness for debugging.
    $LAB.setGlobalDefaults {UsePreloading: false, UseLocalXHR: false}
    
  # Loads the specified language engine with its examples and calls the callback
  # once all loading is done.
  #   @arg lang_name: The name of the language to load, a member of
  #     JSREPL::Languages as defined in languages.js.
  #   @arg callback: The function to call after loading finishes.
  # TODO(amasad): Consider error handling when loading scripts and examples.
  LoadLanguage: (lang_name, callback) ->
    # Clean up previous engine.
    @engine = null
    @sandbox_frame?.remove?()

    # Load the iframe.
    @sandbox_frame = $ '<iframe/>', src: 'sandbox.html', style: 'display: none'
    @sandbox_frame.appendTo 'body'
    @sandbox = @sandbox_frame[0].contentWindow

    # Switch the language.
    @lang = JSREPL::Languages::[lang_name]
    
    deffereds = $.map @lang.libs, $.get 
    # Create a new LAB instance inside the frame and load the engine through it.
    lab_script = $ '<script/>', src: 'lib/LAB-1.2.0.js'
    lab_script.bind 'load', =>
      # Disable the new $LAB instance's funkiness for debugging.
      @sandbox.$LAB.setGlobalDefaults {UsePreloading: false, UseLocalXHR: false}
      loader = @sandbox.$LAB
      for script in @lang.scripts
        loader = loader.script(script).wait()
      loader.wait =>
        # When the iframe finishes loading the language scripts, create the
        # language engine and pass along the child window object "sandbox".
        $LAB.script(@lang.engine).wait =>
          # TODO(max99x): Debug on all target browsers.
          #               On IE 8 this doesn't work for Lisp.
          # When XHRs are all done instantiate the engine
          $.when(deffereds...).done (args...)=>
            # args could be multiple/single/none response arguments
            libs = if deffereds.length > 1
              $.map args, (arg) -> arg[0]
            else
              if args[0]? then [args[0]] else []
              
            @engine = new JSREPL::Engines::[lang_name](
              $.proxy(@InputCallback, this),
              $.proxy(@OutputCallback, this),
              $.proxy(@ResultCallback, this),
              $.proxy(@ErrorCallback, this),
              @sandbox,
              callback,
              libs
            )

    # When the iframe finishes loading, insert the $LAB script.
    @sandbox_frame.bind 'load', =>
      @sandbox.document.body.appendChild lab_script[0]

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
    $('#examples').val ''
    if command
      @engine.Eval command
    else
      @StartPrompt()

# The languages and engines modules.
class JSREPL::Languages
class JSREPL::Engines

# Export JSREPL to the world.
@JSREPL = JSREPL