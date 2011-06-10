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
    QBasic.CodeGenerator
  Uses:
    # TypeChecker.js
    QBasic.IsArrayType
    # VirtualMachine.js
    QBasic.SystemFunctions
    QBasic.SystemSubroutines
    # QBasic.js
    QBasic.AstPrintItem
    QBasic.AstVariableReference
    QBasic.AstDoStatement
*/

(function () {
  /** @constructor */
  function Instruction(instr, arg) {
    this.instr = instr;
    this.arg = arg;
  }

  Instruction.prototype = {
    toString: function () {
      if (this.instr.numArgs === 0) {
        return this.instr.name;
      } else {
        return this.instr.name + " " + this.arg;
      }
    }
  };

  /** @constructor */
  function Label(name, codeOffset, dataOffset) {
    this.name = name;
    this.codeOffset = codeOffset;
    this.dataOffset = dataOffset;
  }

  /** @constructor */
  function LoopContext(counter, forLabel, nextLabel, endLabel) {
    // In a DO or WHILE loop, only endLabel is valid.
    this.counter = counter;
    this.forLabel = forLabel;
    this.nextLabel = nextLabel;
    this.endLabel = endLabel;
  }

  /** @constructor */
  QBasic.CodeGenerator = function(prevGenerator) {
    prevGenerator = prevGenerator || {};
    // Array of Instruction objects
    this.instructions = prevGenerator.instructions || [];
    this.instructions_start = prevGenerator.instructions ?
                              prevGenerator.instructions.length : 0;

    // Array of data from DATA statements.
    this.data = prevGenerator.data || [];

    // Set of shared variable names. If a string is a property of this object,
    // then the variable with that name is shared.
    this.shared = prevGenerator.shared || {};

    // Array of labels.
    this.labels = prevGenerator.labels || [];

    // Map from label name to label id
    this.labelMap = prevGenerator.labelMap || {};

    this.loopStack = prevGenerator.loopStack || [];
    this.selectStack = prevGenerator.selectStack || [];

    // declared functions map to 1. Array accesses are changed to function
    // calls if they are in this map.
    this.functionNames = prevGenerator.functionNames || {};

    // map from bytecode instruction to Locus, so that we can keep track of
    // which source lines led to each instruction.
    this.lineMapping = prevGenerator.lineMapping || [];
    // don't map lines twice in a row
    this.lastLine = prevGenerator.lastLine || -1;
    // Create a label so RESTORE with no label will work.
    if (!prevGenerator) this.getGotoLabel(":top");
  };

  QBasic.CodeGenerator.prototype = {
    link: function () {
      // for each instruction,
      for (var i = this.instructions_start; i < this.instructions.length; i++) {
        var instr = this.instructions[i];
        // if the instruction has a code label for an argument, change its
        // argument to the associated offset.
        if (instr.instr.addrLabel) {
          instr.arg = this.labels[instr.arg].codeOffset;
        } else if (instr.instr.dataLabel) {
          instr.arg = this.labels[instr.arg].dataOffset;
        }
      }
    },
    newLabel: function (basename) {
      var id = this.labels.length;
      var name = basename + "_" + id;
      var label = new Label(name, this.instructions.length, this.data.length);
      this.labels.push(label);
      return id;
    },
    label: function (labelid) {
      this.labels[labelid].codeOffset = this.instructions.length;
      this.labels[labelid].dataOffset = this.data.length;
    },
    map: function (locus) {
      // Keep track of which source line maps to which instruction.
      if (locus.line === this.lastLine) {
        return;
      }
      this.lastLine = locus.line;
      this.lineMapping[this.instructions.length] = locus;
    },
    getGotoLabel: function (name) {
      var labelId;
      if (name in this.labelMap) {
        labelId = this.labelMap[name];
      } else {
        labelId = this.newLabel(name);
        this.labelMap[name] = labelId;
      }
      return labelId;
    },
    write: function (name, arg) {
      var instr = QBasic.Instructions[name];
      if (instr === undefined) throw "Bad instruction: " + name;
      this.instructions.push(new Instruction(instr, arg));
    },
    visitProgram: function (program) {
      for (var i = 0; i < program.subs.length; i++) {
        program.subs[i].accept(this);
      }

      this.link();
    },
    visitDeclareFunction: function (node) {
      this.functionNames[node.name] = true;
    },
    visitSubroutine: function (node) {
      var skipLabel = null;
      this.map(node.locus);
      if (node.name != '_main') {
        skipLabel = this.newLabel("skipsub");
        this.write("JMP", skipLabel);
        this.label(this.getGotoLabel(node.name));
        for (var i = node.args.length - 1; i >= 0; i--) {
          // pop each argument off the stack into a variable. The wantRef
          // parameter of the AST node ensures that these evalauate
          this.write("POPVAR", node.args[i].name);
        }
      }
      node.statements.accept(this);
      if (node.isFunction) {
        // when the function returns, place its return value on the top of
        // the stack.
        this.write("PUSHVALUE", node.name);
      }
      if (skipLabel !== null) {
        this.write("RET", null);
        this.label(skipLabel);
      }
    },
    visitCallStatement: function (node) {
      this.map(node.locus);
      for (var i = 0; i < node.args.length; i++) {
        // This will push references, since wantRef was set by the type
        // checker.
        node.args[i].accept(this);
      }

      if (QBasic.SystemSubroutines[node.name]) {
        // Check if we need to push number of args
        var sub = QBasic.SystemSubroutines[node.name];
        if (sub.args !== undefined && sub.minArgs !== undefined) {
          this.write("PUSHCONST", node.args.length);
        }
        this.write("SYSCALL", node.name);
      } else if (node.name == "PRINT") {
        this.write("PUSHCONST", node.args.length);
        this.write("SYSCALL", node.name);
      } else {
        this.write("CALL", this.getGotoLabel(node.name));
      }
    },
    visitArgument: function (node) {
      // Nothing!
    },
    visitPrintUsingStatement: function (node) {
      // push format string, followed by all expressions, followed by
      // terminator, followed by total number of arguments, then syscall it.
      for (var i = 0; i < node.exprList.length; i++) {
        node.exprList[i].accept(this);
      }
      this.write("PUSHCONST", node.terminator);
      this.write("PUSHCONST", node.exprList.length + 1);
      this.write("SYSCALL", "__print_using");
    },
    visitPrintStatement: function (node) {
      var newline = true;
      this.map(node.locus);
      for (var i = 0; i < node.printItems.length; i++) {
        node.printItems[i].accept(this);
        if (node.printItems[i].type === QBasic.AstPrintItem.TAB) {
          this.write("SYSCALL", "print_tab");
        } else if (node.printItems[i].expr) {
          this.write("SYSCALL", "print");
        }

        if (node.printItems[i].terminator == ',') {
          this.write("SYSCALL", "print_comma");
        } else if (node.printItems[i].terminator == ';') {
          newline = false;
        } else {
          newline = true;
        }
      }

      if (newline) {
        this.write("PUSHCONST", "\n");
        this.write("SYSCALL", "print");
      }
    },
    visitPrintItem: function (node) {
      if (node.expr) {
        node.expr.accept(this);
      }
    },
    visitInputStatement: function (node) {
      this.map(node.locus);
      // print the prompt, if any, and question mark, if required.
      if (node.promptExpr) {
        node.promptExpr.accept(this);
        this.write("SYSCALL", "print");
      }

      if (node.printQuestionMark) {
        this.write("PUSHCONST", "? ");
        this.write("SYSCALL", "print");
      } else {
        this.write("PUSHCONST", " ");
        this.write("SYSCALL", "print");
      }

      // push onto the stack: identifiers
      for (var i = 0; i < node.identifiers.length; i++) {
        this.write("PUSHREF", node.identifiers[i]);
      }

      this.write("PUSHCONST", node.identifiers.length);
      this.write("SYSCALL", "INPUT");
    },
    visitNullStatement: function (node) {
      // Nothing!
    },
    visitEndStatement: function (node) {
      this.map(node.locus);
      this.write("END", null);
    },
    visitForLoop: function (node) {
      this.map(node.locus);
      var forLabel = this.newLabel("for");
      var nextLabel = this.newLabel("next");
      var endLabel = this.newLabel("end_for");
      this.loopStack.push(
          new LoopContext(node.identifier, forLabel, nextLabel, endLabel));
      node.startExpr.accept(this);
      this.write("POPVAR", node.identifier);
      node.endExpr.accept(this);
      node.stepExpr.accept(this);
      this.label(forLabel);
      this.write("PUSHVALUE", node.identifier);
      this.write("FORLOOP", endLabel);
    },
    visitNextStatement: function (node) {
      this.map(node.locus);
      for (var i = 0; i < node.identifiers.length; i++) {
        var ctx = this.loopStack.pop();

        // stack is now:
        // end
        // step
        this.label(ctx.nextLabel);
        this.write("COPYTOP");
        this.write("PUSHVALUE", ctx.counter);
        this.write("+");
        this.write("POPVAL", ctx.counter);
        this.write("JMP", ctx.forLabel);
        this.label(ctx.endLabel);
      }
    },
    visitExitStatement: function (node) {
      // Guaranteed to work due to type checker.
      var context = this.loopStack[this.loopStack.length - 1];

      if (context.counter) {
        // It's a FOR loop. Pop off the step and end value.
        this.write("POP");
        this.write("POP");
      }

      this.write("JMP", context.endLabel);
    },
    visitArrayDeref: function (node) {
      this.map(node.locus);
      // check if it's really a function call.
      if (node.expr instanceof QBasic.AstVariableReference &&
          this.functionNames[node.expr.name]) {
        node.parameters.accept(this);
        this.write("CALL", this.getGotoLabel(node.expr.name));
      } else if (node.expr instanceof QBasic.AstVariableReference && 
                 QBasic.SystemFunctions[node.expr.name]) {
        var func = QBasic.SystemFunctions[node.expr.name];
        node.parameters.accept(this);
        if (func.minArgs < func.args.length) {
          // variable number of arguments.
          this.write("PUSHCONST", node.parameters.length);
        }
        node.expr.accept(this);
      } else {
        node.parameters.accept(this);
        node.expr.accept(this);
        if (node.parameters.length > 0) {
          this.write("ARRAY_DEREF", node.wantRef);
        } else {
          // eg, calling a function with an array as a parameter.
        }
      }
    },
    visitMemberDeref: function (node) {
      this.map(node.locus);
      node.lhs.accept(this);
      if (node.wantRef) {
        this.write("MEMBER_DEREF", node.identifier);
      } else {
        this.write("MEMBER_VALUE", node.identifier);
      }
    },

    visitVariableReference: function (node) {
      this.map(node.locus);
      if (QBasic.SystemFunctions[node.name]) {
        this.write("SYSCALL", node.name);
      } else if (this.functionNames[node.name]) {
        this.write("CALL", this.getGotoLabel(node.name));
        if (node.wantRef) {
          this.write("NEW", node.type.name);
        }
      } else if (node.wantRef || QBasic.IsArrayType(node.type)) {
        this.write("PUSHREF", node.name);
      } else {
        this.write("PUSHVALUE", node.name);
      }
    },
    visitRange: function (node) {
      // Nothing!
    },
    visitDataStatement: function (node) {
      for (var i = 0; i < node.data.length; i++) {
        // type is constantexpr
        this.data.push(node.data[i].value);
      }
    },
    visitReturnStatement: function (node) {
      this.map(node.locus);
      this.write("RET");
    },
    visitRestoreStatement: function (node) {
      this.map(node.locus);
      var where = 0;
      if (node.label) {
        where = this.getGotoLabel(node.label);
      } else {
        where = this.getGotoLabel(":top");
      }
      this.write("RESTORE", where);
    },
    visitConstStatement: function (constStatement) {
      this.shared[constStatement.name] = true;
      constStatement.expr.accept(this);
      this.write("POPVAL", constStatement.name);
    },
    visitDefTypeStatement: function (def) {
      // Nothing!
    },
    visitDimStatement: function (node) {
      this.map(node.locus);
      var typeName;

      // if there is a typename,
      if (node.typeName) {
        typeName = node.typeName;
      } else {
        // use default type (INTEGER)
        typeName = "INTEGER";
      }

      if (node.shared) {
        this.shared[node.name] = true;
      }

      // if there are ranges,
      if (node.ranges.length > 0) {
        // for each range
        for (var i = 0; i < node.ranges.length; i++) {
          node.ranges[i].lowerExpr.accept(this);
          node.ranges[i].upperExpr.accept(this);
        }
        // push number of ranges.
        this.write("PUSHCONST", node.ranges.length);
        // push typename
        this.write("PUSHTYPE", typeName);
        // syscall alloc.
        this.write("SYSCALL", "alloc_array");
        // pop it into the variable name.
        this.write("POPVAR", node.name);
      } else {
        // just create a single instance and pop it into the name.
        this.write("PUSHTYPE", typeName);
        this.write("SYSCALL", "alloc_scalar");
        this.write("POPVAR", node.name);
      }
    },
    visitDoStatement: function (node) {
      this.map(node.locus);
      var top = this.newLabel("do");
      var bottom = this.newLabel("loop");
      this.label(top);

      this.loopStack.push(new LoopContext(null, null, null, bottom));
      node.statements.accept(this);
      this.loopStack.pop();
      switch (node.type) {
      case QBasic.AstDoStatement.UNTIL:
        node.expr.accept(this);
        this.write("BZ", top);
        break;

      case QBasic.AstDoStatement.WHILE_AT_END:
        node.expr.accept(this);
        this.write("BNZ", top);
        break;

      case QBasic.AstDoStatement.INFINITE:
        this.write("JMP", top);
        break;
      }

      this.label(bottom);
    },
    visitWhileLoop: function (node) {
      this.map(node.locus);
      var top = this.newLabel("while");
      var bottom = this.newLabel("wend");
      this.label(top);
      node.expr.accept(this);
      this.write("BZ", bottom);
      this.loopStack.push(new LoopContext(null, null, null, bottom));
      node.statements.accept(this);
      this.loopStack.pop();
      this.write("JMP", top);
      this.label(bottom);
    },
    visitIfStatement: function (node) {
      this.map(node.locus);
      var endLabel = this.newLabel("endif");
      var elseLabel = this.newLabel("else");

      node.expr.accept(this);
      this.write("BZ", elseLabel);
      node.statements.accept(this);
      this.write("JMP", endLabel);

      this.label(elseLabel);

      if (node.elseStatements) {
        node.elseStatements.accept(this);
        this.write("JMP", endLabel);
      }

      this.label(endLabel);
    },
    visitSelectStatement: function (node) {
      this.map(node.locus);
      var endSelect = this.newLabel("end_select");
      this.selectStack.push(endSelect);
      node.expr.accept(this);
      node.cases.accept(this);
      this.write("POP");
      this.label(endSelect);
      this.selectStack.pop();
    },
    visitCaseStatement: function (node) {
      this.map(node.locus);
      if (node.exprList.length > 0) {
        var okayLabel = this.newLabel("case_okay");
        var skipLabel = this.newLabel("case_skip");
        for (var i = 0; i < node.exprList.length; i++) {
          this.write("COPYTOP");
          node.exprList[i].accept(this);
          this.write("=");
          this.write("BNZ", okayLabel);
        }
        this.write("JMP", skipLabel);
        this.label(okayLabel);

        node.statements.accept(this);
        this.write("JMP", this.selectStack[this.selectStack.length - 1]);
        this.label(skipLabel);
      } else {
        // case else.
        node.statements.accept(this);
      }
    },
    visitTypeMember: function (node) {
      // Nothing!
    },
    visitUserType: function (node) {
      // Nothing!
    },
    visitGotoStatement: function (node) {
      this.map(node.locus);
      var labelId = this.getGotoLabel(node.label);
      this.write("JMP", labelId);
    },
    visitGosub: function (node) {
      this.map(node.locus);
      var labelId = this.getGotoLabel(node.label);
      this.write("GOSUB", labelId);
    },
    visitLabel: function (node) {
      this.label(this.getGotoLabel(node.label));
    },
    visitAssignStatement: function (node) {
      this.map(node.locus);
      node.expr.accept(this);

      if (node.lhs instanceof QBasic.AstVariableReference &&
          this.functionNames[node.lhs.name]) {
        // it was actually a function call.
        this.write("POPVAL", node.lhs.name);
      } else {
        node.lhs.accept(this);
        this.write("ASSIGN");
      }
    },
    visitBinaryOp: function (node) {
      this.map(node.locus);
      node.lhs.accept(this);
      node.rhs.accept(this);
      this.write(node.op);
      if (node.wantRef) {
        this.write("NEW", node.type.name);
      }
    },
    visitUnaryOperator: function (node) {
      this.map(node.locus);
      node.expr.accept(this);
      this.write("UNARY_OP", node.op);
      if (node.wantRef) {
        this.write("NEW", node.type.name);
      }
    },
    visitConstantExpr: function (node) {
      this.map(node.locus);
      this.write("PUSHCONST", node.value);
      if (node.wantRef) {
        this.write("NEW", node.type.name);
      }
    }
  };
})();
