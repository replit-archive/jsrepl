class @JSREPL::Engines::JavaScript
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @sandbox.console.log = (obj) => output obj + '\n'
    @sandbox.console.read = input
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      @result @sandbox.eval command
    catch e
      @error e
