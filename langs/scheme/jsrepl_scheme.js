(function() {

var scheme = new BiwaScheme.Interpreter(HandleError);
var error_handler = null;

var HandleError = function(e) {
  if (error_handler) error_handler('Error: ' + e.message);
}

window.SchemeEval = function(input, result_callback, error_callback) {
  scheme.evaluate(input, function(new_state) {
    var result;
    if (new_state !== undefined && new_state !== BiwaScheme.undef) {
      result = BiwaScheme.to_write(new_state);
    } else {
      result = '';
    }
    result_callback(result, unused);
  });
};

window.SchemeHighlight = function(element) {
  console.log('Highlighting of scheme code not yet implemented.');
};

})();
