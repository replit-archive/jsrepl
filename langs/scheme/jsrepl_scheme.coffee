class @JSREPL::Engines::Scheme
  constructor: (input_func, output_func, result_func, error_func) ->
    BiwaScheme.Port.current_output = new (Class.create(BiwaScheme.Port, {
      initialize: ($super) ->
        $super(false, true)
      put_string: (str) ->
        output_func(str)
    }))()

    BiwaScheme.Port.current_input = new (Class.create(BiwaScheme.Port, {
      initialize: ($super) ->
        $super(true, false)
      get_string: (after) ->
        new BiwaScheme.Pause (pause) ->
          input_func (input) ->
            pause.resume after(input)
    }))()

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
