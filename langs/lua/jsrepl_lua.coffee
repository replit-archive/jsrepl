class self.JSREPLEngine
  constructor: (unused_input, output, @result, @error, sandbox, ready) ->
    sandbox.print = (->)
    @error_buffer = []
    @Lua = sandbox.Lua
    bufferError = (chr) =>
      if chr? then @error_buffer.push String.fromCharCode chr
    @Lua.initialize null, makeUtf8Print(output), bufferError
    ready()

  Eval: (command) ->
    @error_buffer = []
    try
      result = @Lua.eval encodeUtf8 command
      if @error_buffer.length
        @error @error_buffer.join ''
      else
        @result result
    catch e
      @error 'Internal error: ' + e

  EvalSync: (command) ->
    @error_buffer = []
    result = @Lua.eval encodeUtf8 command
    if @error_buffer.length
      throw @error_buffer.join ''
    return result

  GetNextLineIndent: (command) ->
    return if @Lua.isFinished command then false else 0 
