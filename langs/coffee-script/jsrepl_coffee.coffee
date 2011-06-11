class @JSREPL::Engines::CoffeeScript
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @sandbox.console.log = (obj) =>
      output obj + '\n'
    # TODO(amasad): Provide interface to input.
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      @result @sandbox.CoffeeScript.eval command, globals: on, bare: on
    catch e
      @error e
