(function() {

var interpreter = null;
var result_callback = null;

JSREPL.Engines.Scheme = {};

JSREPL.Engines.Scheme.Init = function(input_func,
                                      output_func,
                                      result_func,
                                      error_func) {
  BiwaScheme.Port.current_output = new (Class.create(BiwaScheme.Port, {
    initialize: function($super) {
      $super(false, true);
    },
    put_string: function(str) {
      output_func(str);
    }
  }))();

  BiwaScheme.Port.current_input = new (Class.create(BiwaScheme.Port, {
    initialize: function($super){
      $super(true, false);
    },
    get_string: function(after) {
      return new BiwaScheme.Pause(
      function(pause) {
        input_func(function(input) {
          pause.resume(after(input));
        });
      });
    }
  }))();

  interpreter = new BiwaScheme.Interpreter(error_func);
  result_callback = result_func;
};

JSREPL.Engines.Scheme.Destroy = function() {
  delete interpreter;
  delete BiwaScheme;
};

JSREPL.Engines.Scheme.Eval = function(input) {
  try {
    interpreter.evaluate(input, function(new_state) {
      var result;
      if (new_state !== undefined && new_state !== BiwaScheme.undef) {
        result = BiwaScheme.to_write(new_state);
      } else {
        result = '';
      }
      result_callback(result);
    });
  } catch (e) {
    interpreter.on_error(e);
  }
};

JSREPL.Engines.Scheme.Highlight = function(element) {
  // TODO(max99x): Implement.
  console.log('Highlighting of scheme code not yet implemented.');
};

})();
