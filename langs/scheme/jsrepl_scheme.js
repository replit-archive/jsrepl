(function() {

var HandleError = function(e) {
  if (error_handler) error_handler(e.message);
};

var scheme = new BiwaScheme.Interpreter(HandleError);
var error_handler = null;

JSREPL.SchemeEval = function(input, result_callback, error_callback) {
  error_handler = error_callback;
  try {
    scheme.evaluate(input, function(new_state) {
      var result;
      if (new_state !== undefined && new_state !== BiwaScheme.undef) {
        result = BiwaScheme.to_write(new_state);
      } else {
        result = '';
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
