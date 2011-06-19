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
      return
    @machine.run()

  IsCommandComplete: (command) ->
    # If an explicit continuation is used, the command is incomplete.
    if /\.\.\.\s*$/.test command then return false

    # Should be tokenizable.
    try
      tokenized = new @sandbox.LOLCoffee.Tokenizer(command).tokenize()
    catch e
      return true

    try
      parsed = new @sandbox.LOLCoffee.Parser(tokenized[0..]).parseProgram()
      return true
    catch e
      # Expected and ignored.

    # Split into logical lines (i.e. statements).
    lines = []
    current_line = []
    for token in tokenized
      if token.type is 'endline'
        lines.push current_line
        current_line = []
      else
        current_line.push token

    # Check for open blocks.
    open_blocks = []
    for line in lines
      top_block = open_blocks[open_blocks.length - 1]
      switch line[0].text
        when 'HAI'
          open_blocks.push 'KTHXBYE'
        when 'HOW DUZ I'
          open_blocks.push 'IF U SAY SO'
        when 'IM IN YR'
          open_blocks.push 'IM OUTTA YR'
        when 'O RLY?', 'WTF?'
          open_blocks.push 'OIC'
        when 'KTHXBYE', 'IF U SAY SO', 'IM OUTTA YR', 'OIC'
          if open_blocks[open_blocks.length - 1] == line[0].text
            open_blocks.pop()
          else
            return true

    return open_blocks.length is 0
