# TODO(max99x): Have Cakefile compile the libraries so we include just one file.

JSREPL::Languages::QBasic =
  name: 'Quick Basic'
  category: 'Imperative'
  scripts: [
    'extern/qb.js/RuleSet.js'
    'extern/qb.js/RuleParser.js'
    'extern/qb.js/Types.js'
    'extern/qb.js/VirtualMachine.js'
    'extern/qb.js/TypeChecker.js'
    'extern/qb.js/EarleyParser.js'
    'extern/qb.js/GlrParser.js'
    'extern/qb.js/Tokenizer.js'
    'extern/qb.js/CodeGenerator.js'
    'extern/qb.js/QBasic.js'
  ]
  engine: 'langs/qbasic/jsrepl_qbasic.js'
  example_file: 'langs/qbasic/examples.txt'
  help_link: 'http://westcompsci.pima.edu/cis100/'
  extension: 'bas'
  logo: 'langs/qbasic/logo.png'

JSREPL::Languages::Lisp =
  name: 'Lisp'
  category: 'Functional'
  scripts: [
    'extern/javathcript/source/Base.js'
    'extern/javathcript/source/BPWJs.js'
    'extern/javathcript/source/JavathcriptTokenizer.js'
    'extern/javathcript/source/JavathcriptParser.js'
    'extern/javathcript/source/Environment.js'
    'extern/javathcript/source/Javathcript.js'
    'langs/lisp/jsrepl_lisp_lib.js'
  ]
  engine: 'langs/lisp/jsrepl_lisp.js'
  example_file: 'langs/lisp/examples.txt'
  help_link: 'http://en.wikipedia.org/wiki/Lisp_(programming_language)'
  extension: 'lisp'
  logo: 'langs/lisp/logo.jpg'
JSREPL::Languages::Scheme =
  name: 'Scheme'
  category: 'Functional'
  scripts: [
    'lib/prototype-1.6.0.3.js'
    'extern/biwascheme/src/version.js.in'
    'extern/biwascheme/src/stackbase.js'
    'extern/biwascheme/src/system/set.js'
    'extern/biwascheme/src/system/write.js'
    'extern/biwascheme/src/system/pair.js'
    'extern/biwascheme/src/system/value.js'
    'extern/biwascheme/src/system/symbol.js'
    'extern/biwascheme/src/system/char.js'
    'extern/biwascheme/src/system/number.js'
    'extern/biwascheme/src/system/port.js'
    'extern/biwascheme/src/system/record.js'
    'extern/biwascheme/src/system/hashtable.js'
    'extern/biwascheme/src/system/syntax.js'
    'extern/biwascheme/src/system/types.js'
    'extern/biwascheme/src/system/parser.js'
    'extern/biwascheme/src/system/compiler.js'
    'extern/biwascheme/src/system/pause.js'
    'extern/biwascheme/src/system/call.js'
    'extern/biwascheme/src/system/interpreter.js'
    'extern/biwascheme/src/library/infra.js'
    'extern/biwascheme/src/library/r6rs_lib.js'
    'extern/biwascheme/src/library/webscheme_lib.js'
    'extern/biwascheme/src/library/extra_lib.js'
    'extern/biwascheme/src/library/srfi.js'
  ]
  engine:'langs/scheme/jsrepl_scheme.js'
  example_file: 'langs/scheme/examples.txt'
  help_link: 'http://en.wikipedia.org/wiki/Scheme_(programming_language)'
  extension: 'scm'
  logo: 'extern/biwascheme/website/images/biwascheme_logo.png'

JSREPL::Languages::CoffeeScript=
  name: 'CoffeeScript'
  category: 'Dynamic'
  scripts :[ 'langs/coffee-script/coffee-script.js' ]
  engine: 'langs/coffee-script/jsrepl_coffee.js'
  example_file: 'langs/coffee-script/examples.txt'
  extension: 'coffee'
  logo: 'langs/coffee-script/logo.png'

JSREPL::Languages::Brainfuck=
  name: 'Brainfuck'
  category: 'esoteric'
  scripts: [ 'extern/brainfuck/js/brainfuck.js' ]
  engine: 'langs/brainfuck/jsrepl_brainfuck.js'
  example_file: 'langs/brainfuck/examples.txt'
  extension: 'bf'
  logo: 'langs/brainfuck/brainfuck.jpg'

JSREPL::Languages::Ruby=
  name: 'Ruby'
  category: 'Dynamic'
  scripts: [
   'langs/ruby/head.js'
   'langs/ruby/node.js'
   'langs/ruby/builtinobjects.js'
   'langs/ruby/parse.js'
   'langs/ruby/interpreter.js'
   'langs/ruby/builtinmethods.js'
   'langs/ruby/util.js'
  ]
  engine: 'langs/ruby/jsrepl_ruby.js'
  example_file: 'langs/ruby/examples.txt'
  extension: 'rb'
  logo: 'langs/ruby/logo.png'

