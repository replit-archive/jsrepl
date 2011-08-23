Module['Lua'] = {
  state: null,
  streamName: null,
  reportError: function () {},
  allocateString: function(str) {
    var arr = Module['intArrayFromString'](str);
    return Module['allocate'](arr, 'i8', 0);  // ALLOC_NORMAL
  },
  // Parses Lua code and loads it into the execution buffer. Returns true on
  // success.
  parse: function (command) {
    // Prepare the command, as an expression and a statement.
    var commandPtr = this.allocateString(command);
    var evalCommand = 'return ' + command;
    var evalCommandPtr = this.allocateString(evalCommand);

    // Try parsing the command, first as an expression, then if that fails, as a
    // statement.
    var load = Module['__Z15luaL_loadbufferP9lua_StatePKcjS2_'];
    var parseFailed = load(
        this.state, evalCommandPtr, evalCommand.length, this.streamName);
    if (parseFailed) {
      parseFailed = load(
        this.state, commandPtr, command.length, this.streamName);
    }

    // Cleanup.
    Module['_free'](commandPtr);
    Module['_free'](evalCommandPtr);

    return !parseFailed;
  },
  // Returns the string representation of the value at the top of the Lua stack.
  getTopOfStack: function () {
    var type = Module['__Z8lua_typeP9lua_Statei'](this.state, -1);
    switch (type) {
      case -1:  // LUA_TNONE
      case 0:   // LUA_TNIL
        return null;
      case 1:   // LUA_TBOOLEAN
        var result = Module['__Z13lua_tobooleanP9lua_Statei'](this.state, -1);
        return result ? 'true' : 'false';
      case 3:   // LUA_TNUMBER
        return Module['__Z12lua_tonumberP9lua_Statei'](this.state, -1);
      case 4:   // LUA_TSTRING
        var ptr = Module['__Z13lua_tolstringP9lua_StateiPj'](this.state, -1, 0);
        return Module['Pointer_stringify'](ptr);
      default:
        var ptr = Module['__Z12lua_typenameP9lua_Statei'](this.state, type);
        var typename = Module['Pointer_stringify'](ptr);
        var address = Module['__Z13lua_topointerP9lua_Statei'](this.state, -1);
        return typename + ': 0x' + address.toString(16);
    }
  },
  // Initializes the Lua runtime with optional standard I/O callbacks.
  'initialize': function (input, output, error) {
    Module['FS'].init(input, output, function (chr) { /* Ignore stderr. */ });
    if (error) {
      this.reportError = function(defaultMessage) {
        var errorMessage = this.getTopOfStack();
        Module['__Z10lua_settopP9lua_Statei'](this.state, 0);
        if (!errorMessage.length) errorMessage = defaultMessage;
        for (var i = 0; i < errorMessage.length; i++) {
          error(errorMessage.charCodeAt(i));
        }
      }
    }
    Module['run']();
    this.streamName = this.allocateString('stdin');
    this.state = Module['__Z13luaL_newstatev']();
    Module['__Z13luaL_openlibsP9lua_State'](this.state);
  },
  // Checks whether a command is finished and does not require more input.
  // Useful when running a REPL.
  'isFinished': function (command) {
    var parseSuccess = this.parse(command);
    if (!parseSuccess) Module['__Z10lua_settopP9lua_Statei'](this.state, 0);
    return parseSuccess;
  },
  // Evaluates Lua code. Returns:
  //   1. If an expression is passed, returns the representation of the value of
  //      this expression, or null if the value is nil.
  //   2. If a statement of set of statements is passed, returns null.
  //   3. If an error occurs, returns undefined.
  'eval': function (command) {
    // Parse and load the command.
    var parseSuccess = this.parse(command);
    if (!parseSuccess) {
      this.reportError('Unknown parsing error.');
      return undefined;
    }

    // Execute the code.
    var execFailed = Module['__Z9lua_pcallP9lua_Stateiii'](this.state, 0, 1, 0);
    if (execFailed) {
      this.reportError('Unknown evaluation error.');
      return undefined;
    }

    // Get the result.
    var ret = this.getTopOfStack();

    // Clean up.
    Module['__Z10lua_settopP9lua_Statei'](this.state, 0);

    return ret;
  }
};
