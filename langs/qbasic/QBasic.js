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
//#include <debug.js>
//#include <RuleParser.js>
//#include <TypeChecker.js>
//#include <CodeGenerator.js>
//#include <EarleyParser.js>
Array.prototype.accept = function(visitor)
// You didn't see that.
{
    for ( var i = 0; i < this.length; i++ ) {
        if( !this[i] ) {
            continue;
        }
        this[i].accept( visitor );
    }
};

/** @constructor */
function AstProgram(locus, mainSub)
{
    this.locus = locus;
    this.subs = [mainSub];
}

AstProgram.prototype.accept = function(visitor)
{
    visitor.visitProgram(this);
};

/** @constructor */
function AstArgument(locus, name, typeName, isArray )
{
    this.locus = locus;
    // name of declared subroutine argument.
    this.name = name;

    // null, or the typename in AS type
    this.typeName = typeName;

    // is this an open-ended array?
    this.isArray = isArray;

    this.type = null; // filled in during type checking.
}

AstArgument.prototype.accept = function(visitor)
{
    visitor.visitArgument(this);
};

/** @constructor */
function AstSubroutine(locus, name, args, statementList, isFunction, isStatic)
{
    this.locus = locus;
    this.name = name;
    this.args = args;
    this.statements = statementList;
    this.isFunction = isFunction;
    this.isStatic = isStatic;
}


AstSubroutine.prototype.accept = function(visitor)
{
    visitor.visitSubroutine(this);
};

/** @constructor */
function AstDeclareFunction(locus, name, args, isFunction )
{
    this.locus = locus;
    this.name = name;
    this.args = args; // array of AstArgument
    this.isFunction = isFunction;
    this.type = null; // calculated later
    this.hasBody = false; // Set to true during type checking if sub is later
    // implemented.
    this.used = false;
}

AstDeclareFunction.prototype.accept = function(visitor)
{
    visitor.visitDeclareFunction(this);
};

/** @constructor */
function AstPrintUsingStatement(locus, exprList, terminator)
{
    this.locus = locus;
    this.exprList = exprList; // array of expressions. The first is used as the
    //format string.
    this.terminator = terminator; // literal ';', ',', or null
}

AstPrintUsingStatement.prototype.accept = function(visitor)
{
    visitor.visitPrintUsingStatement(this);
};

/** @constructor */
function AstPrintStatement(locus, printItems)
{
    this.locus = locus;
    this.printItems = printItems;
}

AstPrintStatement.prototype.accept = function(visitor)
{
    visitor.visitPrintStatement(this);
};

/** @constructor */
function AstPrintItem(locus, type, expr, terminator )
{
    this.locus = locus;
     // Type: 0 for expr, 1 for tab, in which case expr is the argument.
    this.type = type;

    this.expr = expr; // can be null!
    this.terminator = terminator; // comma, semicolon, or nothing.
}

AstPrintItem.EXPR = 0;
AstPrintItem.TAB = 1;

AstPrintItem.prototype.accept = function(visitor)
{
    visitor.visitPrintItem( this );
};

/** @constructor */
function AstInputStatement(locus, promptExpr, printQuestionMark, identifiers)
{
    this.locus = locus;
    this.promptExpr = promptExpr; // can be null.
    this.printQuestionMark = printQuestionMark;
    this.identifiers = identifiers; // actually we will only use the first one.
}

AstInputStatement.prototype.accept = function(visitor)
{
    visitor.visitInputStatement(this);
};


/** @constructor */
function AstNullStatement(locus)
{
    this.locus = locus;

}

AstNullStatement.prototype.accept = function(visitor)
{
    visitor.visitNullStatement(this);
};

/** @constructor */
function AstEndStatement(locus)
{
    this.locus = locus;

}

AstEndStatement.prototype.accept = function(visitor)
{
    visitor.visitEndStatement(this);
};

/** @constructor */
function AstNextStatement(locus, identifierList )
{
    this.locus = locus;
    this.identifiers = identifierList;
}

AstNextStatement.prototype.accept = function(visitor)
{
    visitor.visitNextStatement(this);
};


/** @constructor */
function AstArrayDeref(locus, expr, parameters )
{
    this.locus = locus;
    this.expr = expr;
    this.parameters = parameters;
    this.type = null; // calculated during type checking.
}

AstArrayDeref.prototype.accept = function(visitor)
{
    visitor.visitArrayDeref(this);
};

/** @constructor */
function AstMemberDeref( locus, lhs, identifier )
{
    this.locus = locus;
    this.lhs = lhs;
    this.identifier = identifier;
}

AstMemberDeref.prototype.accept = function(visitor)
{
    visitor.visitMemberDeref(this);
};

/** @constructor */
function AstVariableReference( locus, name )
{
    this.locus = locus;
    this.name = name;
}

AstVariableReference.prototype.accept = function(visitor)
{
    visitor.visitVariableReference(this);
};

/** @constructor */
function AstRange( locus, lowerExpr, upperExpr )
{
    this.locus = locus;
    // lower and upper are possibly equal. in this case, we should avoid
    // evaluating the expression twice.
    this.lowerExpr = lowerExpr;
    this.upperExpr = upperExpr;
}

AstRange.prototype.accept = function(visitor)
{
    visitor.visitRange(this);
};

/** @constructor */
function AstDataStatement( locus, data )
{
    this.locus = locus;
    this.data = data;
}

AstDataStatement.prototype.accept = function(visitor)
{
    visitor.visitDataStatement(this);
};

/** @constructor */
function AstRestoreStatement( locus, label )
{
    this.locus = locus;
    // label can be null
    this.label = label;
}

AstRestoreStatement.prototype.accept = function(visitor)
{
    visitor.visitRestoreStatement(this);
};

/** @constructor */
function AstDimStatement( locus, identifier, ranges, typeName )
{
    this.locus = locus;
    this.name = identifier;
    this.ranges = ranges; // list of AstRange
    this.typeName = typeName; // possibly null
    this.shared = false; // changed to true during parsing.
}

AstDimStatement.prototype.accept = function(visitor)
{
    visitor.visitDimStatement(this);
};

/** @constructor */
function AstDefTypeStatement( locus, typeName )
{
    this.locus = locus;
    this.typeName = typeName;
}

AstDefTypeStatement.prototype.accept = function(visitor)
{
    visitor.visitDefTypeStatement(this);
};

/** @constructor */
function AstConstStatement( locus, identifier, expr )
{
    this.locus = locus;
    this.name = identifier;
    this.expr = expr;
}

AstConstStatement.prototype.accept = function(visitor)
{
    visitor.visitConstStatement(this);
};

/** @constructor */
function AstDoStatement( locus, statements, expr, type )
{
    this.locus = locus;
    this.statements = statements;
    this.expr = expr;
    this.type = type;
}

AstDoStatement.INFINITE = 1;
AstDoStatement.UNTIL = 2;
AstDoStatement.WHILE_AT_END = 3;

AstDoStatement.prototype.accept = function(visitor)
{
    visitor.visitDoStatement(this);
};

/** @constructor */
function AstExitStatement( locus, what )
{
    this.locus = locus;
    this.what = what; // "FOR" or "DO"
}

AstExitStatement.prototype.accept = function(visitor)
{
    visitor.visitExitStatement(this);
};


/** @constructor */
function AstWhileLoop( locus, expr, statements )
{
    this.locus = locus;
    this.expr = expr;
    this.statements = statements;
}

AstWhileLoop.prototype.accept = function(visitor)
{
    visitor.visitWhileLoop(this);
};

/** @constructor */
function AstForLoop( locus, identifier, startExpr, endExpr, stepExpr )
{
    this.locus = locus;
    this.identifier = identifier;
    this.startExpr = startExpr;
    this.endExpr = endExpr;
    this.stepExpr = stepExpr;
}

AstForLoop.prototype.accept = function(visitor)
{
    visitor.visitForLoop(this);
};

/** @constructor */
function AstIfStatement(locus, expr, statements, elseStatements)
{
    this.locus = locus;
    this.expr = expr;
    this.statements = statements;
    this.elseStatements = elseStatements;
}

AstIfStatement.prototype.accept = function(visitor)
{
    visitor.visitIfStatement(this);
};

/** @constructor */
function AstSelectStatement( locus, expr, cases )
{
    this.locus = locus;
    this.expr = expr;
    this.cases = cases;
}

AstSelectStatement.prototype.accept = function(visitor)
{
    visitor.visitSelectStatement(this);
};

/** @constructor */
function AstCaseStatement( locus, exprList, statements )
{
    this.locus = locus;
    // if exprList is empty, this is case Else
    this.exprList = exprList;
    this.statements = statements;
}

AstCaseStatement.prototype.accept = function(visitor)
{
    visitor.visitCaseStatement(this);
};

/** @constructor */
function AstTypeMember( locus, name, typeName )
{
    this.locus = locus;
    this.name = name;
    this.typeName = typeName;
}

AstTypeMember.prototype.accept = function(visitor)
{
    visitor.visitTypeMember(this);
};

/** @constructor */
function AstUserType( locus, name, members )
{
    this.locus = locus;
    this.name = name;
    this.members = members;
}

AstUserType.prototype.accept = function(visitor)
{
    visitor.visitUserType(this);
};

/** @constructor */
function AstGotoStatement(locus, label)
{
    this.locus = locus;
    this.label = label;
}

AstGotoStatement.prototype.accept = function(visitor)
{
    visitor.visitGotoStatement(this);
};

/** @constructor */
function AstGosubStatement(locus, label)
{
    this.locus = locus;
    this.label = label;
}

AstGosubStatement.prototype.accept = function(visitor)
{
    visitor.visitGosub(this);
};

/** @constructor */
function AstLabel(locus, label)
{
    this.locus = locus;
    this.label = label;
}

AstLabel.prototype.accept = function(visitor)
{
    visitor.visitLabel(this);
};

/** @constructor */
function AstCallStatement( locus, name, args )
{
    this.locus = locus;
    this.name = name;
    this.args = args;
}

AstCallStatement.prototype.accept = function(visitor)
{
    visitor.visitCallStatement(this);
};

/** @constructor */
function AstAssignStatement( locus, lhs, expr )
{
    this.locus = locus;
    this.lhs = lhs; // could be a referenceList
    this.expr = expr;
}

AstAssignStatement.prototype.accept = function(visitor)
{
    visitor.visitAssignStatement(this);
};

/** @constructor */
function AstBinaryOp( locus, lhs, op, rhs )
{
    this.locus = locus;
    this.lhs = lhs;
    this.op = op;
    this.rhs = rhs;
}

AstBinaryOp.prototype.accept = function(visitor)
{
    visitor.visitBinaryOp(this);
};

/** @constructor */
function AstUnaryOperator( locus, op, expr )
{
    this.locus = locus;
    this.op = op;
    this.expr = expr;
}

AstUnaryOperator.prototype.accept = function(visitor)
{
    visitor.visitUnaryOperator(this);
};

/** @constructor */
function AstConstantExpr( locus, value )
{
    this.locus = locus;

    // value is possibly null, eg. for first parameter of "COLOR , 7"
    this.value = value;
}

AstConstantExpr.prototype.accept = function(visitor)
{
    visitor.visitConstantExpr(this);
};

/** @constructor */
function AstReturnStatement( locus, value )
{
    this.locus = locus;
    this.value = value;
}

AstReturnStatement.prototype.accept = function(visitor)
{
    visitor.visitReturnStatement(this);
};

function onProgram(symbols, locus )
{
    var program = new AstProgram( locus, new AstSubroutine( locus, "_main", [], symbols[0],
                false ) );
    console.log("Program successfully parsed. " +
                program.subs[0].statements.length +
               " statements.");
    return program;
}

function onNumber( symbols, locus )
{
    var value = symbols[0];
    if (value.match(/^&H/)) {
      value = parseInt(value.slice(2), 16);
    } else {
      value = parseFloat(value);
    }
    return new AstConstantExpr(locus, value);
}

function onString( symbols, locus )
{
    return new AstConstantExpr(locus, symbols[0].substr(1, symbols[0].length-2));
}

function onBinaryOp( symbols, locus )
{
    return new AstBinaryOp( locus, symbols[0], symbols[1], symbols[2] );
}

function onParamListInBrackets( symbols, locus )
{
    return symbols[1];
}

function onBracketExpr( symbols, locus )
{
    return symbols[1];
}


/** @constructor */
function QBasicProgram( input, testMode )
{
    this.errors = [];
    this.testMode = testMode;
        function UseSecond( args ) {
            return args[1];
        }

        function UseFirst( args ) {
            return args[0];
        }

        function JoinListsLR( args ) {
            args[0].push( args[1] );
            return args[0];
        }

        function JoinLists( args ) {
            args[1].unshift( args[0] );
            return args[1];
        }

        function EmptyList( args ) {
            return [];
        }


    // Create the parser if one doesn't already exist.
    if ( QBasicProgram.parser === null ) {
        var rules = new RuleParser();
        rules.addRule( "start: program" );
        rules.addToken( "AND", "AND" );
        rules.addToken( "AS", "AS" );
        rules.addToken( "CASE", "CASE" );
        rules.addToken( "CONST", "CONST" );
        rules.addToken( "DATA", "DATA" );
        rules.addToken( "DECLARE", "DECLARE" );
        rules.addToken( "DEF", "DEF" );
        rules.addToken( "DEFINT", "DEFINT" );
        rules.addToken( "DIM", "DIM" );
        rules.addToken( "DO", "DO" );
        rules.addToken( "ELSE", "ELSE" );
        rules.addToken( "END", "END" );
        rules.addToken( "EXIT", "EXIT" );
        rules.addToken( "FOR", "FOR" );
        rules.addToken( "FUNCTION", "FUNCTION" );
        rules.addToken( "GOSUB", "GOSUB" );
        rules.addToken( "GOTO", "GOTO" );
        rules.addToken( "IF", "IF" );
        rules.addToken( "INPUT", "INPUT" );
        rules.addToken( "LINE", "LINE" );
        rules.addToken( "LOOP", "LOOP" );
        rules.addToken( "MOD", "MOD" );
        rules.addToken( "NEXT", "NEXT" );
        rules.addToken( "NOT", "NOT" );
        rules.addToken( "OR", "OR" );
        rules.addToken( "POKE", "POKE" );
        rules.addToken( "PRINT", "PRINT" );
        rules.addToken( "RESTORE", "RESTORE" );
        rules.addToken( "RETURN", "RETURN" );
        rules.addToken( "SEG", "SEG" );
        rules.addToken( "SELECT", "SELECT" );
        rules.addToken( "SHARED", "SHARED" );
        rules.addToken( "STATIC", "STATIC" );
        rules.addToken( "STEP", "STEP" );
        rules.addToken( "SUB", "SUB" );
        rules.addToken( "TAB", "TAB" );
        rules.addToken( "THEN", "THEN" );
        rules.addToken( "TO", "TO" );
        rules.addToken( "TYPE", "TYPE" );
        rules.addToken( "UNTIL", "UNTIL" );
        rules.addToken( "USING", "USING" );
        rules.addToken( "VIEW", "VIEW" );
        rules.addToken( "WEND", "WEND" );
        rules.addToken( "WHILE", "WHILE" );
        rules.addToken( "minus", "\\-" );
        rules.addToken( "endl", "\\n" );
        rules.addToken( "comment", "'.*$" );
        rules.addToken( "hexconstant", "\\&H[\\da-fA-F]+" );
        rules.addToken( "floatconstant", "\\d*\\.\\d+" );
        rules.addToken( "intconstant", "\\d+" );
        rules.addToken( "stringconstant", "\"[^\"]*\"" );
        rules.addToken( "label", "^([a-zA-Z][a-zA-Z0-9_]*:|\\d+)" );
        rules.addToken( "identifier", "[a-zA-Z_][a-zA-Z0-9_]*(\\$|%|#|&|!)?" );

        rules.addRule( "program: statements", onProgram );
        rules.addRule( "statements: statement*" );
        // Line number:
          //rules.addRule( "statement: intconstant istatement separator" );
        rules.addRule( "statement: label istatement separator",
            function(args, locus) {
                var label = args[0];
                if ( label.substr(-1) == ':' ) {
                    label = label.substr( 0, label.length - 1 );
                }
                return [ new AstLabel( locus, label ), args[1] ];
            });
        rules.addRule( "statement: label",
            function( args, locus ) {
                var label = args[0];
                if ( label.substr(-1) == ':' ) {
                    label = label.substr( 0, label.length - 1 );
                }
                return new AstLabel( locus, label );
            });

        rules.addRule( "statement: istatement ? separator");
        rules.addRule( "istatement: CONST identifier '=' expr",
            function( args, locus ) {
                return new AstConstStatement( locus, args[1], args[3] );
            });
        rules.addRule( "istatement: DECLARE FUNCTION identifier ArgList",
            function( args, locus ) {
                return new AstDeclareFunction( locus, args[2], args[3], true );
            });
        rules.addRule( "istatement: DECLARE SUB identifier ArgList",
            function( args, locus ) {
                return new AstDeclareFunction( locus, args[2], args[3], false );
            });
        rules.addRule( "istatement: SUB identifier ArgList STATIC? statements END SUB",
            function( args, locus ) {
                return new AstSubroutine( locus, args[1], args[2], args[4],
                    false, args[3] !== null );
            });
        rules.addRule( "istatement: FUNCTION identifier ArgList statements END FUNCTION",
            function( symbols, locus ) {
                return new AstSubroutine( locus, symbols[1], symbols[2], symbols[3],
                    true );
            });
        rules.addRule( "istatement: DEF SEG ('=' expr)?",
            function( args, locus ) {
                return new AstNullStatement(locus);
            });
        rules.addRule( "istatement: DEF identifier ArgList '=' expr",
            function( args, locus ) {
                return new AstNullStatement(locus);
            });
        rules.addRule( "istatement: DEFINT identifier minus identifier",
            function( args, locus ) {
                // TODO: Implement completely
                return new AstDefTypeStatement(locus, "INTEGER");
            });
        rules.addRule( "istatement: VIEW PRINT",
            function( args, locus ) {
                return new AstNullStatement(locus);
            });
        rules.addRule( "istatement: DIM DimList", UseSecond );
        rules.addRule( "istatement: DIM SHARED DimList",
            function( args, locus ) {
                for ( var i = 0; i < args[2].length; i++ ) {
                    args[2][i].shared = true;
                }
                return args[2];
            });
        rules.addRule( "istatement: WHILE expr separator statements WEND",
            function( args, locus ) {
                return new AstWhileLoop( locus, args[1], args[3] );
            });
        rules.addRule( "istatement: DO separator statements LOOP",
            function( args, locus ) {
                return new AstDoStatement( locus, args[2], null,
                    AstDoStatement.INFINITE);
            });
        rules.addRule( "istatement: DO separator statements LOOP WHILE expr",
            function( args, locus ) {
                return new AstDoStatement( locus, args[2], args[5],
                    AstDoStatement.WHILE_AT_END);
            });
        rules.addRule( "istatement: DO separator statements LOOP UNTIL expr",
            function( args, locus ) {
                return new AstDoStatement( locus, args[2], args[5],
                    AstDoStatement.UNTIL);
            });
        rules.addRule( "istatement: DO WHILE expr separator statements LOOP",
            function( args, locus ) {
                return new AstWhileLoop( locus, args[2], args[4] );
            });
        rules.addRule( "istatement: FOR identifier '=' expr TO expr",
            function( args, locus ) {
                return new AstForLoop( locus, args[1], args[3], args[5],
                    new AstConstantExpr( locus, 1 ) );
            });
        rules.addRule( "istatement: FOR identifier '=' expr TO expr STEP expr",
            function( args, locus ) {
                return new AstForLoop( locus, args[1], args[3], args[5], args[7] );
            });
        rules.addRule( "istatement: NEXT identifiers?",
            function( args, locus ) {
                if ( args[1] === null ) {
                    args[1] = [];
                }
                return new AstNextStatement( locus, args[1] );
            });
        rules.addRule( "istatement: EXIT (FOR|DO)",
            function( args, locus ) {
                return new AstExitStatement( locus, args[1] );
            });
        rules.addRule( "identifiers: MoreIdentifiers* identifier", JoinListsLR );
        rules.addRule( "MoreIdentifiers: identifier ','", UseFirst );
        rules.addRule( "istatement: END",
            function( args, locus ) {
                return new AstEndStatement(locus);
            });
        rules.addRule( "istatement: GOSUB identifier",
                function( args, locus ) {
                    return new AstGosubStatement( locus, args[1] );
                });
        rules.addRule( "istatement: GOTO identifier",
                function( args, locus ) {
                    return new AstGotoStatement( locus, args[1] );
                });
        rules.addRule( "istatement: IF expr THEN istatement",
                function( args, locus ) {
                    return new AstIfStatement( locus, args[1], args[3], null );
                });
        rules.addRule( "istatement: IF expr THEN separator statements ElseClause END IF",
                function( args, locus ) {
                    return new AstIfStatement( locus, args[1], args[4], args[5] );
                });
        rules.addRule( "ElseClause: ELSE IF expr THEN separator statements ElseClause",
                function( args, locus ) {
                    return new AstIfStatement( locus, args[2], args[5], args[6] );
                } );

        rules.addRule( "ElseClause: ELSE statements", UseSecond );

        rules.addRule( "ElseClause:", function( args, locus ) {
                return new AstNullStatement(locus);
            });
        rules.addRule( "istatement: SELECT CASE expr separator case* END SELECT",
                function( args, locus ) {
                    return new AstSelectStatement( locus, args[2], args[4] );
                });

        rules.addRule( "case: CASE exprList separator statements",
                function( args, locus ) {
                    return new AstCaseStatement( locus, args[1], args[3] );
                });

        rules.addRule( "case: CASE ELSE separator statements",
                function(args, locus) {
                    return new AstCaseStatement( locus, [], args[3] );
                });

        rules.addRule( "exprList: moreExpr* expr", JoinListsLR );

        rules.addRule( "moreExpr: expr ','", UseFirst );

        rules.addRule( "istatement: INPUT constant? (';'|',') identifiers",
                function( args, locus ) {
                    return new AstInputStatement( locus, args[1], args[2] == ';',
                        args[3] );
                });
        rules.addRule( "istatement: LINE? INPUT identifiers",
                function( args, locus ) {
                    return new AstInputStatement( locus, null, false, args[2] );
                });
        rules.addRule( "istatement: POKE expr ',' expr",
                function( args, locus ) {
                    return new AstNullStatement(locus);
                });
        rules.addRule( "istatement: PRINT",
            function(args, locus) {
                return new AstPrintStatement( locus, [] );
            });
        rules.addRule( "istatement: PRINT PrintItems",
            function(args, locus) {
                return new AstPrintStatement( locus, args[1] );
            });
        rules.addRule( "istatement: PRINT USING [expr,';'] (';'|',')?",
            function(args, locus) {
                return new AstPrintUsingStatement( locus, args[2],
                    args[3] );
            });
        rules.addRule( "PrintItems: PrintItem",
            function( args, locus ) {
                return args;
            });
        rules.addRule( "PrintItems: MorePrintItems* PrintItem (';'|',')?",
            function( args, locus ) {
                args[1].terminator = args[2];
                args[0].push( args[1] );
                return args[0];
            });
        rules.addRule( "MorePrintItems: PrintItem (';'|',')",
            function(args, locus) {
                args[0].terminator = args[1];
                return args[0];
            });

        rules.addRule( "PrintItem: expr",
            function( args, locus )
            {
                return new AstPrintItem( locus, AstPrintItem.EXPR, args[0],
                    null );
            });

        rules.addRule( "PrintItem: TAB '\\(' expr '\\)'",
            function( args, locus )
            {
                return new AstPrintItem( locus, AstPrintItem.TAB, args[2], null );
            });

        rules.addRule( "PrintItem:",
            function( args, locus ) {
                return new AstPrintItem( locus, AstPrintItem.EXPR, null, null
                    );
            });
        rules.addRule( "istatement: RESTORE identifier?",
            function( args, locus ) {
                return new AstRestoreStatement(locus,  args[1] );
            });
        rules.addRule( "istatement: RETURN",
            function( args, locus ) {
                return new AstReturnStatement(locus);
            });
        rules.addRule( "istatement: DATA [DataConstant,',']",
            function( args, locus ) {
                return new AstDataStatement( locus, args[1] );
            });
        rules.addRule( "DataConstant: identifier",
            function( args, locus ) {
                return new AstConstantExpr( locus, args[0] );
            });
        rules.addRule( "DataConstant: constant");
        rules.addRule( "DataConstant:",
            function( args, locus ) {
                return new AstConstantExpr( locus, null );
            });
        rules.addRule( "istatement: TYPE identifier separator TypeMembers END TYPE",
            function( args, locus ) {
                return new AstUserType( locus, args[1], args[3] );
            });
        rules.addRule( "istatement: AssignStatement" );
        rules.addRule( "AssignStatement: ReferenceList '=' expr2",
            function(args, locus) {
                return new AstAssignStatement( locus, args[0], args[2] );
            });
        rules.addRule( "istatement: identifier Parameters",
            function( args, locus ) {
                return new AstCallStatement( locus, args[0], args[1] );
            });
        rules.addRule( "Parameters: ", EmptyList );
        rules.addRule( "Parameters: '\\(' ParameterList '\\)'", UseSecond );
        rules.addRule( "Parameters: ParameterList" );
        rules.addRule( "ParameterList: [Parameter,',']" );
        rules.addRule( "Parameter: expr" );
        rules.addRule( "Parameter:",
            function( args, locus ) {
                return new AstConstantExpr( locus, null );
            });

        rules.addRule( "DimList: Dim MoreDims*", JoinLists );
        rules.addRule( "MoreDims: ',' Dim", UseSecond );
        rules.addRule( "Dim: identifier AsType?",
            function( args, locus ) {
                return new AstDimStatement( locus, args[0], [], args[1] );
            });
        rules.addRule( "Dim: identifier '\\(' RangeList '\\)' AsType?",
            function( args, locus ) {
                return new AstDimStatement( locus, args[0], args[2], args[4] );
            });
        rules.addRule( "AsType: AS identifier", UseSecond );
        rules.addRule( "RangeList:",
            function( args, locus ) {
                return null;
            });
        rules.addRule( "RangeList: Range MoreRanges*", JoinLists );
        rules.addRule( "MoreRanges: ',' Range", UseSecond );
        rules.addRule( "Range: expr EndRange?",
            function( symbols, locus ) {
                if ( symbols[1] ) {
                    return new AstRange( locus, symbols[0], symbols[1] );
                } else {
                    return new AstRange( locus, new AstConstantExpr(locus, 0),
                        symbols[0] );
                }
            });
        rules.addRule( "EndRange: TO expr", UseSecond );
        rules.addRule( "TypeMembers: TypeMember*" );
        rules.addRule( "TypeMember: identifier AS identifier separator",
            function( args, locus ) {
                return new AstTypeMember( locus, args[0], args[2] );
            });
        rules.addRule( "ArgList:",
            function(args, locus) {
                return [];
            });
        rules.addRule( "ArgList: '\\(' [ Argument , ',' ] '\\)'",
            function(args, locus) {
                return args[1];
            });
        rules.addRule( "Argument: identifier OptParen? AS identifier",
            function( args, locus ) {
                return new AstArgument( locus, args[0], args[3], args[1] !== null );
            });
        rules.addRule( "Argument: identifier OptParen?",
            function( args, locus ) {
                return new AstArgument( locus, args[0], null, args[1] !== null );
            });
        rules.addRule( "OptParen: '\\(' '\\)'" );
        rules.addRule( "expr: expr2" );
        rules.addRule( "expr2: expr2 OR expr3", onBinaryOp );
        rules.addRule( "expr2: expr3" );
        rules.addRule( "expr3: expr3 AND expr4", onBinaryOp );
        rules.addRule( "expr3: expr4" );
        rules.addRule( "expr4: expr4 '=' expr5", onBinaryOp );
        rules.addRule( "expr4: expr4 '<>' expr5", onBinaryOp );
        rules.addRule( "expr4: expr4 '>' expr5", onBinaryOp );
        rules.addRule( "expr4: expr4 '<' expr5", onBinaryOp );
        rules.addRule( "expr4: expr4 '<=' expr5", onBinaryOp );
        rules.addRule( "expr4: expr4 '>=' expr5", onBinaryOp );
        rules.addRule( "expr4: expr5" );
        rules.addRule( "expr5: expr5 MOD expr6", onBinaryOp );
        rules.addRule( "expr5: expr6" );
        rules.addRule( "expr6: expr6 '\\+' expr7", onBinaryOp );
        rules.addRule( "expr6: expr6 '\\-' expr7", onBinaryOp );
        rules.addRule( "expr6: expr7" );
        rules.addRule( "expr7: expr7 '\\*' expr8", onBinaryOp );
        rules.addRule( "expr7: expr7 '\\/' expr8", onBinaryOp );
        rules.addRule( "expr7: expr8" );
        rules.addRule( "expr8: '\\(' expr '\\)'", onBracketExpr );
        //rules.addRule( "expr8: expr8 '\\.' expr10", onBinaryOp );
        rules.addRule( "expr8: NOT expr9",
                function( args, locus ) {
                    return new AstUnaryOperator( locus, "NOT", args[1] );
                });
        rules.addRule( "expr8: '\\-' expr9",
                function( args, locus ) {
                    return new AstUnaryOperator( locus, "-", args[1] );
                });
        rules.addRule( "expr8: expr9" );
        rules.addRule( "expr9: constant" );
        rules.addRule( "expr9: expr10" );
        rules.addRule( "expr10: ReferenceList" );
        rules.addRule( "constant: hexconstant", onNumber );
        rules.addRule( "constant: intconstant", onNumber );
        rules.addRule( "constant: floatconstant", onNumber );
        rules.addRule( "constant: stringconstant", onString );
        rules.addRule( "ReferenceList: ReferenceList '\\.' identifier",
            function( args, locus ) {
                return new AstMemberDeref( locus, args[0], args[2] );
            });

        rules.addRule( "ReferenceList: ReferenceList '\\(' ParameterList '\\)'",
            function( args, locus ) {
                return new AstArrayDeref( locus, args[0], args[2] );
            });
        rules.addRule( "ReferenceList: Reference" );
        rules.addRule( "Reference: identifier",
            function( args, locus ) {
                return new AstVariableReference( locus, args[0] );
            });

        rules.addRule( "separator: endl+");
        rules.addRule( "separator: comment endl");
        rules.addRule( "separator: ':'");

        rules.buildSet.check(this.errors );
        for( var i = 0; i < this.errors.length; i++ ) {
            console.log(this.errors[i]);
        }

        rules.buildSet.finalize();

        QBasicProgram.parser = new EarleyParser( rules.buildSet );
        //QBasicProgram.parser.debug = true;
    }

    input += "\n"; // parse doesn't handle no newline at end of input.

    // Parse the program into abstract syntax tree.
    var astProgram = QBasicProgram.parser.parse( input );
    if ( astProgram === null ) {
        this.errors = QBasicProgram.parser.errors;
        //console.log(this.errors);
        throw Error("Parse failed.");
    }

    // Perform type checking.
    var typeChecker = new TypeChecker( this.errors );
    astProgram.accept( typeChecker );

    if ( this.errors.length > 0 ) {
        throw Error("There were errors.");
    }

    // Perform code generation.
    var codeGenerator = new CodeGenerator();
    astProgram.accept( codeGenerator );

    this.sourcecode = input;
    this.instructions = codeGenerator.instructions;
    this.types = typeChecker.types;
    this.defaultType = typeChecker.defaultType;
    this.data = codeGenerator.data;
    this.shared = codeGenerator.shared;
    this.lineMap = codeGenerator.lineMapping;
}

QBasicProgram.parser = null;

QBasicProgram.prototype =
{
    getByteCodeAsString: function()
    {
        if ( !this.instructions ) {
            return "";
        }
        var source = this.sourcecode.split("\n");
        var lines = [];
        for ( var i = 0; i < this.instructions.length; i++ ) {
            var locus = this.lineMap[i];
            if ( locus ) {
                lines.push( "   ' L" + (locus.line+1) + " " + source[locus.line]);
            }
            lines.push( "[" + i + "] " + this.instructions[i] );
        }
        return lines.join("\n");
    }
};
