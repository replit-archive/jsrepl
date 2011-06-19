class @JSREPL::Engines::LOLCODE
  constructor: (input, output, result, @error, @sandbox, ready) ->
    input_handler = =>
      input (text) => @machine.resume text
    output_handler = (text) =>
      output text
      @machine.resume()
    error_handler = (e) =>
      error e
      @machine.reset()
      @machine.halted = true
      @machine.instruction_ptr = @machine.instructions.length
    result_handler = =>
      it = @machine.frames[0].variables['IT']
      if it is @last_it
        result ''
      else
        @last_it = it
        result if it.value is null then '' else String(it.value)

    @context = new @sandbox.LOLCoffee.CodeGenContext
    @machine = new @sandbox.LOLCoffee.Machine @context,
                                              input_handler,
                                              output_handler,
                                              error_handler,
                                              result_handler,
                                              true
    @last_it = null

    ready()

  Destroy: ->
    delete @machine
    delete @context

  Eval: (command) ->
    try
      tokenized = new @sandbox.LOLCoffee.Tokenizer(command).tokenize()
      parsed = new @sandbox.LOLCoffee.Parser(tokenized).parseProgram()
      parsed.codegen @context
    catch e
      @error e
    @machine.run()

  IsCommandComplete: (command) ->
    # TODO(max99x): Implement.
    return true