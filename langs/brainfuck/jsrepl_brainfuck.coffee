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
