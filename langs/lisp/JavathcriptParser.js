var JavathcriptParser = (function() {

	/*
	 * expression = atomOrListOrObject | quotedAtomOrList
	 * atomOrList = atom | list | object
	 * object = '{' nameValue* '}
	 * nameValue = atom ':' expression
	 * quotedAtomOrList = ''' atomOrList
	 * list = '(' expression* ')'
	 * atom = Word | Num | QuotedString
	 */
	
	var expression = grammarRule(Alternation, function(exp) {
		exp.either(atomOrListOrObject()).or(quotedAtomOrList());
	});
	
	var atomOrListOrObject = grammarRule(Alternation, function(atomOrListOrObject) {
		atomOrListOrObject.either(atom()).or(list()).or(object());
	});
	
	var objectStart = new Symbol("{").discard();
	objectStart.setAssembler(new Assembler(function(a) {
		a.push(new UnevaluatedObj());
	}));
	
	var object = grammarRule(Track, function(object) {
		object.first(objectStart).then(nameValue().repeating()).then(new Symbol("}").discard());
	});
	
	var nameValue = grammarRule(Track, function(nameValue) {
		nameValue.first(atom()).then(new Symbol(":").discard()).then(expression());
	}, new Assembler(function(a) {
		var exp = a.pop();
		var name = a.pop();
		var obj = a.pop();
		obj[name] = exp;
		a.push(obj);
	}));
	
	var quotedAtomOrList = grammarRule(Sequence, function(quotedAtomOrList) {
		quotedAtomOrList.first(new Symbol("'").discard()).then(atomOrListOrObject());
	}, new Assembler(function(a) {
		var val = a.pop();
		a.push([new Atom("quote"), val]);
	}));
	
	var openBrace = new Symbol('(');
	
	var list = grammarRule(Track, function(list) {
		list.first(openBrace).then(expression().repeating()).then(new Symbol(')').discard());
	}, new Assembler(function(a) {
		var elements = Assembler.elementsAbove(a, "(");
		a.push(elements.reverse());
	}));
	
	var string = new QuotedString();
	string.setAssembler(Assembler.unary(function (token) {
		return token.sval.substring(1, token.sval.length -1);
	}));
	
	var num  = new Num();
	num.setAssembler(Assembler.unary(function (token) {return token.nval;}));
	
	var word = new Word();
	word.setAssembler(Assembler.unary(function (token) {
		token.sval.atom = true;
		return new Atom(token.sval);
	}));
	
	var atom = grammarRule(Alternation, function(atom) {
		atom.either(word).or(num).or(string);
	});
	
	return {
		parse: function(s) {
			var a = expression().completeMatch(new TokenAssembly(new JavathcriptTokenizer(s)));
			if (a == null) {
				throw new Error("Failed to parse "+s);
			}
			return a.pop();
		},
		parsePartial: function(tokA) {
			var a = expression().bestMatch(tokA);
			if (a == null) {
				throw new Error("Failed to parse "+tokA);
			}
			return a;
		}
	};
	
})();

