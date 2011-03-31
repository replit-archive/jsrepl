$ = jQuery
class JSREPL::Engines::CoffeeScript
  constructor: (@input_func, @output_func, @result_func, @error_func, @sandbox, ready) ->
    @sandbox.console.log = (a)=>
      @output_func(a + '\n')
    ready()

  Destroy: ->

  Eval: (command) ->
    try
      @result_func(@sandbox.CoffeeScript.eval(command, globals:on, bare:on))
    catch e
      @error_func e

  Highlight: (element) ->
    # TODO(amasad): Implement.
