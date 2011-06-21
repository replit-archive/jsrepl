# TODO(max99x): Fix keyword arg breakage for runtime in raw mode. See:
#               https://github.com/rsms/move/issues/8

class @JSREPL::Engines::Move
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @sandbox.move.runtime.print = (objs...) => output objs.join(' ') + '\n'
    @sandbox.move.runtime.read = input
    for name, func of @sandbox.move.runtime
      @sandbox[name] = func
    ready()

  Destroy: ->

  Eval: (command) ->
    # Enable embedded HTML by default.
    command = '#pragma enable ehtml\n' + command

    try
      js = @sandbox.move.compile command, strict: false, raw: true
      @result @sandbox._inspect @sandbox.eval js
    catch e
      @error e

  GetNextLineIndent: (command) ->
    # Check if it compiles.
    try
      @sandbox.Function @sandbox.move.compile command
      last_line = command.split('\n')[-1..][0]
      # If current line is indented, we may still want to continue.
      return if /^\s+/.test last_line then 0 else false
    catch e
      if /[\[\{\(]$/.test command
        # A block or an opening brace, bracket or paren; indent.
        return 1
      else
        return 0
