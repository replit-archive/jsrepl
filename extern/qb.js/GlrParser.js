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
//#include <Tokenizer.js>
//#include <debug.js>
/******************************************************************************
 A GlrItem represents a rule and a position within that rule. It is used to
 build a state in an LR(0) state machine. Each state consists of one or more
 items.
 *****************************************************************************/
/** @constructor */
function GlrItem( rule, position )
{
    this.rule = rule;
    this.position = position;
    this.key = "r" + this.rule.id + "_" + this.position;
}

GlrItem.prototype =
{
    toString: function()
    {
        var str = this.rule.name + ":";
        for ( var i = 0; i < this.rule.symbols.length; i++ ) {
            if ( i == this.position ) {
                str += ' .';
            }
            str += ' ' + this.rule.symbols[i];
        }
        if ( this.position == this.rule.symbols.length ) {
            str += ' .';
        }
        return str;
    }
};

/******************************************************************************
 A GlrState is a state in the LR(0) state machine. Each state consists of one
 or more items.
 *****************************************************************************/
/** @constructor */
function GlrState()
{
    // Identifier, for use in debugging.
    this.id = GlrState.NextGlrStateId++;

    // Set of items.
    this.items = {};

    // Nunber of items in the set.
    this.itemCount = 0;

    // GOTO table. Maps character to the next GlrState. If an entry is
    // undefined, then it hasn't been calculated yet. A null entry indicates
    // that the transition has been calculated and is in error (no transition
    // from this state for that character)
    this.next = {};

    // List of rules which are completed in this state. A rule is complete if
    // its item position is at the end of the rule.
    this.reductions = [];
}

GlrState.NextGlrStateId = 0;

GlrState.prototype =
{
    /**************************************************************************
    The key is a string which uniquely identifies the state, so we can
    determine if we have already generated this state. We use the identifiers
    of the items' rules, and their positions, concatenated together.
     *************************************************************************/
    key: function()
    {
        var list = [];
        for ( var key in this.items ) {
            if ( this.items.hasOwnProperty( key ) ) {
                list.push(key);
            }
        }
        return list.sort().join("_");
    },

    toString: function()
    {
        var str = "GlrState[" + this.id + "]:\n";
        if ( this.accept ) {
            str += "    ACCEPTING\n";
        }
        str += "....Items:\n";
        for ( var item in this.items ) {
            if ( this.items.hasOwnProperty( item ) ) {
                str += "........" + this.items[item] + "\n";
            }
        }
        if ( this.reductions.length ) {
            str += "....Reduction: " + this.reductions[0] + "\n";
        }
        for ( var next in this.next ) {
            if ( this.next.hasOwnProperty( next ) ) {
                str += "....GOTO[" + next + "] = [" + this.next[next] + "]\n";
            }
        }
        return str;
    }
};

/** @constructor */
function GlrShiftNode( locus, state, parents, text )
{
    this.locus = locus;
    this.text = text;
    this.state = state;
    this.parents = parents;
}

GlrShiftNode.prototype = {
    addParent: function( node )
    {
        for( var i = 0; i < this.parents.length; i++ ) {
            if ( this.parents[i] === node ) {
                return false;
            }
        }
        this.parents.push( node );
        return true;
    },

    toString: function()
    {
        return "GlrShiftNode state=[" + this.state.id + "] text=" + this.text;
    },

    evaluate: function()
    {
        return this.text;
    }
};

/** @constructor */
function GlrInteriorNode( rnode, rule, ref )
{
    this.rnode = rnode;
    this.state = this.rnode.state;
    this.locus = this.rnode.locus;
    this.rule = rule;
    this.ref = ref;
    this.parents = [];
    rnode.inodes.push( this );
}

GlrInteriorNode.prototype = {
    addParent: function( node )
    {
        var i;
        for ( i = 0; i < this.parents.length; i++ ) {
            if ( this.parents[i] === node ) {
                break;
            }
        }
        if ( i === this.parents.length ) {
            this.parents.push( node );
            this.rnode.addParent( node );
            return true;
        }
        return false;
    },

    toString: function()
    {
        return "GlrInteriorNode rule=" + this.rule;
    },

    evaluate: function()
    {
        var cur = this.ref;
        var args = [];
        var locus = this.locus;
        console.log("Eval inode with state [" + this.state.id + "]");
        for ( var i = 0; i < this.rule.symbols.length; i++ ) {
            locus = cur.locus;
            args.unshift( cur.evaluate() );
            cur = cur.parents[cur.parents.length-1];
        }

        if ( this.rule.action ) {
            return this.rule.action( args, locus );
        } else if ( args.length > 0 ) {
            return args[0];
        } else {
            return null;
        }
    }
};


/** @constructor */
function GlrReduceNode( locus, state )
{
    this.locus = locus;
    this.state = state;
    this.parents = [];
    this.inodes = [];
}

GlrReduceNode.prototype = {
    addParent: function( node )
    {
        for( var i = 0; i < this.parents.length; i++ ) {
            if ( this.parents[i] === node ) {
                return false;
            }
        }
        this.parents.push( node );
        return true;
    },

    getINode: function( rule, ref )
    {
        for( var i = 0; i < this.inodes.length; i++ ) {
            if ( this.inodes[i].rule === rule && this.inodes[i].ref === ref ) {
                return this.inodes[i];
            }
        }
        console.log("Create new inode with state [" + this.state.id +
                    "] rule=" + rule + " and ref=[" + state.id + "]");
        var inode = new GlrInteriorNode( this, rule, ref );
        return inode;
    },

    toString: function()
    {
        return ("GlrReduceNode state=[" + this.state.id +
                "] inodes=" + this.inodes.length +
                " parents=" + this.parents.length);
    },

    evaluate: function()
    {
        // choose any inode and return its value.
        if ( this.inodes.length > 1 ) {
            console.log("Uh oh! Choice of inodes [" + this.state.id + "]...");
        }
        return this.inodes[0].evaluate();
    }
};

/** @constructor */
function GlrParser(ruleSet)
{
    this.ruleSet = ruleSet;
    this.tokenizer = this.ruleSet.createTokenizer();
    this.cached = {};

    this.errorState = this.cache( new GlrState() );

    // create initial Glr state.
    var state = new GlrState();
    this.addNonTerminalToState( state, "_start" );
    this.startState = this.cache( state );

    //this.debug = true;
    this.limit = 0;
}

GlrParser.prototype =
{
    parse: function(text)
    {
        this.tokenizer.setText( text );
        var token;
        var line = 0;
        var position = 0;
        var i;
        this.errors = [];

        this.stackTops = [ new GlrReduceNode( new Locus(0,0),
            this.startState ) ];

        this.nextTops = [];

        for( ;; ) {

            token = this.tokenizer.nextToken( line, position );
            if ( this.debug ) {
                console.log("Got token " + token);
            }
            if ( token === null ) {
                this.errors.push("Bad character at " + (line+1) +
                                 ":" + (position+1));
                break;
            }

            this.locus = token.locus;

            for( i = 0; i < this.stackTops.length; i++ ) {
                this.reduceAll( this.stackTops[i], token );
            }

            for( i = 0; i < this.stackTops.length; i++ ) {
                this.shift( this.stackTops[i], token );
            }

            if ( token === this.tokenizer.EOF_TOKEN ) {
                for( i = 0; i < this.stackTops.length; i++ ) {
                    this.reduceAll( this.stackTops[i], token );
                }
                break;
            }

            if ( this.debug ) {
                this.printStack( this.stackTops );
                this.printExpected(this.stackTops);
            }

            if ( this.nextTops.length === 0 ) {
                this.errors.push("Syntax error at " + token.locus + ": " + token);
                this.errors.push("Expected one of the following:");
                this.printExpected(this.stackTops);
                break;
            }

            this.stackTops = this.nextTops;
            this.nextTops = [];

            line = token.locus.line;
            position = token.locus.position + token.text.length;
        }

        for ( i = 0; i < this.stackTops.length; i++ ) {
            if ( this.stackTops[i].state.accept ) {
                //console.log("ACCEPT!");
                return this.stackTops[i].parents[0].evaluate();
            }
        }

        this.errors.push("Expected one of the following:");
        this.printExpected(this.stackTops);

        return null;
    },

    printExpected: function( tops )
    {
        for ( var i = 0; i < tops.length; i++ ) {
            var state = tops[i].state;
            for ( var key in state.items ) {
                if ( state.items.hasOwnProperty(key) ) {
                    var item = state.items[key];
                    if ( item.position < item.rule.symbols.length &&
                            item.rule.symbols[item.position][0] == "'") {
                        this.errors.push("    " +
                                item.rule.symbols[item.position]);
                    }
                }
            }
        }
    },

    shift: function( node, symbol )
    {
        var nextState = this.computeNext( node.state, symbol.id );
        if ( this.debug ) {
            console.log("Try to shift " + symbol);
        }
        if ( nextState ) {
            var nextNode = this.findNode( this.nextTops, nextState );
            if ( this.debug ) {
                console.log("Shift " + symbol);
            }
            if ( nextNode ) {
                nextNode.addParent( node );
            } else {
                this.nextTops.push( new GlrShiftNode( this.locus, nextState,
                    [node], symbol.text ) );
            }
        }
    },

    reduceAll: function( node, token )
    {
        node.processed = true;
        for( var i = 0; i < node.state.reductions.length; i++ ) {
            this.reduce( node, node.state.reductions[i], token );
        }
    },

    reduce: function( node, rule, token )
    {
        var inode;

        if ( this.limit++ === 1000 ) {
            //var m = blah;
        }
        if ( ! (token.id in this.ruleSet.follow[rule.name]) ) {
            console.log("Skip reduction on " + rule.name +
                        " due to follow set " + token);
            return;
        }
        if ( node instanceof GlrReduceNode ) {
            console.log("Skip processing of reduce node.");
            return;
        }
        console.log("Trying to reduce node with state [" + node.state.id +
                    "] and " + node.parents.length + " parents");
        var ancestors = [];
        this.ancestors( ancestors, node, rule.symbols.length );
        console.log("    " + ancestors.length + " ancestors found");
        for ( var ai = 0; ai < ancestors.length; ai++ ) {
            var ancestor = ancestors[ai];
            console.log("Process ancestor #" + ai + ".");
            //console.log("Ancestor is " + ancestor);
            var nextState = this.computeNext( ancestor.state, rule.name );
            if ( nextState === null ) {
                continue;
            }
            var nextNode = this.findNode( this.stackTops, nextState );
            if ( this.debug ) {
                console.log("Reduce by rule " + rule);
            }
            if ( nextNode === null ) {
                var rnode = new GlrReduceNode( this.locus, nextState );
                inode = rnode.getINode( rule, node );
                inode.addParent( ancestor );
                this.stackTops.push( rnode );
                if ( this.debug ) {
                    console.log("    Connect state [" + ancestor.state.id +
                                "] to [" + rnode.state.id +
                                "] via " + rule.name);
                    console.log("Recurse on new reduce node.");
                }
                this.reduceAll( inode, token );
            } else if ( nextNode instanceof GlrReduceNode ) {
                inode = nextNode.getINode( rule, node );
                console.log("    RN: Connect state [" + ancestor.state.id +
                            "] to [" + nextNode.state.id +
                            "] via " + rule.name);
                if ( inode.addParent( ancestor ) ) {
                    if ( this.debug ) {
                        console.log("Recurse on processed reduce node.");
                    }
                    //this.reduce( nextNode, rule, token );
                    this.reduceAll( inode, token );
                } else {
                    console.log("    RN: Node already existed. No change.");
                    //if ( this.debug ) console.log("Recurse on unprocessed reduce node.");
                    //this.reduce( inode, rule, token );
                }
            } else {
                console.log("Error! Tried to add already existing node.");
            }
        }
        console.log("Returning.");
    },

    printStack: function( tops )
    {
        var str = "\nStack:\n";
        for ( var i = 0; i < tops.length; i++ ) {
            str += "    " + tops[i].toString() + "\n";
        }

        console.log(str);
    },

    ancestors: function( paths, v, k )
    {
        if ( k === 0 ) {
            paths.push(v);
        } else {
            for ( var i = 0; i < v.parents.length; i++ ) {
                this.ancestors( paths, v.parents[i], k - 1 );
            }
        }
    },


    findNode: function( tops, state )
    {
        for ( var i = 0; i < tops.length; i++ ) {
            if ( tops[i].state === state ) {
                return tops[i];
            }
        }
        return null;
    },

    addNonTerminalToState: function( state, ruleName )
    {
        // for each rule of that name, add it to the state at position 0.
        var rules = this.ruleSet.rules[ruleName];
        for ( var i = 0; i < rules.length; i++ ) {
            this.addRuleToState( state, rules[i], 0 );
        }
    },

    addRuleToState: function( state, rule, position)
    {
        // if state contains the rule already, do not add it again.
        var item = new GlrItem( rule, position );
        var key = item.key;
        if ( state.items[key] !== undefined ) {
            return;
        }

        // add the rule and position to the state.
        state.items[key] = item;
        state.itemCount++;

        // if the position completes the rule, the mark the state as reducing
        // to that symbol.
        if ( item.position == item.rule.symbols.length ) {
            state.reductions.push(item.rule);
            if ( item.rule.name == "_start" ) {
                state.accept = true;
            }
        } else if ( item.rule.symbols[item.position][0] != "'" ) {
            // if the next item of the rule is a non-terminal, then add all
            // rules by that name.
            this.addNonTerminalToState(
                state, item.rule.symbols[item.position]);
        }
    },

    cache: function( state )
    {
        var key = state.key();
        if ( key in this.cached ) {
            GlrState.NextGlrStateId--;
        } else {
            this.cached[key] = state;
            if ( this.debug ) {
                console.log("Created state:\n" + state);
            }
        }
        return this.cached[key];
    },

    computeNext: function( state, symbol )
    {
        if ( symbol in state.next ) {
            return state.next[symbol];
        }
        var next = new GlrState();

        for( var key in state.items ) {
            if ( state.items.hasOwnProperty( key ) ) {
                // if the next item is the symbol, then add the rule to the
                // state.
                var item = state.items[key];
                if ( item.position < item.rule.symbols.length &&
                    item.rule.symbols[item.position] == symbol )
                {
                    this.addRuleToState( next, item.rule, item.position + 1 );
                }
            }
        }

        next = this.cache( next );
        if ( next === this.errorState ) {
            next = null;
        }
        state.next[symbol] = next;
        return next;
    }
};
