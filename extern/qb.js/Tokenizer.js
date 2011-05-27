/**
  Copyright 2010 Steve Hanov

  This file is part of qb.js

  qb.js is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  qb.js is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with qb.js.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
  Defines:
    QBasic.Locus
    QBasic.Token
    QBasic.Tokenizer
  Uses:
    -
*/

(function () {
  var NextStateId = 0;

  var POST_NEWLINE = -1;
  var PRE_NEWLINE = -2;
  var DIGIT_CHAR = -3;
  var ANY_CHAR = -4;

  /**
    Represents a location in the source file. (The name "location" cannot be
    used because it has a special meaning in browsers.) This is used throughout
    the compiler to map program statements to token positions.

    @constructor
  */
  QBasic.Locus = function(line, position) {
    this.line = line;
    this.position = position;
  };

  QBasic.Locus.prototype = {
    toString: function () {
      return "" + (this.line + 1) + ":" + (this.position + 1);
    }
  };

  /**
    When the match function is called, it will return true if the argument
    matches a particular character.

    @constructor
  */
  function CharMatcher(ch) {
    this.mchar = ch;
  }

  CharMatcher.prototype = {
    match: function (ch) {
      //dbg.printf("Compare %s with %s\n", this.mchar, ch );
      if (this.mchar == DIGIT_CHAR) {
        return ch >= '0' && ch <= '9';
      } else if (this.mchar == ANY_CHAR) {
        return ch != POST_NEWLINE && ch != PRE_NEWLINE && ch != '\n';
      } else {
        return ch == this.mchar;
      }
    },

    toString: function () {
      if (this.mchar == DIGIT_CHAR) {
        return "\\d";
      } else {
        return this.mchar;
      }
    }
  };

  /**
    When the match function is called, it will return true if the argument
    matches a particular character range.

    @constructor
  */
  function RangeMatcher(ranges, include) {
    // list of [ start, end ]
    this.ranges = ranges;
    this.include = include; // boolean
  }

  RangeMatcher.prototype = {
    match: function (ch) {
      for (var i = 0; i < this.ranges.length; i++) {
        var range = this.ranges[i];
        if (ch >= range[0] && ch <= range[1]) {
          return this.include;
        }
      }

      return !this.include;
    },

    toString: function () {
      var str = "[";
      if (!this.include) {
        str += "^";
      }
      for (var i = 0; i < this.ranges.length; i++) {
        if (this.ranges[i][0] == this.ranges[i][1]) {
          str += this.ranges[i][0];
        } else {
          str += this.ranges[i][0] + "-" + this.ranges[i][1];
        }
      }
      return str + "]";
    }
  };

  /** @constructor */
  function NfaState(charMatcher) {
    this.mchar = charMatcher;
    this.next = [];
    this.id = NextStateId++;
    this.lastList = 0;
    this.accept = undefined;
  }

  /** @constructor */
  function DfaState() {
    this.nfaStates = [];
    this.next = {};
    this.accepts = [];
    this.id = NextStateId++;
  }

  NfaState.prototype.toString = function () {
    var str = "\nState [" + this.id + "] ch=" + this.mchar + "\n";
    if (this.accept !== undefined) {
      str += "    Accept " + this.accept + "\n";
    }
    for (var i = 0; i < this.next.length; i++) {
      str += ("    ch=" + this.next[i].mchar +
              " goto [" + this.next[i].id + "]\n");
    }
    return str;
  };

  /** @constructor */
  function NFA(start, end) {
    this.start = start;
    this.end = end;
  }

  NFA.prototype.toString = function () {
    var processed = {};
    var stack = [this.start];
    var str = "";

    while (stack.length > 0) {
      var state = stack.pop();
      if (processed[state]) {
        continue;
      }
      processed[state] = 1;

      for (var i = 0; i < state.next.length; i++) {
        stack.push(state.next[i]);
      }
      str += state.toString();
    }
    return str;
  };

  /** @constructor */
  QBasic.Token = function(id, text, line, position) {
    this.id = id;
    this.text = text;
    this.locus = new QBasic.Locus(line, position);
  };

  QBasic.Token.prototype = {
    toString: function () {
      return "Token(" + this.text + ")";
    }

  };

  /** @constructor */
  QBasic.Tokenizer = function() {
    this.root = new NfaState(null);
    this.expr = null;
    this.index = 0;
    this.listId = 1;
    this.dfaCache = {};

    // text to tokenize.
    this.text = "";

    // for each line, the character position of that line in the text.
    this.lineNumbers = [];

    // users can redefine these if they want.
    this.EOF_TOKEN = {};
    this.IGNORE_TOKEN = {};

    // check this to determine if we have reached the end of the text.
    this.finished = true;
  };

  QBasic.Tokenizer.prototype = {
    addToken: function (id, expr) {
      this.expr = expr;
      this.index = 0;
      var nfa = this.parseAlternation();
      this.root.next.push(nfa.start);
      nfa.end.accept = id;
    },

    ignore: function (expr) {
      this.addToken(this.IGNORE_TOKEN, expr);
    },

    eof: function () {
      return this.index == this.expr.length;
    },

    matchChar: function (ch) {
      if (this.expr[this.index] == ch) {
        this.index++;
        return true;
      }
      return false;
    },

    peek: function (ch) {
      return this.expr[this.index] == ch;
    },

    parseChar: function () {
      if (this.matchChar('\\')) {
        if (this.matchChar('n')) {
          return '\n';
        } else if (this.matchChar('r')) {
          return '\r';
        } else if (this.matchChar('t')) {
          return '\t';
        } else if (this.matchChar('d')) {
          return DIGIT_CHAR;
        } else {
          return this.expr[this.index++];
        }
      } else if (this.matchChar('.')) {
        return ANY_CHAR;
      } else if (this.matchChar('$')) {
        return PRE_NEWLINE;
      } else if (this.matchChar('^')) {
        return POST_NEWLINE;
      } else {
        return this.expr[this.index++];
      }
    },

    parseRange: function () {
      var include = true;
      var ranges = [];

      while (!this.eof() && !this.peek(']')) {
        if (this.matchChar('^')) {
          include = false;
        }
        var first = this.parseChar();
        var last = first;
        if (this.matchChar('-')) {
          last = this.parseChar();
        }

        if (first == DIGIT_CHAR) {
          first = '0';
          last = '9';
        }

        //console.log("Pushing range " + first + ".." + last);
        ranges.push([first, last]);
      }

      var state = new NfaState(new RangeMatcher(ranges, include));
      return new NFA(state, state);
    },

    parseBasic: function () {
      var nfa;

      if (this.matchChar('(')) {
        nfa = this.parseAlternation();
        if (!this.matchChar(')')) {
          throw "Expected ')'";
        }
      } else if (this.matchChar('[')) {
        //console.log("Encountered RANGE!\n");
        nfa = this.parseRange();
        if (!this.matchChar(']')) {
          throw "Expected ']'";
        }
      } else {
        var state = new NfaState(new CharMatcher(this.parseChar()));
        nfa = new NFA(state, state);
      }

      return nfa;
    },

    parseKleene: function () {
      var nfa = this.parseBasic();
      var splitter;
      if (this.matchChar("+")) {
        splitter = new NfaState(null);
        nfa.end.next.push(splitter);
        splitter.next.push(nfa.start);
        nfa.end = splitter;
      } else if (this.matchChar("*")) {
        splitter = new NfaState(null);
        splitter.next.push(nfa.start);
        nfa.end.next.push(splitter);
        nfa.start = splitter;
        nfa.end = splitter;
      } else if (this.matchChar("?")) {
        var start = new NfaState(null);
        var end = new NfaState(null);
        start.next.push(nfa.start);
        start.next.push(end);
        nfa.end.next.push(end);
        nfa.start = start;
        nfa.end = end;
      }

      return nfa;
    },

    parseConcat: function () {
      var start = new NfaState(null);
      var end = start;
      for (;;) {
        if (this.peek("|") || this.peek(")") || this.eof()) {
          break;
        }
        var nfa = this.parseKleene();
        end.next.push(nfa.start);
        end = nfa.end;
      }
      return new NFA(start, end);
    },

    parseAlternation: function () {
      var start = new NfaState(null);
      var end = new NfaState(null);
      do {
        var nfa = this.parseConcat();
        start.next.push(nfa.start);
        nfa.end.next.push(end);
      } while (this.matchChar("|"));

      return new NFA(start, end);
    },

    addState: function (nfaStateList, accepts, nfaState) {
      if (nfaState.lastList == this.listId) {
        //console.log("Skip adding nfa State [" + nfaState.id + "]");
        return;
      }

      //console.log("Add NFA state [" + nfaState.id + "]\n");
      if (nfaState.accept !== undefined) {
        accepts.push(nfaState.accept);
      }

      nfaState.lastList = this.listId;
      nfaStateList.push(nfaState);

      if (nfaState.mchar === null) {
        for (var i = 0; i < nfaState.next.length; i++) {
          this.addState(nfaStateList, accepts, nfaState.next[i]);
        }
      }
    },

    nextState: function (dfaState, ch) {
      var nfaStateList = [];
      var accepts = [];
      var i;
      //console.log("Transition from DFA[" + dfaState.id + "] on ch=" + ch);
      this.listId++;

      for (i = 0; i < dfaState.nfaStates.length; i++) {
        var nfaState = dfaState.nfaStates[i];
        if (nfaState.mchar !== null) {
          if (nfaState.mchar.match(ch)) {
            this.addState(nfaStateList, accepts, nfaState.next[0]);
          } else if (ch == PRE_NEWLINE || ch == POST_NEWLINE) {
            this.addState(nfaStateList, accepts, nfaState);
          }
        }
      }

      nfaStateList.sort(function (a, b) {
        return a.id - b.id;
      });

      var key = "";
      for (i = 0; i < nfaStateList.length; i++) {
        key += nfaStateList[i].id + ".";
      }

      if (this.dfaCache[key] === undefined) {
        dfaState = new DfaState();
        //console.log("Created DFA state [" + dfaState.id + "] accepts=" +
        //            accepts);
        dfaState.nfaStates = nfaStateList;
        dfaState.accepts = accepts;
        this.dfaCache[key] = dfaState;
      } else {
        //console.log("Returning cached DFA state [" + this.dfaCache[key].id +
        //            "] accepts=" + this.dfaCache[key].accepts);
      }

      return this.dfaCache[key];
    },

    setText: function (text) {
      this.text = text;
      this.lineNumbers.length = 0;
      this.lineNumbers.push(0);
      this.finished = false;

      for (var i = 0; i < this.text.length; i++) {
        if (this.text[i] == '\n') {
          this.lineNumbers.push(i + 1);
        }
      }
    },

    getLine: function (lineno) {
      return this.text.substr(this.lineNumbers[lineno],
                              (this.lineNumbers[lineno + 1] - 
                               this.lineNumbers[lineno]));
    },

    /**
      Retrieve a list of tokens that match at a given position. The list is
      returned sorted in order of length.

      @param text Text to match.
      @param line Line number to begin matching, starting from 0
      @param position Character position on the line to begin matching.
    */
    nextTokenInternal: function (line, position) {
      var last = 0;
      var i;
      var accept = null;

      if (this.rootDfa === undefined) {
        this.rootDfa = new DfaState();
        this.addState(this.rootDfa.nfaStates, this.rootDfa.accepts, this.root);
      }

      var dfaState = this.rootDfa;

      var startPosition = this.lineNumbers[line] + position;
      //dbg.printf("Start match from %d:%d\n", line, position );
      if (startPosition == this.text.length) {
        this.finished = true;
        return new QBasic.Token(this.EOF_TOKEN, "!EOF", line, position);
      }

      if (startPosition > 0) {
        last = this.text[startPosition - 1];
      }

      for (i = startPosition; i < this.text.length; i++) {
        //dbg.printf("Enter DFA state %d\n", dfaState.id );
        var ch = this.text[i];

        if (ch === '\n' && last != PRE_NEWLINE) {
          ch = PRE_NEWLINE;
          i--;
        } else if (last === '\n' || last === 0) {
          ch = POST_NEWLINE;
          i--;
        }

        if (last === '\n') {
          line++;
        }
        last = ch;

        if (dfaState.next[ch] === undefined) {
          dfaState.next[ch] = this.nextState(dfaState, ch);
        }
        dfaState = dfaState.next[ch];

        if (dfaState.accepts.length) {
          //console.log("Would accept " + dfaState.accepts[0]);
          //console.log("i:" + i + " line:" + line +
          //            " lineNumbers=" + this.lineNumbers[line]);
          accept = new QBasic.Token(dfaState.accepts[0], 
                                    this.text.substr(startPosition, 
                                                     i - startPosition + 1),
                                    line, 
                                    startPosition - this.lineNumbers[line]);
        }

        if (dfaState.nfaStates.length === 0) {
          break;
        }
      }

      if (accept) {
        //console.log("Returning match id=" + accept.id + " at " + 
        //            accept.locus.line + ":" + accept.locus.position +
        //            " text=" accept.text);
      } else if (0) {
        console.log("Bad token at " + this.text.substr(startPosition, 10));
        console.log("ascii " + this.text.charCodeAt(startPosition));
      }

      return accept;
    },

    nextToken: function (line, position) {
      for (;;) {
        var token = this.nextTokenInternal(line, position);
        if (token === null || token.id !== this.IGNORE_TOKEN) {
          return token;
        }
        line = token.locus.line;
        position = token.locus.position + token.text.length;
      }
    }
  };
})();
