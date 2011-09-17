class self.JSREPLEngine
  constructor: (@input, @output, result, @error, @sandbox, ready) ->
    @result_fn_factory = (result_fn) ->
      (env) ->
        result_env = ''
        for listName, list of env
          listStr = list.toString()
          len = listStr.length - 74
          len = if len > 0 then len else 0
          listStr = listStr[len...]
          listStr = '...' + listStr if len > 0
          result_env += "\n#{listName}: " + listStr
        result_fn result_env

    @result_handler = @result_fn_factory result
    @interpreter = new @sandbox.Emoticon.Interpreter {
      source: []
      input: @input
      print: @output
      result: @result_handler
    }
    ready()

  Eval: (command) ->
    try
      if command.match /^RESET\b/
        @interpreter = new @sandbox.Emoticon.Interpreter {
          source: []
          input: @input
          print: @output
          result: @result_handler
        }
        command = command.replace /^RESET/, ''
      code = new @sandbox.Emoticon.Parser command
      @interpreter.lists.Z = @interpreter.lists.Z.concat code
      @interpreter.run()
    catch e
      @error e

  EvalSync: (command) ->
    #TODO(amasad): Sync with @Eval().
    code = new @sandbox.Emoticon.Parser command
    @interpreter.lists.Z = @interpreter.lists.Z.concat code
    ret = null
    @interpreter.result = @result_fn_factory (res)->
      ret = res
    @interpreter.run()
    @interpreter.result = @result_handler
    return ret


  GetNextLineIndent: (command) ->
    countParens = (str) =>
      tokens = new @sandbox.Emoticon.Parser str
      parens = 0

      for token in tokens
        if token.mouth
          switch token.mouth
            when '(' then ++parens
            when ')' then --parens

      return parens

    if countParens(command) <= 0
      return false
    else
      parens_in_last_line = countParens command.split('\n')[-1..][0]
      if parens_in_last_line > 0
        return 1
      else if parens_in_last_line < 0
        return parens_in_last_line
      else
        return 0



