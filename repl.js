(function ($, undefined) {

// The main super-duper-object.
window.JSREPL = (function() {
  // The name of the current language.
  var lang;
  // All the examples for the current language.
  var examples;

  // TODO(amasad): Think about error handling when loading scripts and examples.
  function load(name, callback) {
    var dir_prefix = 'langs/' + name + '/';

    // A counter to call the callback when both the scripts and examples have
    // loaded.
    var signals_read = 0;
    var signalReady = function() {
      if (++signals_read == 2) callback();
    };

    lang = JSREPL.Languages[name];

    // Load scripts.
    // TODO(amasad): Ensure dependency safety.
    $.each(lang.scripts, function(_, filename) {
      $LAB.script(dir_prefix + filename).wait();
    });
    $LAB.wait(signalReady);

    // Load logo.
    $('#lang_logo').src = lang.logo;

    // Load examples.
    $.getJSON(dir_prefix + lang.example_file, {}, function(data) {
      var $examples = $('#examples');

      examples = {};
      for (var i = 0; i < data.length; i++) {
        var example = data[i];
        $examples.append($.tmpl('option', {
          value: example.name,
          display: example.name
        }));
        examples[example.name] = example.code;
      }

      $examples.change(function(){
        $('#prompt').trigger('setContent', [examples[$(this).val()]]);
      }).val('');
      signalReady();
    });
  }

  // Callbacks.
  var eval_callbacks = {
    result: function(output) {
      $('#history').append(jQuery.tmpl('output', {output: output}));
      eval_callbacks.done();
    },
    error: function(message) {
      $('#history').append(jQuery.tmpl('error', {message: message}));
      eval_callbacks.done();
    },
    done: function() {
      $('#prompt').trigger('clearContent');
    }
  };

  function evaluate(input) {
    $('#history').append(jQuery.tmpl('input', {input: input}));
    JSREPL[lang.eval_func](input, eval_callbacks.result, eval_callbacks.error);
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
  $.template('option', '<option value="${value}">${display}</option>');
  // TODO(amasad): Merge input, output and error; differentiate by class.
  $.template('error', '<div class="error">${message}</div>');
  $.template('input', '<div class="input">&gt;&gt;&gt; ${input}</div>');
  $.template('output', '<div class="output">${output}</div>');
});

// Load and bind language dropdown.
$(function() {
  var $languages = $('#languages');

  $languages.change(function() {
    var callback = function() {
      // TODO(amsad): Define the loading action.
      $('body').toggleClass('loading');
    }
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

  $prompt.bind('setContent', function(e, content) {
    $(this).focus();
    // TODO(max99x): Check for cross-browser compatibality.
    document.execCommand('selectAll', false, null);
    document.execCommand('delete', false, null);
    document.execCommand('insertHTML', false, content);
  });
  $prompt.bind('clearContent', function(e) {
    $(this).trigger('setContent', ['']);
  });

  $prompt.keydown(function(e) {
    switch (e.keyCode) {
      case 13:  // Enter - evaluate.
        var command = $(this).text();
        if (command && (!history.length ||
                        history[history.length - 1] != command)) {
          history.push(command);
        }
        history_index = history.length;
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
