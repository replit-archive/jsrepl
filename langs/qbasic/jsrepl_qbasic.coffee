# TODO(max99x): Implement standard library functions:
#   http://www.jgsee.kmutt.ac.th/exell/PracMath/IntrodQB.htm
#   http://www.qbasicstation.com/index.php?c=t_adv
#   http://www.uv.tietgen.dk/staff/mlha/pc/prog/bas/dos/qbasic/statement/index.htm

class JSREPL::Engines::QBasic
  constructor: (input_func, output_func, result_func, error_func, sandbox, ready) ->
    # An interface to the QBasic VM.
    @virtual_machine = new sandbox.QBasic.VirtualMachine {
      print: output_func
      input: input_func
      result: result_func
      error: error_func
    }
    ready()

  Destroy: ->
    # Should be garbage collected?
    delete @virtual_machine

  Eval: (command) ->
    try
      @virtual_machine.run command, =>
        if @virtual_machine.stack.length
          @virtual_machine.cons.result @virtual_machine.stack.pop().toString()
        else
          @virtual_machine.cons.result ''
    catch e
      @virtual_machine.cons.error e.message

  Highlight: (element) ->
    # TODO(max99x): Implement.
    console.log 'Highlighting of QBasic code not yet implemented.'
