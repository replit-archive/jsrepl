class self.JSREPLEngine
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # Cache sandboxed objects and functions used by the engine in case sandbox
    # bindings hide them.
    @inspect = @sandbox._inspect
    @functionClass = @sandbox.Function
    @sandbox.__eval = @sandbox.eval

    # Cache the tokenizer and compiler.
    @tokenizer = @sandbox.require './token'
    Kaffeine = @sandbox.require './kaffeine'
    @kaffeine = new Kaffeine

    # Define custom I/O handlers.
    @sandbox.console.log = (obj) => output obj + '\n'
    @sandbox.console.dir = (obj) => output @inspect(obj) + '\n'
    @sandbox.console.read = input

    ready()
  
  Compile: (command) ->
    js = @kaffeine.compile command
    # Kaffeine sometimes produces expressions and sometimes statements. We
    # need to try both.
    try
      new @functionClass js
    catch e
      js = "(#{js})"
    
    return js
      
  Eval: (command) ->
    # Compile.
    try
      js = @Compile command
    catch e
      e.message = 'Compiling: ' + e.message
      @error e
      return

    # Execute.
    try
      result = @sandbox.__eval js
      @result if result == undefined then '' else @inspect result
    catch e
      @error e

  EvalSync: (command) ->
    @sandbox.__eval @Compile command
    
  GetNextLineIndent: (command) ->
    # If we have an async-wrapping bang anywhere in the command, we will be
    # wrapping the following lines, so continue until explicitly finished.
    token = @tokenizer.ize command
    while token?
      if token.bang then return 0
      token = token.next

    # Check if it compiles.
    try
      js = @kaffeine.compile command
      try
        new @functionClass js
      catch e
        js = "(#{js})"
        new @functionClass js
      last_line = command.split('\n')[-1..][0]
      # If current line is indented, we may still want to continue.
      return if /^\s+/.test last_line then 0 else false
    catch e
      if /^\s*(for|while|if|else)\b|[\[\{\(]$/.test command
        # A block or an opening brace, bracket or paren; indent.
        return 1
      else
        return 0
