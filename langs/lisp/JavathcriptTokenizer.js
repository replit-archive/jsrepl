function JavathcriptTokenizer(s) {
	Tokenizer.call(this, s);
	this.CLASS = "JavathcriptTokenizer";
}

Util.extend(JavathcriptTokenizer, Tokenizer);

JavathcriptTokenizer.prototype.initialCharacterState = function() {
	this.wordState.setWordChars(".+*-<>=", true);
	this.commentState = new SlashSlashState();
	this.setCharacterState(0, 255, this.wordState);
	this.setCharacterState(0,   ' ', this.whitespaceState);
	this.setCharacterState(",", this.whitespaceState);
	this.setCharacterState("'(){}:", this.symbolState);
	this.setCharacterState(";", this.commentState);
	this.setCharacterState('0', '9', this.numberState);
	this.setCharacterState( '"', this.quoteState);
	this.setCharacterState( ".", this.numberState);
};