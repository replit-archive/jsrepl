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
class @JSREPL
  constructor: ->
    # The definition of the current language.
    @lang = null
    # The interpreter engine of the current language.
    @engine = null
    # The examples of the current language.
    @examples = null
    # The console element.
    @console = null
    # The JQConsole object.
    @jqconsole = null
    # The sandbox iframe
    @sandbox_frame = null
    # The sandbox window global object
    @sandbox = null
    # Set up the UI.
    @DefineTemplates()
    @SetupConsole()
    @LoadLanguageDropdown()
    # Focus the console.
    @jqconsole.Focus()

  # Defines global jQuery templates used by the various functions interacting
  # with the UI.
  DefineTemplates: ->
    $.template 'optgroup', '''
                           {{each(cat, names_arr) data}}
                             <optgroup label="${cat}">
                               {{each names_arr}}
                                 <option value="${$value.value}">
                                   ${$value.display}
                                 </option>
                               {{/each}}
                             </optgroup>
                           {{/each}}
                           '''
    $.template 'option', '<option>${value}</option>'

  # Initializes the behaviour of the command prompt and the expand and eval
  # buttons.
  SetupConsole: ->
    @console = $('#console')
    @jqconsole = @console.jqconsole repl_logo

  # Shows a command prompt in the console and waits for input.
  StartPrompt: ->
    @jqconsole.Write '>>> ', 'prompt'
    @jqconsole.Input true, (command) => @Evaluate command

  # Populates the languages dropdown from JSREPL::Languages and triggers the
  # loading of the default language.
  LoadLanguageDropdown: ->
    # Sort languages into categories.
    categories = {}
    for system_name, lang_def of JSREPL::Languages::
      if not categories[lang_def.category]?
        categories[lang_def.category] = []
      categories[lang_def.category].push
        display: lang_def.name
        value: system_name

    # Fill the dropdown.
    $languages = $('#languages')
    $languages.empty().append $.tmpl 'optgroup', data: categories

    # Link dropbox to language loading.
    $languages.change =>
      # TODO(amsad): Create a loading effect.
      $('body').toggleClass 'loading'
      @LoadLanguage $languages.val(), =>
        $('body').toggleClass 'loading'
        @StartPrompt()

    # Load the default language by manually triggering change.
    $languages.change()

  # Loads the specified language engine with its examples and calls the callback
  # once all loading is done.
  #   @arg lang_name: The name of the language to load, a member of
  #     JSREPL::Languages as defined in languages.js.
  #   @arg callback: The function to call after loading finishes.
  # TODO(amasad): Consider error handling when loading scripts and examples.
  LoadLanguage: (lang_name, callback) ->
    # Clean up previous engine.
    if @engine
      @engine.Destroy()
      delete @engine

    # Empty out the history, prompt and example selection.
    @jqconsole.Reset()
    $('#examples').val ''

    # A counter to call the callback after the scripts and examples have
    # successfully loaded.
    signals_read = 0
    signalReady = ->
      if ++signals_read == 2 then callback()
    
    @lang = JSREPL::Languages::[lang_name]
    # Remove old iframe
    @sandbox_frame?.remove?()

    # Load iframe
    @sandbox_frame = $ '<iframe/>', src: 'sandbox.html'
    @sandbox_frame.appendTo 'body'
    @sandbox = @sandbox_frame[0].contentWindow

    # Create script, bind onload and inject into iframe.
    lab_script = $ '<script/>', src: 'lib/LAB-1.2.0.js'
    lab_script.bind 'load', =>
      loader = @sandbox.$LAB
      for script in @lang.scripts
        loader = loader.script(script).wait()
      $LAB.script(@lang.engine).wait =>
        # TODO(max99x): Debug on all target browsers.
        #               On IE 8 this doesn't work for Lisp.
        @engine = new JSREPL::Engines::[lang_name](
          ((a...) => @ReceiveInputRequest(a...)),
          ((a...) => @ReceiveOutput(a...)),
          ((a...) => @ReceiveResult(a...)),
          ((a...) => @ReceiveError(a...)),
          @sandbox,
          signalReady
        )
    @sandbox_frame.bind 'load', =>
      @sandbox.document.body.appendChild(lab_script[0])

    # Load scripts.
    
    # Load logo.
    $('#lang_logo').attr 'src', @lang.logo

    # Load examples.
    $.get @lang.example_file, (raw_examples) =>
      # Clear the existing examples.
      @examples = {}
      $examples = $('#examples')
      $(':not(:first)', $examples).remove()

      # Parse out the new examples.
      example_parts = raw_examples.split /\*{80}/
      title = null
      for part in example_parts
        part = part.replace /^\s+|\s*$/g, ''
        if not part then continue
        if title
          code = part
          @examples[title] = code
          title = null
        else
          title = part
          $examples.append $.tmpl 'option', value: title

      # Set up response to example selection.
      $examples.change =>
        code = @examples[$examples.val()]
        @jqconsole.SetPromptText code
        @jqconsole.Focus()

      signalReady()

  # Receives the result of a command evaluation.
  #   @arg result: The user-readable string form of the result of an evaluation.
  ReceiveResult: (result) ->
    if result
      @jqconsole.Write '==> ' + result, 'result'
    @StartPrompt()

  # Receives an error message resulting from a command evaluation.
  #   @arg error: A message describing the error.
  ReceiveError: (error) ->
    @jqconsole.Write String(error), 'error'
    @StartPrompt()

  # Receives any output from a language engine. Acts as a low-level output
  # stream or port.
  #   @arg output: The string to output. May contain control characters.
  #   @arg cls: An optional class for styling the output.
  ReceiveOutput: (output, cls) ->
    @jqconsole.Write output, cls
    return undefined

  # Receives a request for a string input from a language engine. Passes back
  # the user's response asynchronously.
  #   @arg callback: The function called with the string containing the user's
  #     response. Currently called synchronously, but that is *NOT* guaranteed.
  ReceiveInputRequest: (callback) ->
    @jqconsole.Input false, callback
    return undefined

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

# Disable $LAB's funkiness for debugging.
$LAB.setGlobalDefaults {UsePreloading: false, UseLocalXHR: false}

# Create and load the main REPL object.
$ -> new JSREPL
