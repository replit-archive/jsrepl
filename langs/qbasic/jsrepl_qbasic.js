(function() {

// An interface to the QBasic VM.
var virtual_machine = null;
// Callbacks remembered from Init().
var result_callback = null;
var error_callback = null;
// A history used to fake state.
var command_history = [];
var input_history = [];
var input_history_index = 0;
var output_history = [];
var output_history_index = 0;

JSREPL.Engines.QBasic = {};

JSREPL.Engines.QBasic.Init = function(input_func,
                                      output_func,
                                      result_func,
                                      error_func) {
  virtual_machine = new VirtualMachine({
    print: function(str) {
      if (output_history_index < output_history.length) {
        console.assert(output_history[output_history_index] == str);
      } else {
        output_history.push(str);
        output_func(str);
      }
      output_history_index++;
    },
    input: function(callback) {
      if (input_history_index < input_history.length) {
        callback(input_history[input_history_index]);
      } else {
        input_func(function(data) {
          input_history.push(data);
          callback(data);
        });
      }
      input_history_index++;
    }
  });
  virtual_machine.INTERVAL_MS = 0;
  virtual_machine.instructionsPerInterval = 8192;

  result_callback = result_func;
  error_callback = error_func;

  command_history = [];
  input_history = [];
};

JSREPL.Engines.QBasic.Destroy = function() {
  delete virtual_machine;
  // TODO(max99x): Delete all the globals use by the VM.
};

JSREPL.Engines.QBasic.Eval = function(input) {
  input_history_index = output_history_index = 0;
  command_history.push(input);
  try {
    var program = new QBasicProgram(command_history.join('\n'));
    virtual_machine.run(program, false, function() {
      result_callback('');
    });
  } catch (e) {
    error_callback(e);
  }
};

JSREPL.Engines.QBasic.Highlight = function(element) {
  // TODO(max99x): Implement.
  console.log('Highlighting of QBasic code not yet implemented.');
};

})();
