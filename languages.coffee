@JSREPL::Languages::QBasic =
  name: 'Quick Basic'
  extension: 'bas'
  category: 'Imperative'
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
  engine: '/jsrepl/langs/qbasic/jsrepl_qbasic.coffee'
  libs: []

@JSREPL::Languages::Lisp =
  name: 'Lisp'
  extension: 'lisp'
  category: 'Functional'
  matchings: [
    ['(', ')']
    ['[', ']']
  ]
  scripts: [
    'extern/javathcript/source/Base.js'
    'extern/javathcript/source/BPWJs.js'
    'extern/javathcript/source/JavathcriptTokenizer.js'
    'extern/javathcript/source/JavathcriptParser.js'
    'extern/javathcript/source/Environment.js'
    'extern/javathcript/source/Javathcript.js'
  ]
  engine: '/jsrepl/langs/lisp/jsrepl_lisp.coffee'
  libs: ['langs/lisp/jsrepl_lisp_lib.lisp']

@JSREPL::Languages::Scheme =
  name: 'Scheme'
  extension: 'scm'
  category: 'Functional'
  matchings: [
    ['(', ')']
    ['[', ']']
  ]
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
  engine: '/jsrepl/langs/scheme/jsrepl_scheme.coffee'
  libs: []

@JSREPL::Languages::JavaScript =
  name: 'JavaScript'
  extension: 'js'
  category: 'Dynamic'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/inspect.js'
  ]
  engine: '/jsrepl/langs/javascript/jsrepl_js.coffee'
  libs: []

@JSREPL::Languages::CoffeeScript =
  name: 'CoffeeScript'
  extension: 'coffee'
  category: 'Dynamic'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/coffee-script/coffee-script.js'
    'util/inspect.js'
  ]
  engine: '/jsrepl/langs/coffee-script/jsrepl_coffee.coffee'
  libs: []

@JSREPL::Languages::Brainfuck =
  name: 'Brainfuck'
  extension: 'bf'
  category: 'Esoteric'
  matchings: [
    ['[', ']']
  ]
  scripts: [
    'extern/bfjs/bfjs.js'
  ]
  engine: '/jsrepl/langs/brainfuck/jsrepl_brainfuck.coffee'
  libs: []

@JSREPL::Languages::Unlambda =
  name: 'Unlambda'
  extension: 'unl'
  category: 'Esoteric'
  matchings: []
  scripts: [
    'extern/unlambda-coffee/unlambda.coffee'
  ]
  engine: '/jsrepl/langs/unlambda/jsrepl_unlambda.coffee'
  libs: []


@JSREPL::Languages::LOLCODE =
  name: 'LOLCODE'
  extension: 'lol'
  category: 'Esoteric'
  matchings: []
  scripts: [
    'extern/lol-coffee/src/base.coffee'
    'extern/lol-coffee/src/machine.coffee'
    'extern/lol-coffee/src/ast.coffee'
    'extern/lol-coffee/src/parser.coffee'
    'extern/lol-coffee/src/tokenizer.coffee'
  ]
  engine: '/jsrepl/langs/lolcode/jsrepl_lolcode.coffee'
  libs: []


@JSREPL::Languages::Kaffeine =
  name: 'Kaffeine'
  extension: 'k'
  category: 'Dynamic'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/kaffeine/browser2/kaffeine-browser.js'
    'util/inspect.js'
  ]
  engine: '/jsrepl/langs/kaffeine/jsrepl_kaffeine.coffee'
  libs: []

@JSREPL::Languages::Move =
  name: 'Move'
  extension: 'mv'
  category: 'Dynamic'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/move/web/move.js'
    'util/inspect.js'
  ]
  engine: '/jsrepl/langs/move/jsrepl_move.coffee'
  libs: []

@JSREPL::Languages::Traceur =
  name: 'Traceur'
  extension: 'js'
  category: 'Dynamic'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/inspect.js'
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
  engine: '/jsrepl/langs/traceur/jsrepl_traceur.coffee'
  libs: []

@JSREPL::Languages::Emoticon =
  name: 'Emoticon'
  extension: 'emo'
  category: 'Esoteric'
  matchings: [
    ['(', ')']
  ]
  scripts: [
    'extern/emoticoffee/emoticon.coffee'
  ]
  engine: '/jsrepl/langs/emoticon/jsrepl_emoticon.coffee'
  libs: []

@JSREPL::Languages::Bloop =
  name: 'Bloop/Floop'
  extensions: 'bloop'
  category: 'Esoteric'
  matchings: []
  scripts: [
    'extern/bloop/bloop.js'
  ]
  engine: '/jsrepl/langs/bloop/jsrepl_bloop.coffee'
  libs: []

@JSREPL::Languages::Forth = 
  name: 'Forth'
  extensions: '4th'
  category: 'Stack-based'
  matchings: [
    ['(', ')']
    [':', ';']
  ]
  scripts: [
    'extern/jsforth/jsforth.js'
  ]
  engine: '/jsrepl/langs/forth/jsrepl_forth.coffee'
  libs: []


@JSREPL::Languages::Lua =
  name: 'Lua'
  extension: 'lua'
  category: 'Multi-paradigm'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/lua/lua.closure.js'
  ]
  engine: '/jsrepl/langs/lua/jsrepl_lua.coffee'
  libs: []
  
@JSREPL::Languages::Smalltalk =
  name: 'Smalltalk'
  extensions: 'st'
  category: 'Dynamic'
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
  engine: '/jsrepl/langs/smalltalk/jsrepl_smalltalk.coffee'
  libs: []

