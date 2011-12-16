class self.JSREPLEngine
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # Cache sandboxed objects and functions used by the engine in case sandbox
    # bindings hide them.
    @inspect = @sandbox.console.inspect
    @functionClass = @sandbox.Function
    @sandbox.__eval = @sandbox.eval

    ready()

  Eval: (command) ->
    try
      result = @sandbox.__eval command
      @result if result == undefined then '' else @inspect result
    catch e
      @error e

  RawEval: (command) ->
    try
      result = @sandbox.__eval command
      @result result
    catch e
      @error e

  GetNextLineIndent: (command) ->
    try
      new @functionClass command
      return false
    catch e
      if /[\[\{\(]$/.test command
        # An opening brace, bracket or paren; indent.
        return 1
      else
        return 0
