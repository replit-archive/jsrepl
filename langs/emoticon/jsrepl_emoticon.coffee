class @JSREPL::Engines::Emoticon
  constructor: (@input, @output, result, @error, @sandbox, ready) ->
    
    @result_handler = (env) =>
      result_env = ''
      for listName, list of env
        listStr = list.toString()
        len = listStr.length - 74
        len = if len > 0 then len else 0
        listStr = listStr[len...]
        listStr = '...' + listStr if len > 0
        result_env += "\n#{listName}: " + listStr
      result result_env
      
    @interpreter = new @sandbox.Emoticon.Interpreter {
      source: []
      input: @input
      print: @output
      result: @result_handler
    } 
    ready()
  
  Eval: (command) ->
    try
      code = new @sandbox.Emoticon.Parser command
      @interpreter.lists.Z = @interpreter.lists.Z.concat(code)
      @interpreter.run()
      console.log(@interpreter)
    catch e
      @error e
  
  GetNextLineIndent: (command) ->
    code = new @sandbox.Emoticon.Parser command
    parans = 0
    for instruction in code
      if instruction.type == 'emoticon'
        if instruction.mouth == '('
          parans++
        if instruction.mouth == ')'
          parans--
    return parans || false
          
        
         
    