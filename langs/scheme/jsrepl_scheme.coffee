class JSREPL::Engines::Scheme
  constructor: (input_func, output_func, result_func, error_func) ->
    BiwaScheme.Port.current_input = new BiwaScheme.Port.CustomInput input_func
    BiwaScheme.Port.current_output = new BiwaScheme.Port.CustomOutput output_func
    BiwaScheme.Port.current_error = BiwaScheme.Port.current_output
    @interpreter = new BiwaScheme.Interpreter error_func
    @result_callback = result_func

  Destroy: ->
    delete @interpreter
    delete BiwaScheme

  Eval: (command) ->
    try
      @interpreter.evaluate command, (new_state) =>
        result = ''
        if new_state and new_state isnt BiwaScheme.undef
          result = BiwaScheme.to_write new_state
        @result_callback result
    catch e
      @interpreter.on_error e

  Highlight: (element) ->
    # TODO(max99x): Implement.
    console.log 'Highlighting of Scheme code not yet implemented.'
