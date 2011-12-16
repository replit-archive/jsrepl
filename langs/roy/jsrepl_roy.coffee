class self.JSREPLEngine
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # Cache sandboxed objects and functions used by the engine in case sandbox
    # bindings hide them.
    @inspect = @sandbox.console.inspect
    @roy = @sandbox.roy
    @functionClass = @sandbox.Function
    @sandbox.__eval = @sandbox.eval

    ready()

  Eval: (command) ->
    try
      compiled = @roy.compile(command).output
      result = @sandbox.__eval compiled
      @result if result == undefined then '' else @inspect result
    catch e
      @error e

  RawEval: (command) ->
    try
      compiled = @roy.compile(command).output
      result = @sandbox.__eval compiled
      @result result
    catch e
      @error e

  GetNextLineIndent: (command) ->
    try
      @roy.compile command
      return false
    catch e
      if /[\[\{\(]$/.test command
        # An opening brace, bracket or paren; indent.
        return 1
      else
        return 0
