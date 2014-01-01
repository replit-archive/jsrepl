class self.JSREPLEngine

  constructor: (@input, @output, @result, @error, @sandbox, @ready) ->
    f = -> throw Error 'I/O is not supported'
    @ws = @sandbox.apl.ws in: f, out: f
    @ready()

  Eval: (command) ->
    try
      r = @ws(command)?.toString()
      @result(if !r? then '' else if '\n' in r then '\n' + r else r)
    catch e
      @error e

  GetNextLineIndent: (command) ->
    false
