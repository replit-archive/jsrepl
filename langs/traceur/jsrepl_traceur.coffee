class self.JSREPLEngine
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # Cache sandboxed objects and functions used by the engine in case sandbox
    # bindings hide them.
    @inspect = @sandbox.console.inspect
    @sandbox.__eval = @sandbox.eval
    @traceur = @sandbox.traceur

    ready()

  Eval: (command) ->
    # Compile.
    try
      source = @_Compile command
    catch e
      @error e
      return

    # Evaluate.
    try
      result = @sandbox.__eval source
      @result if result == undefined then '' else @inspect result
    catch e
      @error e

  GetNextLineIndent: (command) ->
    # Check if it compiles.
    try
      @_Compile command
      last_line = command.split('\n')[-1..][0]
      # If current line is indented, we may still want to continue.
      return if /^\s+/.test last_line then 0 else false
    catch e
      if /[\[\{\(]$/.test command
        # A block or an opening brace, bracket or paren; indent.
        return 1
      else
        return 0

  _Compile: (command) ->
    return @traceur.Compiler.script(command)
