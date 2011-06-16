/**
  Copyright 2010 Steve Hanov

  This file is part of qb.js

  qb.js is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  qb.js is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with qb.js.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
  Defines:
    QBasic.AstProgram
    QBasic.AstArgument
    QBasic.AstSubroutine
    QBasic.AstDeclareFunction
    QBasic.AstPrintUsingStatement
    QBasic.AstPrintStatement
    QBasic.AstPrintItem
    QBasic.AstInputStatement
    QBasic.AstNullStatement
    QBasic.AstEndStatement
    QBasic.AstNextStatement
    QBasic.AstArrayDeref
    QBasic.AstMemberDeref
    QBasic.AstVariableReference
    QBasic.AstRange
    QBasic.AstDataStatement
    QBasic.AstRestoreStatement
    QBasic.AstDimStatement
    QBasic.AstDefTypeStatement
    QBasic.AstConstStatement
    QBasic.AstDoStatement
    QBasic.AstExitStatement
    QBasic.AstWhileLoop
    QBasic.AstForLoop
    QBasic.AstIfStatement
    QBasic.AstSelectStatement
    QBasic.AstCaseStatement
    QBasic.AstTypeMember
    QBasic.AstUserType
    QBasic.AstGotoStatement
    QBasic.AstGosubStatement
    QBasic.AstLabel
    QBasic.AstCallStatement
    QBasic.AstAssignStatement
    QBasic.AstBinaryOp
    QBasic.AstUnaryOperator
    QBasic.AstConstantExpr
    QBasic.AstReturnStatement
    QBasic.Program
  Uses:
    # EarleyParser.js
    QBasic.EarleyParser
    # TypeChecker.js
    QBasic.TypeChecker
    # CodeGenerator.js
    QBasic.CodeGenerator
    # RuleParser.js
    QBasic.RuleParser
*/

(function () {
  // WARNING: Modifying built-in object!
  Array.prototype.accept = function(visitor) {
    for (var i = 0; i < this.length; i++) {
      if (!this[i]) continue;
      this[i].accept(visitor);
    }
  };

  /** @constructor */
  QBasic.AstProgram = function(locus, mainSub) {
    this.locus = locus;
    this.subs = [mainSub];
  }

  QBasic.AstProgram.prototype.accept = function (visitor) {
    visitor.visitProgram(this);
  };

  /** @constructor */
  QBasic.AstArgument = function(locus, name, typeName, isArray) {
    this.locus = locus;
    // name of declared subroutine argument.
    this.name = name;

    // null, or the typename in AS type
    this.typeName = typeName;

    // is this an open-ended array?
    this.isArray = isArray;

    // filled in during type checking.
    this.type = null;
  }

  QBasic.AstArgument.prototype.accept = function (visitor) {
    visitor.visitArgument(this);
  };

  /** @constructor */
  QBasic.AstSubroutine = function(
      locus, name, args, statementList, isFunction, isStatic) {
    this.locus = locus;
    this.name = name;
    this.args = args;
    this.statements = statementList;
    this.isFunction = isFunction;
    this.isStatic = isStatic;
  }

  QBasic.AstSubroutine.prototype.accept = function (visitor) {
    visitor.visitSubroutine(this);
  };

  /** @constructor */
  QBasic.AstDeclareFunction = function(locus, name, args, isFunction) {
    this.locus = locus;
    this.name = name;
    this.args = args; // array of AstArgument
    this.isFunction = isFunction;
    this.type = null; // calculated later
    this.hasBody = false; // Set to true during type checking if sub is later
    // implemented.
    this.used = false;
  }

  QBasic.AstDeclareFunction.prototype.accept = function (visitor) {
    visitor.visitDeclareFunction(this);
  };

  /** @constructor */
  QBasic.AstPrintUsingStatement = function(locus, exprList, terminator) {
    this.locus = locus;
    this.exprList = exprList; // array of expressions. The first is used as the
    //format string.
    this.terminator = terminator; // literal ';', ',', or null
  }

  QBasic.AstPrintUsingStatement.prototype.accept = function (visitor) {
    visitor.visitPrintUsingStatement(this);
  };

  /** @constructor */
  QBasic.AstPrintStatement = function(locus, printItems) {
    this.locus = locus;
    this.printItems = printItems;
  }

  QBasic.AstPrintStatement.prototype.accept = function (visitor) {
    visitor.visitPrintStatement(this);
  };

  /** @constructor */
  QBasic.AstPrintItem = function(locus, type, expr, terminator) {
    this.locus = locus;
    // Type: 0 for expr, 1 for tab, in which case expr is the argument.
    this.type = type;

    this.expr = expr; // can be null!
    this.terminator = terminator; // comma, semicolon, or nothing.
  }

  QBasic.AstPrintItem.EXPR = 0;
  QBasic.AstPrintItem.TAB = 1;

  QBasic.AstPrintItem.prototype.accept = function (visitor) {
    visitor.visitPrintItem(this);
  };

  /** @constructor */
  QBasic.AstInputStatement = function(
      locus, promptExpr, printQuestionMark, identifiers) {
    this.locus = locus;
    this.promptExpr = promptExpr; // can be null.
    this.printQuestionMark = printQuestionMark;
    this.identifiers = identifiers; // actually we will only use the first one.
  }

  QBasic.AstInputStatement.prototype.accept = function (visitor) {
    visitor.visitInputStatement(this);
  };

  /** @constructor */
  QBasic.AstNullStatement = function(locus) {
    this.locus = locus;
  }

  QBasic.AstNullStatement.prototype.accept = function (visitor) {
    visitor.visitNullStatement(this);
  };

  /** @constructor */
  QBasic.AstEndStatement = function(locus) {
    this.locus = locus;
  }

  QBasic.AstEndStatement.prototype.accept = function (visitor) {
    visitor.visitEndStatement(this);
  };

  /** @constructor */
  QBasic.AstNextStatement = function(locus, identifierList) {
    this.locus = locus;
    this.identifiers = identifierList;
  }

  QBasic.AstNextStatement.prototype.accept = function (visitor) {
    visitor.visitNextStatement(this);
  };

  /** @constructor */
  QBasic.AstArrayDeref = function(locus, expr, parameters) {
    this.locus = locus;
    this.expr = expr;
    this.parameters = parameters;
    this.type = null; // calculated during type checking.
  }

  QBasic.AstArrayDeref.prototype.accept = function (visitor) {
    visitor.visitArrayDeref(this);
  };

  /** @constructor */
  QBasic.AstMemberDeref = function(locus, lhs, identifier) {
    this.locus = locus;
    this.lhs = lhs;
    this.identifier = identifier;
  }

  QBasic.AstMemberDeref.prototype.accept = function (visitor) {
    visitor.visitMemberDeref(this);
  };

  /** @constructor */
  QBasic.AstVariableReference = function(locus, name) {
    this.locus = locus;
    this.name = name;
  }

  QBasic.AstVariableReference.prototype.accept = function (visitor) {
    visitor.visitVariableReference(this);
  };

  /** @constructor */
  QBasic.AstRange = function(locus, lowerExpr, upperExpr) {
    this.locus = locus;
    // lower and upper are possibly equal. in this case, we should avoid
    // evaluating the expression twice.
    this.lowerExpr = lowerExpr;
    this.upperExpr = upperExpr;
  }

  QBasic.AstRange.prototype.accept = function (visitor) {
    visitor.visitRange(this);
  };

  /** @constructor */
  QBasic.AstDataStatement = function(locus, data) {
    this.locus = locus;
    this.data = data;
  }

  QBasic.AstDataStatement.prototype.accept = function (visitor) {
    visitor.visitDataStatement(this);
  };

  /** @constructor */
  QBasic.AstRestoreStatement = function(locus, label) {
    this.locus = locus;
    // label can be null
    this.label = label;
  }

  QBasic.AstRestoreStatement.prototype.accept = function (visitor) {
    visitor.visitRestoreStatement(this);
  };

  /** @constructor */
  QBasic.AstDimStatement = function(locus, identifier, ranges, typeName) {
    this.locus = locus;
    this.name = identifier;
    this.ranges = ranges; // list of AstRange
    this.typeName = typeName; // possibly null
    this.shared = false; // changed to true during parsing.
  }

  QBasic.AstDimStatement.prototype.accept = function (visitor) {
    visitor.visitDimStatement(this);
  };

  /** @constructor */
  QBasic.AstDefTypeStatement = function(locus, typeName) {
    this.locus = locus;
    this.typeName = typeName;
  }

  QBasic.AstDefTypeStatement.prototype.accept = function (visitor) {
    visitor.visitDefTypeStatement(this);
  };

  /** @constructor */
  QBasic.AstConstStatement = function(locus, identifier, expr) {
    this.locus = locus;
    this.name = identifier;
    this.expr = expr;
  }

  QBasic.AstConstStatement.prototype.accept = function (visitor) {
    visitor.visitConstStatement(this);
  };

  /** @constructor */
  QBasic.AstDoStatement = function(locus, statements, expr, type) {
    this.locus = locus;
    this.statements = statements;
    this.expr = expr;
    this.type = type;
  }

  QBasic.AstDoStatement.INFINITE = 1;
  QBasic.AstDoStatement.UNTIL = 2;
  QBasic.AstDoStatement.WHILE_AT_END = 3;

  QBasic.AstDoStatement.prototype.accept = function (visitor) {
    visitor.visitDoStatement(this);
  };

  /** @constructor */
  QBasic.AstExitStatement = function(locus, what) {
    this.locus = locus;
    this.what = what; // "FOR" or "DO"
  }

  QBasic.AstExitStatement.prototype.accept = function (visitor) {
    visitor.visitExitStatement(this);
  };

  /** @constructor */
  QBasic.AstWhileLoop = function(locus, expr, statements) {
    this.locus = locus;
    this.expr = expr;
    this.statements = statements;
  }

  QBasic.AstWhileLoop.prototype.accept = function (visitor) {
    visitor.visitWhileLoop(this);
  };

  /** @constructor */
  QBasic.AstForLoop = function(locus, identifier, startExpr, endExpr, stepExpr) {
    this.locus = locus;
    this.identifier = identifier;
    this.startExpr = startExpr;
    this.endExpr = endExpr;
    this.stepExpr = stepExpr;
  }

  QBasic.AstForLoop.prototype.accept = function (visitor) {
    visitor.visitForLoop(this);
  };

  /** @constructor */
  QBasic.AstIfStatement = function(locus, expr, statements, elseStatements) {
    this.locus = locus;
    this.expr = expr;
    this.statements = statements;
    this.elseStatements = elseStatements;
  }

  QBasic.AstIfStatement.prototype.accept = function (visitor) {
    visitor.visitIfStatement(this);
  };

  /** @constructor */
  QBasic.AstSelectStatement = function(locus, expr, cases) {
    this.locus = locus;
    this.expr = expr;
    this.cases = cases;
  }

  QBasic.AstSelectStatement.prototype.accept = function (visitor) {
    visitor.visitSelectStatement(this);
  };

  /** @constructor */
  QBasic.AstCaseStatement = function(locus, exprList, statements) {
    this.locus = locus;
    // if exprList is empty, this is case Else
    this.exprList = exprList;
    this.statements = statements;
  }

  QBasic.AstCaseStatement.prototype.accept = function (visitor) {
    visitor.visitCaseStatement(this);
  };

  /** @constructor */
  QBasic.AstTypeMember = function(locus, name, typeName) {
    this.locus = locus;
    this.name = name;
    this.typeName = typeName;
  }

  QBasic.AstTypeMember.prototype.accept = function (visitor) {
    visitor.visitTypeMember(this);
  };

  /** @constructor */
  QBasic.AstUserType = function(locus, name, members) {
    this.locus = locus;
    this.name = name;
    this.members = members;
  }

  QBasic.AstUserType.prototype.accept = function (visitor) {
    visitor.visitUserType(this);
  };

  /** @constructor */
  QBasic.AstGotoStatement = function(locus, label) {
    this.locus = locus;
    this.label = label;
  }

  QBasic.AstGotoStatement.prototype.accept = function (visitor) {
    visitor.visitGotoStatement(this);
  };

  /** @constructor */
  QBasic.AstGosubStatement = function(locus, label) {
    this.locus = locus;
    this.label = label;
  }

  QBasic.AstGosubStatement.prototype.accept = function (visitor) {
    visitor.visitGosub(this);
  };

  /** @constructor */
  QBasic.AstLabel = function(locus, label) {
    this.locus = locus;
    this.label = label;
  }

  QBasic.AstLabel.prototype.accept = function (visitor) {
    visitor.visitLabel(this);
  };

  /** @constructor */
  QBasic.AstCallStatement = function(locus, name, args) {
    this.locus = locus;
    this.name = name;
    this.args = args;
  }

  QBasic.AstCallStatement.prototype.accept = function (visitor) {
    visitor.visitCallStatement(this);
  };

  /** @constructor */
  QBasic.AstAssignStatement = function(locus, lhs, expr) {
    this.locus = locus;
    this.lhs = lhs; // could be a referenceList
    this.expr = expr;
  }

  QBasic.AstAssignStatement.prototype.accept = function (visitor) {
    visitor.visitAssignStatement(this);
  };

  /** @constructor */
  QBasic.AstBinaryOp = function(locus, lhs, op, rhs) {
    this.locus = locus;
    this.lhs = lhs;
    this.op = op;
    this.rhs = rhs;
  }

  QBasic.AstBinaryOp.prototype.accept = function (visitor) {
    visitor.visitBinaryOp(this);
  };

  /** @constructor */
  QBasic.AstUnaryOperator = function(locus, op, expr) {
    this.locus = locus;
    this.op = op;
    this.expr = expr;
  }

  QBasic.AstUnaryOperator.prototype.accept = function (visitor) {
    visitor.visitUnaryOperator(this);
  };

  /** @constructor */
  QBasic.AstConstantExpr = function(locus, value) {
    this.locus = locus;
    // value is possibly null, eg. for first parameter of "COLOR , 7"
    this.value = value;
  }

  QBasic.AstConstantExpr.prototype.accept = function (visitor) {
    visitor.visitConstantExpr(this);
  };

  /** @constructor */
  QBasic.AstReturnStatement = function(locus, value) {
    this.locus = locus;
    this.value = value;
  }

  QBasic.AstReturnStatement.prototype.accept = function (visitor) {
    visitor.visitReturnStatement(this);
  };

  function onProgram(symbols, locus) {
    var sub = new QBasic.AstSubroutine(locus, "_main", [], symbols[0], false);
    var program = new QBasic.AstProgram(locus, sub);
    return program;
  }

  function onExpressionProgram(symbols, locus) {
    var sub = new QBasic.AstSubroutine(locus, "_main", [], [symbols[0]], false);
    var program = new QBasic.AstProgram(locus, sub);
    return program;
  }

  function onNumber(symbols, locus) {
    var value = symbols[0];
    if (value.match(/^&H/)) {
      value = parseInt(value.slice(2), 16);
    } else {
      value = parseFloat(value);
    }
    return new QBasic.AstConstantExpr(locus, value);
  }

  function onString(symbols, locus) {
    return new QBasic.AstConstantExpr(
        locus, symbols[0].substr(1, symbols[0].length - 2));
  }

  function onBinaryOp(symbols, locus) {
    return new QBasic.AstBinaryOp(locus, symbols[0], symbols[1], symbols[2]);
  }

  function onParamListInBrackets(symbols, locus) {
    return symbols[1];
  }

  function onBracketExpr(symbols, locus) {
    return symbols[1];
  }

  /** @constructor */
  QBasic.Program = function(input, prevProgram) {
    this.errors = [];

    // Create the parser if one doesn't already exist.
    this.createParser(this.errors);

    input += "\n"; // parse doesn't handle no newline at end of input.
    // Parse the program into abstract syntax tree.
    var astProgram = QBasic.Program.parser.parse(input);
    if (astProgram === null) {
      this.errors = QBasic.Program.parser.errors;
      //console.log(this.errors.join(''));
      throw new Error("Parse failed: " + this.errors[0]);
    }

    prevProgram = prevProgram || {};

    // Perform type checking.
    this.typeChecker = new QBasic.TypeChecker(prevProgram.typeChecker,
                                              this.errors);
    astProgram.accept(this.typeChecker);

    if (this.errors.length > 0) {
      throw new Error("There were errors.");
    }

    // Perform code generation.
    this.codeGenerator = new QBasic.CodeGenerator(prevProgram.codeGenerator);
    astProgram.accept(this.codeGenerator);

    this.sourcecode = input;
    this.instructions = this.codeGenerator.instructions.slice();
    this.types = this.typeChecker.types;
    this.defaultType = this.typeChecker.defaultType;
    this.data = this.codeGenerator.data.slice();
    this.shared = this.codeGenerator.shared;
    this.lineMap = this.codeGenerator.lineMapping;
  }

  QBasic.Program.parser = null;

  QBasic.Program.prototype.getByteCodeAsString = function () {
    if (!this.instructions) return "";
    var source = this.sourcecode.split("\n");
    var lines = [];
    for (var i = 0; i < this.instructions.length; i++) {
      var locus = this.lineMap[i];
      if (locus) {
        lines.push("   ' L" + (locus.line + 1) + " " + source[locus.line]);
      }
      lines.push("[" + i + "] " + this.instructions[i]);
    }
    return lines.join("\n");
  };

  QBasic.Program.prototype.createParser = function(errors) {
    if (QBasic.Program.parser) return;

    function UseSecond(args) {
      return args[1];
    }

    function UseFirst(args) {
      return args[0];
    }

    function JoinListsLR(args) {
      args[0].push(args[1]);
      return args[0];
    }

    function JoinLists(args) {
      args[1].unshift(args[0]);
      return args[1];
    }

    function EmptyList(args) {
      return [];
    }

    var rules = new QBasic.RuleParser();
    rules.addRule("start: program");
    rules.addToken("AND", "AND");
    rules.addToken("AS", "AS");
    rules.addToken("CASE", "CASE");
    rules.addToken("CONST", "CONST");
    rules.addToken("DATA", "DATA");
    rules.addToken("DECLARE", "DECLARE");
    rules.addToken("DEF", "DEF");
    rules.addToken("DEFINT", "DEFINT");
    rules.addToken("DIM", "DIM");
    rules.addToken("DO", "DO");
    rules.addToken("ELSE", "ELSE");
    rules.addToken("END", "END");
    rules.addToken("EXIT", "EXIT");
    rules.addToken("FOR", "FOR");
    rules.addToken("FUNCTION", "FUNCTION");
    rules.addToken("GOSUB", "GOSUB");
    rules.addToken("GOTO", "GOTO");
    rules.addToken("IF", "IF");
    rules.addToken("INPUT", "INPUT");
    rules.addToken("LINE", "LINE");
    rules.addToken("LOOP", "LOOP");
    rules.addToken("MOD", "MOD");
    rules.addToken("NEXT", "NEXT");
    rules.addToken("NOT", "NOT");
    rules.addToken("OR", "OR");
    rules.addToken("POKE", "POKE");
    rules.addToken("PRINT", "PRINT");
    // TODO(max99x): Add support for REDIM.
    rules.addToken("RESTORE", "RESTORE");
    rules.addToken("RETURN", "RETURN");
    rules.addToken("SEG", "SEG");
    rules.addToken("SELECT", "SELECT");
    rules.addToken("SHARED", "SHARED");
    rules.addToken("STATIC", "STATIC");
    rules.addToken("STEP", "STEP");
    rules.addToken("SUB", "SUB");
    rules.addToken("TAB", "TAB");
    rules.addToken("THEN", "THEN");
    rules.addToken("TO", "TO");
    rules.addToken("TYPE", "TYPE");
    rules.addToken("UNTIL", "UNTIL");
    rules.addToken("USING", "USING");
    rules.addToken("VIEW", "VIEW");
    rules.addToken("WEND", "WEND");
    rules.addToken("WHILE", "WHILE");
    rules.addToken("XOR", "XOR");
    rules.addToken("minus", "\\-");
    rules.addToken("endl", "\\n");
    rules.addToken("comment", "'.*$");
    rules.addToken("hexconstant", "\\&H[\\da-fA-F]+");
    rules.addToken("floatconstant", "\\d*\\.\\d+");
    rules.addToken("intconstant", "\\d+");
    rules.addToken("stringconstant", "\"[^\"]*\"");
    rules.addToken("label", "^([a-zA-Z][a-zA-Z0-9_]*:|\\d+)");
    rules.addToken("identifier", "[a-zA-Z_][a-zA-Z0-9_]*(\\$|%|#|&|!)?");

    rules.addRule("program: statements", onProgram);
    rules.addRule("program: repl_expr endl", onExpressionProgram);
    rules.addRule("statements: statement*");
    // Line number:
    //rules.addRule( "statement: intconstant istatement separator" );
    rules.addRule("statement: label istatement separator",
                  function (args, locus) {
      var label = args[0];
      if (label.substr(-1) == ':') {
        label = label.substr(0, label.length - 1);
      }
      return [new QBasic.AstLabel(locus, label), args[1]];
    });
    rules.addRule("statement: label", function (args, locus) {
      var label = args[0];
      if (label.substr(-1) == ':') {
        label = label.substr(0, label.length - 1);
      }
      return new QBasic.AstLabel(locus, label);
    });

    rules.addRule("statement: istatement ? separator");
    rules.addRule("istatement: CONST identifier '=' expr",
                  function (args, locus) {
      return new QBasic.AstConstStatement(locus, args[1], args[3]);
    });
    rules.addRule("istatement: DECLARE FUNCTION identifier ArgList",
                  function (args, locus) {
      return new QBasic.AstDeclareFunction(locus, args[2], args[3], true);
    });
    rules.addRule("istatement: DECLARE SUB identifier ArgList",
                  function (args, locus) {
      return new QBasic.AstDeclareFunction(locus, args[2], args[3], false);
    });
    rules.addRule("istatement: SUB identifier ArgList STATIC? statements END SUB",
                  function (args, locus) {
      return new QBasic.AstSubroutine(
          locus, args[1], args[2], args[4], false, args[3] !== null);
    });
    rules.addRule("istatement: FUNCTION identifier ArgList statements END FUNCTION",
                  function (symbols, locus) {
      return new QBasic.AstSubroutine(
          locus, symbols[1], symbols[2], symbols[3], true);
    });
    rules.addRule("istatement: DEF SEG ('=' expr)?", function (args, locus) {
      return new QBasic.AstNullStatement(locus);
    });
    rules.addRule("istatement: DEF identifier ArgList '=' expr",
                  function (args, locus) {
      return new QBasic.AstNullStatement(locus);
    });
    rules.addRule("istatement: DEFINT identifier minus identifier",
                  function (args, locus) {
      // TODO(max99x): Implement completely.
      return new QBasic.AstDefTypeStatement(locus, "INTEGER");
    });
    rules.addRule("istatement: VIEW PRINT", function (args, locus) {
      return new QBasic.AstNullStatement(locus);
    });
    rules.addRule("istatement: DIM DimList", UseSecond);
    rules.addRule("istatement: DIM SHARED DimList", function (args, locus) {
      for (var i = 0; i < args[2].length; i++) {
        args[2][i].shared = true;
      }
      return args[2];
    });
    rules.addRule("istatement: WHILE expr separator statements WEND",
                  function (args, locus) {
      return new QBasic.AstWhileLoop(locus, args[1], args[3]);
    });
    rules.addRule("istatement: DO separator statements LOOP",
                  function (args, locus) {
      return new QBasic.AstDoStatement(
          locus, args[2], null, QBasic.AstDoStatement.INFINITE);
    });
    rules.addRule("istatement: DO separator statements LOOP WHILE expr", 
                  function (args, locus) {
      return new QBasic.AstDoStatement(
          locus, args[2], args[5], QBasic.AstDoStatement.WHILE_AT_END);
    });
    rules.addRule("istatement: DO separator statements LOOP UNTIL expr",
                  function (args, locus) {
      return new QBasic.AstDoStatement(
          locus, args[2], args[5], QBasic.AstDoStatement.UNTIL);
    });
    rules.addRule("istatement: DO WHILE expr separator statements LOOP",
                  function (args, locus) {
      return new QBasic.AstWhileLoop(locus, args[2], args[4]);
    });
    rules.addRule("istatement: FOR identifier '=' expr TO expr",
                  function (args, locus) {
      return new QBasic.AstForLoop(locus, args[1], args[3], args[5], 
                                   new QBasic.AstConstantExpr(locus, 1));
    });
    rules.addRule("istatement: FOR identifier '=' expr TO expr STEP expr",
                  function (args, locus) {
      return new QBasic.AstForLoop(locus, args[1], args[3], args[5], args[7]);
    });
    rules.addRule("istatement: NEXT identifiers?", function (args, locus) {
      if (args[1] === null) {
        args[1] = [];
      }
      return new QBasic.AstNextStatement(locus, args[1]);
    });
    rules.addRule("istatement: EXIT (FOR|DO)", function (args, locus) {
      return new QBasic.AstExitStatement(locus, args[1]);
    });
    rules.addRule("identifiers: MoreIdentifiers* identifier", JoinListsLR);
    rules.addRule("MoreIdentifiers: identifier ','", UseFirst);
    rules.addRule("istatement: END", function (args, locus) {
      return new QBasic.AstEndStatement(locus);
    });
    rules.addRule("istatement: GOSUB identifier", function (args, locus) {
      return new QBasic.AstGosubStatement(locus, args[1]);
    });
    rules.addRule("istatement: GOTO identifier", function (args, locus) {
      return new QBasic.AstGotoStatement(locus, args[1]);
    });
    rules.addRule("istatement: IF expr THEN istatement", 
                  function (args, locus) {
      return new QBasic.AstIfStatement(locus, args[1], args[3], null);
    });
    rules.addRule("istatement: IF expr THEN separator statements ElseClause END IF",
                  function (args, locus) {
      return new QBasic.AstIfStatement(locus, args[1], args[4], args[5]);
    });
    rules.addRule("ElseClause: ELSE IF expr THEN separator statements ElseClause",
                  function (args, locus) {
      return new QBasic.AstIfStatement(locus, args[2], args[5], args[6]);
    });

    rules.addRule("ElseClause: ELSE statements", UseSecond);

    rules.addRule("ElseClause:", function (args, locus) {
      return new QBasic.AstNullStatement(locus);
    });
    rules.addRule("istatement: SELECT CASE expr separator case* END SELECT", 
                  function (args, locus) {
      return new QBasic.AstSelectStatement(locus, args[2], args[4]);
    });

    rules.addRule("case: CASE exprList separator statements", 
                  function (args, locus) {
      return new QBasic.AstCaseStatement(locus, args[1], args[3]);
    });

    rules.addRule("case: CASE ELSE separator statements",
                  function (args, locus) {
      return new QBasic.AstCaseStatement(locus, [], args[3]);
    });

    rules.addRule("exprList: moreExpr* expr", JoinListsLR);

    rules.addRule("moreExpr: expr ','", UseFirst);

    rules.addRule("istatement: INPUT constant? (';'|',') identifiers",
                  function (args, locus) {
      return new QBasic.AstInputStatement(
          locus, args[1], args[2] == ';', args[3]);
    });
    rules.addRule("istatement: LINE? INPUT identifiers",
                  function (args, locus) {
      return new QBasic.AstInputStatement(locus, null, false, args[2]);
    });
    rules.addRule("istatement: POKE expr ',' expr", function (args, locus) {
      return new QBasic.AstNullStatement(locus);
    });
    rules.addRule("istatement: PRINT", function (args, locus) {
      return new QBasic.AstPrintStatement(locus, []);
    });
    rules.addRule("istatement: PRINT PrintItems", function (args, locus) {
      return new QBasic.AstPrintStatement(locus, args[1]);
    });
    rules.addRule("istatement: PRINT USING [expr,';'] (';'|',')?",
                  function (args, locus) {
      return new QBasic.AstPrintUsingStatement(locus, args[2], args[3]);
    });
    rules.addRule("PrintItems: PrintItem", function (args, locus) {
      return args;
    });
    rules.addRule("PrintItems: MorePrintItems* PrintItem (';'|',')?", 
                  function (args, locus) {
      args[1].terminator = args[2];
      args[0].push(args[1]);
      return args[0];
    });
    rules.addRule("MorePrintItems: PrintItem (';'|',')",
                  function (args, locus) {
      args[0].terminator = args[1];
      return args[0];
    });

    rules.addRule("PrintItem: expr", function (args, locus) {
      return new QBasic.AstPrintItem(
          locus, QBasic.AstPrintItem.EXPR, args[0], null);
    });

    rules.addRule("PrintItem: TAB '\\(' expr '\\)'", function (args, locus) {
      return new QBasic.AstPrintItem(
          locus, QBasic.AstPrintItem.TAB, args[2], null);
    });

    rules.addRule("PrintItem:", function (args, locus) {
      return new QBasic.AstPrintItem(
          locus, QBasic.AstPrintItem.EXPR, null, null);
    });
    rules.addRule("istatement: RESTORE identifier?", function (args, locus) {
      return new QBasic.AstRestoreStatement(locus, args[1]);
    });
    rules.addRule("istatement: RETURN", function (args, locus) {
      return new QBasic.AstReturnStatement(locus);
    });
    rules.addRule("istatement: DATA [DataConstant,',']",
                  function (args, locus) {
      return new QBasic.AstDataStatement(locus, args[1]);
    });
    rules.addRule("DataConstant: identifier", function (args, locus) {
      return new QBasic.AstConstantExpr(locus, args[0]);
    });
    rules.addRule("DataConstant: constant");
    rules.addRule("DataConstant:", function (args, locus) {
      return new QBasic.AstConstantExpr(locus, null);
    });
    rules.addRule("istatement: TYPE identifier separator TypeMembers END TYPE",
                  function (args, locus) {
      return new QBasic.AstUserType(locus, args[1], args[3]);
    });
    rules.addRule("istatement: AssignStatement");
    rules.addRule("AssignStatement: ReferenceList '=' expr2",
                  function (args, locus) {
      return new QBasic.AstAssignStatement(locus, args[0], args[2]);
    });
    rules.addRule("istatement: identifier Parameters",
                  function (args, locus) {
      return new QBasic.AstCallStatement(locus, args[0], args[1]);
    });
    rules.addRule("Parameters: ", EmptyList);
    rules.addRule("Parameters: '\\(' ParameterList '\\)'", UseSecond);
    rules.addRule("Parameters: ParameterList");
    rules.addRule("ParameterList: [Parameter,',']");
    rules.addRule("Parameter: expr");
    rules.addRule("Parameter:", function (args, locus) {
      return new QBasic.AstConstantExpr(locus, null);
    });

    rules.addRule("DimList: Dim MoreDims*", JoinLists);
    rules.addRule("MoreDims: ',' Dim", UseSecond);
    rules.addRule("Dim: identifier AsType?", function (args, locus) {
      return new QBasic.AstDimStatement(locus, args[0], [], args[1]);
    });
    rules.addRule("Dim: identifier '\\(' RangeList '\\)' AsType?",
                  function (args, locus) {
      return new QBasic.AstDimStatement(locus, args[0], args[2], args[4]);
    });
    rules.addRule("AsType: AS identifier", UseSecond);
    rules.addRule("RangeList:", function (args, locus) {
      return null;
    });
    rules.addRule("RangeList: Range MoreRanges*", JoinLists);
    rules.addRule("MoreRanges: ',' Range", UseSecond);
    rules.addRule("Range: expr EndRange?", function (symbols, locus) {
      if (symbols[1]) {
        return new QBasic.AstRange(locus, symbols[0], symbols[1]);
      } else {
        return new QBasic.AstRange(
            locus, new QBasic.AstConstantExpr(locus, 0), symbols[0]);
      }
    });
    rules.addRule("EndRange: TO expr", UseSecond);
    rules.addRule("TypeMembers: TypeMember*");
    rules.addRule("TypeMember: identifier AS identifier separator",
                  function (args, locus) {
      return new QBasic.AstTypeMember(locus, args[0], args[2]);
    });
    rules.addRule("ArgList:", function (args, locus) {
      return [];
    });
    rules.addRule("ArgList: '\\(' [ Argument , ',' ] '\\)'", 
                  function (args, locus) {
      return args[1];
    });
    rules.addRule("Argument: identifier OptParen? AS identifier",
                  function (args, locus) {
      return new QBasic.AstArgument(
          locus, args[0], args[3], args[1] !== null);
    });
    rules.addRule("Argument: identifier OptParen?", function (args, locus) {
      return new QBasic.AstArgument(locus, args[0], null, args[1] !== null);
    });
    rules.addRule("OptParen: '\\(' '\\)'");

    rules.addRule("expr: expr2");
    rules.addRule("expr2: expr2 OR expr3", onBinaryOp);
    rules.addRule("expr2: expr2 XOR expr3", onBinaryOp);
    rules.addRule("expr2: expr3");
    rules.addRule("expr3: expr3 AND expr4", onBinaryOp);
    rules.addRule("expr3: expr4");
    rules.addRule("expr4: expr4 '=' expr5", onBinaryOp);
    rules.addRule("expr4: expr4 '<>' expr5", onBinaryOp);
    rules.addRule("expr4: expr4 '>' expr5", onBinaryOp);
    rules.addRule("expr4: expr4 '<' expr5", onBinaryOp);
    rules.addRule("expr4: expr4 '<=' expr5", onBinaryOp);
    rules.addRule("expr4: expr4 '>=' expr5", onBinaryOp);
    rules.addRule("expr4: expr5");

    rules.addRule("repl_expr: repl_expr2");
    rules.addRule("repl_expr2: repl_expr2 OR repl_expr3", onBinaryOp);
    rules.addRule("repl_expr2: repl_expr2 XOR repl_expr3", onBinaryOp);
    rules.addRule("repl_expr2: repl_expr3");
    rules.addRule("repl_expr3: repl_expr3 AND repl_expr4", onBinaryOp);
    rules.addRule("repl_expr3: repl_expr4");
    rules.addRule("repl_expr4: repl_expr4 '==' expr5", onBinaryOp);
    rules.addRule("repl_expr4: repl_expr4 '<>' expr5", onBinaryOp);
    rules.addRule("repl_expr4: repl_expr4 '>' expr5", onBinaryOp);
    rules.addRule("repl_expr4: repl_expr4 '<' expr5", onBinaryOp);
    rules.addRule("repl_expr4: repl_expr4 '<=' expr5", onBinaryOp);
    rules.addRule("repl_expr4: repl_expr4 '>=' expr5", onBinaryOp);
    rules.addRule("repl_expr4: expr5");

    rules.addRule("expr5: expr5 MOD expr6", onBinaryOp);
    rules.addRule("expr5: expr6");
    rules.addRule("expr6: expr6 '\\+' expr7", onBinaryOp);
    rules.addRule("expr6: expr6 '\\-' expr7", onBinaryOp);
    rules.addRule("expr6: expr7");
    rules.addRule("expr7: expr7 '\\*' expr7b", onBinaryOp);
    rules.addRule("expr7: expr7 '\\/' expr7b", onBinaryOp);
    rules.addRule("expr7: expr7 '\\\\' expr7b", onBinaryOp);
    rules.addRule("expr7: expr7b");
    rules.addRule("expr7b: expr7b '\\^' expr8", onBinaryOp);
    rules.addRule("expr7b: expr8");
    rules.addRule("expr8: '\\(' expr '\\)'", onBracketExpr);
    //rules.addRule( "expr8: expr8 '\\.' expr10", onBinaryOp );
    rules.addRule("expr8: NOT expr9", function (args, locus) {
      return new QBasic.AstUnaryOperator(locus, "NOT", args[1]);
    });
    rules.addRule("expr8: '\\-' expr9", function (args, locus) {
      return new QBasic.AstUnaryOperator(locus, "-", args[1]);
    });
    rules.addRule("expr8: expr9");
    rules.addRule("expr9: constant");
    rules.addRule("expr9: expr10");
    rules.addRule("expr10: ReferenceList");
    rules.addRule("constant: hexconstant", onNumber);
    rules.addRule("constant: intconstant", onNumber);
    rules.addRule("constant: floatconstant", onNumber);
    rules.addRule("constant: stringconstant", onString);
    rules.addRule("ReferenceList: ReferenceList '\\.' identifier",
                  function (args, locus) {
      return new QBasic.AstMemberDeref(locus, args[0], args[2]);
    });

    rules.addRule("ReferenceList: ReferenceList '\\(' ParameterList '\\)'",
                  function (args, locus) {
      return new QBasic.AstArrayDeref(locus, args[0], args[2]);
    });
    rules.addRule("ReferenceList: Reference");
    rules.addRule("Reference: identifier", function (args, locus) {
      return new QBasic.AstVariableReference(locus, args[0]);
    });

    rules.addRule("separator: endl+");
    rules.addRule("separator: comment endl");
    rules.addRule("separator: ':'");

    errors = errors || [];
    rules.buildSet.check(errors);
    for (var i = 0; i < errors.length; i++) {
      console.log(errors[i]);
    }

    rules.buildSet.finalize();

    QBasic.Program.parser = new QBasic.EarleyParser(rules.buildSet);
    //QBasic.Program.parser.debug = true;
  };
})();
