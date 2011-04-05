
//// Parser //////////////////////////////////////////////////////////

RubyEngine.Parser = function(){}
RubyEngine.Parser.prototype.isfull = function(){ return this.body.match(/^\s*$/) }
RubyEngine.Parser.prototype.parse = function(body) {
	this.body = body;
	return this.compstmt();
}

//  CompStmt: Stmt (Term+ Stmt)*
RubyEngine.Parser.prototype.compstmt = function() {
	var x;
	while(this.term());
	if ((x=this.stmt())==undefined) return undefined;
	var ret = [x];
	var prebody = this.body;
	while (this.term()) {
		while(this.term());
		if (!(x=this.stmt())) break;
		prebody = this.body;
		ret.push(x);
	}
	this.body = prebody;
	return ret;
}

//  Stmt: Expr (if Expr|unless Expr|while Expr)*
RubyEngine.Parser.prototype.stmt = function() {
	var x, y;
	if ((x=this.expr())==undefined) return undefined;
	var ret = [x]
	while (this.body.match(/^[ \t]*(if|unless|while|until)/)) {
		var prebody = this.body;
		this.body = RegExp.rightContext;
		x = RegExp.$1;
		if (!(y=this.expr())) {
			this.body = prebody;
			break;
		}
		ret.unshift(y);
		ret = new RubyEngine.Node.Method(x, null, ret);
	}
	return ret;
}

//  Expr: Command | Arg 
RubyEngine.Parser.prototype.expr = function() {
	var x;
	if ((x=this.command())!=undefined) return x;
	if ((x=this.arg())!=undefined) return x;
	return undefined;
}


//  Command: Operation Args
RubyEngine.Parser.prototype.command = function() {
	var x, y;
	var prebody = this.body;
	if (x=this.operation()) {
		if (this.body.match(/^[ \t]+[^\-\+]|^[ \t]*"/) && (y=this.args())) return new RubyEngine.Node.Method(x, null, y);
		this.body=prebody;
	}
	return undefined;
}

//  Lhs : VarName | Primary '[' Args ']' | Primary . IDENTIFIER
RubyEngine.Parser.prototype.lhs = function() {
  var x;
  var prebody = this.body;
  if ((x=this.primary())!=undefined) {
    if (RubyEngine.Node.Method.prototype.isPrototypeOf(x) && x.block==undefined && (x.name=="[]" || x.args==undefined || x.args.length==0)) return x;
    this.body = prebody;
  }
  if ((x=this.varname())!=undefined) return x;
  return undefined;
}

//  Args: Arg ([,] Arg)*
RubyEngine.Parser.prototype.args = function() {
	var x, y;
	if ((x=this.arg())==undefined) return undefined;
	var ret = [x];
	var prebody = this.body;
	while ((x=this.comma()) && (y=this.arg())) {
		prebody = this.body;
		ret.push(y);
	}
	this.body = prebody;
	return ret;
}

// Arg: Lhs ('=' | Operator'=') Arg | Primary (Operator Primary)*
RubyEngine.Parser.prototype.arg = function() {
	var x, y, z;
	var prebody = this.body;
	if (x=this.lhs()) {
		if (this.body.match(/^[ \t]*(\+|\-|\*|\/)?\=/)) {
      z = RegExp.$1;
			this.body = RegExp.rightContext;
			if ((y=this.arg())!=undefined) {
        if (z) y = new RubyEngine.Node.Expression([x, new RubyEngine.Node.Operator(z), y]);
        if (RubyEngine.Node.Method.prototype.isPrototypeOf(x)) {
          x = x.clone();
          x.name += "=";
          if (x.args) { x.args.push(y); } else { x.args = [y]; }
          return x;
        } else {
          return new RubyEngine.Node.Method("*let", null, [x, y]);
        }
      }
    }
		this.body=prebody;
	}

	if ((x=this.primary())!=undefined) {
		var ret = [x];
		prebody = this.body;
		while ((x=this.operator()) && ((y=this.primary())!=undefined)) {
			prebody = this.body;
			ret.push(x, y);
		}
		this.body = prebody;
		if (ret.length==1) return ret[0];
		return new RubyEngine.Node.Expression(ret);
	}
	return undefined;
}

RubyEngine.Parser.prototype.blockvars = function() {
	var x, ret=[];
	var prebody = this.body;
	if (this.body.match(/^[ \t]*(\|)/)) {
		this.body = RegExp.rightContext;
		while ((x = this.varname()) && this.body.match(/^[ \t]*(,|\|)/)) {
      ret.push(x);
			this.body = RegExp.rightContext;
			if (RegExp.$1=="|") return ret;
		}
		this.body = prebody;
	}
	return undefined;
}

// Primary : ('-'|'+') Primary 
//      | Primary2 ( '['Args']' | '.'Operation ('('Args')')? (('{'|'do') ('|'Varname'|')? CompStmt ('}'|'end'))? )* Args?
RubyEngine.Parser.prototype.primary = function() {
	if (this.body.match(/^[ \t]*([-+])/)) {
    var x = RegExp.$1, y;
    var prebody = this.body;
		this.body = RegExp.rightContext;
  	if ((y=this.primary())!=undefined) {
      if (x=='+') return y;
  		return new RubyEngine.Node.Expression([new RubyEngine.Node.Operator('-@'), y]);
    }
		this.body = prebody;
  }

	var prim = this.primary2();
  while(prim != undefined) {
    var y=undefined, z=null, sep=undefined;
    var prebody = this.body;

		if (this.body.match(/^[ \t]*(\.|\[)/)) {
      this.body = RegExp.rightContext;
      sep = RegExp.$1;
    }
    // '[' Args ']'
    if (sep=='[') {
      y = this.args();
      if (y==undefined || !this.body.match(/^[ \t]*\]/)) {
        this.body = prebody;
        break;
      }
  		this.body = RegExp.rightContext;
  		prim = new RubyEngine.Node.Method('[]', prim, y);
      continue;
    }

    // '.'Operation
    if (sep=='.' && (y=this.operation()) == undefined ) {
		  this.body = prebody;
		  break;
		}

    // ('(' Args ')')?
		if (this.body.match(/^[ \t]*(\()/)) {
			prebody = this.body;
			this.body = RegExp.rightContext;
			if (((z = this.args())!=undefined) && this.body.match(/^[ \t]*(\))/)) {
				this.body = RegExp.rightContext;
      } else {
				this.body = prebody;
				z = null;
			}
    }
    if (y!=undefined) {
      prim = new RubyEngine.Node.Method(y, prim, z);
    } else if (sep==undefined && z!=null && RubyEngine.Node.Ref.prototype.isPrototypeOf(prim)) {
      prim = new RubyEngine.Node.Method(prim.name, null, z);
    } else {
		  this.body = prebody;
		  break;
    }

    // ('{' ('|'Varname'|')? CompStmt '}')?
		if (this.body.match(/^[ \t]*(\{|do)/)) {
      var br=RegExp.$1;
			prebody = this.body;
			this.body = RegExp.rightContext;
			y=this.blockvars();  // it is maybe 'undefined'
      z=this.compstmt();
      if (z==undefined) z=null;
			if ((br=="{" && this.body.match(/^\s*\}/)) || this.body.match(/^\s*end/)) {
				this.body = RegExp.rightContext;
				prim.block = new RubyEngine.Node.Block(y, z);
			} else {
    		this.body = prebody;
    	}
    }
	}

  // Args ( but only Method without arguments and block )
  var y;
  if (RubyEngine.Node.Method.prototype.isPrototypeOf(prim) && prim.args==null && prim.block==undefined && this.body.match(/^[ \t]*[^ \t\-\+]/) && (y=this.args())!=undefined) prim.args = y;
  return prim;
}

//  Primary2: '(' Stmt ')' | Literal | Reference | '[' Args ']'
//        | if Arg Then CompStmt (elsif Arg Then CompStmt)* (else CompStmt)? end
//        | def Operation ArgDecl CompStmt end
//  Literal: / $INT | StrLiteral /,
RubyEngine.Parser.prototype.primary2 = function() {
//console.log(this.body);console.trace();if(!confirm("continue?"))exit();
	var x, y, z;
	var prebody = this.body;
	if (this.body.match(/^[ \t]*(\()/)) {
		this.body = RegExp.rightContext;
		if ((x = this.stmt()) && this.body.match(/^[ \t]*(\))/)) {
			this.body = RegExp.rightContext;
			return x;
		}
		this.body = prebody;
	}

	if (this.body.match(/^[ \t]*(-?0x[0-9A-F]+|(-?)0b([01]+)|-?0o?[0-7]+|-?(?:0d)?[0-9]+)/i)) {
		this.body = RegExp.rightContext;
    var i;
    if (RegExp.$3) {
		  i = parseInt(RegExp.$3, 2);
      if (RegExp.$2) {
        i = -i;
      }
    } else {
      i = RegExp.$1.replace(/0d/i, '').replace(/0o/i, '0');
      if (RubyEngine.OPERA && i.match(/^0[0-7]+$/)) {
        i = parseInt(i, 8);
      } else {
        i = parseInt(i);
      }
    }
		return new RubyEngine.RubyObject.Numeric(i);
  } else if (this.body.match(/^[ \t]*\?(.)/)) { // ?a
		this.body = RegExp.rightContext;
		return new RubyEngine.RubyObject.Numeric(RegExp.$1.charCodeAt(0));
	} else if ((x=this.strLiteral())!=undefined) {
		return x;
	} else if ((x=this.reference())!=undefined) {
		return new RubyEngine.Node.Ref(x);
	}

  // '[' Args ']'
	if (this.body.match(/^[ \t]*\[/)) {
		this.body = RegExp.rightContext;
    x = this.args();
    if (this.body.match(/^[ \t]*\]/)) {
  		this.body = RegExp.rightContext;
      return new RubyEngine.Node.Method("new", RubyEngine.RubyObject.Array, x);
    }
    this.body = prebody;
  }

  // if Arg Then CompStmt (elsif Arg Then CompStmt)* (else CompStmt)? end
	if (this.body.match(/^[ \t]*(if)/)) {
		this.body = RegExp.rightContext;
		x = RegExp.$1;
		if ((y = this.arg())!=undefined && this.then()) {
			if (z=this.compstmt()) {
			  var args = [y, z];
				while (this.body.match(/^[ \s]*(elsif)/)) {
					var prebody2 = this.body;
					this.body = RegExp.rightContext;
					if ((y = this.arg()) && this.then()) {
						if (!(z=this.compstmt())) { this.body = prebody2; break; }
						args.push(y, z)
					}
				}
				if (this.body.match(/^[ \s]*(else)/)) {
					var prebody2 = this.body;
					this.body = RegExp.rightContext;
					if (z=this.compstmt()) { 
						args.push(true, z)
					} else {
						this.body = prebody2
					}
				}
				if (this.body.match(/^[ \s]*(end)/)) {
					this.body = RegExp.rightContext;
					return new RubyEngine.Node.Method(x, null, args);
				}
			}
		}
		this.body = prebody;
	}

  // def Fname ArgDecl CompStmt end
	if (this.body.match(/^[ \t]*def/)) {
		this.body=RegExp.rightContext;
		x=this.operation();
		y=this.argdecl();
		z=this.compstmt();
  	while(this.term());
		if(x!=undefined && z!=undefined && this.body.match(/^[ \s]*(end)/)) {
			this.body = RegExp.rightContext;
  		ret = new RubyEngine.Node.Method("def", null, [new RubyEngine.RubyObject.String(x)]);
  		ret.block = new RubyEngine.Node.Block(y, z);
  		return ret;
    }
		this.body = prebody;
	}

	return undefined;
}

// StrLiteral : '[^']*' | "( [^"]*? #{ CompStmt } )* [^"]*?"
RubyEngine.Parser.prototype.strLiteral = function() {
  var prebody = this.body;
	if (this.body.match(/^[ \t]*'((?:[^\\']|\\.)*)'/)) {
    this.body=RegExp.rightContext;
    return new RubyEngine.RubyObject.String(RegExp.$1);
  } else if (this.body.match(/^[ \t]*"/)) { //"
    this.body=RegExp.rightContext;
    var ret = [], x;
    while (this.body.match(/^((?:[^\\"]|\\.)*?)#\{/)) { //"
      this.body=RegExp.rightContext;
      if ((x=RegExp.$1)!="") ret.push(new RubyEngine.RubyObject.String(x));
      if ((x=this.compstmt())==undefined || !this.body.match(/^\s*}/)) {
        this.body=prebody;
        return undefined;
      }
      this.body=RegExp.rightContext;
      ret.push(x);
    }
    if (this.body.match(/^((?:[^\\"]|\\.)*?)"/)) {
      this.body=RegExp.rightContext;
      if ((x=RegExp.$1)!="") ret.push(new RubyEngine.RubyObject.String(x));
      if (ret.length==1 && RubyEngine.RubyObject.String.prototype.isPrototypeOf(ret[0])) {
        return ret[0];
      } else {
        return new RubyEngine.Node.Method("*concat", null, ret);
      }
    }
  }
  this.body=prebody;
  return undefined;
}

// ArgDecl : `(' ArgList `)' | ArgList Term
RubyEngine.Parser.prototype.argdecl = function() {
  var x;
	var prebody = this.body;
	if (this.body.match(/^[ \t]*\(/)) {
    this.body=RegExp.rightContext;
    if ((x=this.arglist())!=undefined && this.body.match(/^[ \t]*\)/) ) {
      this.body=RegExp.rightContext;
      return x;
    }
  } else {
    if ((x=this.arglist())!=undefined && this.term() ) return x;
  }
  this.body=prebody;
	return undefined;
}

// ArgList : varname(`,'varname)*[`,'`*'[varname]][`,'`&'varname] | `*'varname[`,'`&'varname] | [`&'varname]
RubyEngine.Parser.prototype.arglist = function() {
  var x;
  if ((x=this.varname())==undefined) return [];
  var ret=[x], prebody=this.body;
  while (this.body.match(/^[ \t]*,/)) {
    this.body=RegExp.rightContext;
    if ((x=this.varname())==undefined) break;
    ret.push(x);
    prebody=this.body;
  }
  this.body=prebody;
  return ret;
}

RubyEngine.Parser.prototype.then = function() {
	if (this.body.match(/^\s*(then)/)) {
	  this.body = RegExp.rightContext;
	  return "then"
  }
	return this.term();
}

RubyEngine.Parser.prototype.varname = function() {
	if (this.body.match(/^[ \t]*([A-Za-z_\$][A-Za-z0-9_]*)/) && !RubyEngine.RESERVED[RegExp.$1]) {
		this.body = RegExp.rightContext;
		return new RubyEngine.Node.Variable(RegExp.$1);
	}
}


//////////////////////////////////////////////////////////////////////

RubyEngine.Parser.prototype.term = function() {
	if (this.body.match(/^[ \t]*(\r?\n|;)/)) {
		this.body = RegExp.rightContext;
		return RegExp.$1
	}
	return undefined;
}
RubyEngine.Parser.prototype.comma = function() {
	if (this.body.match(/^[ \t]*,/)) {
		this.body = RegExp.rightContext;
		return ",";
	}
	return undefined;
}

RubyEngine.Parser.prototype.operator = function() {
	if (this.body.match(/^[ \t]*(\.\.|\+|\-|\*{1,2}|\/|%|==|<<|>>|[<>]=?|&&|\|\|)/)) {
		this.body = RegExp.rightContext;
		return new RubyEngine.Node.Operator(RegExp.$1);
	}
	return undefined;
}

RubyEngine.Parser.prototype.reference = function() {
	if (this.body.match(/^[ \t]*([A-Za-z_\$][A-Za-z0-9_]*[\!\?]?)/) && !RubyEngine.RESERVED[RegExp.$1]) {
		this.body = RegExp.rightContext;
		return RegExp.$1;
	}
	return undefined;
}

// Operation: $IDENTIFIER('!'|'?')?
RubyEngine.Parser.prototype.operation = function() {
	if (this.body.match(/^[ \t]*([A-Za-z_][A-Za-z0-9_]*[\!\?]?)/) && !RubyEngine.RESERVED[RegExp.$1]) {
		this.body = RegExp.rightContext;
		return RegExp.$1;
	}
	return undefined;
}



