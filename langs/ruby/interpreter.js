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
  call: function(name, args, block, refflag, callback) {
    var ref = this.scope.reference(name);
    if (typeof(ref) == "function") {
      return ref.apply(this, [args, block, callback]);
    } else if (RubyEngine.RubyObject.JSObject.prototype.isPrototypeOf(ref)) {
      var jsargs = [];
      if(args) this.runArray(args, function(res){
         RubyEngine.RubyObject.js2r(ref.obj.apply(ref.obj, jsargs));
      });
    } else if (RubyEngine.Node.Block.prototype.isPrototypeOf(ref)) {
      var block = ref;
      var newargs = {};
      var that = this;
      if (block.vars) {
        this.runArray(args, function(res){
          for (var i=0; i < res.length; i++)
            newargs[block.vars[i].name] = res[i]; 
            that.scope.pushScope(newargs);
        });
      } 
      var ret = this.run(block.block, function(res){
        that.scope.popScope();
        callback(res);
      });
    } else if (refflag) {
      callback(ref);
    } else {
      callback(new RubyEngine.RubyObject.NameError("undefined local variable or method `"+node.name+"'", node.name));
    }
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

  exec: function(node, callback){
    if (typeof(node)=="string") node = this.parser.parse(node);
    var ret = this.run(node, callback);
    if (typeof(ret)=="object" && "toValue" in ret) return ret.toValue();
    return ret;
  },
  
  runArray: function(arr, callback){
    var result = arr;
    var eval_index = 0;
    if (result.length > 0) {
      var that = this;
      var evalElement = function(elem) {
        result[eval_index++] = elem;
        if (eval_index == result.length) {
          callback(result);
        } else {
          that.run(result[eval_index], evalElement);
        }
      };
      this.run(result[eval_index], evalElement);
    } else {
      callback();
    }
  },
  run: function(node, callback){
//console.log(node.toSource());console.trace();if(!confirm("continue?")) exit();
  	if (Array.prototype.isPrototypeOf(node)) {
      this.runArray(node, callback);

  	} else if (RubyEngine.Node.Variable.prototype.isPrototypeOf(node)) {
  		callback(this.scope.reference(node.name));

  	} else if (RubyEngine.Node.Expression.prototype.isPrototypeOf(node)) {
  		callback(this.calcExpr(node));

  	} else if (RubyEngine.Node.Method.prototype.isPrototypeOf(node) || RubyEngine.Node.Ref.prototype.isPrototypeOf(node)) {
      var t = node.type;
  		if (t=="M" && node.target!=null) {
  			ret = this.objectMethod(node, callback);
  		} else {
        this.scope.call.apply(this, [node.name, node.args, node.block, (t=="R"), callback]);
      }
  	} else {
  		 callback(node);
  	}
  },
  calcExpr: function(node){
  	var calclist = node.list;
  	var stk = [];
    var that = this;
    var stkPush = function(x){
       that.run(x, function(res){
          stk.push(res);
        }); 
    };
  	for (var idx=0;idx<calclist.length;idx++) {
  		var x = calclist[idx];
  		if (Array.prototype.isPrototypeOf(x)) {
        stkPush(x);
  		} else if (RubyEngine.Node.Expression.prototype.isPrototypeOf(x)) {
  			stk.push( this.calcExpr(x) );
  		} else if (RubyEngine.Node.Variable.prototype.isPrototypeOf(x)) {
  			stk.push( this.scope.reference(x.name) );
  		} else if (RubyEngine.Node.Ref.prototype.isPrototypeOf(x)) {
  			stkPush(x);
  		} else if (RubyEngine.Node.Method.prototype.isPrototypeOf(x)) {
  			stkPush(x);
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
  objectMethod: function(node, callback){
//console.log(node.toSource());console.dir(node);console.trace();if(!confirm("continue?")) exit();
    var obj;
    if (RubyEngine.Node.Ref.prototype.isPrototypeOf(node.target)) {
      callback(this.scope.reference(node.target.name));
    } else {
      this.run(node.target, callback);
    }
  }
}

