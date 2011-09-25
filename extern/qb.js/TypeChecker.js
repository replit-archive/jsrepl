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
    QBasic.TypeChecker
  Uses:
    # Tokenizer.js
    QBasic.Locus
    # Types.js
    QBasic.IntegerType
    QBasic.SingleType
    QBasic.DoubleType
    QBasic.StringType
    QBasic.AnyType
    QBasic.NullType
    QBasic.UserType
    QBasic.ArrayType
    QBasic.IsStringType
    QBasic.IsNumericType
    QBasic.IsArrayType
    QBasic.IsUserType
    QBasic.DeriveTypeNameFromVariable
    QBasic.AreTypesCompatible
    # VirtualMachine.js
    QBasic.SystemFunctions
    QBasic.SystemSubroutines
    # QBasic.js
    QBasic.AstDeclareFunction
    QBasic.AstVariableReference
*/

(function () {
  /** @constructor */
  function TypeScope() {
    // map from names to type objects.
    this.names = {};
  }

  /** @constructor */
  function CheckedLabel(name, astNode) {
    this.name = name;
    this.astNode = astNode;
  }

  /** @constructor */
  function CheckedLoopContext(type, counter) {
    // "FOR", "DO"
    this.type = type;

    // variable name
    this.counter = counter;
  }

  /** @constructor */
  QBasic.TypeChecker = function(prevChecker, errors) {
    prevChecker = prevChecker || {};
    // map from name to AstDeclare
    this.declaredSubs = prevChecker.declaredSubs || {};
    this.declaredSubs._main = new QBasic.AstDeclareFunction(
        new QBasic.Locus(0, 0), "_main", [], false);

    this.errors = errors;
    this.scopes = prevChecker.scopes || [new TypeScope()];
    this.shared = prevChecker.shared || new TypeScope();

    this.labelsUsed = prevChecker.labelsUsed || [];
    this.labelsDefined = prevChecker.labelsDefined || {};

    this.types = prevChecker.types || {
      INTEGER: new QBasic.IntegerType(),
      SINGLE: new QBasic.SingleType(),
      DOUBLE: new QBasic.DoubleType(),
      STRING: new QBasic.StringType(),
      ANY: new QBasic.AnyType(),
      ":NULL": new QBasic.NullType()
    };

    // Changed to integer if DEFINT is present in the program (hack hack)
    this.defaultType = prevChecker.defaultType || this.types.SINGLE;

    // stack of CheckedLoopContext. Most recent is 0.
    this.loopStack = prevChecker.loopStack || [];
  };

  QBasic.TypeChecker.prototype = {
    /**
      Parameter 1 must be an ast node.
      Parameter 2 is a format string, eg, as in printf
      Parameters 3... depend on the format string.
    */
    sprintf: function () {
      var args = arguments;
      if (args.length == 1 && args[0] instanceof Array) {
        args = args[0];
      }
      var format = args[0];
      var output = "";

      var segments = format.split(/%[^%]/);
      for (var i = 0; i < segments.length; i++) {
        output += segments[i];
        if (args[i + 1] !== undefined) {
          output += args[i + 1];
        }
      }

      return output;
    },
    error: function () {
      var object = arguments[0];
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var errorStr = "Error at " + object.locus + ": " + this.sprintf(args);
      this.errors.push(errorStr);
      throw new Error(errorStr);
    },

    /**
      If the variable name includes a type suffix, removes it and returns the
      result.
    */
    removeSuffix: function (name) {
      switch (name[name.length - 1]) {
      case '%':
      case '$':
      case '!':
      case '&':
      case '#':
        return name.substr(0, name.length - 1);
      default:
        return name;
      }
    },
    /**
      Using the current scope, or the type suffix, determine the type of the
      variable given its name. Returns the type object.
    */
    getTypeFromVariableName: function (name) {
      var type = this.scopes[0].names[name];
      if (type !== undefined) {
        return type;
      }
      type = this.shared.names[name];
      if (type !== undefined) {
        return type;
      }

      type = QBasic.DeriveTypeNameFromVariable(name);
      if (type !== null) {
        return this.types[type];
      }

      return this.defaultType;
    },
    visitProgram: function (program) {
      var i;
      for (i = 0; i < program.subs.length; i++) {
        program.subs[i].accept(this);
      }

      // for each label used, if it is not defined, then emit an error.
      for (i = 0; i < this.labelsUsed.length; i++) {
        var label = this.labelsUsed[i];
        if (this.labelsDefined[label.name] === undefined) {
          this.error(label.astNode, "Label %s is not defined", label.name);
        }
      }

      // emit an error on any subs not implemented
      for (var name in this.declaredSubs) {
        var func = this.declaredSubs[name];
        if (!func.hasBody && func.used) {
          this.error(func, "SUB or FUNCTION '%s' has no body", name);
        }
      }
    },
    visitDeclareFunction: function (declare) {
      // error if this name is already declared.
      if (this.declaredSubs[declare.name] !== undefined) {
        this.error(declare, "Subroutine %s is already declared on line %s", 
                   declare.name, this.declaredSubs[declare.name].locus.line + 1);
      }

      this.declaredSubs[declare.name] = declare;
      declare.args.accept(this);
      if (declare.isFunction) {
        declare.type = this.getTypeFromVariableName(declare.name);
      }
    },
    visitSubroutine: function (sub) {
      var i;
      var self = this;

      function subError(declare) {
        self.error(sub, "Sub or function %s does not match declaration on " +
                   "line %s", sub.name, declare.locus.line + 1);
      }

      // error if the sub has not been declared.
      if (this.declaredSubs[sub.name] === undefined) {
        this.error(sub, "Subroutine %s is not declared", sub.name);
      } else {
        var declare = this.declaredSubs[sub.name];

        if (declare.isFunction != sub.isFunction) {
          subError(declare);
        }

        if (sub.args.length != declare.args.length) {
          subError(declare);
        } else {
          // error if the declaration does not have the same arguments.
          for (i = 0; i < sub.args.length; i++) {
            // don't compare variable names, it's okay if they differ.
            if ((sub.args[i].typeName != declare.args[i].typeName && 
                 declare.args[i].typeName != "ANY") ||
                sub.args[i].isArray != declare.args[i].isArray) {
              subError(declare);
            }
          }
        }

        declare.hasBody = true;
      }

      this.scopes.unshift(new TypeScope());

      // visit arguments
      for (i = 0; i < sub.args.length; i++) {
        sub.args[i].accept(this);
        this.scopes[0].names[sub.args[i].name] = sub.args[i].type;
      }

      // visit statements
      for (i = 0; i < sub.statements.length; i++) {
        if (!sub.statements[i]) {
          continue;
        }
        //console.log("Try to visit " + /*getObjectClass*/(sub.statements[i]));
        if (sub.statements[i].accept === undefined) {
          console.log("ERROR: Could not visit object of type " +
                      /*getObjectClass*/(sub.statements[i]));
        } else {
          sub.statements[i].accept(this);
        }
      }

      this.scopes.shift();
    },
    /**
      Check that types of arguments match the ones from the AstDeclareStatement.
    */
    checkCallArguments: function (declare, args) {
      declare.used = true;
      if (declare.args.length != args.length) {
        this.error(declare, "Wrong number of arguments");
      } else {
        for (var i = 0; i < args.length; i++) {
          args[i].wantRef = true;
          args[i].accept(this);
          if (!QBasic.AreTypesCompatible(args[i].type, declare.args[i].type)) {
            this.error(args[i], "Type mismatch in argument %d of call to %s." + 
                       " Expected %s but got %s", i + 1, declare.name,
                       declare.args[i].type.name, args[i].type.name);
          }
        }
      }
    },
    visitCallStatement: function (call) {
      if (QBasic.SystemSubroutines[call.name] !== undefined) {
        // TODO(max99x): Check args for system parameters.
        for (var i = 0; i < call.args.length; i++) {
          call.args[i].wantRef = true;
          call.args[i].accept(this);
        }
        return;
      }

      var declare = this.declaredSubs[call.name];
      // sub must exist and argument number and types must be compatible.
      if (declare === undefined) {
        this.error(call, "Call to undefined sub '%s'", call.name);
      } else {
        this.checkCallArguments(declare, call.args);
      }
    },
    visitArgument: function (argument) {
      var type;

      // we are about to enter a function, so add this variable to the scope
      if (argument.typeName) {
        // error if the typeName does not exist.
        type = this.types[argument.typeName];
        if (type === undefined) {
          this.error(argument, "Type %s is not defined", argument.typeName);
          type = new QBasic.UserType(argument.typeName, {});
          this.types[argument.typeName] = type;
        }
      } else {
        type = this.getTypeFromVariableName(argument.name);
      }

      if (argument.isArray) {
        type = new QBasic.ArrayType(type);
      }

      argument.type = type;
    },
    visitPrintStatement: function (print) {
      // all arguments must be convertable to strings or single.
      print.printItems.accept(this);
    },
    visitPrintUsingStatement: function (printUsing) {
      for (var i = 0; i < printUsing.exprList.length; i++) {
        printUsing.exprList[i].wantRef = true;
        printUsing.exprList[i].accept(this);

        if (i === 0 && !QBasic.IsStringType(printUsing.exprList[i].type)) {
          this.error(printUsing.exprList[i],
                     "Format string must be STRING, not %s",
                     printUsing.exprList[i].type.name);
        } else if (i > 0 && !QBasic.IsStringType(printUsing.exprList[i].type) &&
                   !QBasic.IsNumericType(printUsing.exprList[i].type)) {
          this.error(printUsing.exprList[i], "Type Mismatch Error");
        }
      }

      if (printUsing.exprList.length === 0) {
        this.error(printUsing, "PRINT USING requires at least one argument");
      }
    },
    visitPrintItem: function (item) {
      if (item.expr === null) {
        return;
      }
      item.expr.accept(this);
      if (!QBasic.IsNumericType(item.expr.type) && 
          !QBasic.IsStringType(item.expr.type)) {
        this.error(item.expr, "Expected string or number, but got '%s'",
                   item.expr.type.name);
      }
    },
    visitInputStatement: function (input) {
      // prompt must be null or a string.
      if (input.promptExpr) {
        input.promptExpr.accept(this);
        if (!QBasic.IsStringType(input.promptExpr.type)) {
          this.error(input, "Prompt must be a string");
        }
      }

      // identifiers must be strings or numbers.
      for (var i = 0; i < input.identifiers.length; i++) {
        var type = this.getTypeFromVariableName(input.identifiers[i]);
        if (!QBasic.IsNumericType(type) && !QBasic.IsStringType(type)) {
          this.error(input, "Identifier '%s' should be string or numeric.",
                     input.identifiers.type);
        }
      }
    },
    visitNullStatement: function (argument) {
      // Nothing!
    },
    visitEndStatement: function (argument) {
      // Nothing!
    },
    visitForLoop: function (loop) {
      // identifier must be numeric type.
      if (!QBasic.IsNumericType(this.getTypeFromVariableName(loop.identifier))) {
        this.error(loop, "Loop counter must be a number");
      }

      loop.startExpr.wantRef = true;
      loop.startExpr.accept(this);
      loop.endExpr.accept(this);
      loop.stepExpr.accept(this);

      // startExpr and endExpr and stepExpr must be convertible to single.
      if (!QBasic.IsNumericType(loop.startExpr.type) ||
          !QBasic.IsNumericType(loop.endExpr.type) ||
          !QBasic.IsNumericType(loop.stepExpr.type)) {
        this.error(loop, "Loop expression must be a number.");
      }

      this.loopStack.unshift(new CheckedLoopContext("FOR", loop.identifier));
    },
    visitNextStatement: function (next) {
      // pop loops off loopstack in order.
      // identifier must match loops.
      for (var i = 0; i < next.identifiers.length; i++) {
        if (this.loopStack.length === 0) {
          this.error(next, "NEXT without FOR");
          break;
        }
        if (this.loopStack[0].type !== "FOR") {
          // NEXT inside a DO loop?
          this.error(next, "NEXT without FOR");
          break;
        }
        if (next.identifiers[i] != this.loopStack[0].counter) {
          this.error(next, "Mismatched loop counter '%s' in NEXT",
                     next.identifiers[i]);
        }
        this.loopStack.shift();
      }

      if (next.identifiers.length === 0) {
        if (this.loopStack.length === 0) {
          this.error(next, "NEXT without FOR");
        } else {
          this.loopStack.shift();
        }
      }
    },
    visitExitStatement: function (exit) {
      if (exit.what && 
          exit.what != "FOR" &&
          exit.what != "DO" &&
          exit.what != "WHILE") {
        this.error(exit, "EXIT %s not supported", exit.what);
      }
      if (this.loopStack.length === 0) {
        this.error(exit, "EXIT without loop not supported");
      }
      if (exit.what && exit.what != this.loopStack[0].type) {
        this.error(exit, "MISMATCHED EXIT. Expected: '%s'",
                   this.loopStack[0].type);
      }
    },
    visitArrayDeref: function (ref) {
      var i;
      ref.expr.accept(this);

      if (ref.expr instanceof QBasic.AstVariableReference && 
          this.declaredSubs[ref.expr.name]) {
        var declare = this.declaredSubs[ref.expr.name];
        if (!declare.isFunction) {
          this.error(ref, "Tried to call non-function '%s'", ref.expr.name);
        }

        this.checkCallArguments(declare, ref.parameters);
        ref.type = declare.type;
        return;
      }
      if (ref.expr instanceof QBasic.AstVariableReference && 
          QBasic.SystemFunctions[ref.expr.name] !== undefined) {
        var func = QBasic.SystemFunctions[ref.expr.name];
        ref.type = this.types[func.type];
        ref.parameters.accept(this);

        // verify that parameters are correct type.
        if (ref.parameters.length < func.minArgs ||
            ref.parameters.length > func.args.length) {
          this.error(ref, "Function '%s' called with wrong number of " +
                     "arguments", func.name);
        } else {
          for (i = 0; i < ref.parameters.length; i++) {
            if (!QBasic.AreTypesCompatible(ref.parameters[i].type,
                                           this.types[func.args[i]])) {
              this.error(ref, "Argument %d to '%s' function is of " +
                         "type '%s', but '%s' expected", i + 1, func.name, 
                         ref.parameters[i].type.name, func.args[i]);
            }
          }
        }

        return;
      }

      // parameters must convert to integers.
      for (i = 0; i < ref.parameters.length; i++) {
        ref.parameters[i].accept(this);
        if (!QBasic.IsNumericType(ref.parameters[i].type)) {
          this.error(ref.parameters[i], "Array subscript must be numeric type");
        }
      }

      // expr must resolve to an array.
      // type becomes type of array elements.
      if (!QBasic.IsArrayType(ref.expr.type)) {
        this.error(ref, "Subscript used on non-array '%s'", ref.expr.name);
        ref.type = this.types.INTEGER;
      } else if (ref.parameters.length === 0) {
        ref.type = ref.expr.type;
      } else {
        ref.type = ref.expr.type.elementType;
      }
    },
    visitMemberDeref: function (ref) {
      // lhs should resolve to a user type.
      ref.lhs.accept(this);
      if (!QBasic.IsUserType(ref.lhs.type)) {
        this.error(ref, "Tried to dereference non-user-type '%s'",
                   ref.lhs.type.name);
        ref.type = this.types.SINGLE;
      } else {
        // user type should contain the given identifier.
        ref.type = ref.lhs.type.members[ref.identifier];
        if (ref.type === undefined) {
          this.error(ref, "Type '%s' does not contain member '%s'",
                     ref.lhs.type.name, ref.identifier);
          ref.type = this.types.SINGLE;
        }
      }
    },
    visitVariableReference: function (ref) {
      var func;
      if (QBasic.SystemFunctions[ref.name] !== undefined) {
        func = QBasic.SystemFunctions[ref.name];
        ref.type = this.types[func.type];
      } else if (this.declaredSubs[ref.name] !== undefined) {
        func = this.declaredSubs[ref.name];
        if (!func.isFunction) {
          this.error(ref, "SUB '%s' used as a function", func.name);
          ref.type = this.types.SINGLE;
        } else {
          ref.type = func.type;
        }
      } else {
        ref.type = this.getTypeFromVariableName(ref.name);
      }
    },
    visitRange: function (range) {
      range.lowerExpr.accept(this);
      range.upperExpr.accept(this);

      if (!QBasic.IsNumericType(range.lowerExpr.type) ||
          !QBasic.IsNumericType(range.upperExpr.type)) {
        this.error(range, "Expected a number.");
      }
    },
    visitDataStatement: function (argument) {
      // Nothing!
    },
    visitReturnStatement: function (returnStatement) {
      // Nothing!
    },
    visitRestoreStatement: function (restore) {
      if (restore.label) {
        this.labelsUsed.push(new CheckedLabel(restore.label, restore));
      }
    },
    visitConstStatement: function (constStatement) {
      // Ensure it's not double defined.
      if (constStatement.name in this.shared.names) {
        this.error(constStatement, "Redeclared variable '%s'",
                   constStatement.name);
      }

      // TODO(max99x): ensure it's a constant calculable at runtime.
      constStatement.expr.accept(this);

      this.shared.names[constStatement.name] = constStatement.expr.type;
    },
    visitDefTypeStatement: function (def) {
      this.defaultType = this.types[def.typeName];
    },
    visitDimStatement: function (dim) {
      // type, if present, must exist.
      var type;
      if (dim.typeName) {
        type = this.types[dim.typeName];
        if (type === undefined) {
          this.error(dim, "Type '%s' is not defined", dim.typeName);
        }
      }

      if (!type) {
        type = this.getTypeFromVariableName(dim.name);
        dim.typeName = type.name;
      }

      for (var i = 0; i < dim.ranges.length; i++) {
        dim.ranges[i].accept(this);
      }

      if (dim.ranges.length) {
        type = new QBasic.ArrayType(type);
      }

      if (dim.shared) {
        this.shared.names[dim.name] = type;
      } else {
        this.scopes[0].names[dim.name] = type;
      }
    },
    visitDoStatement: function (loop) {
      if (loop.expr) {
        loop.expr.accept(this);
      }
      if (loop.expr !== null && !QBasic.IsNumericType(loop.expr.type)) {
        this.error(loop, "Loop expression must be numeric");
      }

      this.loopStack.unshift(new CheckedLoopContext("DO", null));
      loop.statements.accept(this);
      this.loopStack.shift();
    },
    visitWhileLoop: function (loop) {
      loop.expr.accept(this);
      if (!QBasic.IsNumericType(loop.expr.type)) {
        this.error(loop, "Loop expression must be numeric");
      }

      this.loopStack.unshift(new CheckedLoopContext("WHILE", null));
      loop.statements.accept(this);
      this.loopStack.shift();
    },
    visitIfStatement: function (ifStatement) {
      ifStatement.expr.accept(this);
      if (!QBasic.IsNumericType(ifStatement.expr.type)) {
        this.error(ifStatement, "Expected numeric expression");
      }

      ifStatement.statements.accept(this);
      if (ifStatement.elseStatements) {
        ifStatement.elseStatements.accept(this);
      }
    },
    visitSelectStatement: function (select) {
      // expr must be compatible with that of each case.
      select.expr.accept(this);
      if (!QBasic.IsNumericType(select.expr.type) && 
          !QBasic.IsStringType(select.expr.type)) {
        this.error(select, "Select expression must be numeric or string");
      }

      for (var i = 0; i < select.cases.length; i++) {
        var caseStatement = select.cases[i];
        caseStatement.accept(this);

        for (var j = 0; j < caseStatement.exprList.length; j++) {
          if (!QBasic.AreTypesCompatible(select.expr.type,
                                         caseStatement.exprList[j].type)) {
            this.error(caseStatement,
                       "CASE expression cannot be compared with SELECT");
          }
        }
      }
    },
    visitCaseStatement: function (caseStatement) {
      caseStatement.exprList.accept(this);
      caseStatement.statements.accept(this);
    },
    visitTypeMember: function (member) {
      var type;

      // typename must exist.
      if (member.typeName) {
        type = this.types[member.typeName];
        if (type === undefined) {
          this.error(member, "Undefined type '%s'", member.typeName);
        }
      }

      if (type === undefined) {
        type = this.getTypeFromVariableName(member.name);
      }
      member.type = type;
    },
    visitUserType: function (userType) {
      // must not already be declared.
      if (this.types[userType.name] !== undefined) {
        this.error(userType, "Typename '%s' already defined", userType.name);
      }

      // members should be declared only once.
      var members = {};
      for (var i = 0; i < userType.members.length; i++) {
        userType.members[i].accept(this);
        if (members[userType.members[i].name] !== undefined) {
          this.error(userType.members[i], "Type member '%s' already defined",
                     userType.members[i].name);
        }

        //console.log("Type member name=" + userType.members[i].name +
        //            " has type " + userType.members[i].type.name);
        members[userType.members[i].name] = userType.members[i].type;
      }

      this.types[userType.name] = new QBasic.UserType(userType.name, members);
    },
    visitGotoStatement: function (gotoStatement) {
      this.labelsUsed.push(new CheckedLabel(gotoStatement.label, gotoStatement));
    },
    visitGosub: function (gosub) {
      this.labelsUsed.push(new CheckedLabel(gosub.label, gosub));
    },
    visitLabel: function (label) {
      // label must not already be defined.
      if (this.labelsDefined[label.label] !== undefined) {
        this.error(label, "Label '%s' is already defined", label.label);
      }
      // add to labels declared.
      this.labelsDefined[label.label] = new CheckedLabel(label.label, label);
    },
    visitAssignStatement: function (assign) {
      // rhs must be compatible with rhs.
      assign.lhs.wantRef = true;
      assign.lhs.accept(this);
      assign.expr.accept(this);
      if (!QBasic.AreTypesCompatible(assign.lhs.type, assign.expr.type)) {
        this.error(assign, "Tried to assign type '%s' to type '%s'",
                   assign.expr.type.name, assign.lhs.type.name);
      }
    },
    visitBinaryOp: function (binary) {
      var op = binary.op;
      binary.lhs.accept(this);
      binary.rhs.accept(this);
      var bad = 0;
      var type = binary.lhs.type;

      // types must be compatible
      if (!QBasic.AreTypesCompatible(binary.lhs.type, binary.rhs.type)) {
        bad = 1;
      }

      if (QBasic.IsStringType(binary.lhs.type)) {
        // operator must be +, <, >, <>, '='
        bad |= (op != '+' && op != '<' && op != '>' &&
                op != '<>' && op != '=' && op != '==');
      }

      if (QBasic.IsUserType(binary.lhs.type)) {
        bad |= op != '=' && op != '==';
      }

      if (op == '=' || op == '==' || op == '<>' ||
          op == '<' || op == "<=" || op == ">=") {
        type = this.types.INTEGER;
      }

      if (QBasic.IsArrayType(binary.lhs.type)) {
        bad |= 1;
      }

      // type must support the given operator.
      if (bad) {
        this.error(binary, "Incompatible types for '%s' operator: %s,%s",
                   binary.op, binary.lhs.type.name, binary.rhs.type.name);
      }

      binary.type = type;
    },
    visitUnaryOperator: function (unary) {
      // type must be numeric.
      unary.expr.accept(this);
      if (!QBasic.IsNumericType(unary.expr.type)) {
        this.error(unary, "Incompatible type for '%s' operator", unary.op);
      }
      unary.type = unary.expr.type;
    },
    visitConstantExpr: function (expr) {
      if (expr.value === null) {
        expr.type = this.types[":NULL"];
      } else if (expr.value.constructor == String) {
        expr.type = this.types.STRING;
      } else {
        expr.type = this.types.SINGLE;
      }
    }
  };
})();
