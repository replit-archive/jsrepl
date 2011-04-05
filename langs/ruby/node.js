//// Node ////////////////////////////////////////////////////////////

RubyEngine.Node = {}

RubyEngine.Node.Variable = function(name){
	this.type = "V";
	this.name = name;
}
RubyEngine.Node.Variable.prototype.toSource = function(){return this.type+"'"+this.name+"'"}

RubyEngine.Node.Ref = function(name){
	this.type = "R";
	this.name = name;
}
RubyEngine.Node.Ref.prototype.toSource = function(){return this.type+"'"+this.name+"'"}

RubyEngine.Node.Operator = function(name){
	this.type = "O";
	this.name = name;
}
RubyEngine.Node.Operator.prototype.toSource = function(){return this.type+"'"+this.name+"'"}

RubyEngine.Node.Method = function(name, target, args){
	this.type = "M";
	this.name = name;
	this.target = target;
	if(name=="eval" && target==null) this.name = "*eval"; // for Object#eval
	this.args = args;
	this.block = undefined;
}
RubyEngine.Node.Method.prototype.toSource = function(){
  var block = this.block?this.block.toSource():"";
  return this.type+"("+(this.target==null?"":this.target.toSource()+".")+this.name+","+(this.args?this.args.toSource():this.args)+")" + block;
}
RubyEngine.Node.Method.prototype.clone = function(){
  var args=[];
  if(this.args) for(var i=0;i<this.args.length;i++) args.push(this.args[i]);
  return new RubyEngine.Node.Method(this.name,this.target,args);
}

RubyEngine.Node.Block = function(vars, block){
	this.type = "B";
	this.vars = vars
	this.block = block;
}
RubyEngine.Node.Block.prototype.toSource = function(){
  return "{|"+(this.vars?this.vars.toSource():this.target)+"| "+(this.block?this.block.toSource():this.block)+"}"
}

RubyEngine.Node.Expression = function(list){
	this.type = "E";
	var polishlist = [];
	var ope = [];
	for(var idx=0;idx<list.length;idx++) {
		var x = list[idx];
		if (RubyEngine.Node.Operator.prototype.isPrototypeOf(x)) {
			while (ope.length>0) {
				if (RubyEngine.OPERATORS[ope[0].name] > RubyEngine.OPERATORS[x.name]) break;
				polishlist.push(ope.shift());
			}
			ope.unshift(x);
		} else {
			polishlist.push(x);
		}
	}
	while(ope.length>0) {
		polishlist.push(ope.shift());
	}
	this.list = polishlist;
}
RubyEngine.Node.Expression.prototype.toSource = function(){return this.type+"'"+this.list.toSource()+"'"}


