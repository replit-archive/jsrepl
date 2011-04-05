class JSREPL::Engines::Ruby
  constructor: (@input_func, @output_func, @result_func, @error_func, @sandbox, ready) ->
    @parser = new @sandbox.RubyEngine.Parser()
    @ruby = new @sandbox.RubyEngine.Interpreter()
    @ruby.writeStdout = @output_func
    ready()

  Destroy: ->
    
  Eval: (command) ->
    try
      parsed = @parser.parse(command)
      @result_func(@ruby.exec(parsed))
    catch E
      @error_func E.message
