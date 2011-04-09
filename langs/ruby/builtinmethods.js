//// KernelMethods ///////////////////////////////////////////////////

// 'this' is the interpreter instance.

RubyEngine.Interpreter.KernelMethod = {
  "def": function(args, block, callback) {
    var name = args[0].str;
    this.scope.globalsubstitute(name, block);
    if (!(name in this)) {
      this[name] = function(){return this.call(name, arguments);};
    }
    callback();
  },
  "*eval": function(args) {
    var src = this.run(args[0]).str;
    var nodes = this.parser.parse(src);
    return this.run(nodes);
  },
  "puts": function(args, block, callback) {
    var that = this;
    if (args && args.length > 0) {
      this.runArray(args, function(res){
        for(var i = 0; i < args.length; i++)
          that.writeStdout(res[i].toString());
      });
    } else {
      this.writeStdout("\n");
    }
    callback();
  },
  "if": function(args, block, callback) {
    var ctr = 0;
    var that = this;
    var condEval = function(elem){
      if (elem || elem===0 || elem==="")
       that.run(args[++ctr], callback);
      else{
        ctr+=2;
        that.run(args[ctr], condEval);
      }
    };
    this.run(args[ctr], condEval);
  },
  "*let": function(args, block, callback) {
    var that = this;
    this.run(args[1], function(res){
     callback(that.scope.substitute(args[0].name, res));
    });
  },
  "*concat": function(args) {
    var st="";
    if (args && args.length > 0) {
      for(var i=0;i<args.length;i++) st+=this.run(args[i]).toString();
    }
    return new RubyEngine.RubyObject.String(st);
  },
  "p": function(args) {
    if (args && args.length > 0) {
      for (var i=0; i<args.length; i++) {
        this.writeStdout(this.run(args[i]).toSource() + "\n");
      }
    }
  }
};



