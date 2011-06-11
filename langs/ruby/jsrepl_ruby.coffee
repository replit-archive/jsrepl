class @JSREPL::Engines::Ruby
  constructor: (input, output, @result, @error, @sandbox, ready) ->
    @parser = parser = new @sandbox.RubyEngine.Parser()
    @sandbox.RubyEngine.Interpreter.KernelMethod.gets = (args, block, callback) ->
      input((input) => callback(parser.parse("'" + input + "'")[0][0]) )
    @ruby = new @sandbox.RubyEngine.Interpreter()
    @ruby.writeStdout = (str) => output str.str + '\n'
    ready()

  Destroy: ->

  Eval: (command) ->
    #try
    parsed = @parser.parse command 
    @ruby.exec parsed, @result
    #catch E
     # @error E.message
      #alert E

      #throw E
