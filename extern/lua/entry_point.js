this['Lua'] = {
  isInitialize: null,
  state: null,
  streamName: null,
  reportError: function () {
    _lua_settop(this.state, 0);
  },
  // Allocates a string on the heap.
  allocateString: function(str) {
    var arr = intArrayFromString(str);
    return allocate(arr, 'i8', 0);  // ALLOC_NORMAL
  },
  // Parses Lua code and loads it into the execution buffer. Returns true on
  // success.
  parse: function (command) {
    // =x commands explicitly ask for the result.
    if (command.match(/^=(?!=)/)) command = 'return ' + command.slice(1);
    // Prepare the command, as an expression and a statement.
    var commandPtr = this.allocateString(command);
    var evalCommand = 'return ' + command;
    var evalCommandPtr = this.allocateString(evalCommand);

    // Try parsing the command, first as an expression, then if that fails, as a
    // statement.
    var parseFailed = _luaL_loadbuffer(
        this.state, evalCommandPtr, evalCommand.length, this.streamName);
    if (parseFailed) {
      _lua_settop(this.state, -2)  // Discard error message.
      parseFailed = _luaL_loadbuffer(
        this.state, commandPtr, command.length, this.streamName);
    }

    // Cleanup.
    _free(commandPtr);
    _free(evalCommandPtr);

    return !parseFailed;
  },
  // Returns the string representation of the value at the top of the Lua stack.
  popStack: function () {
    var ret;
    var type = _lua_type(this.state, -1);
    switch (type) {
      case -1:  // LUA_TNONE
      case 0:   // LUA_TNIL
        ret = null;
        break;
      case 1:   // LUA_TBOOLEAN
        var result = _lua_toboolean(this.state, -1);
        ret = result ? 'true' : 'false';
        break;
      case 3:   // LUA_TNUMBER
        ret = _lua_tonumber(this.state, -1);
        break;
      case 4:   // LUA_TSTRING
        var ptr = _lua_tolstring(this.state, -1, 0);
        var len = _lua_objlen(this.state, -1);
        var buffer = [];
        for (var i = 0; i < len; i++) {
          buffer.push(String.fromCharCode(HEAP[ptr + i]));
        }
        ret = buffer.join('');
        break;
      default:
        var ptr = _lua_typename(this.state, type);
        var typename = Pointer_stringify(ptr);
        var address = _lua_topointer(this.state, -1);
        ret = typename + ': 0x' + address.toString(16);
    }
    _lua_settop(this.state, -2);
    return ret;
  },
  // Initializes the Lua runtime with optional standard I/O callbacks. The input
  // callback is asynchronous and takes a callback which should be passed a
  // string. The output and error callbacks are synchronous and are passed
  // character codes.
  'initialize': function (input, output, error) {
    if (this.isInitialize) throw new Error('Lua already initialized.');
    FS.init(null, output, function (chr) { /* Ignore stderr. */ });
    if (error) {
      this.reportError = function(defaultMessage) {
        var errorMessage = this.popStack();
        if (!errorMessage.length) errorMessage = defaultMessage;
        for (var i = 0; i < errorMessage.length; i++) {
          error(errorMessage.charCodeAt(i));
        }
        _lua_settop(this.state, 0);
      }
    }
    run();
    this.streamName = this.allocateString('stdin');
    this.state = _luaL_newstate();
    _luaL_openlibs(this.state);
    this.isInitialize = true;
  },
  // Checks whether a command is finished and does not require more input.
  // Useful when running a REPL.
  'isFinished': function (command) {
    if (!this.isInitialize) throw new Error('Lua not initialized.');
    var parseSuccess = this.parse(command);
    if (!parseSuccess) this.popStack();
    return parseSuccess;
  },
  // Evaluates Lua code and returns the result.
  //   1. If an expression is passed, returns the representation of the value of
  //      this expression, or null if the value is nil.
  //   2. If a statement or set of statements is passed, returns null.
  //   3. If an error occurs, returns undefined.
  'eval': function (command) {
    if (!this.isInitialize) throw new Error('Lua not initialized.');

    // Parse and load the command.
    var parseSuccess = this.parse(command);
    if (!parseSuccess) {
      this.reportError('Unknown parsing error.');
    }

    // Execute the code.
    var result = _lua_pcall(this.state, 0, 1, 0);

    if (result == 0) {  // LUA_OK
      return _lua_gettop(this.state) > 0 ? this.popStack() : null;
    } else {  // LUA_ERR*
      this.reportError('Unknown evaluation error.');
    }
  }
};
