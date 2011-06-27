class @JSREPL::Engines::Brainfuck
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # TODO(amasad): Buffer input.
    @sandbox.BF.init output, input
    ready()

  Eval: (command) ->
    try
      if command == "SHOWTAPE"
        # to be implemented
        @result @sandbox.BF.getTape()
      else
        @sandbox.BF.parse command, (tape) =>
          cells = tape.split /\s/
          index = null
          cells.forEach (cell, i) -> if /\[/.test cell then index = i
          lower = if index < 10 then 0 else index - 10
          before = cells[lower...index]
          after = cells[index + 1...index + 10]
          @result before.concat([cells[index]]).concat(after).join ' '
        
    catch e
      @error e

  GetNextLineIndent: (command) ->
    if /\[$/.test command then return 1

    brackets = 0
    for char in command
      switch char
        when '[' then ++brackets
        when ']' then --brackets

    return if brackets > 0 then 0 else false
