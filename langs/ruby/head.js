/* JSRuby - Ruby for Javascript
 *
 *  (c)2007 Nakatani Shuyo / Cybozu Labs, Inc.
 *  JSRuby is freely distributable under the terms of an MIT-style license.
 **/

//// toSource() for IE/Opera /////////////////////////////////////////
if(navigator.userAgent.indexOf("Gecko/")<0){
	Object.prototype.toSource = function(){
	  var ret="({";
		for(var name in this) {
			if (ret.length>2) ret+=",";
			ret += name+":";
			if (this[name]!=null) { ret += this[name].toSource(); } else { ret += "null"; }
		}
		return ret+"})";
	}
	Array.prototype.toSource = function(){
		var ret="[";
		for(var i=0;i<this.length;i++) {
			if (i!=0) ret+=",";
			if (this[i]!=null) { ret += this[i].toSource(); } else { ret += "null"; }
		}
		return ret+"]";
	}
	String.prototype.toSource = function(){return '"'+this+'"';}
	Number.prototype.toSource = Number.prototype.toString;
	Boolean.prototype.toSource = Boolean.prototype.toString;
}


//// Reserved Words & Operators //////////////////////////////////////

var RubyEngine = {}
RubyEngine.FIREFOX = navigator.userAgent.indexOf("Gecko/")>=0;
RubyEngine.OPERA = navigator.userAgent.indexOf("Opera")>=0;
RubyEngine.IE = navigator.userAgent.indexOf("MSIE")>=0;
RubyEngine.SAFARI = navigator.userAgent.indexOf("Safari")>=0;

RubyEngine.RESERVED = {
  "if":true, "then":true, "elsif":true, "else":true, "end":true,
  "while":true, "unless":true, "until":true, "def":true, "eval":false, 
  "nil":true
}
RubyEngine.OPERATORS = {
	"::":1,
	"[]":2,
	//"+":10, "!":10, "~":10, // '+' is a monomial.
	"**":11,
	//"-":12, // arithmetic negation
	"*":13, "/":13, "%":13,
	"+":14, "-":14,
	"<<":15, ">>":15,
	"&":20,
	"|":21, "^":21,
	">":22, ">=":22, "<":22, "<=":22,
	"<=>":23, "==":23, "===":23, "!=":23, "=~":23, "!~":23,
	"&&":24,
	"||":25,
	"..":30, "...":30,
	"?:":31, // Conditional Operator
	"=": 32, //(+=, -= ... )
	"not": 40,
	"and":41, "or":41
}




