class @JSREPL::Engines::Brainfuck
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    # TODO(amasad): Buffer input.
    @sandbox.BF.init output, input
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      @sandbox.BF.parse command, @result
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
