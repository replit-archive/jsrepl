class @JSREPL::Engines::JavaScript
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @sandbox.console.log = (obj) => output obj + '\n'
    @sandbox.console.dir = (obj) => output @sandbox._inspect(obj) + '\n'
    @sandbox.console.read = input
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      result = @sandbox.eval command
      @result @sandbox._inspect result
    catch e
      @error e

  GetNextLineIndent: (command) ->
    try
      @sandbox.Function command
      return false
    catch e
      if /[\[\{\(]$/.test command
        # An opening brace, bracket or paren; indent.
        return 1
      else
        return 0
