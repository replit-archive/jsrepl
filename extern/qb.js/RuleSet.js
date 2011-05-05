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
    QBasic.RuleSet
  Uses:
    # Tokenizer.js
    QBasic.Tokenizer
*/

(function () {
  var NextRuleId = 0;

  /** @constructor */
  function Rule(name, symbols, action) {
    this.id = NextRuleId++;

    // Name of the rule.
    this.name = name;

    // array of symbols. If the symbol begins with ' then it is a regular
    // expression. Otherwise, it is the name of another rule. The array
    // may not be null. For an empty rule, use a zero-length array.
    this.symbols = symbols;

    // The action. May be undefined.
    this.action = action;
  }

  Rule.prototype = {
    /** Returns string representation of a rule for debugging. */
    toString: function () {
      var str = this.name + ":";

      for (var i = 0; i < this.symbols.length; i++) {
        str += " " + this.symbols[i];
      }

      if (0 && this.action) {
        // this prints out the whole function which can be undesirable.
        str += " action=" + this.action;
      }

      return str;
    }
  };

  /** @constructor */
  QBasic.RuleSet = function() {
    // Each entry is an array of rules that have the same name.
    this.rules = {};

    // list of terminals in the grammar, from highest priority to lowest.
    this.terminals = [];

    // Keep track of which terminals have been added already.
    this.terminalsAdded = {};

    // map from rule name to map of symbols of FIRST set.
    this.first = {};

    // Whitespace can be significant in some languages. For now, we ignore it.
    this.eatWhiteSpace = true;

    if (this.eatWhiteSpace) {
      this.joinExpr = " *";
    } else {
      this.joinExpr = "";
    }

    // should be calculated later to be something not in the grammar.
    this.EOF_TOKEN = "'EOF'";

    this.addRule("_start", ["start", this.EOF_TOKEN]);
  };

  QBasic.RuleSet.prototype = {
    // A constant representing nothing in the FIRST set.
    EPSILON: {
      toString: function () {
        return "EPSILON";
      }
    },

    /** Returns string representation of a ruleset for debugging. */
    toString: function () {
      var str = "";
      for (var name in this.rules) {
        var rules = this.rules[name];
        for (var i = 0; i < rules.length; i++) {
          str += rules[i].toString() + "\n";
        }
      }

      return str;
    },

    /**
      Verify consistency of the rules.

      @param errors an array. Text describing the errors will be added to the
        end of this array.
      @return Number of errors found.
    */
    check: function (errors) {
      var size = errors.length;

      // for each rule name, 
      for (var ruleName in this.rules) {

        // for each rule by that name,
        var rules = this.rules[ruleName];
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i];

          for (var j = 0; j < rule.symbols.length; j++) {
            var symbol = rule.symbols[j];
            if (symbol.length === 0) {
              errors.push("Error: Rule '" + ruleName +
                          "' contains a zero length symbol: " + symbol);

              // Verify that all non-terminals in the rule exist.
            } else if (symbol[0] != "'") {
              if (this.rules[symbol] === undefined) {
                errors.push("Error: Rule'" + ruleName + 
                            "' contains an undefined symbol: " + symbol);
              }

              // 2. Verify that all terminals are valid regular expressions.
            } else {
              // not easily done....
            }
          }
        }
      }
      return errors.length - size;
    },

    /** Transform the grammar to try to reduce the number of rules. */
    optimize: function () {
      var changed = 1;
      // loop until no change.
      while (changed) {
        changed = 0;

        // for each rule name,
        for (var name in this.rules) {
          var rules = this.rules[name];

          // inline the rule if it has no alternatives, one symbol, and
          // no associated actions.
          if (rules.length == 1 &&
              rules[0].name != "_start" && 
              !rules[0].action) {
            this.replaceRule(rules[0].name, rules[0].symbols);
            changed |= 1;
          }
        }

        //console.log("Iteration---------------------------");
        //console.log(this.toString());
      }
    },

    /** Remove quotes from a string. */
    innerExpr: function (symbol) {
      return symbol.substr(1, symbol.length - 2);
    },

    /**
      Delete the rule, and replace all references to the rule with the given
      symbols.
    */
    replaceRule: function (name, newSymbols) {
      delete this.rules[name];
      for (var ruleName in this.rules) {
        var rules = this.rules[ruleName];
        for (var i = 0; i < rules.length; i++) {
          for (var j = 0; j < rules[i].symbols.length; j++) {
            if (rules[i].symbols[j] == name) {
              rules[i].symbols.splice(j, 1);
              for (var k = 0; k < newSymbols.length; k++) {
                rules[i].symbols.splice(j + k, 0, newSymbols[k]);
              }
              j += newSymbols.length - 1;
            }
          }
        }
      }
    },

    /** Add the rule to the set. */
    addRule: function (name, symbols, action) {
      if (this.rules[name] === undefined) {
        this.rules[name] = [];
      }

      this.rules[name].push(new Rule(name, symbols, action));
      for (var i = 0; i < symbols.length; i++) {
        if (symbols.length > 0 && symbols[i][0] == "'" && !this.terminalsAdded[symbols[i]]) {
          this.terminalsAdded[symbols[i]] = 1;
          this.terminals.push(symbols[i]);
        }
      }
    },

    /** Add a token. This simply creates a new rule. */
    addToken: function (name, re) {
      this.addRule(name, ["'" + re + "'"]);
    },

    /** Compute rules that are nullable (non-terminal leads to nothing) */
    computeFirst: function () {
      this.first = {};
      var name;
      for (name in this.rules) {
        this.first[name] = {};
      }

      var changed = 1;
      var self = this;

      function addFirst(name, token) {
        var ret = !(token in self.first[name]);
        self.first[name][token] = 1;
        return ret;
      }

      function merge(destName, sourceName) {
        var ret = 0;
        for (var token in self.first[sourceName]) {
          ret |= addFirst(destName, token);
        }
        return ret;
      }

      // loop until no change.
      while (changed) {
        changed = 0;

        // for each rule name,
        for (name in this.rules) {

          var rules = this.rules[name];
          // for each RHS of the rule,
          for (var i = 0; i < rules.length; i++) {

            // If the rule has no symbols,
            if (rules[i].symbols.length === 0) {
              // add EPSILON to first set
              changed |= addFirst(name, this.EPSILON);
            }

            // for each symbol of the rule,
            for (var j = 0; j < rules[i].symbols.length; j++) {
              // if it is a terminal 
              if (rules[i].symbols[j][0] == "\'") {
                changed |= addFirst(name, rules[i].symbols[j]);
                break;

                // if it's a terminal, 
              } else {
                changed |= merge(name, rules[i].symbols[j]);

                if (this.first[rules[i].symbols[j]][this.EPSILON] !== 1) {
                  // continue only if it contains the epsilon
                  // symbol.
                  break;
                }
              }
            }
          }
        }
      }
    },

    /** Compute follow set of all non-terminals. */
    computeFollow: function () {
      var name;
      this.follow = {};
      for (name in this.rules) {
        this.follow[name] = {};
      }

      var changed = 1;

      while (changed) {
        changed = 0;
        var f;
        for (name in this.rules) {
          var rules = this.rules[name];
          for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            for (var j = 0; j < rule.symbols.length; j++) {
              if (rule.symbols[j][0] === "'") {
                continue;
              }

              var follow = this.follow[rule.symbols[j]];

              if (j == rule.symbols.length - 1) {
                if (rule.symbols[j][0] != "'" && rule.symbols[j] != name) {
                  for (f in this.follow[name]) {
                    if (f !== this.EPSILON) {
                      //dbg.printf("%s follows %s cause it's last of %s\n", 
                      //    f, rule.symbols[j], name );
                      changed |= follow[f] === undefined;
                      follow[f] = 1;
                    }
                  }
                }
              } else if (rule.symbols[j + 1][0] == "'" || rule.symbols[j + 1] === this.EOF_TOKEN) {
                changed |= follow[rule.symbols[j + 1]] === undefined;
                follow[rule.symbols[j + 1]] = 1;
                //dbg.printf("%s follows %s\n", rule.symbols[j+1],
                //    rule.symbols[j]);
              } else {
                for (f in this.first[rule.symbols[j + 1]]) {
                  if (f !== this.EPSILON) {
                    //dbg.printf("%s follows %s via %s\n", 
                    //    f, name, rule.symbols[j+1] );
                    changed |= follow[f] === undefined;
                    follow[f] = 1;
                  }
                }
              }
            }
          }
        }
      }
    },

    finalize: function () {
      this.optimize();
      this.computeFirst();
      this.computeFollow();
    },

    createTokenizer: function () {
      var tokenizer = new QBasic.Tokenizer();
      tokenizer.ignore("[ \t\r\u001a]+");

      for (var i = 0; i < this.terminals.length; i++) {
        //console.log("Add token " + this.terminals[i] +
        //            "='" + this.innerExpr(this.terminals[i]) + "'");
        tokenizer.addToken(
        this.terminals[i], this.innerExpr(this.terminals[i]));
      }

      tokenizer.EOF_TOKEN = this.EOF_TOKEN;
      return tokenizer;
    }
  };
})();
