class JSREPL::Engines::Lisp
  constructor: (input_func, output_func, result_func, error_func, ready) ->
    Javathcript.Environment::print = (str, callback) ->
      this._value str, (val) ->
        output_func Javathcript.environment._stringify val
        callback []

    Javathcript.Environment::input = (callback) ->
      input_func (str) ->
        callback new Javathcript.Atom str

    Javathcript.Environment::_error = error_func

    for f in ['print', 'input', '_error']
      Javathcript.Environment::[f].toString = -> '{library macro}'

    @result_handler = (r) ->
      result_func r.toString()

    @error_handler = error_func

    Javathcript.evalMulti JSREPL::Engines::Lisp::Library, (->), -> ready()

  Destroy: ->
    delete Javathcript

  Eval: (command) ->
    try
      Javathcript.eval command, @result_handler
    catch e
      @error_handler e.message

  Highlight: (element) ->
    # TODO(amasad): Implement.
    console.log 'Higlighting of Lisp code not yet implemented.'
