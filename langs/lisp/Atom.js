function Atom(s) {
	this.CLASS = "Atom";
	this.name = s;
}

Atom.prototype.equals = function equals(a) {
	return (a instanceof Atom && a.name == this.name);
};

Atom.prototype.toString = function toString() {
	return this.name;
};