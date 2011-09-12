class self.JSREPLEngine
  constructor: (unused_input, @output, @result, @error, sandbox, ready) ->
    @Python = sandbox.Python
    sandbox.print = (->)
    @error_buffer = []
    @Python.initialize(null,
                       makeUtf8Print(output),
                       (chr) => @error_buffer.push String.fromCharCode chr)
    ready()

  Eval: (command) ->
    @error_buffer = []
    try
      result = @Python.eval encodeUtf8 command
      if @error_buffer.length
        @error @error_buffer.join ''
      else
        @result result
    catch e
      @error 'Internalt error: ' + e

  EvalSync: (command) ->
    @error_buffer = []
    result = @Python.eval encodeUtf8 command
    if @error_buffer.length
      throw @error_buffer.join ''
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
