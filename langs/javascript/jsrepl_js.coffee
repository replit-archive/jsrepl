class @JSREPL::Engines::JavaScript
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @JSConsole = @sandbox.JSConsole
    @sandbox.console.log = (obj) => output obj + '\n'
    @sandbox.console.dir = (obj) => output @JSConsole.inspect(obj) + '\n'
    @sandbox.console.read = input
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      result = @sandbox.eval command
      @result @JSConsole.inspect result
    catch e
      @error e

  IsCommandComplete: (command) ->
    try
      @sandbox.Function command
    catch e
      return false
    return true
