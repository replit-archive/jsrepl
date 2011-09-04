class self.JSREPLEngine
  constructor: (input, output, @result, error, @sandbox, ready) ->
    Port = @sandbox.BiwaScheme.Port
    Port.current_input = new Port.CustomInput input
    Port.current_output = new Port.CustomOutput output
    Port.current_error = Port.current_output
    @interpreter = new @sandbox.BiwaScheme.Interpreter error
    ready()

  Eval: (command) ->
    try
      @interpreter.evaluate command, (new_state) =>
        # When the result is JS undefined then this eval was an error and the 
        # error callback has been already called. 
        # Schemeseems to return a result even on error.
        if new_state isnt undefined
          result = ''
          if new_state? and new_state isnt @sandbox.BiwaScheme.undef
            result = @sandbox.BiwaScheme.to_write new_state
          @result result
    catch e
      @interpreter.on_error e.message
  
  # TODO: Make sure the interpreter doesn't halt for input
  EvalSync: (command) ->
    ret = null
    @interpreter.evaluate command, (state) -> ret = state
    return ret
  
  IsCommandComplete: (command) ->
    {tokens} = new @sandbox.BiwaScheme.Parser command
    parens = 0
    brackets = 0

    for token in tokens
      switch token
        when '[' then ++brackets
        when ']' then --brackets
        when '(' then ++parens
        when ')' then --parens

    return parens <= 0 and brackets <= 0

  GetNextLineIndent: (command) ->
    countParens = (str) =>
      {tokens} = new @sandbox.BiwaScheme.Parser str
      parens = 0

      for token in tokens
        switch token
          when '[', '(' then ++parens
          when ']', ')' then --parens

      return parens

    if countParens(command) <= 0
      # All S-exps closed or extra closing parens; don't continue.
      return false
    else
      parens_in_last_line = countParens command.split('\n')[-1..][0]
      if parens_in_last_line > 0
        # A new S-exp opened on the last line; indent one level.
        return 1
      else if parens_in_last_line < 0
        # Some S-exps were closed; realign with the outermost closed S-exp.
        return parens_in_last_line
      else
        return 0
