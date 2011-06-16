class @JSREPL::Engines::CoffeeScript
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @JSConsole = @sandbox.JSConsole
    @sandbox.console.log = (obj) => output obj + '\n'
    @sandbox.console.dir = (obj) => output @JSConsole.inspect(obj) + '\n'
    @sandbox.console.read = input
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      result = @sandbox.CoffeeScript.eval command, globals: on, bare: on
      @result @JSConsole.inspect result
    catch e
      @error e

  IsCommandComplete: (command) ->
    try
      @sandbox.CoffeeScript.compile command
    catch e
      return false
    return true
