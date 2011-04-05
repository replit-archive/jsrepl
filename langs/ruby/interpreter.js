//// Interpreter /////////////////////////////////////////////////////

RubyEngine.Scope = function(){ this.clear(); }
RubyEngine.Scope.prototype = {
  pushScope: function(args){ this.stack.push(this.level); this.level=[args || {}]; },
  popScope: function(){ this.level = this.stack.pop(); },
  pushLevel: function(args){ this.level.push(args || {}); },
  popLevel: function(){ this.level.pop(); },
  clear: function(){
    this.level = [{}];
    this.stack = [];
    this.global = {};
    if (typeof(window)!='undefined') this.global={"$window": new RubyEngine.RubyObject.JSObject(window), "$document": new RubyEngine.RubyObject.JSObject(document) };
    for(var i in RubyEngine.Interpreter.KernelMethod) {
      if (i.match(/^[a-z_\*]/)) this.global[i] = RubyEngine.Interpreter.KernelMethod[i];
    }
    for(var i in RubyEngine.RubyObject) {
      if (i.match(/^[A-Z\$]/)) this.global[i] = RubyEngine.RubyObject[i];
    }
  },
  globalsubstitute: function(name, value){
    return this.global[name] = value;
  },
  substitute: function(name, value){
    if (name.match(/^\$/)) {
        return this.global[name] = value;
    } else if (name.match(/^[A-Z]/)) {
      if (name in this.global) { /* "warning: already initialized constant "+name */ }
      return this.global[name] = value;
    } else {
      for(var i=this.level.length-1;i>=0;i--) {
        if (name in this.level[i]) return this.level[i][name] = value;
      }
      return this.level[this.level.length-1][name] = value;
    }
  },
  reference: function(name){
    for(var i=this.level.length-1;i>=0;i--) {
      if (name in this.level[i]) return this.level[i][name];
    }
    if (name in this.global) return this.global[name];
    return new RubyEngine.RubyObject.NameError("undefined local variable or method `"+name+"'", name);
  },
  call: function(name, args, block, refflag) {
    var ref = this.scope.reference(name);
    if (typeof(ref) == "function") {
      return ref.apply(this, [args, block]);
    } else if (RubyEngine.RubyObject.JSObject.prototype.isPrototypeOf(ref)) {
      var jsargs = [];
      if(args) for (var i=0;i<args.length;i++) jsargs.push( this.run(args[i]).toValue() );
      return RubyEngine.RubyObject.js2r(ref.obj.apply(ref.obj, jsargs));
    } else if (RubyEngine.Node.Block.prototype.isPrototypeOf(ref)) {
      var block = ref;
      var newargs = {};
      if (block.vars) {
        for (var i=0;i<block.vars.length;i++) {
          newargs[block.vars[i].name] = this.run(args[i]);
        }
      }
      this.scope.pushScope(newargs);
      var ret = this.run(block.block);
      this.scope.popScope();
      return ret;
    } else if (refflag) {
      return ref;
    }
    return new RubyEngine.RubyObject.NameError("undefined local variable or method `"+node.name+"'", node.name);
  }
}

RubyEngine.Interpreter = function(){
  this.context = {};
	this.scope = new RubyEngine.Scope();
	this.stdout = "";
	this.parser = new RubyEngine.Parser();
}
RubyEngine.Interpreter.prototype = {
  writeStdout: function(st){this.stdout += st;},

  exec: function(node){
    if (typeof(node)=="string") node = this.parser.parse(node);
    var ret = this.run(node);
    if (typeof(ret)=="object" && "toValue" in ret) return ret.toValue();
    return ret;
  },

  run: function(node){
//console.log(node.toSource());console.trace();if(!confirm("continue?")) exit();
  	var ret = null;
  	if (Array.prototype.isPrototypeOf(node)) {
    	for (var idx=0;idx<node.length;idx++) {
  			ret = this.run(node[idx]);
  		}

  	} else if (RubyEngine.Node.Variable.prototype.isPrototypeOf(node)) {
  		ret = this.scope.reference(node.name);

  	} else if (RubyEngine.Node.Expression.prototype.isPrototypeOf(node)) {
  		ret = this.calcExpr(node);

  	} else if (RubyEngine.Node.Method.prototype.isPrototypeOf(node) || RubyEngine.Node.Ref.prototype.isPrototypeOf(node)) {
      var t = node.type;
  		if (t=="M" && node.target!=null) {
  			ret = this.objectMethod(node);
  		} else {
        return this.scope.call.apply(this, [node.name, node.args, node.block, (t=="R")]);
      }
      return ret;
  	} else {
  		ret = node;
  	}
  	return ret;
  },
  calcExpr: function(node){
  	var calclist = node.list;
  	var stk = [];
  	for (var idx=0;idx<calclist.length;idx++) {
  		var x = calclist[idx];
  		if (Array.prototype.isPrototypeOf(x)) {
  			stk.push( this.run(x) );
  		} else if (RubyEngine.Node.Expression.prototype.isPrototypeOf(x)) {
  			stk.push( this.calcExpr(x) );
  		} else if (RubyEngine.Node.Variable.prototype.isPrototypeOf(x)) {
  			stk.push( this.scope.reference(x.name) );
  		} else if (RubyEngine.Node.Ref.prototype.isPrototypeOf(x)) {
  			stk.push( this.run(x) );
  		} else if (RubyEngine.Node.Method.prototype.isPrototypeOf(x)) {
  			stk.push( this.run(x) );
  		} else if (RubyEngine.Node.Operator.prototype.isPrototypeOf(x)) {
  			switch (x.name) {
  			case "-@":
  				stk.push(stk.pop().neg());
  				break;
  			case "+":
  				var a = stk.pop();
  				stk.push(stk.pop().add(a));
  				break;
  			case "-":
  				var a = stk.pop();
  				stk.push(stk.pop().sub(a));
  				break;
  			case "*":
  				var a = stk.pop();
  				stk.push(stk.pop().mul(a));
  				break;
  			case "/":
  				var a = stk.pop();
  				stk.push(stk.pop().div(a));
  				break;
  			case "%":
  				var a = stk.pop();
  				stk.push(stk.pop().mod(a));
  				break;
  			case "**":
  				var a = stk.pop();
  				stk.push(stk.pop().pow(a));
  				break;
  			case "..":
  				var to = stk.pop();
  				var from = stk.pop();
          stk.push(new RubyEngine.RubyObject.Range(from.num, to.num));
  				break;
  			case "==":
  				var a = stk.pop();
  				stk.push(stk.pop().eql(a));
  				break;
  			case "<":
  				var a = stk.pop();
  				stk.push(stk.pop().cmp(a)<0);
  				break;
  			case ">":
  				var a = stk.pop();
  				stk.push(stk.pop().cmp(a)>0);
  				break;
  			case ">=":
  				var a = stk.pop();
  				stk.push(stk.pop().cmp(a)>=0);
  				break;
  			case "<<":
  				var a = stk.pop();
  				stk.push(stk.pop().sft(a));
  				break;
  			}
  		} else {
  			stk.push(x);
  		}
  	}
  	return stk.pop();
  },

  call: function(name, args){
    var newargs=[];
    for(var i=0;i<args.length;i++) newargs.push(RubyEngine.RubyObject.js2r(args[i]));
    return this.scope.call.apply(this, [name, newargs, null, true]).toValue();
  },
  put: function(name, value){
    this.scope.globalsubstitute(name, RubyEngine.RubyObject.js2r(value));
  },

  kernelMethod: function(node){
    var method = this.scope.reference(node.name);
    if (typeof(method)=="function") {
      return method.apply(this, [node.args, node.block]);
    } else {
  		alert("undefined method: " + node.name);
  	}
  },
  objectMethod: function(node){
//console.log(node.toSource());console.dir(node);console.trace();if(!confirm("continue?")) exit();
    var obj;
    if (RubyEngine.Node.Ref.prototype.isPrototypeOf(node.target)) {
      obj = this.scope.reference(node.target.name);
    } else {
      obj = this.run(node.target);
    }
    return RubyEngine.RubyObject.call.apply(this, [obj, node.name, node.args, node.block]);
  }
}

