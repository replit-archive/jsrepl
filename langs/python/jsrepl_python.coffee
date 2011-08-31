class self.JSREPLEngine
  constructor: (unused_input, output, @result, @error, sandbox, ready) ->
    sandbox.print = (->)
    @error_buffer = []
    @Python = sandbox.Python
    callback = () =>
      @Python.initialize(null,
                        (chr) -> if chr? then output String.fromCharCode chr
                        (chr) => @error_buffer.push String.fromCharCode chr)
      ready()
    setTimeout callback, 100

  Eval: (command) ->
    @error_buffer = []
    try
      result = @Python.eval command
      if @error_buffer.length
        @error @error_buffer.join ''
      else
        @result result
    catch e
      @error e

  EvalSync: (command) ->
    @error_buffer = []
    result = @Python.eval command
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
