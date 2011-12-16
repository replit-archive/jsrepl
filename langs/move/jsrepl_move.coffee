class self.JSREPLEngine
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # Cache sandboxed objects and functions used by the engine in case sandbox
    # bindings hide them.
    @inspect = @sandbox.console.inspect
    @functionClass = @sandbox.Function
    @sandbox.__eval = @sandbox.eval
    @compile = @sandbox.move.compile

    # Define custom I/O handlers.
    @sandbox.move.runtime.print = (objs...) => output objs.join(' ') + '\n'
    @sandbox.move.runtime.read = input

    # Export runtime functions into the global sandbox scope.
    for name, func of @sandbox.move.runtime
      @sandbox[name] = func

    ready()

  Eval: (command) ->
    try
      js = @compile command, wrapSource: false, includeRuntime: false
      result = @sandbox.__eval js
      @result if result == undefined then '' else @inspect result
    catch e
      @error e

  EvalSync: (command) ->
    js = @compile command, wrapSource: false, includeRuntime: false
    return @sandbox.__eval js

  GetNextLineIndent: (command) ->
    # Enable embedded HTML by default.
    command = '#pragma enable ehtml\n' + command

    # Check if it compiles.
    try
      js = @compile command, wrapSource: false, includeRuntime: false
      new @functionClass js
      last_line = command.split('\n')[-1..][0]
      # If current line is indented, we may still want to continue.
      return if /^\s+/.test last_line then 0 else false
    catch e
      if /[\[\{\(]$/.test command
        # A block or an opening brace, bracket or paren; indent.
        return 1
      else
        return 0
