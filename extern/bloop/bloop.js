/**
 * @preserve
 * BlooPJS
 * Copyright (c) 2011 Tim Ryan
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/* spiffy links */

// http://www.amazon.com/gp/product/offer-listing/0394756827/ref=dp_pb_a//102-3710615-5652939?condition=all
// http://cgibin.erols.com/ziring/cgi-bin/cep/cep.pl?_key=FLooP
// http://cgibin.erols.com/ziring/cgi-bin/cep/cep.pl?_key=BLooP
// http://www.pdc.kth.se/~jas/retro/retromuseum.html
// http://c2.com/cgi/wiki?BloopFloopAndGloop

/* parsing variables */
BFloop = (function () {
var BlooP = "BlooP";

var parseCode = null;
var codeLines = null;
var ns = null;
var val = null;

var code = "";
var computedCode = "";

var formals = [];
var blocks = [];

var LOOP_UNUSED = null;
var LOOP_USED = 1;
var LOOP_NEW_ABORTABLE = 2;
var LOOP_ABORTABLE = 3;
var LOOP_ABORTED = 4;

/* handlers */
var noop = function () {};
var outputFunc, warningFunc, noticeFunc;
outputFunc = errorFunc = warningFunc = noticeFunc = noop;


function init(outputHandler, warningHandler, noticeHandler) {
  outputFunc = outputHandler || noop;
  warningFunc = warningHandler || noop;
  noticeFunc = noticeHandler || noop;
}


function compile(codeInput) {
    // clear existing variables
    parseCode = codeLines = computedCode = code = "";
    
    parseCode = codeInput;
    if (!parseCode) return false;
    parseCode = parseCode.toUpperCase();
    parseCode = parseCode.replace(/\?/g, "q");
    parseCode = parseCode.replace(/-/g, "_");
    // For examples from the book and the web to be copy pasted easily
    // we allow unicode x (multiplaction) and unicode arrow (assignment)
    parseCode = parseCode.replace(new RegExp(String.fromCharCode(8656), 'g'), '<=');
    parseCode = parseCode.replace(new RegExp(String.fromCharCode(215), 'g'), '*');
    
    // get number of lines in code
    codeLines = parseCode.split("\n").length + 1;

    // parse all functions
    while (!parseCode.match(/^$/)) {
        parse();
        computedCode += code;
    }

    return computedCode;
}

/* compiler output functions */

function error(warning) {
    throw new Error("Error: Line " + (codeLines - parseCode.split("\n").length) + ":\n" + warning);
}

function warn(warning) {
    warningFunc("Warning: Line " + (codeLines - parseCode.split("\n").length) + ":\n" + warning);
}

function notice(warning) {
    noticeFunc("Notice: Line " + (codeLines - parseCode.split("\n").length) + ":\n" + warning);
}

/*********************/
/* Parsing Functions */
/*********************/

function scan() {
    val = null;

    MATCH: 
    while (true) {
        var breakS =
            [/^''/,
            /^<=/,
            /^[+*!=<>(){}":;,.-]/,
            /^\[/,
            /^\]/,
            /^DEFINE\b/,
            /^PROCEDURE\b/,
            /^BLOCK\b/,
            /^LOOP\b/,
            /^AT\b/,
            /^MOST\b/,
            /^TIMES\b/,
            /^MU_LOOP\b/,
            /^CELL\b/,
            /^OUTPUT\b/,
            /^YES\b/,
            /^NO\b/,
            /^QUIT\b/,
            /^ABORT\b/,
            /^IF\b/,
            /^THEN\b/,
            /^AND\b/,
            /^OR\b/,
            /^PRINT\b/];

        if (parseCode.match(/^$/)) return false;

        if (parseCode.match(/^\/\*.*?\*\//)) {
            parseCode = parseCode.replace(/^\/\*.*\*\//, "");
            continue MATCH;
        }

        if (parseCode.match(/^BLOCK\s+(\d+)\s*:\s*BEGIN/)) {
            ns = "BEGIN";
            val = parseCode.match(/^BLOCK\s+(\d+)\s*:\s*BEGIN/)[1];
            parseCode = parseCode.replace(/^BLOCK\s+(\d+)\s*:\s*BEGIN/, "");
            break MATCH;
        }

        if (parseCode.match(/^BLOCK\s+(\d+)\s*:\s*END/)) {
            ns = "END";
            val = parseCode.match(/^BLOCK\s+(\d+)\s*:\s*END/)[1];
            parseCode = parseCode.replace(/^BLOCK\s+(\d+)\s*:\s*END/, "");
            break MATCH;
        }

        for (var i=0, max=breakS.length; i<max; i++) {
            if (parseCode.match(breakS[i])) {
                ns = parseCode.match(breakS[i])[0];
                parseCode = parseCode.replace(breakS[i], "");
                break MATCH;
            }
        }

        if (parseCode.match(/^\s+/)) {
            parseCode = parseCode.replace(/^\s+/, "");
            continue MATCH;
        }

        if (parseCode.match(/^[A-Z]\w*/)) {
            ns = "ID";
            val = parseCode.match(/^[A-Z]\w*/)[0];
            parseCode = parseCode.replace(/^[A-Z]\w*/, "");
            break MATCH;
        }

        if (parseCode.match(/^\d+/)) {
            ns = "NUMBER";
            val = parseCode.match(/^\d+/)[0];
            parseCode = parseCode.replace(/^\d+/, "");
            break MATCH;
        }

        if (parseCode.match(/^'/)) {
            string();
            break MATCH;
        }

        invChar = parseCode.match(/^./);
        invChar = invChar[0];
        invChar = invChar.replace(/_/g, "-");
        invChar = invChar.replace(/q/g, "?");
        error("BlooP: invalid character " + invChar);
        parseCode = parseCode.replace(/^./, "");
        break MATCH;
    }
}

function string() {
    var result = "";

    while (true) {
        if (parseCode.search(/^'[^']*'/) == -1)
            break;

        result += parseCode.match(/^'[^']*'/)[0];
        parseCode = parseCode.replace(/^'[^']*'/, "");
    }

    ns = "STRING";
    val = result.substring(1, result.length - 1);
}

function parse() {
    code = "";
    formals = blocks = [];

    scan();
    if (ns == "DEFINE") {
        definition();
    } else {
        expression();
        if (code.match(/q/))
          code += " ? \"YES\" : \"NO\"";
        code += ";\n";
    }

    if (ns != ".") warn("excess junk at end of function");
}

function descan(locNs, locVal)  {
    if (locNs == "BEGIN" || locNs == "END")
        return "BLOCK " + locVal + ": " + locNs;
    if (locVal == "")
        return locNs;
    return locNs + " " + locVal;
}

function need(needVar) {
    var oldval = val;

    if (needVar != ns) {
        warn("expected " + descan(needVar, val) +
            ", got " + descan(ns, ""));
    }

    scan();
    return oldval;
}

function definition() {
    var name = "";

    scan();
    need("PROCEDURE");
    need("''");
    name = need("ID");
    code += "function " + name;
    name = name.replace(/q/, "?");
    name = name.replace(/_/g, "-");

    need("''");
    need("[");
    getformals();
    need("]");
    need(":");
    code +=  " {\n";
    code += "var cell = new Array();\n";
    code += "var output = 0;\n";
    statement();
    code += "return output;\n";
    code += "}\n\n";
}

function getformals() {
    formals = [];

    while (true) {
        formals.push(need("ID"));
        if (ns != ",") break;
        scan();
    }

    code += "(" + formals.join(", ") + ")";
    }

function statement() {
    if (ns == "BEGIN") { block(); return; }
    if (ns == "LOOP") { loop(); return; }
    if (ns == "MU_LOOP") { mu_loop(); return; }
    if (ns == "QUIT") { quit(); return; }
    if (ns == "ABORT") { abort(); return; }
    if (ns == "IF") { f_if(); return; }
    if (ns == "PRINT") { print(); return; }
    assign(); return;
}

function block() {
    var begin = val;
    var end = "";

    if (blocks[begin] == LOOP_UNUSED) {
        blocks[begin] = LOOP_USED;
        code += "BLOCK" + begin + ": {\n";
    } else if (blocks[begin] == LOOP_USED || blocks[begin] == LOOP_ABORTABLE) {
        warn("BLOCK " + begin + " appears twice");
    } else if (blocks[begin] == LOOP_NEW_ABORTABLE) {
        blocks[begin] = LOOP_ABORTABLE;
    }

    scan();
    while (ns != "END")
        statement();

    end = val;
    if (begin == end)
        notice("BLOCK " + begin + ": BEGIN matches with BLOCK " + end + ": END");

    scan();
    if (blocks[begin] != LOOP_ABORTABLE && blocks[begin] != LOOP_ABORTED)
        code += "}\n"

    if (ns == ";") scan();
}

function loop() {
    var atmost = "";

    scan();
    if (ns == "AT") {
        scan();
        need("MOST");
        atmost = 1;
    }

    if (atmost) code += "BLOCK#: ";
    code += "for (var counter = 0, ";
    code += "limit = ";
    expression();
    code += "; counter < limit; counter++) {\n";

    need("TIMES");
    need(":");
    if (atmost) {
        if (ns != "BEGIN")
            warn("LOOP AT MOST requires following BLOCK");

        code = code.replace(/#/, val);
        blocks[val] = LOOP_NEW_ABORTABLE;
    }

    statement();
    code += "}\n";
}

function mu_loop() {
    if (BlooP == "BlooP")
        error("MU-LOOP not supported -- use FlooP");

    var loopnum = 0;

    scan();
    need(":");

    if (ns != "BEGIN")
        warn("LOOP requires following BLOCK");

    loopnum = val;
    code += "BLOCK" + loopnum + ": while (true) {\n";
    blocks[loopnum] = LOOP_NEW_ABORTABLE;

    statement();
    code += "}\n";

    if (blocks[loopnum] != LOOP_ABORTED)
        warn("FlooP: MU-LOOP without ABORT LOOP may run forever");
}

function quit() {
    var blocknum = "";

    scan();
    need("BLOCK");
    blocknum = need("NUMBER");

    if (blocks[blocknum] == LOOP_UNUSED)
        error("QUIT BLOCK refers to non-existent BLOCK");

    code += "break BLOCK" + blocknum + ";\n";
    need(";");
}

function abort() {
    var loopnum = "";

    scan();
    need("LOOP");
    loopnum = need("NUMBER");

    if (blocks[loopnum] != LOOP_ABORTABLE && blocks[loopnum] != LOOP_ABORTED)
        error("ABORT LOOP on non-abortable loop or non-loop");

    code += "break BLOCK" + loopnum + ";\n";
    need(";");
    blocks[loopnum] = LOOP_ABORTED;
}

function f_if() {
    code += "if (";

    scan();
    if (ns == "{") {
        scan();
        while (true) {
            expression();
            if (ns == "AND") {
                code += " && ";
                scan();
            } else if (ns == "OR") {
                code += " || ";
                scan();
            } else {
                break;
            }
        }
        need("}");
    } else {
        expression();
    }

    code += ") {\n";
    need(",");
    need("THEN");
    need(":");
    statement();
    code += "}\n";
}

function print() {
    scan();
    need("[");
    code += "BFloop.printstring(";

    while (true) {
        expression();
        if (ns != ",") break;
        scan();
        code += ", ";
    }

    need("]");
    code += ");\n";
    if (ns == ";") scan();
}

function assign() {
    if (ns == "OUTPUT") {
        code += "output";
        scan();
    } else if (ns == "CELL") {
        cell();
    } else {
        error("invalid syntax");
        while (ns != ";") scan();
        scan();
        return;
    }

    need("<=");
    code += " = ";
    expression();
    code += ";\n";
    if (ns == ";") scan();
}

function expression() {
    if (ns == "STRING") {
        val = val.replace("\\", "\\\\");
        val = val.replace("'", "\\'");
        code += "'" + val + "'";
        scan();
    } else if (ns == "YES") {
        code += "1";
        scan();
    } else if (ns == "NO") {
        code += "0";
        scan();
    } else {
        while (true) {
            term();
            if (ns == "=") {
                code += " == ";
            } else if (ns == "<") {
                code += " < ";
            } else if (ns == ">") {
                code += " > ";
            } else {
                break;
            }
            scan();
        }
    }
}

function term() {
    while (true) {
        factor();
        if (ns != "+") break;
        scan();
        code += " + ";
    }
}

function factor() {
    while (true) {
        primary();
        if (ns != "*") break;
        scan();
        code += " * ";
    }
}

function primary() {
    if (ns == "CELL") {
        cell();
    } else if (ns == "OUTPUT") {
        code += "output";
        scan();
    } else if (ns == "ID") {
        var id = val;
        scan();

        if (ns == "[") {
            scan();
            code += id + "(";
            while (true) {
                expression()
                if (ns != ",") break;
                scan();
                code += ", ";
            }
            need("]");
            code += ")";
            return;
        }

        for (var i=0, max=formals.length; i<max; i++) {
            if (formals[i] == id) break;
            if (i == max - 1) {
                id = id.replace(/q/, "?");
                id = id.replace(/_/, "-");
                warn("unknown variable " + id);
            }
        }

        code += id;
    } else if (ns == "NUMBER") {
        code += val;
        scan();
    } else {
        warn("unexpected " + descan(ns, val) + " found");
        scan();
    }
}

function cell() {
    scan();
    need("(");
    code += "cell[" + need("NUMBER") + "]";
    need(")");
}

/*********************/
/* Program Functions */
/*********************/

function printstring() {
    var output = " > ";
    for (var i=0; i<arguments.length; i++)
        output += arguments[i];

    outputFunc(output + "\n");
}

return {
  init: init,
  compile: compile,
  printstring: printstring
}
})();
