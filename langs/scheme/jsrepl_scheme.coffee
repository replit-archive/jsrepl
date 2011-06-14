class @JSREPL::Engines::Scheme
  constructor: (input, output, @result, error, @sandbox, ready) ->
    Port = @sandbox.BiwaScheme.Port
    Port.current_input = new Port.CustomInput input
    Port.current_output = new Port.CustomOutput output
    Port.current_error = Port.current_output
    @interpreter = new @sandbox.BiwaScheme.Interpreter error
    ready()

  Destroy: ->
    delete @interpreter

  Eval: (command) ->
    try
      @interpreter.evaluate command, (new_state) =>
        result = ''
        if new_state and new_state isnt @sandbox.BiwaScheme.undef
          result = @sandbox.BiwaScheme.to_write new_state
        @result result
    catch e
      @interpreter.on_error e.message
      
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
    
    parens > 0 or brackets > 0
    
