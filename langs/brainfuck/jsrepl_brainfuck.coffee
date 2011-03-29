class JSREPL::Engines::Brainfuck
  constructor: (@input_func, @output_func, @result_func, @error_func, ready)->
    BF.init @output_func, @input_func
    ready();

  Destroy: ->
    delete BF

  Eval: (command)->
    try
      BF.parse(command, @result_func)
    catch e
      @error_func e

  Higilight: (element)->
    console.log "DIY"

