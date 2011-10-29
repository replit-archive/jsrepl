class self.JSREPLEngine
  constructor: (unused_input, @output, @result, @error, sandbox, ready) ->
    @Python = sandbox.Python
    sandbox.print = (->)
    @error_buffer = []
    printOutput = makeUtf8Print(output)
    bufferError = (chr) =>
      if chr?
        if @Python.isHandlingError
          @error_buffer.push String.fromCharCode chr
        else
          printOutput chr
    @Python.initialize null, printOutput, bufferError
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

  # TODO(amasad): Try to capture return type?
  RawEval: (command) ->
    @Eval command

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
