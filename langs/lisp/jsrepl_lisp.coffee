isNil = (x) ->
  (not x?) or (x instanceof Array and x.length == 0)

class @JSREPL::Engines::Lisp
  constructor: (input, output, result, @error, @sandbox, ready) ->
    Javathcript = @Javathcript = @sandbox.Javathcript
    Javathcript.Environment::princ = (obj, callback) ->
      this._value obj, (val) ->
        output Javathcript.environment._stringify val
        callback val

    Javathcript.Environment::print = (obj, callback) ->
      this._value obj, (val) ->
        output Javathcript.environment._stringify val
        output '\n'
        callback val

    Javathcript.Environment::input = (callback) ->
      input (str) ->
        callback new Javathcript.Atom str

    Javathcript.Environment::_error = error

    for f in ['princ', 'print', 'input', '_error']
      Javathcript.Environment::[f].toString = -> '{library macro}'

    @result_handler = (r) ->
      result if isNil(r) then '' else r.toString()

    Javathcript.evalMulti @sandbox.JSREPL::Library, (->), ready

  Destroy: ->
    delete Javathcript

  Eval: (command) ->
    try
      @Javathcript.eval command, @result_handler
    catch e
      try
        last_result = null
        handleMultiResult = (r) => last_result = r
        @Javathcript.evalMulti command, handleMultiResult, =>
          @result_handler last_result
      catch e
        @error e.message
        
  IsCommandComplete: (command) ->
    {tokenString:tokens:tokens} = new @Javathcript.BPWJs.TokenAssembly new @Javathcript.Tokenizer command
    parens = 0
    
    for token in tokens
      if  token.ttype is "symbol"
        switch token.sval
          when "(" then ++parens
          when ")" then --parens
          
    parens > 0
