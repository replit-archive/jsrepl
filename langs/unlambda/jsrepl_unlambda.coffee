class self.JSREPLEngine
  constructor: (@input, @output, @result, @error, @sandbox, ready) ->
    @Unlambda = @sandbox.Unlambda
    @result = (value) => result @Unlambda.unparse value
    ready()

  Eval: (command) ->
    try
      parsed = @Unlambda.parse command
    catch e
      @error e
      return
    @Unlambda.eval parsed, @result, @input, @output, @error
  
  EvalSync: (command) ->
    ret = null
    parsed = @Unlambda.parse command
    
    input = (callback) -> callback()
    error = (error) -> throw error
    result = (res) -> ret = res
    
    @Unlambda.eval parsed, result, input, @output, error
    return ret
    
  
  GetNextLineIndent: (command) ->
    # There's no point in having an application operator at the end of a line
    # unless you want to continue to the next.
    if /`$/.test command then return 0

    # If it can't be compiled, we may not be done yet.
    try
      @Unlambda.parse command
      return false
    catch e
      return 0
