$ = @jQuery

# The main REPL class. Controls the UI and acts as a parent namespace for all
# the other classes in the project.
class @JSREPL
  constructor: ->
    # The name of the current language.
    @lang = null
    # The interpreter engine for the current language.
    @engine = null
    # All the examples for the current language.
    @examples = null
    # Set up the UI.
    @DefineTemplates()
    @SetupInputControls()
    @LoadLanguageDropdown()

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
    $.template 'error', '<pre class="error">${message}</pre>'
    $.template 'command', '<pre class="command">${command}</pre>'
    $.template 'result', '<pre class="result">${result}</pre>'
    $.template 'output', '<pre class="output">${output}</pre>'

  # Initializes the behaviour of the command prompt and the expand and eval
  # buttons.
  SetupInputControls: ->
    # A shortcut to the main command line element.
    $prompt = $('#prompt')

    # Firefox displays resize handles. This should take care of that.
    $prompt.focus ->
      document.execCommand 'enableObjectResizing', false, false
      return undefined

    # A custom event that sets the content of the command line.
    $prompt.bind 'setContent', (e, content) ->
      $prompt.focus()
      # TODO(max99x): Check for IE compatability.
      # TODO(max99x): FF shows drag handles for absolute positioned elements.
      #               However it doesn't persist after the first eval.
      document.execCommand 'selectAll', false, null
      document.execCommand 'delete', false, null
      # Firefox errors out on empty string inserts.
      if content then document.execCommand 'insertHTML', false, content

    # A custom event to clear the content of the command line.
    $prompt.bind 'clearContent', (e) ->
      $prompt.trigger 'setContent', ['']

    # Sets up custom key handling.
    $prompt.keydown (e) => @HandleKey(e)

    # Needed to properly position the cursor after the >>> prompt.
    $prompt.trigger 'clearContent'

    # Whether the prompt is currently expanded.
    expanded = false

    # Handle clicks on the Eval button in expanded mode.
    $('#evaluate').click =>
      new_html = $prompt.html().replace /<div>/g, '\n'
      $prompt.text $('<div/>').html(new_html).text()
      @HandleKey keyCode: 13

    # Expands or retracts the prompt.
    $('#expand').click =>
      $('#evaluate').toggle(not expanded)
      if expanded
        $prompt
          .css('height', '1.2em')
          .unbind('keydown')
          .keydown((e) => @HandleKey(e))
        $('#history')
          .css('bottom', '1.2em')
          .css('max-height','93%')
        $('#expand')
          .css('bottom', '0')
          .text('/\\')
      else
        $prompt
          .css('height', '50%')
          .unbind('keydown')
          .keydown (e) ->
            # TODO(amasad): Implement handleMulti!
        $('#history')
          .css('bottom', '50%')
          .css('max-height', '45%')
        $('#expand')
          .css('bottom', '45%')
          .text('\\/')
      expanded = not expanded

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
      @LoadLanguage $languages.val(), ->
        $('body').toggleClass 'loading'

    # Load the default language by manually triggering change.
    $languages.change()

  # Loads the specified language engine with its library and examples and calls
  # the callback once all loading is done.
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
    $('#history').text ''
    $('#prompt').text ''
    $('#examples').val ''

    # A counter to call the callback after the scripts, libraries and examples
    # have successfully loaded.
    signals_read = 0
    signalReady = ->
      if ++signals_read == 2 then callback()

    @lang = JSREPL::Languages::[lang_name]

    # Load scripts.
    loader = $LAB;
    for script in @lang.scripts
      loader = loader.script(script).wait()
    loader.wait =>
      # TODO(amasad): This callback doesn't run if the same language is loaded
      #               twice. See if this can be fixed. The loaded scripts
      #               themselves run fine though.
      @engine = new JSREPL::Engines::[lang_name](
        ((a...) => @ReceiveInputRequest(a...)),
        ((a...) => @ReceiveOutput(a...)),
        ((a...) => @ReceiveResult(a...)),
        ((a...) => @ReceiveError(a...))
      )
      signalReady()

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
        # Expand if code multiline.
        if code.split('\n').length > 1 and $('#evaluate:visible').length < 1
          $('#expand').click()
        $('#prompt').trigger 'setContent', [@examples[$examples.val()]]

      signalReady()

  # Handles key presses while in the command prompt. Takes care of calling the
  # Evaluate() and browsing the command history.
  HandleKey: (event) ->
    # A shortcut to the main command line element.
    $prompt = $('#prompt')
    # The commands entered so far.
    history = []
    # The index of the currently shown command.
    history_index = 0

    switch event.keyCode
      when 13
        # Enter - evaluate
        command = $prompt.text()
        if command and (not history.length or history[-1] != command)
          history.push command
        history_index = history.length
        $prompt.trigger 'clearContent'
        @Evaluate command
      when 38
        # Up arrow - previous history item.
        history_index--
        if (history_index < 0) then history_index = 0
        $prompt.trigger 'setContent', [history[history_index]]
      when 40
        # Down arrow - next history item.
        if history_index >= history.length - 1
          $prompt.trigger 'clearContent'
        else
          history_index++
          $prompt.trigger 'setContent', [history[history_index]]
      else
        # Perform default action.
        return true
    return false

  # Receives the result of a command evaluation.
  #   @arg result: The user-readable string form of the result of an evaluation.
  ReceiveResult: (result) ->
    if result
      $('#history').append jQuery.tmpl 'result', result: result
      @ScrollToEnd()

  # Receives an error message resulting from a command evaluation.
  #   @arg error: A message describing the error.
  ReceiveError: (error) ->
    $('#history').append jQuery.tmpl 'error', message: error.message
    @ScrollToEnd()

  # Receives any output from a language engine. Acts as a low-level output
  # stream or port.
  #   @arg output: The string to output. May contain control characters.
  ReceiveOutput: (output) ->
    # TODO(amasad): Fit this into templates if possible.
    last_line = $ '#history :last-child'
    if last_line.hasClass 'output'
      last_line.append output
    else
      $('#history').append jQuery.tmpl 'output', output: output
    @ScrollToEnd()
    return undefined

  # Receives a request for a string input from a language engine. Passes back
  # the user's response asynchronously.
  #   @arg callback: The function called with the string containing the user's
  #     response. Currently called synchronously, but that is *NOT* guaranteed.
  ReceiveInputRequest: (callback) ->
    # TODO(max99x): Convert to something more elegant. Right now prompt() adds a
    #               new line to our command prompt for some reason, and has
    #               problems on IE.
    callback(prompt("Input:") || '')
    return undefined

  # Scrolls the history pane to its bottom.
  ScrollToEnd: ->
    history = $('#history')[0]
    history.scrollTop = history.scrollHeight

  # Evaluates a command in the current engine.
  Evaluate: (command) ->
    $('#examples').val ''
    $('#history').append jQuery.tmpl 'command', command: command
    @engine.Eval command

# The languages and engines sub-modules.
class @JSREPL::Languages
class @JSREPL::Engines

# Create and load the main REPL object.
$ => new @JSREPL
