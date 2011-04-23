class JSREPL::Engines::Scheme
  constructor: (@input_func, @output_func, @result_func, @error_func, @sandbox, ready) ->
    x = @sandbox
    x.BiwaScheme.Port.current_input = new x.BiwaScheme.Port.CustomInput @input_func
    x.BiwaScheme.Port.current_output = new x.BiwaScheme.Port.CustomOutput output_func
    x.BiwaScheme.Port.current_error = x.BiwaScheme.Port.current_output
    @interpreter = new x.BiwaScheme.Interpreter error_func
    @result_callback = result_func
    ready()
 


  Destroy: ->
    delete @interpreter

  Eval: (command) ->
    try
      @interpreter.evaluate command, (new_state) =>
        result = ''
        if new_state and new_state isnt @sandbox.BiwaScheme.undef
          result = @sandbox.BiwaScheme.to_write new_state
        @result_callback result
    catch e
      console.log e
      @interpreter.on_error e.message

  Highlight: (element) ->
    # TODO(max99x): Implement.
    console.log 'Highlighting of Scheme code not yet implemented.'
