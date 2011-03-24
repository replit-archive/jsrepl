var Javathcript = (function() {
	
	var defaultEnvironment = new Environment();
	
	function eval(environment, s) {
		var data = JavathcriptParser.parse(s);
		var value = environment._value(data);
		if (value instanceof Array) {
			value.toString = function() {
				return Environment.stringify(this);
			};
		}
		return value;
	}
	
	return {
		eval: function(s) {
			return eval(defaultEnvironment, s);
		},
		evalMulti: function(s) {
			var tokA = new TokenAssembly(new JavathcriptTokenizer(s));
			while (tokA.hasMoreElements()) {
				tokA = JavathcriptParser.parsePartial(tokA);
				defaultEnvironment._value(tokA.pop());
				tokA.commit();
			}
		},
		environment: defaultEnvironment
	};
	
})();