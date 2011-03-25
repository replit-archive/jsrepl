$ = @jQuery

# The main REPL class.
class @JSREPL
  constructor: ->
    # The name of the current language.
    @lang = null
    # The interpreter engine for the current language.
    @engine = null
    # All the examples for the current language.
    @examples = null

  Load: ->
    @DefineTemplates()
    @SetupInputControls()
    @LoadLanguageDropdown()

  DefineTemplates: ->
    # TODO(amasad): Create nested templates.
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
    # TODO(amasad): Merge input, output and error; differentiate by class.
    $.template 'error', '<pre class="error">${message}</pre>'
    $.template 'command', '<pre class="command">${command}</pre>'
    $.template 'result', '<pre class="result">${result}</pre>'
    $.template 'output', '<pre class="output">${output}</pre>'

  SetupInputControls: ->
    $prompt = $('#prompt')
    # The commands entered so far.
    history = []
    # The index of the currently shown command.
    history_index = 0
    # Firefox displays resize handles. This should take care of that.
    $prompt.focus ->
      document.execCommand 'enableObjectResizing', false, false
      return undefined

    $prompt.bind 'setContent', (e, content) ->
      $prompt.focus()
      # TODO(max99x): Check for IE compatability.
      # TODO(max99x): FF shows drag handles for absolute positioned elements.
      #               However it doesn't persist after the first eval.
      document.execCommand 'selectAll', false, null
      document.execCommand 'delete', false, null
      # Firefox errors out on empty string inserts.
      if content then document.execCommand 'insertHTML', false, content

    $prompt.bind 'clearContent', (e) ->
      $prompt.trigger 'setContent', ['']

    keydown = (event) =>
      switch event.keyCode
        when 13  # Enter - evaluate
          command = $prompt.text()
          if command and (not history.length or history[-1] != command)
            history.push command
          history_index = history.length
          $prompt.trigger 'clearContent'
          @Evaluate command
        when 38 # Up arrow - previous history item.
          history_index--
          if (history_index < 0) then history_index = 0
          $prompt.trigger 'setContent', [history[history_index]]
        when 40  # Down arrow - next history item.
          if history_index >= history.length - 1
            $prompt.trigger 'clearContent'
          else
            history_index++
            $prompt.trigger 'setContent', [history[history_index]]
        else
          return true  # Perform default action.
      return false

    $prompt.keydown keydown

    # Needed to properly position the cursor after the >>> prompt.
    $prompt.trigger 'clearContent'

    expanded = false
    $history = $('#history')
    $eval_button = $('#evaluate')

    $eval_button.click ->
      new_html = $prompt.html().replace /<div>/g, '\n'
      $prompt.text $('<div/>').html(new_html).text()
      keydown {keyCode: 13}

    $('#expand').click ->
      # TODO(amasad): Use CSS classes.
      # TODO(max99x): Maybe convert to non-absolute positioning.
      if expanded
        $prompt
          .css('height', '1.2em')
          .unbind('keydown')
          .keydown(keydown)
        $history
          .css('bottom', '1.2em')
          .css('max-height','93%')
        $(this)
          .css('bottom', '0')
          .text('/\\')
        $eval_button.hide()
      else
        $prompt
          .css('height', '50%')
          .unbind('keydown')
          .keydown (e) ->
            # TODO(amasad): Implement handleMulti!
        $history
          .css('bottom', '50%')
          .css('max-height', '45%')
        $(this)
          .css('bottom', '45%')
          .text('\\/')
        $eval_button.show()
      expanded = not expanded

  LoadLanguageDropdown: ->
    cats = {}
    for system_name, lang_def of JSREPL::Languages::
      if not cats[lang_def.category]? then cats[lang_def.category] = []
      cats[lang_def.category].push
        display: lang_def.name
        value: system_name

    $languages = $('#languages')
    $languages.empty().append $.tmpl 'optgroup', {data: cats}

    $languages.change =>
      $('body').toggleClass 'loading'
      @LoadLanguage $languages.val(), ->
        # TODO(amsad): Define the loading action.
        $('body').toggleClass 'loading'

    # Manually trigger change, because it's not triggered on appends.
    $languages.change()

  LoadLanguage: (name, callback) ->
    # Clean up previous engine.
    if @engine
      @engine.Destroy()
      delete @engine

    # A counter to call the callback after both the scripts and examples.
    signals_read = 0
    signalReady = ->
      if ++signals_read == 2 then callback()

    @lang = JSREPL::Languages::[name]

    # TODO(amasad): Consider error handling when loading scripts and examples.
    # Load scripts.
    loader = $LAB;
    for script in @lang.scripts
      loader = loader.script(script).wait()
    loader.wait =>
      # TODO(amasad): This doesn't run if the same language is loaded twice.
      #               See if this can be fixed. The loaded scripts run fine
      #               though.
      @engine = new JSREPL::Engines::[name](
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
      @examples = {}
      $examples = $('#examples')
      $(':not(:first)', $examples).remove()

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
          $examples.append $.tmpl 'option', {value: title}

      $examples.change =>
        code = @examples[$examples.val()]
        # Expand if code multiline.
        if code.split('\n').length > 1 and $('#evaluate:visible').length < 1
          $('#expand').click()
        $('#prompt').trigger 'setContent', [@examples[$examples.val()]]
      $examples.val ''
      signalReady()

  ReceiveResult: (result) ->
    if result
      $('#history').append jQuery.tmpl 'result', {result: result}
      @ScrollToEnd()

  ReceiveError: (error) ->
    $('#history').append jQuery.tmpl 'error', {message: error.message}
    @ScrollToEnd()

  ReceiveOutput: (output) ->
    # TODO(amasad): Fit this into templates if possible.
    last_line = $('#history :last-child')
    if last_line.hasClass 'output'
      last_line.append output
    else
      $('#history').append jQuery.tmpl 'output', {output: output}
    @ScrollToEnd()
    return undefined

  ReceiveInputRequest: (callback) ->
    # TODO(max99x): Convert to something more elegant. Right now prompt()
    #               adds a new line to our command prompt for some reason,
    #               and has problems on IE.
    callback(prompt("Input:") || '')
    return undefined

  ScrollToEnd: ->
    history = $('#history')[0]
    history.scrollTop = history.scrollHeight

  Evaluate: (command) ->
    $('#examples').val ''
    $('#history').append jQuery.tmpl 'command', {command: command}
    @engine.Eval command

# The languages and engines sub-modules.
class @JSREPL::Languages
class @JSREPL::Engines

# Create and load the main REPL object.
$ => (new @JSREPL).Load()
