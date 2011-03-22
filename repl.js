(function ($, undefined) {

// The main super-duper-object.
window.JSREPL = (function() {
  // The name of the current language.
  var lang;
  // The interpreter engine for the current language.
  var engine;
  // All the examples for the current language.
  var examples;

  // Callbacks.
  var engine_callbacks = {
    result: function(result) {
      if (result) {
        $('#history').append(jQuery.tmpl('result', {result: result}));
        engine_callbacks.scrollToEnd();
      }
    },
    error: function(error) {
      $('#history').append(jQuery.tmpl('error', {message: error.message}));
      engine_callbacks.scrollToEnd();
    },
    output: function(output) {
      // TODO(amasad): Fit this into templates if possible.
      var last_line = $('#history :last-child');
      if (last_line.hasClass('output')) {
        last_line.append(output);
      } else {
        $('#history').append(jQuery.tmpl('output', {output: output}));
      }
      engine_callbacks.scrollToEnd();
    },
    input: function(callback) {
      // TODO(max99x): Convert to something more elegant. Right now prompt()
      //               adds a new line to our command prompt for some reason,
      //               and has problems on IE.
      console.log('input');
      callback(prompt("Input:") || '');
    },
    // TODO(max99x): Move this somewhere more appropriate.
    scrollToEnd: function() {
      $history = $('#history');
      $history[0].scrollTop = $history[0].scrollHeight;
    }
  };

  // TODO(amasad): Think about error handling when loading scripts and examples.
  function load(name, callback) {
    // Clean up previous engine.
    if (engine) {
      engine.Destroy();
      delete engine;
    }

    // A counter to call the callback when both the scripts and examples have
    // loaded.
    var signals_read = 0;
    var signalReady = function() {
      if (++signals_read == 2) callback();
    };

    lang = JSREPL.Languages[name];

    // Load scripts.
    var loader = $LAB;
    for (var i = 0; i < lang.scripts.length; i++) {
      loader = loader.script(lang.scripts[i]).wait();
    }
    loader.wait(function() {
      // TODO(amasad): This doesn't run if the same language is loaded twice.
      //               See if this can be fixed. The loaded scripts run fine
      //               though.
      engine = JSREPL.Engines[name];
      engine.Init(engine_callbacks.input,
                  engine_callbacks.output,
                  engine_callbacks.result,
                  engine_callbacks.error);
      signalReady();
    });

    // Load logo.
    $('#lang_logo').attr('src', lang.logo);

    // Load examples.
    $.getJSON(lang.example_file, {}, function(data) {
      var $examples = $('#examples');

      examples = {};
      for (var i = 0; i < data.length; i++) {
        var example = data[i];
        $examples.append($.tmpl('option', {value: example.name}));
        examples[example.name] = example.code;
      }

      $examples.change(function(){
        $('#prompt').trigger('setContent', [examples[$(this).val()]]);
      }).val('');
      signalReady();
    });
  }

  function evaluate(command) {
    $('#examples').val('');
    $('#history').append(jQuery.tmpl('command', {command: command}));
    engine.Eval(command);
  }

  return {
    load: load,
    evaluate: evaluate,
    examples: examples
  }
})();

// Define templates.
$(function() {
  // TODO(amasad): Create nested templates.
  $.template('optgroup', '{{each(cat, names_arr) data}} \
                            <optgroup label="${cat}"> \
                              {{each names_arr}} \
                                <option value="${$value.value}"> \
                                  ${$value.display} \
                                </option> \
                              {{/each}} \
                            </optgroup> \
                          {{/each}}');
  $.template('option', '<option>${value}</option>');
  // TODO(amasad): Merge input, output and error; differentiate by class.
  $.template('error', '<pre class="error">${message}</pre>');
  $.template('command', '<pre class="command">${command}</pre>');
  $.template('result', '<pre class="result">${result}</pre>');
  $.template('output', '<pre class="output">${output}</pre>');
});

// Load and bind language dropdown.
$(function() {
  var $languages = $('#languages');

  $languages.change(function() {
    var callback = function() {
      // TODO(amsad): Define the loading action.
      $('body').toggleClass('loading');
      console.log('Loaded');
    }
    $('body').toggleClass('loading');
    JSREPL.load($(this).val(), callback);
  });

  var cats = {};
  for (var prop in JSREPL.Languages) {
    if (!JSREPL.Languages.hasOwnProperty(prop)) continue;
    var lang = JSREPL.Languages[prop];
    if (!cats[lang.category]) cats[lang.category] = [];
    cats[lang.category].push({
      display: lang.name,
      value: prop
    });
  }

  $languages.empty().append($.tmpl('optgroup', {data: cats}));
  // Manually trigger change, because it's not triggered on appends.
  $languages.change();
});

// Setup input controls.
$(function() {
  var $prompt = $('#prompt');
  // The commands entered so far.
  var history = [];
  // The index of the currently shown command.
  var history_index = 0;
  //firefox displays resize handles, this should take care of that
  $prompt.focus(function(){
  	 document.execCommand("enableObjectResizing", false, false);
  });

  $prompt.bind('setContent', function(e, content) {
    $(this).focus();
    // TODO(max99x): Check for IE compatability.
    // TODO(max99x): FF shows drag handles for absolute positioned elements.
    //               However it doesn't persist after the first eval.
    document.execCommand('selectAll', false, null);
    document.execCommand('delete', false, null);
    //firefox errors on empty string inserts.
    if (content) document.execCommand('insertHTML', false, content);
  });
  $prompt.bind('clearContent', function(e) {
    $(this).trigger('setContent', ['']);
  });

  $prompt.keydown(function(e) {
    switch (e.keyCode) {
      case 13:  // Enter - evaluate.
        var command = $prompt.text();
        if (command && (!history.length ||
                        history[history.length - 1] != command)) {
          history.push(command);
        }
        history_index = history.length;
        $prompt.trigger('clearContent');
        JSREPL.evaluate(command);
        break;
      case 38:  // Up arrow - previous history item.
        history_index--;
        if (history_index < 0) history_index = 0;
        $prompt.trigger('setContent', [history[history_index]]);
        break;
      case 40:  // Down arrow - next history item.
        if (history_index >= history.length - 1) {
          $prompt.trigger('clearContent');
        } else {
          history_index++;
          $prompt.trigger('setContent', [history[history_index]]);
        }
        break;
      default: // Perform default action.
        return true;
    }
    return false;
  });

  // Needed to properly position the cursor after the >>> prompt.
  $prompt.trigger('clearContent');
});

})(jQuery);
