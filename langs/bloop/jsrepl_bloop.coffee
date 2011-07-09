class @JSREPL::Engines::Bloop
  constructor: (@input, @output, @result, @error, @sandbox, ready) ->
    @sandbox.BFloop.init @output
    ready()
  
  Eval: (command) ->
    try
      code = @sandbox.BFloop.compile command
      @result @sandbox.eval code
    catch e
      @error e
    
  
  GetNextLineIndent: (command) ->
    lastLine = command.split('\n')[-1..][0]
    if /begin$/.test lastLine
      return 1
    return false
      
  
          
        
         
