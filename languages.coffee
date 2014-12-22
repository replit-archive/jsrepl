@JSREPL::Languages::qbasic =
  system_name: 'qbasic'
  name: 'Quick Basic'
  extension: 'bas'
  matchings: []
  scripts: [
    'extern/qb.js/Base.js'
    'extern/qb.js/Tokenizer.js'
    'extern/qb.js/Types.js'
    'extern/qb.js/EarleyParser.js'
    'extern/qb.js/RuleSet.js'
    'extern/qb.js/RuleParser.js'
    'extern/qb.js/TypeChecker.js'
    'extern/qb.js/CodeGenerator.js'
    'extern/qb.js/VirtualMachine.js'
    'extern/qb.js/QBasic.js'
  ]
  includes: []
  engine: 'langs/qbasic/jsrepl_qbasic.coffee'
  minifier: 'closure'

@JSREPL::Languages::scheme =
  system_name: 'scheme'
  name: 'Scheme'
  extension: 'scm'
  matchings: [
    ['(', ')']
    ['[', ']']
  ]

  scripts: [
    'extern/biwascheme/src/version.js'
    'extern/biwascheme/src/deps/underscore.js'
    'extern/biwascheme/src/deps/underscore.string.js'
    'extern/biwascheme/src/header.js'
    'extern/biwascheme/src/system/class.js'
    'extern/biwascheme/src/system/_writer.js'
    'extern/biwascheme/src/system/_types.js'
    'extern/biwascheme/src/system/error.js'
    'extern/biwascheme/src/system/set.js'
    'extern/biwascheme/src/system/values.js'
    'extern/biwascheme/src/system/pair.js'
    'extern/biwascheme/src/system/symbol.js'
    'extern/biwascheme/src/system/char.js'
    'extern/biwascheme/src/system/number.js'
    'extern/biwascheme/src/system/port.js'
    'extern/biwascheme/src/system/record.js'
    'extern/biwascheme/src/system/enumeration.js'
    'extern/biwascheme/src/system/hashtable.js'
    'extern/biwascheme/src/system/syntax.js'
    'extern/biwascheme/src/system/parser.js'
    'extern/biwascheme/src/system/compiler.js'
    'extern/biwascheme/src/system/pause.js'
    'extern/biwascheme/src/system/call.js'
    'extern/biwascheme/src/system/interpreter.js'
    'extern/biwascheme/src/library/infra.js'
    'extern/biwascheme/src/library/r6rs_lib.js'
    'extern/biwascheme/src/library/js_interface.js'
    'extern/biwascheme/src/library/webscheme_lib.js'
    'extern/biwascheme/src/library/extra_lib.js'
    'extern/biwascheme/src/library/node_functions.js'
    'extern/biwascheme/src/library/srfi.js'
    'extern/biwascheme/src/platforms/browser/dumper.js'
    'extern/biwascheme/src/platforms/browser/console.js'
  ]
  includes: []
  engine: 'langs/scheme/jsrepl_scheme.coffee'
  minifier: 'closure_es5'

@JSREPL::Languages::apl =
  system_name: 'apl'
  name: 'APL'
  extension: 'apl'
  matchings: [['(', ')'], ['[', ']'], ['{', '}']]
  scripts: ['extern/apl/lib/apl.js']
  includes: []
  engine: 'langs/apl/jsrepl_apl.coffee'
  minifier: 'yui'

@JSREPL::Languages::javascript =
  system_name: 'javascript'
  name: 'JavaScript'
  extension: 'js'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/console.js'
  ]
  includes: []
  engine: 'langs/javascript/jsrepl_js.coffee'
  minifier: 'closure'

@JSREPL::Languages::coffeescript =
  system_name: 'coffeescript'
  name: 'CoffeeScript'
  extension: 'coffee'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/coffee-script/coffee-script.js'
    'util/console.js'
  ]
  includes: []
  engine: 'langs/coffee-script/jsrepl_coffee.coffee'
  minifier: 'uglify'

@JSREPL::Languages::brainfuck =
  system_name: 'brainfuck'
  name: 'Brainfuck'
  extension: 'bf'
  matchings: [
    ['[', ']']
  ]
  scripts: [
    'extern/bfjs/bfjs.js'
  ]
  includes: []
  engine: 'langs/brainfuck/jsrepl_brainfuck.coffee'
  minifier: 'closure'

@JSREPL::Languages::unlambda =
  system_name: 'unlambda'
  name: 'Unlambda'
  extension: 'unl'
  matchings: []
  scripts: [
    'extern/unlambda-coffee/unlambda.coffee'
  ]
  includes: []
  engine: 'langs/unlambda/jsrepl_unlambda.coffee'
  minifier: 'closure'

@JSREPL::Languages::lolcode =
  system_name: 'lolcode'
  name: 'LOLCODE'
  extension: 'lol'
  matchings: []
  scripts: [
    'extern/lol-coffee/src/base.coffee'
    'extern/lol-coffee/src/machine.coffee'
    'extern/lol-coffee/src/ast.coffee'
    'extern/lol-coffee/src/parser.coffee'
    'extern/lol-coffee/src/tokenizer.coffee'
  ]
  includes: []
  engine: 'langs/lolcode/jsrepl_lolcode.coffee'
  minifier: 'closure'

@JSREPL::Languages::kaffeine =
  system_name: 'kaffeine'
  name: 'Kaffeine'
  extension: 'k'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/kaffeine/kaffeine-browser.js'
    'util/console.js'
  ]
  includes: []
  engine: 'langs/kaffeine/jsrepl_kaffeine.coffee'
  minifier: 'closure'

@JSREPL::Languages::move =
  system_name: 'move'
  name: 'Move'
  extension: 'mv'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/move/move.js'
    'util/console.js'
  ]
  includes: []
  engine: 'langs/move/jsrepl_move.coffee'
  minifier: 'closure'

@JSREPL::Languages::traceur =
  system_name: 'traceur'
  name: 'Traceur'
  extension: 'js'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/console.js'
    'extern/traceur/traceur.js'
  ]
  includes: []
  engine: 'langs/traceur/jsrepl_traceur.coffee'
  minifier: 'uglify'

@JSREPL::Languages::emoticon =
  system_name: 'emoticon'
  name: 'Emoticon'
  extension: 'emo'
  matchings: [
    ['(', ')']
  ]
  scripts: [
    'extern/emoticoffee/emoticon.coffee'
  ]
  includes: []
  engine: 'langs/emoticon/jsrepl_emoticon.coffee'
  minifier: 'closure'

@JSREPL::Languages::bloop =
  system_name: 'bloop'
  name: 'Bloop/Floop'
  extensions: 'bloop'
  matchings: []
  scripts: [
    'extern/bloop/bloop.js'
  ]
  includes: []
  engine: 'langs/bloop/jsrepl_bloop.coffee'
  minifier: 'closure'

@JSREPL::Languages::forth =
  system_name: 'forth'
  name: 'Forth'
  extensions: '4th'
  matchings: [
    ['(', ')']
    [':', ';']
  ]
  scripts: [
    'extern/jsforth/jsforth.js'
  ]
  includes: []
  engine: 'langs/forth/jsrepl_forth.coffee'
  minifier: 'closure'

@JSREPL::Languages::lua =
  system_name: 'lua'
  name: 'Lua'
  extension: 'lua'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/utf8.coffee'
    'extern/lua/lua.closure.js'
  ]
  includes: []
  engine: 'langs/lua/jsrepl_lua.coffee'
  minifier: 'none'
  emscripted: true

@JSREPL::Languages::python =
  system_name: 'python'
  name: 'Python'
  extension: 'py'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/utf8.coffee'
    {
      opera: 'extern/python/unclosured/python.js'
      default: 'extern/python/reloop-closured/python.js'
    }
  ]
  includes: [
    'extern/python/unclosured'
    'extern/python/closured'
    'extern/python/reloop-closured'
  ]
  engine: 'langs/python/jsrepl_python.coffee'
  minifier: 'none'
  emscripted: true
  
@JSREPL::Languages::ruby =
  system_name: 'ruby'
  name: 'Ruby'
  extension: 'rb'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    {
      firefox_3: 'extern/ruby/dist/ruby.opt.js'
      opera: 'extern/ruby/dist/ruby.opt.js'
      default: 'extern/ruby/dist/ruby.closure.js'
    }
  ]
  includes: [
    'extern/ruby/dist/lib'
  ]
  engine: 'langs/ruby/jsrepl_ruby.coffee'
  minifier: 'none'
  emscripted: true

@JSREPL::Languages::roy =
  system_name: 'roy'
  name: 'Roy'
  extension: 'roy'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/roy/bundled-roy.js'
    'util/console.js'
  ]
  includes: []
  engine: 'langs/roy/jsrepl_roy.coffee'
  minifier: 'closure'
