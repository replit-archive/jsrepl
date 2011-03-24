var Environment = (function() {
	
	var Nil = [];
	
	function buildStringRep(exp, result) {
		if (result == null) {
			result = [];
		}
		if (exp instanceof Array) {
			result.push("(");
			for (var i = 0; i < exp.length; ++i) {
				buildStringRep(exp[i], result);
			}
			result.push(")");
		} else {
			result.push(exp);
		}
		return result;
	}
	
	function stringify(exp) {
		return buildStringRep(exp).join(" ");
	}
	
	function bool(b) {
		return b ? 't' : Nil;
	}
	
	function equal(a, b) {
		// three types, list, atom, string, number
		if (a instanceof Atom) {
			return b instanceof Atom && a.name == b.name;
		} else if (b instanceof Atom) {
			return false;
		}

		// Empty array is equal to empty string.
		var aIsEmpty = (a instanceof Array || typeof(a) == 'string') && a.length == 0;
		var bIsEmpty = (b instanceof Array || typeof(b) == 'string') && b.length == 0;
		if (aIsEmpty && bIsEmpty) {
			return true;
		}
		
		if (a instanceof Array && b instanceof Array) {
			if (a.length != b.length) {
				return false;
			}
			for (var i = 0; i < a.length; ++i) {
				if (equal(a[i], b[i]) == false) {
					return false;
				}
			}
			return true;
		}
		
		return a == b;
	}
	
	function newScope(oldScope) {
		function constructor() {}
		constructor.prototype = oldScope;
		var result = new constructor();
		return result;
	}
	
	function mergeScope(into, merging) {
		if (merging) {
			for (var i in merging) {
				into[i] = merging[i];
			}
		}
		return into;
	}
	
	var globalScope = null;
	
	function Environment() {
		globalScope = this;
	}
	
	Environment.prototype["quote"] = function(a) {
		return a;
	};
	
	Environment.prototype["car"] = function(args) {
		var item = this["_value"](args);
		if (typeof(item) == 'string') {
			return item.substring(0, 1);
		}
		return item[0];
	};
	
	
	Environment.prototype["cdr"] = function(args) {
		var val = this["_value"](args).slice();
		if (val.substring) {
			return val.substring(1);
		}
		val.shift();
		return val;
	},
	
	Environment.prototype["equal"] = function(a, b) {
		var a = this["_value"](a);
		var b = this["_value"](b);
		return equal(a, b) ? "t" : Nil;
	};
	
	Environment.prototype["cons"] = function(a, b) {
		var a = this["_value"](a);
		var b = this["_value"](b);
		
		if (typeof(a) == 'string' && typeof(b) == 'string') {
			return a+b;
		}
		
		b = b.slice();
		b.unshift(a);
		return b;
	};
	
	Environment.prototype["concat"] = function() {
		var args = this["_valueArray"](arguments);
		var result = args.shift();
		if (result instanceof Array) {
			return Array.prototype.concat.apply(result, args);
		}
		return result + args.join("");
	};
	
	Environment.prototype["atom"] = function(a) {
		return bool( this["_value"](a) instanceof Atom );
	};
	
	Environment.prototype["cond"] = function() {
		for (var i = 0; i < arguments.length; ++i) {
			var condition = this["_value"](arguments[i][0]);
			if (equal(condition, Nil) == false) {
				return this["_value"](arguments[i][1]);
			}
		}
	};
	
	function addNonGlobalsFromScope(into, merge) {
		for (var x in merge) {
			if (merge[x] != globalScope[x]) {
				into[x] = merge[x];
			}
		}
	}
	
	Environment.prototype["lambda"] = function(variables, expression) {
		// scope when function is defined
		var defScopeNonglobals = {};
		addNonGlobalsFromScope(defScopeNonglobals, this);
		
		var func = function() {
			// scope when function is called
			var funcScope = newScope(this);
			
			// add all nonglobal values into this funcscope
			mergeScope(funcScope, defScopeNonglobals);
			
			var args = this["_valueArray"](arguments, variables.length);
			for (var i = 0; i < variables.length; ++i) {
				funcScope[variables[i]] = args[i];
			}
			if (arguments.callee["label"] != null) {
				funcScope[arguments.callee["label"]] = arguments.callee;
			}

			return funcScope._value(expression);
		};
		func.toString = function() {
			return "\u03bb"+stringify(variables)+stringify(expression);
		};
		return func;
	};
	
	Environment.prototype["export"] = function(lambda) {
		var scope = this;
		return function() {
			return scope._value(lambda).apply(scope, arguments);
		};
	};
	
	Environment.prototype["label"] = function(l, f) {
		var func = this["_value"](f);
		func["label"] = l;
		return func;
	};
	
	function wrapJsResult(jsResult) {
		if (typeof(jsResult) == 'boolean') {
			if (jsResult) {
				return "t";
			} else {
				return Nil;
			}
		}
		return jsResult;
	}
	
	Environment.prototype["js"] = function() {
		var val = this["_value"](arguments[0]);
		var result = eval(val);
		if (typeof(result) == 'function') {
			return function() {
				var jsResult = result.apply(bind, this["_valueArray"](arguments));
				return wrapJsResult(jsResult);
			};
		}
		return result;
	};
	
 	Environment.prototype["method"] = function(obj, property) {
 		var val = this["_value"](obj);
 		property = this["_value"](property);
 		if (property instanceof Atom) {
 			property = property.name;
 		}
 		var func = val[property];
 		// some weird stuff happens with native functions in IE
 		if (typeof(func) == 'object' && typeof(window.alert) == 'object') {
 			func = function(a, b, c, d, e, f, g, h, i) {
 				return val[property](a, b, c, d, e, f, g, h, i);
 			};
 		}
 		if (typeof(func) != "function") {
 			throw new Error("Method "+property+" not found on object "+val);
 		}
 		return function() {
 			var args = this["_valueArray"](arguments);
 			var jsResult = func.apply(val, args);
 			return wrapJsResult(jsResult);
 		};
 	};
 	
	Environment.prototype["let"] = function(bindings, expression) {
		var oldScope = this;
		var letScope = newScope(this);
		for (var i = 0; i < bindings.length; ++i) {
			var binding = bindings[i];
			var name = binding[0];
			var value = oldScope._value(binding[1]);
			letScope[name] = value;
		}
		return letScope._value(expression);
	};
	
	Environment.prototype["let*"] = function(bindings, expression) {
		var letScope = newScope(this);
		for (var i = 0; i < bindings.length; ++i) {
			var binding = bindings[i];
			var name = binding[0];
			var value = letScope._value(binding[1]);
			letScope[name] = value;
		}
		return letScope._value(expression);
	};
	
	Environment.prototype["defun"] = function(name, variables, expression) {
		var func = this["lambda"](variables, expression);
		globalScope[name] = func;
		return func;
	};
	
	Environment.prototype["def"] = function(name, value) {
		globalScope[name] = this["_value"](value);
		return value;
	};
	
	Environment.prototype["def-dyn"] = function(name, value) {
		return this["def"](this["_value"](name), value);
	};
	
	Environment.prototype["plus"] = function() {
		var result = 0;
		for (var i = 0; i < arguments.length; ++i) {
			result += this["_value"](arguments[i]);
		}
		return result;
	};
	
	Environment.prototype["minus"] = function() {
		if (arguments.length == 1)  {
			return - this["_value"](arguments[0]);
		}
		var result = this["_value"](arguments[0]);
		for (var i = 1; i < arguments.length; ++i) {
			result -= this["_value"](arguments[i]);
		}
		return result;
	};
	
	Environment.prototype["divide"] = function() {
		var result = this["_value"](arguments[0]);
		for (var i = 1; i < arguments.length; ++i) {
			result = result / this["_value"](arguments[i]);
		}
		return result;
	};
	
	Environment.prototype["times"] = function() {
		var result = this["_value"](arguments[0]);
		for (var i = 1; i < arguments.length; ++i) {
			result *= this["_value"](arguments[i]);
		}
		return result;
	};
	
	Environment.prototype["rem"] = function(a, b) {
		return this["_value"](a) % this["_value"](b);
	};

	Environment.prototype["if"] = function(conditional, truePath, falsePath) {
		if (equal(this["_value"](conditional), Nil) == false) {
			return this["_value"](truePath);
		} else if (falsePath != null) {
			return this["_value"](falsePath);
		}
		return Nil;
	};
	
	Environment.prototype["<"] = function(a, b) {
		return bool( this["_value"](a) < this["_value"](b) );
	};
	
	Environment.prototype[">"] = function(a, b) {
		return bool( this["_value"](a) > this["_value"](b) );
	};
	
	Environment.prototype["/="] = function(a, b) {
		return bool( equal(this["_value"](a), this["_value"](b)) == false );
	};
	
	Environment.prototype[">="] = function(a, b) {
		return bool( this["_value"](a) >= this["_value"](b) );
	};
	
	Environment.prototype["<="] = function(a, b) {
		return bool( this["_value"](a) <= this["_value"](b) );
	};
	
	Environment.prototype["not"] = function(a) {
		return bool( equal(this["_value"](a), Nil) );
	};
	
	Environment.prototype["or"] = function() {
		for (var i = 0; i < arguments.length; ++i) {
			var val = this["_value"](arguments[i]);
			if (equal(val, Nil) == false) {
				return val;
			}
		}
		return Nil;
	};
	
	Environment.prototype["and"] = function() {
		for (var i = 0; i < arguments.length; ++i) {
			var val = this["_value"](arguments[i]);
			if (equal(val, Nil)) {
				return Nil;
			}
		}
		return "t";
	};
	
	Environment.prototype["nth"] = function(n, l) {
		return this["_value"](l)[this["_value"](n)];
	};
	
	Environment.prototype["consp"] = function(a) {
		var val = this["_value"](a);
		return bool( val instanceof Array && val.length > 0 ); 
	};
	
	Environment.prototype["length"] = function(l) {
		return this["_value"](l).length;
	};
	
	Environment.prototype["list"] = function() {
		return this["_valueArray"](arguments);
	};
	
 	Environment.prototype["get"] = function(obj, property) {
 		var val = this["_value"](obj);
 		if (property instanceof Atom) {
 			property = property.name;
 		}
 		return val[property];
 	};
 	
 	Environment.prototype["substring"] = function(string, start, end) {
 		return this["_value"](string).substring(this["_value"](start), this["_value"](end));
 	};
	
 	Environment.prototype["set"] = function(obj, property, value) {
 		var obj = this["_value"](obj);
 		var val = this["_value"](value);
 		if (property instanceof Atom) {
 			property = property.name;
 		}
 		obj[property] = val;
 		return obj;
 	};

 	Environment.prototype["t"] = "t";
	Environment.prototype["Nil"] = Nil;

	Environment.prototype["_value"] = function(e) {
		if (e instanceof UnevaluatedObj) {
			var object = new Object();
			for (var key in e) {
				object[key] = this["_value"](e[key]); 
			}
			return object;
		} else if (e instanceof Array) {
			var data = e.slice();
			var head = data.shift();
			var headFunc = this["_value"](head);
			if (typeof(headFunc) == 'function') {
				var result = headFunc.apply(this, data);
				if (result == null) {
					result = Nil;
				}
				return result;
			}
			throw new Error(head+" ("+headFunc+") not a function in environment when trying to evaluate "+e);
		} else if (e instanceof Atom) {
			if (this[e.name] != null) {
				return this[e.name];
			}
			return e;
		} else {
			return e;
		}
	};
	
	Environment.prototype["_valueArray"] = function(arr, maxitems) {
		if (!maxitems) {
			maxitems = arr.length;
		}
		var result = Array.prototype.slice.call(arr, 0, maxitems);
		for (var i = 0; i < result.length; ++i) {
			result[i] = this["_value"](result[i]);
		}
		return result;
	};
	
	Environment.stringify = stringify;
	
	return Environment;
})();
