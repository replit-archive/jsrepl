class self.JSREPLEngine
  constructor: (unused_input, @output, @result, @error, sandbox, ready) ->
    @Python = sandbox.Python
    sandbox.print = (->)
    @error_buffer = []
    bufferError = (chr) =>
      if chr? then @error_buffer.push String.fromCharCode chr
    @Python.initialize null, makeUtf8Print(output), bufferError
    ready()

  Eval: (command) ->
    @error_buffer = []
    try
      result = @Python.eval encodeUtf8 command
      if result == undefined
        @error @error_buffer.join('') or 'Unknown error.'
      else
        @output @error_buffer.join ''
        @result result
    catch e
      @error 'Internal error: ' + e

  EvalSync: (command) ->
    @error_buffer = []
    result = @Python.eval encodeUtf8 command
    if result == undefined
      throw @error_buffer.join('') or 'Unknown error.'
    return result

  GetNextLineIndent: (command) ->
    lines = command.split '\n'
    if lines.length == 0
      return 0
    else
      last_line = lines[lines.length - 1]
      indent = last_line.match(/^\s*/)[0]
      last_line = lines[lines.length - 1].replace /\s+$/, ''
      if last_line[last_line.length - 1] == ':'
        return 1
      else if indent.length and last_line[last_line.length - 1].length != 0 
        return 0
      else
        return false
