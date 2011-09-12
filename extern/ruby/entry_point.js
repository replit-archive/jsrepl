this['Ruby'] = {
  // Initializes the Ruby runtime with optional standard I/O callbacks.
  'initialize': function(input, output, error) {
    if (this.isInitialized) {
      console.log('Ignoring repeated Ruby initialization.');
      return;
    }
    FS.init(input, output, error);
    run();

    // Wheee, infinite stack!
    var variable_in_this_stack_frame = allocate(4, 'i32', ALLOC_STACK);
    _ruby_init_stack(variable_in_this_stack_frame);
    _ruby_stack_check = function () { return false; };

    _ruby_init();
    var includeStr = Ruby.allocateString('.');
    __ZL12push_includePKc(includeStr);
    _free(includeStr);
    this.isInitialized = true;
  },
  // Evaluates a Ruby expression and returns the result.
  'eval': function(command) {
    if (!this.isInitialized) throw new Error('Ruby runtime not initialized.');
    var commandPtr = this.allocateString(command);
    try {
      var result = _rb_eval_string(commandPtr);
    } catch (e) {
      // Null exceptions are side effects from the setjmp conversion and are
      // used just to unwind the stack. We can ignore them.
      if (e !== 0) throw e;
    }
    _free(commandPtr);
    return result;
  },
  // Converts a Ruby value to a string representation (inspect method).
  'stringify': function(value) {
    var ptr = allocate([_rb_inspect(value),0,0,0], ['i32',0,0,0], ALLOC_NORMAL);
    var str = Pointer_stringify(_rb_string_value_ptr(ptr));
    _free(ptr);
    return str;
  },
  isInitialized: false,
  allocateString: function(str) {
    return allocate(intArrayFromString(str), 'i8', ALLOC_NORMAL);
  }
};
