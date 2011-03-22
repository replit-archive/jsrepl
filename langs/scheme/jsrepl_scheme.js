(function() {

var HandleError = function(e) {
  if (error_handler) error_handler(e.message);
};

var scheme = new BiwaScheme.Interpreter(HandleError);
var error_handler = null;
var remembered_output = '';

// Global on purpose - used by BiwaScheme.
puts = function(what) {
  remembered_output += what;
};

JSREPL.SchemeEval = function(input, result_callback, error_callback) {
  remembered_output = '';
  error_handler = error_callback;
  try {
    scheme.evaluate(input, function(new_state) {
      var result;
      if (new_state !== undefined && new_state !== BiwaScheme.undef) {
        result = BiwaScheme.to_write(new_state);
      } else {
        result = '';
      }
      if (remembered_output) {
        if (result) {
          result = remembered_output + '\n' + result;
        } else {
          result = remembered_output;
        }
      }
      result_callback(result);
    });
  } catch (e) {
    HandleError(e);
  }
};

JSREPL.SchemeHighlight = function(element) {
  console.log('Highlighting of scheme code not yet implemented.');
};

})();
