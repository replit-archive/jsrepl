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
  NOTE: This parser is slow but reliable. A faster alternative is GlrParser from
    http://stevehanov.ca/blog/index.php?id=92. However, it is not currently
    reliable.
*/

/**
  Defines:
    QBasic.EarleyParser
  Uses:
    # Tokenizer.js
    QBasic.Token
*/

(function() {
  // The current index for the unique ID generator.
  var NextId = 0;

  /** @constructor */
  var EarleyItem = function(rule, position, base, token, prev, locus) {
    this.id = NextId++;
    this.rule = rule;
    this.pos = position;
    this.base = base;
    this.token = token;
    this.prev = prev;
    this.locus = locus;
  };

  EarleyItem.prototype = {
    toString: function() {
      var str = "[" + this.id + "] " + this.rule.name + ":";
      for (var i = 0; i < this.rule.symbols.length; i++) {
        if (i == this.pos) {
          str += " .";
        }
        str += " " + this.rule.symbols[i];
      }

      if (i == this.pos) {
        str += " .";
      }
      str += ", " + this.base;
      if (this.token instanceof QBasic.Token) {
        str += ", token=" + this.token.text;
      } else if (this.token) {
        str += ", rule=" + this.token.rule;
      }
      if (this.prev) {
        str += ", prev=" + this.prev.id;
      }
      return str;
    }
  };

  /**
    The Earley parser is like the proverbial tortoise. Its simplicity lets
    slowly but surely it chug through any grammar you throw its way.

    @constructor
  */
  QBasic.EarleyParser = function(ruleSet) {
    // Map from rule name to NFA.
    this.tokenizer = ruleSet.createTokenizer();
    this.EPSILON = ruleSet.EPSILON;

    ruleSet.computeFirst();

    this.rules = ruleSet.rules;
    this.first = ruleSet.first;

    // Set this to true to enable debug messages (requires console).
    this.debug = false;
  };

  QBasic.EarleyParser.prototype = {
    getNonTerminal: function(name) {
      return this.rules[name];
    },

    getRegexFromTerminal: function(terminal) {
      return terminal.substr(1, terminal.length - 2);
    },

    isTerminal: function(symbol) {
      return symbol !== undefined && symbol[0] == "'";
    },

    isNonTerminal: function(symbol) {
      return symbol !== undefined && symbol[0] != "'";
    },

    parse: function(text) {
      var states = [[new EarleyItem(this.rules._start[0], 0, 0)]];

      var line = 0;
      var position = 0;
      var j;
      this.tokenizer.setText(text);

      this.errors = [];

      for (var i = 0;; i++) {
        var token = this.tokenizer.nextToken(line, position);
        if (token === null) {
          this.errors.push("Bad token at " + line + ":" + position);
          if (this.debug) console.log("Bad token!");
          return null;
        } else if (this.debug) {
          if (this.debug) console.log("Got token " + token + " at " + token.locus);
        }
        this.locus = token.locus;

        states.push([]);
        var processedTo = 0;
        while (processedTo < states[i].length) {
          // remain calm
          this.predict(states[i], processedTo, i, token);
          this.complete(states, i, processedTo, i);
          processedTo++;
        }

        this.scan(states, i, token);

        if (states[i].length === 0) {
          this.errors.push("Syntax error at " + this.locus + ": " + token);
          for (j = 0; j < states[i - 1].length; j++) {
            this.errors.push("  " + states[i - 1][j] + "\n");
          }
          break;
        }

        if (this.debug) {
          this.printState(states, i);
        }

        line = token.locus.line;
        position = token.locus.position + token.text.length;

        if (token.id === this.tokenizer.EOF_TOKEN) {
          //console.log("Reached end of input.");
          i++;
          break;
        }
      }

      if (this.debug) {
        this.printState(states, i);
      }
      if (states[i].length) {
        return this.evaluate(states[i][0]);
      }

      this.errors.push("Syntax error at " + this.locus);
      for (j = 0; j < states[i - 1].length; j++) {
        this.errors.push("  " + states[i - 1][j] + "\n");
      }
      return null;
    },

    predict: function(items, index, base, token) {
      var item = items[index];
      if (this.isNonTerminal(item.rule.symbols[item.pos])) {
        var nonTerminal = this.getNonTerminal(item.rule.symbols[item.pos]);
        for (var i = 0; i < nonTerminal.length; i++) {
          var rule = nonTerminal[i];
          if (rule.symbols.length === 0 ||
              rule.symbols[0][0] === "'" ||
              this.first[rule.symbols[0]][token.id] ||
              this.first[rule.symbols[0]][this.EPSILON]) {
            this.addToState(items, rule, 0, base, undefined, undefined);
          }
        }
      }
    },

    complete: function(states, i, index, base) {
      var item = states[i][index];
      if (item.pos == item.rule.symbols.length) {
        var baseItems = states[item.base];
        for (var j = 0; j < baseItems.length; j++) {
          if (baseItems[j].rule.symbols[baseItems[j].pos] == item.rule.name) {
            this.addToState(states[i], baseItems[j].rule, baseItems[j].pos + 1,
                            baseItems[j].base, item, baseItems[j]);
          }
        }
      }
    },

    scan: function(states, i, token) {
      var items = states[i];
      for (var j = 0; j < items.length; j++) {
        if (items[j].rule.symbols[items[j].pos] == token.id) {
          var item = new EarleyItem(items[j].rule, items[j].pos + 1,
                                    items[j].base, token, items[j], this.locus);
          states[i + 1].push(item);
        }
      }
    },

    addToState: function(items, rule, pos, base, token, prev) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].rule === rule && items[i].pos === pos && items[i].base === base) {
          return;
        }
      }
      items.push(new EarleyItem(rule, pos, base, token, prev, this.locus));
    },

    printState: function(states, index) {
      if (!this.debug) {
        return;
      }
      var items = states[index];
      console.log("State [" + index + "]");
      for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
      }
    },

    // -------------------------------------------------------------------------
    // Given an earley item, reconstruct the dervation and invoke any associated
    // actions.
    // -------------------------------------------------------------------------
    evaluate: function(item_in) {
      if (!item_in) {
        return;
      }

      var args = [];
      var item = item_in;
      var locus = item_in.locus;

      while (item) {
        if (item.token instanceof QBasic.Token) {
          args.unshift(item.token.text);
        } else if (item.token) {
          args.unshift(this.evaluate(item.token));
        }
        locus = item.locus;
        item = item.prev;
      }

      var result;

      if (item_in.rule.action) {
        result = item_in.rule.action(args, locus);
      } else {
        result = args[0];
      }
      return result;
    }
  };
})();
