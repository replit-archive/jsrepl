# TODO(max99x): Implement standard library functions:
#   http://www.jgsee.kmutt.ac.th/exell/PracMath/IntrodQB.htm
#   http://www.qbasicstation.com/index.php?c=t_adv

class @JSREPL::Engines::QBasic
  constructor: (input, output, result, error, sandbox, ready) ->
    # An interface to the QBasic VM.
    @virtual_machine = new sandbox.QBasic.VirtualMachine {
      print: output
      input: input
      result: result
      error: error
    }
    ready()

  Destroy: ->
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

  IsCommandComplete: (command) ->
    # TODO(max99x): Implement.
    return true
