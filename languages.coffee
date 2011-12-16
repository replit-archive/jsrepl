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
  worker_friendly: true
  minifier: 'closure'

@JSREPL::Languages::lisp =
  system_name: 'lisp'
  name: 'Lisp'
  extension: 'lisp'
  matchings: [
    ['(', ')']
    ['[', ']']
  ]
  scripts: [
    'extern/Javathcript/source/Base.js'
    'extern/Javathcript/source/BPWJs.js'
    'extern/Javathcript/source/JavathcriptTokenizer.js'
    'extern/Javathcript/source/JavathcriptParser.js'
    'extern/Javathcript/source/Environment.js'
    'extern/Javathcript/source/Javathcript.js'
  ]
  includes: []
  engine: 'langs/lisp/jsrepl_lisp.coffee'
  worker_friendly: false
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
    'extern/biwascheme/src/deps/underscore.js'
    'extern/biwascheme/src/deps/underscore.string.js'
    'extern/biwascheme/src/system/class.js'
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
    'extern/biwascheme/src/system/enumeration.js'
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
    'extern/biwascheme/src/library/js_interface.js'
    'extern/biwascheme/src/library/extra_lib.js'
    'extern/biwascheme/src/library/srfi.js'
  ]
  includes: []
  engine: 'langs/scheme/jsrepl_scheme.coffee'
  worker_friendly: true
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
  worker_friendly: true
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
  worker_friendly: true
  minifier: 'closure'

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
  worker_friendly: true
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
  worker_friendly: true
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
  worker_friendly: true
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
  worker_friendly: true
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
  worker_friendly: true
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
    'extern/traceur/util/ObjectMap.js'
    'extern/traceur/util/SourceRange.js'
    'extern/traceur/util/SourcePosition.js'
    'extern/traceur/syntax/Token.js'
    'extern/traceur/syntax/TokenType.js'
    'extern/traceur/syntax/LiteralToken.js'
    'extern/traceur/syntax/IdentifierToken.js'
    'extern/traceur/syntax/Keywords.js'
    'extern/traceur/syntax/LineNumberTable.js'
    'extern/traceur/syntax/SourceFile.js'
    'extern/traceur/syntax/Scanner.js'
    'extern/traceur/syntax/PredefinedName.js'
    'extern/traceur/syntax/trees/ParseTreeType.js'
    'extern/traceur/syntax/trees/ParseTree.js'
    'extern/traceur/syntax/trees/NullTree.js'
    'extern/traceur/syntax/trees/ParseTrees.js'
    'extern/traceur/util/ErrorReporter.js'
    'extern/traceur/util/MutedErrorReporter.js'
    'extern/traceur/syntax/Parser.js'
    'extern/traceur/syntax/ParseTreeVisitor.js'
    'extern/traceur/util/StringBuilder.js'
    'extern/traceur/semantics/VariableBinder.js'
    'extern/traceur/semantics/symbols/SymbolType.js'
    'extern/traceur/semantics/symbols/Symbol.js'
    'extern/traceur/semantics/symbols/MemberSymbol.js'
    'extern/traceur/semantics/symbols/MethodSymbol.js'
    'extern/traceur/semantics/symbols/ModuleSymbol.js'
    'extern/traceur/semantics/symbols/ExportSymbol.js'
    'extern/traceur/semantics/symbols/FieldSymbol.js'
    'extern/traceur/semantics/symbols/PropertyAccessor.js'
    'extern/traceur/semantics/symbols/GetAccessor.js'
    'extern/traceur/semantics/symbols/SetAccessor.js'
    'extern/traceur/semantics/symbols/PropertySymbol.js'
    'extern/traceur/semantics/symbols/AggregateSymbol.js'
    'extern/traceur/semantics/symbols/ClassSymbol.js'
    'extern/traceur/semantics/symbols/Project.js'
    'extern/traceur/semantics/symbols/TraitSymbol.js'
    'extern/traceur/semantics/symbols/RequiresSymbol.js'
    'extern/traceur/semantics/ClassAnalyzer.js'
    'extern/traceur/codegeneration/ParseTreeWriter.js'
    'extern/traceur/syntax/ParseTreeValidator.js'
    'extern/traceur/codegeneration/ParseTreeFactory.js'
    'extern/traceur/codegeneration/ParseTreeTransformer.js'
    'extern/traceur/codegeneration/AlphaRenamer.js'
    'extern/traceur/codegeneration/DestructuringTransformer.js'
    'extern/traceur/codegeneration/DefaultParametersTransformer.js'
    'extern/traceur/codegeneration/RestParameterTransformer.js'
    'extern/traceur/codegeneration/SpreadTransformer.js'
    'extern/traceur/codegeneration/UniqueIdentifierGenerator.js'
    'extern/traceur/codegeneration/ForEachTransformer.js'
    'extern/traceur/codegeneration/ModuleTransformer.js'
    'extern/traceur/codegeneration/FunctionTransformer.js'
    'extern/traceur/codegeneration/ClassTransformer.js'
    'extern/traceur/codegeneration/BlockBindingTransformer.js'
    'extern/traceur/codegeneration/generator/ForInTransformPass.js'
    'extern/traceur/codegeneration/generator/State.js'
    'extern/traceur/codegeneration/generator/FallThroughState.js'
    'extern/traceur/codegeneration/generator/TryState.js'
    'extern/traceur/codegeneration/generator/BreakState.js'
    'extern/traceur/codegeneration/generator/CatchState.js'
    'extern/traceur/codegeneration/generator/ConditionalState.js'
    'extern/traceur/codegeneration/generator/ContinueState.js'
    'extern/traceur/codegeneration/generator/EndState.js'
    'extern/traceur/codegeneration/generator/FinallyFallThroughState.js'
    'extern/traceur/codegeneration/generator/FinallyState.js'
    'extern/traceur/codegeneration/generator/SwitchState.js'
    'extern/traceur/codegeneration/generator/YieldState.js'
    'extern/traceur/codegeneration/generator/StateAllocator.js'
    'extern/traceur/syntax/trees/StateMachine.js'
    'extern/traceur/codegeneration/generator/BreakContinueTransformer.js'
    'extern/traceur/codegeneration/generator/CPSTransformer.js'
    'extern/traceur/codegeneration/generator/GeneratorTransformer.js'
    'extern/traceur/codegeneration/generator/AsyncTransformer.js'
    'extern/traceur/codegeneration/GeneratorTransformPass.js'
    'extern/traceur/semantics/FreeVariableChecker.js'
    'extern/traceur/codegeneration/ProgramTransformer.js'
    'extern/traceur/codegeneration/ProjectWriter.js'
    'extern/traceur/codegeneration/module/ModuleVisitor.js'
    'extern/traceur/codegeneration/module/ModuleDefinitionVisitor.js'
    'extern/traceur/codegeneration/module/ExportVisitor.js'
    'extern/traceur/codegeneration/module/ModuleDeclarationVisitor.js'
    'extern/traceur/codegeneration/module/ValidationVisitor.js'
    'extern/traceur/semantics/ModuleAnalyzer.js'
    'extern/traceur/codegeneration/Compiler.js'
    'extern/traceur/runtime.js'
    'extern/traceur/util/traits.js'
  ]
  includes: []
  engine: 'langs/traceur/jsrepl_traceur.coffee'
  worker_friendly: true
  minifier: 'closure_es5'

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
  worker_friendly: true
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
  worker_friendly: true
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
  worker_friendly: true
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
  worker_friendly: false
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
      chrome: 'extern/python/closured/python.js'
      default: 'extern/python/reloop-closured/python.js'
    }
  ]
  includes: [
    'extern/python/unclosured'
    'extern/python/closured'
    'extern/python/reloop-closured'
  ]
  engine: 'langs/python/jsrepl_python.coffee'
  worker_friendly: false
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
  worker_friendly: false
  minifier: 'none'
  emscripted: true

@JSREPL::Languages::smalltalk =
  system_name: 'smalltalk'
  name: 'Smalltalk'
  extensions: 'st'
  matchings: [
    ['(', ')']
    ['[', ']']
  ]
  scripts: [
    'extern/jtalk/js/boot.js'
    'extern/jtalk/js/Kernel.js'
    'extern/jtalk/js/Parser.js'
    'extern/jtalk/js/Compiler.js'
    'extern/jtalk/js/Canvas.js'
    'extern/jtalk/js/init.js'
  ]
  includes: []
  engine: 'langs/smalltalk/jsrepl_smalltalk.coffee'
  worker_friendly: true
  minifier: 'closure'

@JSREPL::Languages::roy =
  system_name: 'roy'
  name: 'Roy'
  extension: 'roy'
  matchings: [
    ['(', ')']
    ['[', ']']
  ]
  scripts: [
    'extern/roy/bundled-roy.js'
    'util/console.js'
  ]
  includes: []
  engine: 'langs/roy/jsrepl_roy.coffee'
  worker_firnedly: true
  minifier: 'closure'
