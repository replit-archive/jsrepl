# TODO(max99x): Implement standard library functions:
#   http://www.jgsee.kmutt.ac.th/exell/PracMath/IntrodQB.htm
#   http://www.qbasicstation.com/index.php?c=t_adv

class @JSREPL::Engines::QBasic
  constructor: (input, output, result, error, @sandbox, ready) ->
    # An interface to the QBasic VM.
    @virtual_machine = new @sandbox.QBasic.VirtualMachine {
      print: output
      input: input
      result: result
      error: error
    }
    ready()

  Destroy: ->
    delete @virtual_machine

  Eval: (command) ->
    try
      @virtual_machine.run command, =>
        if @virtual_machine.stack.length
          @virtual_machine.cons.result @virtual_machine.stack.pop().toString()
        else
          @virtual_machine.cons.result ''
    catch e
      @virtual_machine.cons.error e.message

  IsCommandComplete: (command) ->
    @sandbox.QBasic.Program::createParser()
    parser = @sandbox.QBasic.Program.parser

    # If the command is parseable, it's complete.
    if parser.parse(command + '\n') is not null then return true

    # If any open block is unclosed, the command is not complete. If any block
    # is closed with an invalid ending (e.g. an IF with a WEND), the command
    # contains an error and is considered complete.
    tokenizer = parser.tokenizer
    lines = (i + '\n' for i in command.split '\n')
    open_blocks = []

    for line in lines
      if parser.parse line then continue

      tokenizer.setText line
      token = tokenizer.nextToken 0, 0
      first_token = token.text
      token = tokenizer.nextToken 0, token.locus.position + token.text.length
      second_token = token.text

      top_block = open_blocks[open_blocks.length - 1]

      switch first_token
        when 'SUB', 'FUNCTION', 'FOR', 'IF', 'SELECT', 'WHILE'
          open_blocks.push first_token
        when 'DO'
          open_blocks.push if second_token is 'WHILE' then 'DO_WHILE' else 'DO'
        when 'ELSE'
          if top_block isnt 'IF' then return true
        when 'WEND'
          if top_block is 'WHILE' then open_blocks.pop() else return true
        when 'FOR'
          if top_block is 'NEXT' then open_blocks.pop() else return true
        when 'LOOP'
          if second_token in ['WHILE', 'UNTIL']
            if top_block is 'DO' then open_blocks.pop() else return true
          else
            if top_block is 'DO_WHILE' then open_blocks.pop() else return true
        when 'END'
          if top_block == second_token then open_blocks.pop() else return true

    return open_blocks.length is 0
