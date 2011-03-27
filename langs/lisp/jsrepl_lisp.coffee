class JSREPL::Engines::Lisp
  constructor: (input_func, output_func, result_func, error_func) ->
    @error_handler = undefined
    @result_handler = undefined
    $ = jQuery
    # Random string generator to create ids for promise elements
    # TODO(amasad) create a more reliable shuffle function
    pool = "qwertyuiopasdfghjklzxcvbnm".split ''
    randomIdGenerator = ()->
      str = pool.sort ()->
        0.5 - Math.random()
      .join('').substr(15) while $(if str? then '.' + str else 'body').length
      return str
    # Its almost impossible to make Javathcript pause execution without major rewrite
    JSREPL.lisp_callbacks =
      input: ->
        # Wrapper function to make input_func act syncronously and return a
        # promise span with a random Id for multiple inputs to work together
        id = randomIdGenerator()
        promise_elem = '<span class="' + id + '">_______</span>'
        str = new String()
        str.valueOf = str.toString = ()-> promise_elem
        # Fulfill the promise
        input_func (s) ->
          str.valueOf = str.toString = ()-> s
          $('.' + id).text(s).attr('class', '')
        return str
      output: (s)->
        output_func(s.toString())
   
    Javathcript.eval func for func in JSREPL::Engines::Lisp::Library_functions

    @result_handler = result_func
    @error_handler = error_func

  Destroy: ->
    delete Javathcript
    delete JavathcriptParser
    delete JavathcriptTokenizer

  Eval: (command) ->
    try
      @result_handler Javathcript.eval command
    catch e
      # Try assuming multiple statments
      try
        @result_handler Javathcript.evalMulti command
      catch E
        E.message = 'Error: ' + e.message
        @error_handler E

  Highlight: (element) ->
    # TODO(amasad): Implement.
    console.log 'Higlighting of Lisp code not yet implemented.'
