class JSREPL::Engines::Brainfuck
  constructor: (@input_func, @output_func, @result_func, @error_func, @sandbox, ready)->
    @sandbox.BF.init @output_func, @input_func
    ready()

  Destroy: ->

  Eval: (command)->
    try
      @sandbox.BF.parse(command, @result_func)
    catch e
      @error_func e

  Higilight: (element)->
    console.log "DIY"

