class @JSREPL::Engines::CoffeeScript
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @JSConsole = @sandbox.JSConsole
    @sandbox.console.log = (obj) => output @sandbox.JSConsole.inspect(obj) + '\n'
    @sandbox.console.read = input
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      result = @sandbox.CoffeeScript.eval command, globals: on, bare: on
      out = @JSConsole.inspect result
      @result out
    catch e
      @error e
