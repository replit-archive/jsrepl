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
    'langs/qbasic/jsrepl_qbasic.js'
  ]
  example_file: 'langs/qbasic/examples.txt'
  help_link: 'http://westcompsci.pima.edu/cis100/'
  extension: 'bas'
  logo: 'langs/qbasic/logo.png'

JSREPL::Languages::Lisp =
  name: 'Lisp'
  category: 'Functional'
  scripts: [
    'langs/lisp/BPWJs.js'
    'langs/lisp/Atom.js'
    'langs/lisp/UnevaluatedObj.js'
    'langs/lisp/JavathcriptTokenizer.js'
    'langs/lisp/JavathcriptParser.js'
    'langs/lisp/Environment.js'
    'langs/lisp/Javathcript.js'
    'langs/lisp/DocumentEvaluator.js'
    'langs/lisp/jsrepl_lisp.js'
  ]
  example_file: 'langs/lisp/examples.txt'
  help_link: 'http://en.wikipedia.org/wiki/Lisp_(programming_language)'
  extension: 'lisp'
  logo: 'langs/lisp/logo.jpg'

JSREPL::Languages::Scheme =
  name: 'Scheme'
  category: 'Functional'
  scripts: [
    'lib/prototype-1.6.0.3.js'
    'langs/scheme/biwascheme.js'
    'langs/scheme/jsrepl_scheme.js'
  ]
  example_file: 'langs/scheme/examples.txt'
  help_link: 'http://en.wikipedia.org/wiki/Scheme_(programming_language)'
  extension: 'scm'
  logo: 'langs/scheme/logo.png'
