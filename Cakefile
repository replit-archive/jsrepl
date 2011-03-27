{exec} = require 'child_process'
stdout = process.stdout
handle = (error, out, err)->
  stdout.write(out)
  stdout.write(err)
# "bake" makes more sense.
task 'bake', 'Compile to javascript', ->
  exec 'coffee -c repl.coffee', handle
  exec 'coffee -c languages.coffee', handle
  exec 'coffee -c langs/lisp/jsrepl_lisp.coffee', handle
  exec 'coffee -c langs/lisp/jsrepl_lisp_lib.coffee', handle
  exec 'coffee -c langs/scheme/jsrepl_scheme.coffee', handle
  exec 'coffee -c langs/qbasic/jsrepl_qbasic.coffee', handle
