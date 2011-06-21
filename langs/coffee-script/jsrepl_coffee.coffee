SCOPE_OPENERS = [
  'FOR', 'WHILE', 'UNTIL', 'LOOP', 'IF', 'POST_IF', 'SWITCH', 'WHEN', 'CLASS',
  'TRY', 'CATCH', 'FINALLY'
]

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

  GetNextLineIndent: (command) ->
    last_line = command.split('\n')[-1..][0]

    if /([-=]>|[\[\{\(]|\belse)$/.test last_line
      # An opening brace, bracket, paren, function arrow or "else".
      return 1
    else
      try
        # Check if the command is complete.
        @sandbox.CoffeeScript.compile command
        # If current line is indented, we may still want to continue.
        if /^\s+/.test last_line
          return 0
        else
          return false
      catch e
        # Check if last line opens a scope.
        try
          tokens = @sandbox.CoffeeScript.tokens last_line
        catch
          return false
        scopes = 0
        for token in tokens
          if token[0] in SCOPE_OPENERS
            scopes++
          else if token.fromThen
            scopes--
        return if scopes > 0 then 1 else 0
