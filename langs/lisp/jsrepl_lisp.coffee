isNil = (x) ->
  (not x?) or (x instanceof Array and x.length == 0)

class JSREPL::Engines::Lisp
  constructor: (input_func, output_func, result_func, error_func, @sandbox, ready) ->
    Javathcript = @Javathcript = @sandbox.Javathcript
    Javathcript.Environment::princ = (obj, callback) ->
      this._value obj, (val) ->
        output_func Javathcript.environment._stringify val
        callback val

    Javathcript.Environment::print = (obj, callback) ->
      this._value obj, (val) ->
        output_func Javathcript.environment._stringify val
        output_func '\n'
        callback val

    Javathcript.Environment::input = (callback) ->
      input_func (str) ->
        callback new Javathcript.Atom str

    Javathcript.Environment::_error = error_func

    for f in ['princ', 'print', 'input', '_error']
      Javathcript.Environment::[f].toString = -> '{library macro}'

    @result_handler = (r) ->
      result_func if isNil(r) then '' else r.toString()

    @output_handler = output_func
    @error_handler = error_func

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
        @error_handler e.message

  Highlight: (element) ->
    # TODO(amasad): Implement.
    console.log 'Higlighting of Lisp code not yet implemented.'
