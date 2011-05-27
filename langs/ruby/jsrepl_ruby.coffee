class JSREPL::Engines::Ruby
  constructor: (@input_func, @output_func, @result_func, @error_func, @sandbox, ready) ->
    parser = @parser = new @sandbox.RubyEngine.Parser()
    @sandbox.RubyEngine.Interpreter.KernelMethod.gets = (args, block, callback) ->
      input_func((input)=> callback(parser.parse("'" + input + "'")[0][0]) )
    ready()
    @ruby = new @sandbox.RubyEngine.Interpreter()
    @ruby.writeStdout = (str)=> @output_func str.str + '\n'


  Destroy: ->
    
  Eval: (command) ->
    #try
    parsed = @parser.parse(command)
    @ruby.exec(parsed, @result_func)
    #catch E
     # @error_func E.message
      #alert(E)

      #throw E
