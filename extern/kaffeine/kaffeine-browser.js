// Brequire - CommonJS support for the browser
function require(p) {
  var path = require.resolve(p)
  var module = require.modules[path];
  if(!module) throw("couldn't find module for: " + p);
  if(!module.exports) {
    module.exports = {};
    module.call(module.exports, module, module.exports, require.bind(path));
  }
  return module.exports;
}

require.modules = {};

require.resolve = function(path) {
  if(require.modules[path]) return path
  
  if(!path.match(/\.js$/)) {
    if(require.modules[path+".js"]) return path + ".js"
    if(require.modules[path+"/index.js"]) return path + "/index.js"
    if(require.modules[path+"/index"]) return path + "/index"    
  }
}

require.bind = function(path) {
  return function(p) {
    if(!p.match(/^\./)) return require(p)
  
    var fullPath = path.split('/');
    fullPath.pop();
    var parts = p.split('/');
    for (var i=0; i < parts.length; i++) {
      var part = parts[i];
      if (part == '..') fullPath.pop();
      else if (part != '.') fullPath.push(part);
    }
     return require(fullPath.join('/'));
  };
};

require.register = function(path, fn) {
  require.modules[path] = fn;
};require.register('kaffeine/browser.js', function(module, exports, require) {
// start module: kaffeine/browser.js

(function() {
  var kaffeine = require("./kaffeine");

  function load(url, options, callback) {
    var xhr = new (window.ActiveXObject || XMLHttpRequest)('Microsoft.XMLHTTP');
    xhr.open('GET', url, true);

    if ('overrideMimeType' in xhr) {
      xhr.overrideMimeType('text/plain');
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        run(url, xhr.responseText, options);
        if(callback) callback(true)
        return
      }
    };
    try {
     xhr.send(null); 
    } catch(e) {
      console.log("failed loading: " + url)
    }
    return
  }

  function run(src, text) {
    var K = new kaffeine()
    var js = K.compile(text, { brequire_module: src.replace(/\.k/, "") });    
    eval(js)    
    //(Function(js))()
  }

  if (typeof window == "undefined" || window === null) {
    return;
  }

  function loadExternal(callback) {
    var scripts = document.getElementsByTagName('script');
    var to_run = []

    for(var i=0; i < scripts.length;i++) {
      var s = scripts[i]
      if(s.type.match(/kaffeine/) && s.src)
        to_run.push(s)
    }
    for(var i=0; i < to_run.length;i++) {
      var attr = to_run[i].attributes
      for(var i=0; i< attr.length;i++) {
        if(attr[i].nodeName == "src")
          var src = attr[i].value
      } 
      load(src)
    }
  }

  function runInternal() {
    var scripts = document.getElementsByTagName('script');
    for(var i=0; i < scripts.length;i++) {
      var s = scripts[i]
      if(s.type.match(/kaffeine/) && !s.src) {
        run(script.innerHTML)
      }
    }
  }

  if (typeof document != "document") loadExternal()

  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', runInternal, false);
  } else {
    attachEvent('onload', runInternal);
  }
}).call(this)

// end module: kaffeine/browser.js
});
;

require.register('kaffeine/index.js', function(module, exports, require) {
// start module: kaffeine/index.js

var Token = require("./token")

function Kaffeine(options) {
  this.options = options;
}

Kaffeine.fn = Kaffeine.prototype;
Kaffeine.VERSION = "0.0.4";
Kaffeine.plugins = {};

//unless brackets_for_keywords reverse_blocks indented_blocks
var jsp = require("./uglify/parse-js")
var pro = require("./uglify/process")

var defaultDirective = "multiline_strings string_interpolation hash at brackets_for_keywords operators prototype implicit_functions extend_for pre_pipe implicit_brackets implicit_return pipe bang default_args implicit_vars"

Kaffeine.fn.compile = function(text, uglify_opts) {
  if(!text.match(/\n$/)) text += "\n"; // trailing newline
  var directive = text.match(/^#\s*([^\n]*)\s*\n/) || [1,defaultDirective];
  var plugins = directive[1].replace(/\s+/g," ").replace(/ $/,"").split(" ");
  text = text.slice(directive[0].length);
  var ret =  this.runPlugins(text, plugins);
  
  if(uglify_opts) {
    
    var ast = jsp.parse(ret) // parse code and get the initial AST

    if(uglify_opts == "uglify") {
      ast = pro.ast_mangle(ast); // get a new AST with mangled names
      ast = pro.ast_squeeze(ast); // get an AST with compression optimizations
      ret = pro.gen_code(ast) // compressed code here
    }
    else if (uglify_opts == "beautify") 
      ret = pro.gen_code(ast, {beautify: true})
  }
  
  return ret
};

Kaffeine.fn.runPlugins = function(text, plugins, options) {
  text = "function(){ " + text + "\n}"; // wrap in closure so we have a global closure and also no problems with start and end of text
  var stream = Token.ize(text);
  //stream = Token.postprocess(stream);
  
  this.currentStream = stream
  
  stream.global = stream.find(function() { 
    if(this.curly) {
      return true;
    }
  });
  stream.global.global = true;

  options = options || {};
  
  for(var i=0; i<plugins.length; i++) {
    var name = plugins[i];
    var plugin = require("./plugins/"+name) //Kaffeine.plugins[name];
    if(!plugin) {
      throw(name + " - not loaded");
    }
    try {
      plugin.call(this, stream, Token, options[name] || {});     
      //stream.normalize() 
    } 
    catch(err) {
      err.plugin = name
      throw(err)
    }
  }
  return stream.head().collectText().replace(/^function\(\)\{/,"").replace(/\n\}$/,"");
};

// Kaffeine.fn.validate = function(text) {
//   try { 
//     new Function(text)
//   }
//   catch (err) {
//     err.invalidJS = true
//     throw(err);
//   }
//   return text
// }


//Kaffeine.plugins[p] = require("./plugins/"+p)[p]

if(require.extensions) {
  require.extensions['.k'] = function(module, filename) {
    var fs = require('fs'),
        input = fs.readFileSync(filename, 'utf8'),
        content = (new Kaffeine()).compile(input)
    module.filename = filename + " (compiled)"
    module._compile(content, module.filename)
  }
}


module.exports = Kaffeine;

// end module: kaffeine/index.js
});
;

require.register('kaffeine/plugins/at.js', function(module, exports, require) {
// start module: kaffeine/plugins/at.js

var Token = require("../token");

module.exports = function(stream) {

  stream.each(function() {
    if(this.unknown && this.text == "@") {
      var word = "this"

      if(this.next.text == "@") {
        this.next.remove()  
        word = "this.constructor"
      }

      var token = new Token.word(word)
      token.was_at_symbol = true
      this.replaceWith(token)
      if(token.next.word && !token.next.lbracket) 
        token.after(new Token.operator("."))
      return token
    }
  })
}



// end module: kaffeine/plugins/at.js
});
;

require.register('kaffeine/plugins/bang.js', function(module, exports, require) {
// start module: kaffeine/plugins/bang.js


var Token = require("../token");

module.exports = function(stream) {

  stream.each(function(token) {
    if(!token.bang) return    
    
    var lbracket = token.next;
    
    
    
    if(!lbracket || !lbracket.lbracket || !lbracket.round) {

      var pair = Token.bracket.pair("()")
      token.after(pair.L)
      pair.L.after(pair.R)
      lbracket = token.next;
    
    }

    
    var indent = token.indent();
    
    var func = token.expressionStart(function() { if(this.operator && this.text != ".") return true}) // break on operators
    var func_before = func.prev
    

    var rbracket = lbracket.matching
    
    var before_start = func.lineStart ()
    var vars = []
    
    // console.log("before_start", before_start.collectText())

    var fn = token.findClosure()
    var x = fn.asyncBangCount || 0
    var args = "_" + x
    
    if(func_before && func_before.assign) {
      var vars = before_start.collectText(func_before.prev).split(", ")
      var v = []
      for(var i=0;i<vars.length;i++) {
        v.push("_" + (i+x))
      }
      args = v.join(", ")
    }

    // debugger
    var brackets = 0
    var before = null
    
    if(func == before_start) {
      var brackets = 0
    }
    else {
      var before = before_start.remove(func.prev)
    
      before.each(function() {
        if(this.lbracket) brackets++
        if(this.rbracket) brackets--      
      })
      
    }
    
    var start_after_fn = rbracket.next        

    var end_after_fn = start_after_fn.find(function() {
     
      if(this.lbracket) return this.matching.next
      if(this.rbracket) {
        if(brackets == 0) return true
        else brackets--
      }
      if(this.__break) return true
      if(this.next.text == "---") {
        var text = this.next.myText();
        this.next.replaceWith(text.replace("---", "   "))
        this.next.__break = true
      }
    })
    
    var after    
    if(start_after_fn == end_after_fn) {
      // debugger
      // if(!start_after_fn.rbracket ) 
      //         after = start_after_fn.remove(end_after_fn)
      // console.log("start_after_fn", start_after_fn.text)
    } else {
      after = start_after_fn.remove(end_after_fn.prev)      
    }
    
    var before_text = before ? before.collectText() : ""
    

    if(before_text.match(/^[ \n]*$/)) {
      args = ""
      if(before_text) func.before(before_text)
    } 
    
    
    if(lbracket.next == rbracket) {
      num_func_args = 0
    } else {
      var func_args = lbracket.next.collectText(rbracket.prev)
      var num_func_args = func_args.split(",").length
    }


    if(after)
      after.find(function() {
        if(this.was_at_symbol) {
          var ffn = this.findClosure()
          if(!ffn) {
            fn.vars._this = "this"
            this.text = "_this"
          }
        }
      })



    

    if(args == "" && after && !after.myTextNoComments().match(/^[ \n]*$/)) {
      args = "_" + (x); x++
    }
        
    if(vars.length > 1) {
      var a = []
      for(var i=0; i<vars.length ; i++, x++) {
        a.push(vars[i] + " = " + "_" + x)
      }
      before_text = a.join(", ")    
        
    } else {
      x++
      before_text += args 
    }
    
    var funct = before_text + (after ? after.collectText() : "")
    
    var body = Token.ize("function(" + (args) + ") { " + funct + " }")
    
    
    if(num_func_args > 0) rbracket.before(", ")

    rbracket.before(body)

    token.text = token.text.replace(/!/,"")
    
    body.next.matching.nextNW().updateBlock()  // implicit vars etc

    body.block.asyncBangCount = x
    // func.before(indent)
  })
}

// var Token = require("../token");
// 
// module.exports = function(stream) {
//   stream.each(function(token) {
// 
//     if(!token.bang) return    
//     
//     var lbracket = token.next
//     
//     var func = token.expressionStart()
//     
//     var indent = token.indent()
//     
//     var vars = ""
//     if(func.prev.assign) {
//       var e = func.prev.prev
//       var s = e.expressionStart()
//       vars = s.remove(e).collectText()
//       func.prev.remove()
//     }
//     
//     var rbracket = lbracket.matching
//     
//     var start_fn = rbracket.next
//     var end_fn = start_fn.find(function() {
//       if(this.lbracket) return this.matching.next
//       if(this.rbracket) return true
//     })
//     
//     var body = start_fn.remove(end_fn.prev)
//     
//     var fn = this.findClosure()
//     body.find(function() {
//       if(this.was_at_symbol) {
//         var ffn = this.findClosure()
//         if(!ffn) {
//           fn.vars._this = "this"
//           this.text = "_this"
//         }
//       }
//     })
//     
//     body = body.collectText()
//     var endsWithNL = body.match(/\n *$/)
//     body = body.replace(/\n/g, "\n  ")
//     // if(!body.match(/\n$/))
//     //       body += "\n"
//     //     body += indent
//     body += " "
//     
//     body = body.replace(/\s*\n( *)$/, function(a, b) { 
//       return "\n" + b;
//     })
//     
// 
//     if(!endsWithNL)
//       body = body.replace(/\n *$/, " ") 
//     var text = "function(" + vars + ") {"  + body + "}"
//     
//     if(lbracket.next != rbracket)
//       text = ", " + text
//     
//     var tokens = Token.ize(text)
//     tokens.banged_function = true
//     
//     rbracket.before(tokens)
//     // if(!rbracket.next.newline)
//     //   rbracket.after("\n")
//     //token.bang = false
//     token.text = token.text.slice(0,token.text.length-1)
//     return token.next
//   })
// }


// end module: kaffeine/plugins/bang.js
});
;

require.register('kaffeine/plugins/brackets_for_keywords.js', function(module, exports, require) {
// start module: kaffeine/plugins/brackets_for_keywords.js

var Token = require("../token");

module.exports = function(stream) {
  var ks = ["if", "for", "while", "catch"]  

  stream.each(function() {
    if(ks.indexOf(this.text) < 0 ) return
    
    var n = this.nextNW()
    if(n.lbracket && n.round) return
    
    var pair = Token.bracket.pair("()")
    
    var tok = this
    
    var end = this.find(function(token) {
      if(token.lbracket && token.curly) return true
      if(token.lbracket) return token.matching
      if(token.newline) return true
      if(token.text == ",") {
        if(token.prev.prev != tok) {
          return true
        }
      }
    })
    

    // console.log("end", end.text)
    // var end = this.nextNW().expressionEnd(function() {
    //   if(this.text == ",") return true
    // }).next
    
    if(end.text == ",") {
      end.spitRight()
      end = end.next
      end.prev.remove()
    }

    if(end.operator && !end.unary_operator) {
      end = end.expressionEnd().next
    }
        
    if(!end.whitespace)
      end.spitRight()
    
    if(this.next.whitespace) this.next.remove()
    this.after(pair.L)
    var eaten = pair.L.next.eaten.left[0]
    if(eaten && eaten.space)
      pair.L.next.spitLeft().remove()
  
    var eaten = this.eaten.right[0]
    if(eaten && eaten.space)
      this.spitRight().remove()
    
    var curly = end.curly ? end : null;
    
    if(end.prev.whitespace) end = end.prev
    if(end.operator) {
      end.spit(function() { return this.whitespace})
      end = end.next
    }
    end.before(pair.R)
    
    var eaten = pair.R.prev.eaten.right[0]
    if(eaten && eaten.space) {
      pair.R.prev.spitRight().remove()
      pair.R.after(" ")
    }
    
    if(curly)
      curly.updateBlock()
    //if(end.operator) end.replaceWith(new Token.whitespace(" "))
    
    this.addImpliedBraces()
  })

}


// end module: kaffeine/plugins/brackets_for_keywords.js
});
;

require.register('kaffeine/plugins/default_args.js', function(module, exports, require) {
// start module: kaffeine/plugins/default_args.js

var Token = require("../token");

module.exports = function(stream) {

  stream.each(function() {
    if(this.text != "function") return 
    var block = this.block
    var bracket = this.block.prevNW().matching
    
    var inserts = []
    this.find(function() {    
      if(this == bracket.matching) return true
      if(this.text == "=") {
        var v = this.prev.text
        var e = this.next.expressionEnd(function() {
          if(this.text == ",") return true
        })
        var val = this.next.remove(e).collectText()
        var ret = this.prev
        this.remove()
        
        inserts.push(v +" = " + v + "==null ? " + val + " : " + v)
        return ret
      }
    })
    
    if(inserts.length)
      this.block.after(" " + inserts.join(", ") + ";")
    
    block.args = block.findArgs()
  })
}



// end module: kaffeine/plugins/default_args.js
});
;

require.register('kaffeine/plugins/extend_for.js', function(module, exports, require) {
// start module: kaffeine/plugins/extend_for.js

var Token = require("../token");
module.exports = function(stream) {
  
  stream.each(function() {
    if(this.keyword && this.text == "for") { 
      var text = "",
          bracket = this.next,
          skip = false,
          toks = [], var2, var1, loopWord,
          complex
          
      var closingBracket = bracket.matching

      bracket.next.find(function() {      
        if(this.next == closingBracket) return true
        if(this.semi) { skip = true; return true }
        if(this.word && (this.text == "in" || this.text == "of") ) loopWord = this
        if(this.round) complex = true
        toks.push(this)
      })
      
      var var1 = toks[0]
      if(toks[1].text == ",") var2 = toks[2]
      if(skip) return closingBracket.next
      
      if(complex) {
        loopWord.next.next.cacheExpression()
      }

      var expressionText = loopWord.next.next.collectText(closingBracket.prev)          
      if(expressionText.match(/ /)) expressionText = "(" + expressionText +")"
      var iter, val
      var closure = this.findClosure()
      
      /*function wrapSingleLineBlock() {
        if(!this.block) {
          var pair = Token.bracket.pair("{}")
          closingBracket.after(" ").after(pair.L)
          var nl = 2
          var indent = brace.indent()
          
          var next = pair.L.nextNW()
          if(next.block) {
            var tok = next.block.matching
            if(tok.next.whitespace)
              tok = tok.next
          }
          else if(next.bracelessBlock) {
            var tok = next.bracelessBlock.end
            if(tok.next.whitespace)
              tok = tok.next
          }
          else {
            var tok = closingBracket.find(function() {
              if(this.newline) nl--
              if(nl == 0) return true
            })
          }
          
          tok.after(pair.R)
          if(indent)
            pair.R.before(indent)
          pair.R.after("\n")
          pair.L.updateBlock()
        }
      }*/
      
      var brace = bracket.matching.find(function() { if(this.curly) return true })
      
      if(loopWord.text == "in") { 
        if(!var2) return // nothing to do !
        
        brace.implied = false
        brace.matching.implied = false
        
        var2.prev.remove(var2) 
        iter = var1.text
        val = var2.text
        closure.vars[iter] = true
        closure.vars[val] = true
        
      } else {
        brace.implied = false
        brace.matching.implied = false

        bracket.next.remove(closingBracket.prev)
        iter = var2 ? var2.text : closure.getUnusedVar()
        
        val = var1.text
        closure.vars[iter] = true
        closure.vars[val] = true
        
        var string = iter + " = 0; " + iter + " < " + expressionText + ".length; " + iter + "++"
        bracket.after(string)          
        
      }
      
      var text = " "/* + this.indent()*/ + val + " = " + (complex ? "_xpr" : expressionText) + "[" + iter + "];"
            
      this.block.after(text)
     
      return 
    }
  })
}

// end module: kaffeine/plugins/extend_for.js
});
;

require.register('kaffeine/plugins/hash.js', function(module, exports, require) {
// start module: kaffeine/plugins/hash.js

var Token = require("../token");

module.exports = function(stream) {

  stream.each(function() {
    if(this.unknown && this.text == "#") {
      var word = "arguments"
      
      if(!this.next.word)
        word += "[0]"
      else {
        word += "[" + this.next.remove().collectText() + "]"
      }
      ret = this.next
      this.replaceWith(word)
      return ret
    }
  })
}



// end module: kaffeine/plugins/hash.js
});
;

require.register('kaffeine/plugins/implicit_brackets.js', function(module, exports, require) {
// start module: kaffeine/plugins/implicit_brackets.js

var Token = require("../token");

module.exports = function(stream) {
  var nobrackets_keywords = {"for":1, "if":1, "while": 1, "new":1,"return":1,"var":1,"throw":1, "in":1,"of":1, "typeof":1, "instanceof":1, "else": 1, "try":1, "catch": 1, "class": 1}
  
  stream.tail().each(function() {
    var ws = this.next
    if(!ws || !ws.space || !ws.next) return
    if(this.word && ((nobrackets_keywords[this.text] && this.prev.text != ".") || this.block)) return
    if(nobrackets_keywords[ws.next.text]) return
    if(this.matching) {
      var prev = this.matching.prevNW()
      if(["for", "if", "while", "else", "catch"].indexOf(prev.text) >= 0)
        return
    } 
    var nn = ws.next
    var match = (this.word || this.rbracket) && (nn.word || nn.lbracket || nn.string) && (nn.blockType != "function")  
    
    if(!match) return
    
    var end = nn.expressionEnd(function() {
	    if(this.text == "," && this.next.next.text == ":") return true
	  }) 

    if(end == null) return
    
    var pair = Token.bracket.pair("()")
    ws.replaceWith(pair.L)
    if(end.whitespace) end = end.prev
    end.after(pair.R)
  }, "prev")
}

// end module: kaffeine/plugins/implicit_brackets.js
});
;

require.register('kaffeine/plugins/implicit_functions.js', function(module, exports, require) {
// start module: kaffeine/plugins/implicit_functions.js

var Token = require("../token");

module.exports = function(stream) {
  stream.each(function(token) {
    
    if(token.blockType != "object") return
    if(token.next == token.matching) return // empty object    
    if(token.nextNW().next.text == ":") return // must be an object
    
    var text = "function"
    var prev = token.prevNW()
    
    if(prev.text == ")")
      prev.matching.before("function")
    else
      token.before("function() ")
    
    token.updateBlock()
  })
}


// end module: kaffeine/plugins/implicit_functions.js
});
;

require.register('kaffeine/plugins/implicit_return.js', function(module, exports, require) {
// start module: kaffeine/plugins/implicit_return.js

var Token = require("../token");
module.exports = function(stream) {
  stream.each(function() {
    if(!this.blockType || this.blockType != "function") return
    
    if(this.global) return

    var end = this.matching.prev.findRev(function(tok) {
       return (tok.whitespace || tok.semi) ? null : true
    })
    
    if(end == this || end.text == "return") return  // probably an empty function

    
    // sure this could be a bit neater
    var start = end.findRev(function(tok) {
      if(tok.rbracket) {
        return tok.matching        
      }
      else if(tok.lbracket && tok.curly) {
        var type = tok.blockType
        if(type == "function") {
          return tok.prev.findRev(function(t) { 
              if(t.text == "function") return true 
             })
        }
        else if(type == "object") {
          if(tok.prev.whitespace || tok.prev.semi || tok.prev.lbracket) 
            return true
        }
        else return false          
      }
      else if(tok.prev.whitespace) {
        if(tok.prev.prev.text == "new") return tok.prev.prev
        else return true
      }
      else if(tok.prev.semi  || tok.prev.lbracket) 
        return true
      else 
        return null
    })
    
    if(!start) return
    if(start.text == "return") return
    
    
    if(start.prev.prev) {
      var t = start.prev.prev.text
      if(t == "throw" || t == "return") return 
    }
    
    start
      .before(new Token.whitespace(" "))
      .before(new Token.word("return"))
    
  })
}

// end module: kaffeine/plugins/implicit_return.js
});
;

require.register('kaffeine/plugins/implicit_vars.js', function(module, exports, require) {
// start module: kaffeine/plugins/implicit_vars.js

var Token = require("../token");
module.exports = function(stream) {
  var stack = [], variable, current, closure
  
  // remove vars
  stream.each(function(token) {  
    var ret = token.prev
    if(token.text != "var") return
    if(token.next.space)
      token.next.remove()
    token.remove()
    return ret
  })
  
  stream.each(function(token) {    
    if(!token.assign) return 
    variable = token.prev.text
    
    if(!/^[A-Za-z0-9$_]*$/.test(variable)) return
    if(token.prev.prev.operator && token.prev.prev.text != ",") return
    if(token.prev.prev.prev.text == "var") return
    current = closure = this.findClosure()
    var found = false
    
    while(current) {
      
      if(current.vars[variable] || current.args[variable]) {
        found = true
        break
      }
      current = current.parent
    }
    
    if(!found) {
      // console.log("current", variable)
      closure.vars[variable] = true
    }
  })

}


// end module: kaffeine/plugins/implicit_vars.js
});
;

require.register('kaffeine/plugins/multiline_strings.js', function(module, exports, require) {
// start module: kaffeine/plugins/multiline_strings.js

var Token = require("../token");
module.exports = function(stream) {
  var reg = /\n/
  stream.each(function() {
    if(!this.string || !reg.test(this.text)) return
    
    this.text = this.text.replace(/(\\)?\n/g, function(str, escape) {
      return escape ? "\\\n" : "\\n\\\n"
    })
  })
}

// end module: kaffeine/plugins/multiline_strings.js
});
;

require.register('kaffeine/plugins/operators.js', function(module, exports, require) {
// start module: kaffeine/plugins/operators.js

var Token = require("../token");
module.exports = function(stream) {
  stream.each(function(token) {
    if(!token.operator) return
    
    if(token.text == "||=")
      var op = "|| "
    else if(token.text == ".=")
      var op = "."
    else return
    
    optoken = token.after(op)  
    token.text = "="

    var lhs = "" 
    token.prev.findRev(function(token) {
      if(token.whitespace || token.unknown) return true
      lhs = token.text + lhs
    })

    var tokens = Token.ize(lhs)    
    if(op != "." ) tokens.tail().eaten.right.push(Token.ize(" "))
    token.after(tokens, tokens.tail())
    
  })
  
  // extend
  var inserted = false
  stream.each(function(token) {
    if(token.text != "<-") return 
    var arrow = this
    var L = this.expressionStart()
    var lhs = L.remove(arrow.prev).collectText()

    var R = arrow.next.expressionEnd(function() {
    })

    var rhs = arrow.next.remove(R).collectText()
    var ret = arrow.prev
    arrow.replaceWith("__extend(" + lhs + ", " + rhs + ")")
    //token.global.vars['__extend'] = __extend.toString()
    
    if(!inserted) {
      var g = stream.block
      if(!g.global) throw "WTF!"
      g.matching.before(new Token.word(__extend))
      inserted = true
    }
    return ret
  })
}

var __extend = "\nfunction __extend(a,b) {\n\
  var c = {}, i;\n\
  a = a || {};\n\
  for(i in a) c[i] = a[i];\n\
  for(i in b) c[i] = b[i];\n\
  return c;\n\
}"

// end module: kaffeine/plugins/operators.js
});
;

require.register('kaffeine/plugins/pipe.js', function(module, exports, require) {
// start module: kaffeine/plugins/pipe.js

var Token = require("../token");
module.exports = function(stream) {

  stream.each(function() {
    if(this.text != "|") return
    var pipe = this
	  var L = this.expressionStart()
    var lhs = L.remove(pipe.prev) //.collectText()

    var R = pipe.next.expressionEnd(function() {
     return this.text == "|"
    })

    var rhs = pipe.next.remove(R) //.collectText()
    var ret = pipe.prev
    
    pair = Token.bracket.pair("()")
    
    tokens = Token.ize("__." + pipe.pipe_function + ".call")
    tokens.append(pair.L)
    tokens.append("this, ")
    tokens.append(lhs)
    tokens.append(", ")
    tokens.append(rhs)
    tokens.append(pair.R)
    
    pipe.replaceWith(tokens) //"__." + pipe.pipe_function + ".call(this, " + lhs + ", " + rhs + ")")
    return ret
  })

}



// end module: kaffeine/plugins/pipe.js
});
;

require.register('kaffeine/plugins/pre_pipe.js', function(module, exports, require) {
// start module: kaffeine/plugins/pre_pipe.js

var Token = require("../token");
module.exports = function(stream) {

  stream.each(function() {
    if(this.text == "|" || this.text == "|.") {
      var L = this.expressionStart()
      
      if(this.text=="|." || this.next.assign) {
        this.text = "__" + this.text.slice(1)
        delete this.operator 
        this.word = true
        return 
      }
      
      if(this.text != "|")
        throw("unknown pipe operation")
      
      var fn = this.next
      this.pipe_function = this.next.text
	  this.next.remove()
	  if(this.next.whitespace) this.next.remove()
	  return this.next
    }
  }) 
}

// end module: kaffeine/plugins/pre_pipe.js
});
;

require.register('kaffeine/plugins/prototype.js', function(module, exports, require) {
// start module: kaffeine/plugins/prototype.js

var Token = require("../token");
module.exports = function(stream) {

  var klass = ""
  stream.each(function() {
    
    if(this.namedFunction) {
      klass = this.namedFunction.text
      return
    }

    if(this.word && this.text == "prototype") {
      if(this.prev.text == ".")
        klass = this.prev.prev.text
      return
    }
    
    var ret = this.next
    
    if(this.text == "::") {
      this.spit(function() { return this.whitespace})
      var text = ".prototype."
      if(this.prev.word)
        klass = this.prev.text
      else
        text = klass + text
      this.replaceWith(text)
    }
    return ret
  })
}



// end module: kaffeine/plugins/prototype.js
});
;

require.register('kaffeine/plugins/string_interpolation.js', function(module, exports, require) {
// start module: kaffeine/plugins/string_interpolation.js

var Token = require("../token");
module.exports = function(stream) {
  stream.each(function() {
    if(!this.string) return
    
    // combine nested
    if(/#{"$/.test(this.text)) {
      var text = ""
      var end = this.next.find(function() {
        text += this.text
        if(this.string && /^"}/.test(this.text))
          return true
      })
      this.text += text
      this.next.remove(end)
    }
    
    if(/^".*[#]/.test(this.text)) {
      var ret = this.next
      var string = expandOnce(this.text)
      this.replaceWith(string)
      return ret
    }
    return
  })
  
  // remove double brackets
  stream.each(function() {
    if(this.lbracket && this.round && this.next.lbracket && this.next.round) {
      var n = this.matching.prev
      if(n.rbracket && n.round) {
        this.next.remove()
        n.remove()
      }
    }
  })
    
}

// partially borrowed from visionmedia's Jade
//var regSimple = /(\\)?[$]([A-Za-z0-9.@_]+)/g
var regComplex = /(\\)?#{(.*?)}/g

function expandOnce(text) {
  var changed = false
  var interp = text.replace(regComplex, function(str, esc, code) {
           if(!esc) changed = true 
           return esc ? str.slice(1) : '" + (' + code.replace(/\\"/g,'"') + ') + "';      
         })
  if(changed) 
    interp = "(" + interp + ")"
  
  //interp = interp.replace('"" + ', "")
  interp = interp.replace(' + ""', "")
  return interp
}


// end module: kaffeine/plugins/string_interpolation.js
});
;

require.register('kaffeine/plugins/undouble_brackets.js', function(module, exports, require) {
// start module: kaffeine/plugins/undouble_brackets.js

var Token = require("../token");

module.exports = function(stream) {
  stream.each(function() {
    if(this.lbracket && this.round && this.next.lbracket && this.next.round) {
      var n = this.matching.prev
      if(n.rbracket && n.round) {
        this.next.remove()
        n.remove()
      }
    }
  })
}


// end module: kaffeine/plugins/undouble_brackets.js
});
;

require.register('kaffeine/token.js', function(module, exports, require) {
// start module: kaffeine/token.js

var inherits = function(child, parent) {
  var ctor = function(){ };
  ctor.prototype = parent.prototype;
  child.__super__ = parent.prototype;  
  child.prototype = new ctor();
  child.prototype.constructor = child;
  child.fn = child.prototype
};

function base(text) { 
  this.text = text; 
  this.id = base.id++;
  this.eaten = {left:[], right:[]}
}

base.id = 0
base.fn = base.prototype
base.klasses = [whitespace, word, string, comment, regex, operator, bracket, semi]

function preprocess(text) {
  text = text.replace(/\t/g, "  ").replace(/ *\n/g, "\n").replace(/\r\n|\r/g,"") 
  return text
}

function /*Token*/ize(input) {
  input = preprocess(input)
  var klass, match, i, index = 0, head, tail
  for(i=0; i< base.klasses.length; i++)
    base.klasses[i].match = undefined

  while(index < input.length) {
    for(i=0; i< base.klasses.length; i++) {
      klass = base.klasses[i]
      match = base.getMatch(klass, index, input)
      if(match) break
    }
    if(match) {
      emit(new klass(match))
      index += match.length
    } else {
      emit(new unknown(input.charAt(index)))
      index += 1 
    }
  }
  
  function emit(token) {
    if(tail) {
      tail.next = token
      token.prev = tail
      tail = token
    }
    else 
      head = tail = token
  }
  head = postprocess(head)
  return head
}

function postprocess(stream) {
  
  // match brackets
  var stack = []
  stream.each(function() { 
    if(this.bracket)  
      if(this.lbracket) 
        stack.push(this)
      else
       this.matchWith(stack.pop())
  })
  
  if(stack.length)
    throw "unmatching number of brackets" 
  // sort out block types
  stream.each(function() {   
    if(this.curly && this.lbracket) this.updateBlock()
  })
  
    // remove comments & hungry operators & hungry left round brackets  
  stream.normalize()
  return stream
}

// normalize is at the start and run after ever plugin
// it ensures various assumptions are true ...
base.fn.normalize = function() {
  this.each(function() {
    var next = this.next    
  
    // there are never 2 space tokens next to each other
    if(this.next && this.next.whitespace && ["for"].indexOf(this.text) >= 0 ) {
      this.eatRight()
    }
    
    if(this.space) {
      if(next && next.space) {
        this.eatRight(function() { return this.space })
      }
    } 
    else if(this.comment) {
      // comments are eaten by their next..
      next.eatLeft()
      return next.prev    
    }
    else if(this.operator) {
      // operators are never adjacent to whitespace 
      this.eat(function() { return this.whitespace })
      this.eat(function() { return this.whitespace })
    }

    else {
      // brackets next have previous whitespace
      if(this.rbracket && this.prev.whitespace && !this.matching.global)
        this.eatLeft()

    }
  })
  
  // now let's assign code blocks to keywords without {}'s
  this.each(function() {
    this.addImpliedBraces()
  })
}

base.fn.addImpliedBraces = function() {
 
  if(this.block || ["if", "for", "while", "try", "else", "catch"].indexOf(this.text) < 0) return
  
  var closingBracket = this.next.matching
  // require's brackets
  if(!closingBracket) return

  function end(tok) {
    if(tok.block) return tok.block.matching
    if(["if", "for", "while", "try", "else", "catch"].indexOf(tok.text) >= 0)
      return end(tok.next.matching.nextNW())
    return tok.find(function() {
      if(this.lbracket) return this.matching
      if(this.next.newline) return true
      if(this.next.rbracket && this.next.curly) return true
    })
  }
    
  var pair = bracket.pair("{}")
  pair.L.implied = true
  pair.R.implied = true
  
  var next = closingBracket.nextNW()

  end(next).after(pair.R)
  closingBracket.after(" ").after(pair.L)
  
  var indent = this.indent()
  
  pair.R.before(" ")
  //pair.R.before(pair.L.next.newline ? "\n" + indent : " ")  
  pair.L.updateBlock()
  pair.L.eatLeft()
  pair.R.eatLeft()
  if(pair.R.prev.whitespace)
    pair.R.eatLeft()
  return 
}

base.fn.after = function(head) {
  if(typeof head == "string") head = /*Token.*/ize(head)
  tail = head.tail()
  if(this.next) {
    this.next.prev = tail
    tail.next = this.next
  }
  this.next = head
  head.prev = this
  return tail
}

    
base.fn.before = function(head) {
  if(typeof head == "string") head = /*Token.*/ize(head)
 
  tail = head.tail()
  if(this.prev) {
    this.prev.next = head
    head.prev = this.prev
  }
  this.prev = tail
  tail.next = this
  return head
}

base.fn.head = function() {
  var tok = this
  while(tok.prev) tok = tok.prev
  return tok   
}

base.fn.tail = function() {
  var tok = this
  while(tok.next) tok = tok.next
  return tok
}

base.fn.remove = function(tail) {
  tail = tail || this
  if(tail.next) tail.next.prev = this.prev  
  if(this.prev) this.prev.next = tail.next
  tail.next = null
  this.prev = null
  return this
}

base.fn.replaceWith = function(head) {
  if(typeof head == "string") head = /*Token.*/ize(head)
  var tail = this.after(head)
  this.remove()
  return tail
}

base.fn.append = function(tokens) {
  if(typeof tokens == "string") tokens = /*Token*/ize(tokens)
  var tail = this.tail()
  tail.next = tokens
  tokens.prev = tail
}


base.fn.find = function(fn, skip) {
  var token = this
  var i = 0
  while(token) {
    var result = fn.call(token, token, i++)
    if(result === true) {
      if(!skip) return token
      else skip--
    }
    if(result === false) return null
    token = result ? result : token.next    
  }
}

base.fn.findRev = function(fn, skip) {
  var token = this
  var i = 0
  while(token) {
    var result = fn.call(token, token, i++)
    if(result === true) {
      if(!skip) return token
      else skip--
    }
    if(result === false) return null
    token = result ? result : token.prev
  }
}

base.fn.prevNW = function() {
  return this.prev.findRev(function() {
    if(!this.whitespace) return true
  })
}

base.fn.nextNW = function() {
  return this.next.find(function() {
    if(!this.whitespace) return true
  })
}


  
base.fn.lineStart = function(breakFn) {
  var s = this.findRev(function() {
    var x = this

    if(this.rbracket) return this.matching
    x = x.prev
    y = x.prev
    
    if(x.lbracket && x.curly && x.blockType != "object") {
      return true
    }
    // if(x.assign) return true
    if(x.semi) {
      return true
    }
    if(x.whitespace) {
      if(y.word) return true
      if(y.rbracket) return true
      // if(y.whitespace) return true
    }
    
    
    // if(breakFn && breakFn.call(x,x)) return true
  })
  
  if(s.whitespace) s = s.nextNW()
  return s
}
base.fn.expressionStart = function(breakFn) {
  return this.findRev(function() {
    var x = this
    if(this.rbracket) return this.matching
    x = x.prev
    if(x.whitespace || x.semi || x.assign || x.lbracket) return true // || x.comparison
    if(breakFn && breakFn.call(x,x)) return true

  })
}


base.fn.expressionEnd = function(breakFn) {
  return this.find(function() {
    if(this.lbracket) return this.matching
    if(this.block) return this.block
    var x = this.next
    if(x.whitespace || x.semi || x.assign || (x.rbracket )) return true // || x.comparison
    if(breakFn && breakFn.call(x,x)) return true
  })
}

base.getMatch = function(klass, index, input) {
  if(klass.match === false) return

  if(!klass.match || klass.match.index < index) {  
    klass.match = null
    klass.regex.lastIndex = index
    klass.match = klass.regex.exec(input)
    if(!klass.match) klass.match = false 
  }

  if(klass.match && klass.match.index == index)
    return klass.extract ? klass.extract(index, input) : klass.match[0]
}

base.fn.each = function(fn, dir) {
  var tok = this
  dir = dir || "next"
  while(tok) {
    var result = fn.call(tok, tok)
    if(result === false) break
    last = tok
    tok = result instanceof base ? result : tok[dir] // skip to result if it's a token
  }
  return last.head()
}

base.fn.eat = function(test) {
  this.eatLeft(test)
  this.eatRight(test)
}

base.fn.eatLeft = function(test) {
  var token = this.prev  
  if(token && (!test || test.call(token))) {
    token.remove()
    this.eaten.left.unshift(token)
    this.newline = this.myText().match(/\n/) 
  }
}

base.fn.eatRight = function(test) {
  var token = this.next  
  if(token && (!test || test.call(token))) {
    token.remove()
    this.eaten.right.push(token)
    this.newline = this.myText().match(/\n/)
  }
}

base.fn.spit = function(test) {
  this.spitLeft(test)
  this.spitRight(test)
}

base.fn.spitLeft = function(test) {
  var token = this.eaten.left.shift()
  if(token && (!test || test.call(token))) {
    this.before(token)
    this.newline = this.myText().match(/\n/)
  }
  return token
}

base.fn.spitRight = function(test) {
  var token = this.eaten.right.pop()
  if(token && (!test || test.call(token))) {
    this.after(token)
    this.newline = this.myText().match(/\n/)
  }
  return token
}


base.fn.myTextNoComments = function() {
  return this.comment ? "" : this.myText()
}

base.fn.myText = function() {
  var text = [], vars
  if(this.implied) return ""
  
  for(var i=0; i<this.eaten.left.length; i++)
    text.push(this.eaten.left[i].myText())
      
  text.push(this.text)
  
  if(this.vars) {
    vars = this.declareVariables()
    this.nextNW().before(new word(vars))
    //text.push(vars)
  }
  for(var i=0; i<this.eaten.right.length; i++)
    text.push(this.eaten.right[i].myText())
  return text.join("")
}

base.fn.collectText = function(end) {
  var text = [], token = this
  while(token) {
    text.push(token.myText())
    if(token == end) break
    token = token.next
  }
  return text.join("")
}

base.fn.collectTextNoComments = function(end) {
  var text = [], token = this
  while(token) {
    text.push(token.myTextNoComments())
    if(token == end) break
    token = token.next
  }
  return text.join("")
}



base.fn.findClosure = function() {
  var parent = this.prev.findRev(function(tok) {
    if(tok.rbracket) return tok.matching.prev // skip behind
    if(tok.blockType == 'function') return true
  })
  this.parent = parent  //|| this.head() // i,e if not found we're in the global scope
  return this.parent
}

base.fn.prevNewline = function(includeThis, skipBrackets) {
  var start = includeThis ? this : this.prev
  var nl = start.findRev(function(tok) {
    if(tok.newline) return true
    if(skipBrackets && tok.rbracket) return tok.matching.prev // skip behind
  })
  return nl 
} 

base.fn.nextNewline = function(includeThis, skipBrackets) {  
  var start = includeThis ? this : this.next
  var nl = start.find(function(tok) {
    if(tok.newline) return true
    if(skipBrackets && tok.lbracket) return tok.matching.next // skip over
  })
  return nl
}

base.fn.nextNewlineOrRbracket = function() {  
  return this.next.find(function(tok) {
    if(tok.rbracket) return true
    if(tok.newline) return true
    if(tok.lbracket) return tok.matching.next // skip over
  })
}

base.fn.followingWhitespaceWithNewline = function() {
  return this.next.find(function() {
    if(this.newline) return true
    if(this.whitespace) return null
    return false
  })
}


base.fn.indent = function() {
  var nl = this.prevNewline("include")
  if(!nl) return ""
  //return nl.next.whitespace ? nl.next : ""
   var text = nl.next.myText()
   var match = text.match(/^( *)/)
   return match ? match[1] : ""
}

base.fn.getUnusedVar = function(prefix) {
  var num = 10, name
  prefix = prefix || "_"
  while(true) {
    name = (num).toString(36)
    if(!this.vars[prefix + name])
      break
    num++
  }
  return prefix + name
}

base.fn.cacheExpression = function(name) {
  name = name || "_xpr"
  var pair = bracket.pair("()")
  var closure = this.findClosure()
  closure.vars[name] = true
  this.expressionStart().before(new operator("=")).before(new word(name)).before(pair.L)
  this.expressionEnd().after(pair.R)
}


function unknown(text) { 
  base.call(this, text)
}
inherits(unknown, base)
unknown.fn.unknown = true

function whitespace(text) { 
  base.call(this, text)
  this.newline = /\n/.test(text);  
  this.space = !this.newline
}
inherits(whitespace, base)
whitespace.fn.whitespace = true
whitespace.regex = / +|\n/g



var keywords = "if for while else try catch function return var".split(" ")

function word(text) { 
  base.call(this, text)
  if(keywords.indexOf(text) >= 0)
    this.keyword = true
  
  if(text.match(/!$/))
    this.bang = true
}

inherits(word, base)
word.fn.word = true
word.regex = /[A-Za-z0-9_$]+!?/g

function string(text) { 
  base.call(this, text)
}
inherits(string, base)
string.fn.string = true
string.regex = /['"]/g

function regex(text) { 
  base.call(this, text)
}
inherits(regex, base)
regex.fn.regex = true
regex.fn.string = true
regex.regex = /\/[^*\/ ][^\n]*\//g

function comment(text) { 
  base.call(this, text)
  this.single = this.text.match(/^\/\//)
}
inherits(comment, base)
comment.fn.comment = true
comment.regex = /\/\*|\/\//g

var comparisonOperators = ["<=","<",">=", ">", "==", "!=", "===", "!==", "||", "&&"]
var unaryOperators = ["++", "--", "!", "~", "&", "|"]

function operator(text) { 
  base.call(this, text)
  //this.op = this.text 
  this.assign = /^=$/.test(text)  
  this.comparison = comparisonOperators.indexOf(this.text) >= 0
  this.unary_operator = unaryOperators.indexOf(this.text) >= 0
}
inherits(operator, base)
operator.fn.operator = true
operator.regex = /[!%^&*\-=+:,.|\\~<>\?]+|\/|\/=/g 
// we dont support operators containing forward slash other than '/' and '/='  (too difficult to compare with // and /*)

function semi(text) { 
  base.call(this, text)
}
inherits(semi, base)
semi.fn.semi = true
semi.regex = /;/g

function bracket(text) { 
  base.call(this, text)
  this.lbracket = text.match(/[\(\[\{]/)  
  this.rbracket = !this.lbracket
  
  if(text == "{" || text == "}")
    this.curly = true
  else if(text == "(" || text == ")")
    this.round = true
  else if(text == "[" || text == "]")
    this.square = true
}

inherits(bracket, base)
bracket.fn.bracket = true
bracket.regex = /[\(\)\[\]\{\}]/g

bracket.fn.matchWith = function(other) {
  other.matching = this
  this.matching = other
}

bracket.pair = function(s) {
  var letters = s.split("")
  var L = new bracket(letters[0]), R = new bracket(letters[1])
  L.matchWith(R)
  return {L:L, R:R}
}

var blockKeywords = "if for while else try catch function".split(" ")




bracket.fn.updateBlock = function() {

  var state = {
    bracket: false,
    name: false
  }
  var type
  
  if(this.prev) {
    type = this.prev.findRev(function(token) {
      if(token.whitespace)            return null  // skip whitespace
      else if(token.rbracket && token.rbracket) {
        state.bracket = token.matching
        return token.matching.prev // skip before matching bracket
      }   
      else if(token.word) {
        if(blockKeywords.indexOf(token.text) >= 0)
          return true  // found it!
        else if(!state.name) {
          state.name = token
          return null  // skip variables
        }
        else return false 
      }
      else return false // fail no keyword found
    })
  }
  
  if(type) {
    this.blockType = type.text
    type.block = this
    type.namedFunction = state.name
    type.bracketExpression = state.bracket
  } else {
    this.blockType = "object"
  }

  if(this.blockType == 'function') {
    this.findClosure()
    this.args = this.findArgs()
    this.vars = {}
  }
  
  
}

bracket.fn.findArgs = function() {
  if(!this.prev) return {}
  var args = {}
  var prev = this.prev.whitespace ? this.prev.prev : this.prev
  
  if(!prev.matching) return
  
  var text = prev.matching.collectText(prev).replace(/[\(\) ]/g, "")
  
  var words = text.split(",")
  
  if(text.length)
    for(var i=0;i<words.length;i++)
      args[words[i]] = true  
  return args
}

bracket.fn.declareVariables = function() {
  var vars = []
  for(var j in this.vars) {
    var text = j
    if(typeof this.vars[j] == "string") 
      text += " = " + this.vars[j]
    vars.push(text)
  }
  if(!vars.length) return ""
  
  var string = "var " + vars.join(", ") + "; "
  var space = this.global ? "" : " "
  string = string // should find current indent really
  return string
}

string.extract = function(index, input) {
  var mode = input.charAt(index), i = index + 1, last
  var word = mode
  while(i < input.length) {
    var ch = input.charAt(i)
    word += ch
    if(ch == mode && last != "\\") return word
    last = ch
    i += 1
  }
}

comment.extract = function(index, input) {
  var comment = "", prev = ""
  var type = input.charAt(index+1)
  while(index < input.length) {
    var ch = input.charAt(index)
    if(type == "/" && ch == "\n") return comment
    if(type == "*" && ch == "/" && prev == "*") 
      return comment + "/"
    comment += ch
    index += 1
    prev = ch
  }
}

regex.extract = function(index, input) {
  var regex = "/", prev = "", esc, inSQ
  while(index < input.length) {
    var ch = input.charAt(index+1)
    regex += ch
    esc = prev == "\\"
    if(ch == "/" && !esc && !inSQ) {
      var next = input.charAt(index+2)
      if(next == "m" || next == "g" || next == "i") regex += next
      return regex
    }
    else if(ch == "[" && !esc) inSQ = true
    else if(ch == "]" && !esc && inSQ) inSQ = false
    index += 1
    prev = ch
  }
}

module.exports = { 
  whitespace: whitespace, 
  operator: operator, 
  string: string, 
  word: word, 
  comment: comment, 
  bracket: bracket, 
  unknown: unknown, 
  semi: semi, 
  ize: ize, 
  postprocess: postprocess, 
  base: base
}


// end module: kaffeine/token.js
});
;

require.register('kaffeine/uglify/parse-js.js', function(module, exports, require) {
// start module: kaffeine/uglify/parse-js.js

/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.

  This version is suitable for Node.js.  With minimal changes (the
  exports stuff) it should work on any JS platform.

  This file contains the tokenizer/parser.  It is a port to JavaScript
  of parse-js [1], a JavaScript parser library written in Common Lisp
  by Marijn Haverbeke.  Thank you Marijn!

  [1] http://marijn.haverbeke.nl/parse-js/

  Exported functions:

    - tokenizer(code) -- returns a function.  Call the returned
      function to fetch the next token.

    - parse(code) -- returns an AST of the given JavaScript code.

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the same terms as the original code (ZLIB license):

    Copyright 2010 (c) Mihai Bazon <mihai.bazon@gmail.com>
    Based on parse-js (http://marijn.haverbeke.nl/parse-js/).

    This software is provided 'as-is', without any express or implied
    warranty. In no event will the authors be held liable for any
    damages arising from the use of this software.

    Permission is granted to anyone to use this software for any
    purpose, including commercial applications, and to alter it and
    redistribute it freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must
       not claim that you wrote the original software. If you use this
       software in a product, an acknowledgment in the product
       documentation would be appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must
       not be misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
       distribution.

 ***********************************************************************/

/* -----[ Tokenizer (constants) ]----- */

var KEYWORDS = array_to_hash([
        "break",
        "case",
        "catch",
        "const",
        "continue",
        "default",
        "delete",
        "do",
        "else",
        "finally",
        "for",
        "function",
        "if",
        "in",
        "instanceof",
        "new",
        "return",
        "switch",
        "throw",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
        "NaN"
]);

var RESERVED_WORDS = array_to_hash([
        "abstract",
        "boolean",
        "byte",
        "char",
        "class",
        "debugger",
        "double",
        "enum",
        "export",
        "extends",
        "final",
        "float",
        "goto",
        "implements",
        "import",
        "int",
        "interface",
        "long",
        "native",
        "package",
        "private",
        "protected",
        "public",
        "short",
        "static",
        "super",
        "synchronized",
        "throws",
        "transient",
        "volatile"
]);

var KEYWORDS_BEFORE_EXPRESSION = array_to_hash([
        "return",
        "new",
        "delete",
        "throw"
]);

var KEYWORDS_ATOM = array_to_hash([
        "false",
        "null",
        "true",
        "undefined",
        "NaN"
]);

var OPERATOR_CHARS = array_to_hash(characters("+-*&%=<>!?|~^"));

var RE_HEX_NUMBER = /^0x[0-9a-f]+$/i;
var RE_OCT_NUMBER = /^0[0-7]+$/;
var RE_DEC_NUMBER = /^\d*\.?\d*(?:e-?\d*(?:\d\.?|\.?\d)\d*)?$/i;

var OPERATORS = array_to_hash([
        "in",
        "instanceof",
        "typeof",
        "new",
        "void",
        "delete",
        "++",
        "--",
        "+",
        "-",
        "!",
        "~",
        "&",
        "|",
        "^",
        "*",
        "/",
        "%",
        ">>",
        "<<",
        ">>>",
        "<",
        ">",
        "<=",
        ">=",
        "==",
        "===",
        "!=",
        "!==",
        "?",
        "=",
        "+=",
        "-=",
        "/=",
        "*=",
        "%=",
        ">>=",
        "<<=",
        ">>>=",
        "~=",
        "%=",
        "|=",
        "^=",
        "&&",
        "||"
]);

var WHITESPACE_CHARS = array_to_hash(characters(" \n\r\t"));

var PUNC_BEFORE_EXPRESSION = array_to_hash(characters("[{}(,.;:"));

var PUNC_CHARS = array_to_hash(characters("[]{}(),;:"));

var REGEXP_MODIFIERS = array_to_hash(characters("gmsiy"));

/* -----[ Tokenizer ]----- */

function is_alphanumeric_char(ch) {
        ch = ch.charCodeAt(0);
        return (ch >= 48 && ch <= 57) ||
                (ch >= 65 && ch <= 90) ||
                (ch >= 97 && ch <= 122);
};

function is_identifier_char(ch) {
        return is_alphanumeric_char(ch) || ch == "$" || ch == "_";
};

function is_digit(ch) {
        ch = ch.charCodeAt(0);
        return ch >= 48 && ch <= 57;
};

function parse_js_number(num) {
        if (RE_HEX_NUMBER.test(num)) {
                return parseInt(num.substr(2), 16);
        } else if (RE_OCT_NUMBER.test(num)) {
                return parseInt(num.substr(1), 8);
        } else if (RE_DEC_NUMBER.test(num)) {
                return parseFloat(num);
        }
};

function JS_Parse_Error(message, line, col, pos) {
        this.message = message;
        this.line = line;
        this.col = col;
        this.pos = pos;
        try {
                ({})();
        } catch(ex) {
                this.stack = ex.stack;
        };
};

JS_Parse_Error.prototype.toString = function() {
        return this.message + " (line: " + this.line + ", col: " + this.col + ", pos: " + this.pos + ")" + "\n\n" + this.stack;
};

function js_error(message, line, col, pos) {
        throw new JS_Parse_Error(message, line, col, pos);
};

function is_token(token, type, val) {
        return token.type == type && (val == null || token.value == val);
};

var EX_EOF = {};

function tokenizer($TEXT, skip_comments) {

        var S = {
                text           : $TEXT.replace(/\r\n?|[\n\u2028\u2029]/g, "\n"),
                pos            : 0,
                tokpos         : 0,
                line           : 0,
                tokline        : 0,
                col            : 0,
                tokcol         : 0,
                newline_before : false,
                regex_allowed  : false
        };

        function peek() { return S.text.charAt(S.pos); };

        function next(signal_eof) {
                var ch = S.text.charAt(S.pos++);
                if (signal_eof && !ch)
                        throw EX_EOF;
                if (ch == "\n") {
                        S.newline_before = true;
                        ++S.line;
                        S.col = 0;
                } else {
                        ++S.col;
                }
                return ch;
        };

        function eof() {
                return !S.peek();
        };

        function find(what, signal_eof) {
                var pos = S.text.indexOf(what, S.pos);
                if (signal_eof && pos == -1) throw EX_EOF;
                return pos;
        };

        function start_token() {
                S.tokline = S.line;
                S.tokcol = S.col;
                S.tokpos = S.pos;
        };

        function token(type, value) {
                S.regex_allowed = ((type == "operator" && !HOP(UNARY_POSTFIX, value)) ||
                                   (type == "keyword" && HOP(KEYWORDS_BEFORE_EXPRESSION, value)) ||
                                   (type == "punc" && HOP(PUNC_BEFORE_EXPRESSION, value)));
                var ret = {
                        type  : type,
                        value : value,
                        line  : S.tokline,
                        col   : S.tokcol,
                        pos   : S.tokpos,
                        nlb   : S.newline_before
                };
                S.newline_before = false;
                return ret;
        };

        function skip_whitespace() {
                while (HOP(WHITESPACE_CHARS, peek()))
                        next();
        };

        function read_while(pred) {
                var ret = "", ch = peek(), i = 0;
                while (ch && pred(ch, i++)) {
                        ret += next();
                        ch = peek();
                }
                return ret;
        };

        function parse_error(err) {
                js_error(err, S.tokline, S.tokcol, S.tokpos);
        };

        function read_num(prefix) {
                var has_e = false, after_e = false, has_x = false;
                var num = read_while(function(ch, i){
                        if (ch == "x" || ch == "X") {
                                if (has_x) return false;
                                return has_x = true;
                        }
                        if (!has_x && (ch == "E" || ch == "e")) {
                                if (has_e) return false;
                                return has_e = after_e = true;
                        }
                        if (ch == "-") {
                                if (after_e || (i == 0 && !prefix)) return true;
                                return false;
                        }
                        after_e = false;
                        return is_alphanumeric_char(ch) || ch == ".";
                });
                if (prefix)
                        num = prefix + num;
                var valid = parse_js_number(num);
                if (!isNaN(valid)) {
                        return token("num", valid);
                } else {
                        parse_error("Invalid syntax: " + num);
                }
        };

        function read_escaped_char() {
                var ch = next(true);
                switch (ch) {
                    case "n" : return "\n";
                    case "r" : return "\r";
                    case "t" : return "\t";
                    case "b" : return "\b";
                    case "v" : return "\v";
                    case "f" : return "\f";
                    case "0" : return "\0";
                    case "x" : return String.fromCharCode(hex_bytes(2));
                    case "u" : return String.fromCharCode(hex_bytes(4));
                    default  : return ch;
                }
        };

        function hex_bytes(n) {
                var num = 0;
                for (; n > 0; --n) {
                        var digit = parseInt(next(true), 16);
                        if (isNaN(digit))
                                parse_error("Invalid hex-character pattern in string");
                        num = (num << 4) | digit;
                }
                return num;
        };

        function read_string() {
                return with_eof_error("Unterminated string constant", function(){
                        var quote = next(), ret = "";
                        for (;;) {
                                var ch = next(true);
                                if (ch == "\\") ch = read_escaped_char();
                                else if (ch == quote) break;
                                ret += ch;
                        }
                        return token("string", ret);
                });
        };

        function read_line_comment() {
                next();
                var i = find("\n"), ret;
                if (i == -1) {
                        ret = S.text.substr(S.pos);
                        S.pos = S.text.length;
                } else {
                        ret = S.text.substring(S.pos, i);
                        S.pos = i;
                }
                return token("comment1", ret);
        };

        function read_multiline_comment() {
                next();
                return with_eof_error("Unterminated multiline comment", function(){
                        var i = find("*/", true),
                            text = S.text.substring(S.pos, i),
                            tok = token("comment2", text);
                        S.pos = i + 2;
                        S.newline_before = text.indexOf("\n") >= 0;
                        return tok;
                });
        };

        function read_regexp() {
                return with_eof_error("Unterminated regular expression", function(){
                        var prev_backslash = false, regexp = "", ch, in_class = false;
                        while ((ch = next(true))) if (prev_backslash) {
                                regexp += "\\" + ch;
                                prev_backslash = false;
                        } else if (ch == "[") {
                                in_class = true;
                                regexp += ch;
                        } else if (ch == "]" && in_class) {
                                in_class = false;
                                regexp += ch;
                        } else if (ch == "/" && !in_class) {
                                break;
                        } else if (ch == "\\") {
                                prev_backslash = true;
                        } else {
                                regexp += ch;
                        }
                        var mods = read_while(function(ch){
                                return HOP(REGEXP_MODIFIERS, ch);
                        });
                        return token("regexp", [ regexp, mods ]);
                });
        };

        function read_operator(prefix) {
                function grow(op) {
                        var bigger = op + peek();
                        if (HOP(OPERATORS, bigger)) {
                                next();
                                return grow(bigger);
                        } else {
                                return op;
                        }
                };
                return token("operator", grow(prefix || next()));
        };

        var handle_slash = skip_comments ? function() {
                next();
                switch (peek()) {
                    case "/": read_line_comment(); return next_token();
                    case "*": read_multiline_comment(); return next_token();
                }
                return S.regex_allowed ? read_regexp() : read_operator("/");
        } : function() {
                next();
                switch (peek()) {
                    case "/": return read_line_comment();
                    case "*": return read_multiline_comment();
                }
                return S.regex_allowed ? read_regexp() : read_operator("/");
        };

        function handle_dot() {
                next();
                return is_digit(peek())
                        ? read_num(".")
                        : token("punc", ".");
        };

        function read_word() {
                var word = read_while(is_identifier_char);
                return !HOP(KEYWORDS, word)
                        ? token("name", word)
                        : HOP(OPERATORS, word)
                        ? token("operator", word)
                        : HOP(KEYWORDS_ATOM, word)
                        ? token("atom", word)
                        : token("keyword", word);
        };

        function with_eof_error(eof_error, cont) {
                try {
                        return cont();
                } catch(ex) {
                        if (ex === EX_EOF) parse_error(eof_error);
                        else throw ex;
                }
        };

        function next_token() {
                skip_whitespace();
                start_token();
                var ch = peek();
                if (!ch) return token("eof");
                if (is_digit(ch)) return read_num();
                if (ch == '"' || ch == "'") return read_string();
                if (HOP(PUNC_CHARS, ch)) return token("punc", next());
                if (ch == ".") return handle_dot();
                if (ch == "/") return handle_slash();
                if (HOP(OPERATOR_CHARS, ch)) return read_operator();
                if (is_identifier_char(ch)) return read_word();
                parse_error("Unexpected character '" + ch + "'");
        };

        next_token.context = function(nc) {
                if (nc) S = nc;
                return S;
        };

        return next_token;

};

/* -----[ Parser (constants) ]----- */

var UNARY_PREFIX = array_to_hash([
        "typeof",
        "void",
        "delete",
        "--",
        "++",
        "!",
        "~",
        "-",
        "+"
]);

var UNARY_POSTFIX = array_to_hash([ "--", "++" ]);

var ASSIGNMENT = (function(a, ret, i){
        while (i < a.length) {
                ret[a[i]] = a[i].substr(0, a[i].length - 1);
                i++;
        }
        return ret;
})(
        ["+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "~=", "%=", "|=", "^="],
        { "=": true },
        0
);

var PRECEDENCE = (function(a, ret){
        for (var i = 0, n = 1; i < a.length; ++i, ++n) {
                var b = a[i];
                for (var j = 0; j < b.length; ++j) {
                        ret[b[j]] = n;
                }
        }
        return ret;
})(
        [
                ["||"],
                ["&&"],
                ["|"],
                ["^"],
                ["&"],
                ["==", "===", "!=", "!=="],
                ["<", ">", "<=", ">=", "in", "instanceof"],
                [">>", "<<", ">>>"],
                ["+", "-"],
                ["*", "/", "%"]
        ],
        {}
);

var STATEMENTS_WITH_LABELS = array_to_hash([ "for", "do", "while", "switch" ]);

var ATOMIC_START_TOKEN = array_to_hash([ "atom", "num", "string", "regexp", "name" ]);

/* -----[ Parser ]----- */

function NodeWithToken(str, start, end) {
        this.name = str;
        this.start = start;
        this.end = end;
};

NodeWithToken.prototype.toString = function() { return this.name; };

function parse($TEXT, strict_semicolons, embed_tokens) {

        var S = {
                input: tokenizer($TEXT, true),
                token: null,
                prev: null,
                peeked: null,
                in_function: 0,
                in_loop: 0,
                labels: []
        };

        S.token = next();

        function is(type, value) {
                return is_token(S.token, type, value);
        };

        function peek() { return S.peeked || (S.peeked = S.input()); };

        function next() {
                S.prev = S.token;
                if (S.peeked) {
                        S.token = S.peeked;
                        S.peeked = null;
                } else {
                        S.token = S.input();
                }
                return S.token;
        };

        function prev() {
                return S.prev;
        };

        function croak(msg, line, col, pos) {
                var ctx = S.input.context();
                js_error(msg,
                         line != null ? line : ctx.tokline,
                         col != null ? col : ctx.tokcol,
                         pos != null ? pos : ctx.tokpos);
        };

        function token_error(token, msg) {
                croak(msg, token.line, token.col);
        };

        function unexpected(token) {
                if (token == null)
                        token = S.token;
                token_error(token, "Unexpected token: " + token.type + " (" + token.value + ")");
        };

        function expect_token(type, val) {
                if (is(type, val)) {
                        return next();
                }
                token_error(S.token, "Unexpected token " + S.token.type + ", expected " + type);
        };

        function expect(punc) { return expect_token("punc", punc); };

        function can_insert_semicolon() {
                return !strict_semicolons && (
                        S.token.nlb || is("eof") || is("punc", "}")
                );
        };

        function semicolon() {
                if (is("punc", ";")) next();
                else if (!can_insert_semicolon()) unexpected();
        };

        function as() {
                return slice(arguments);
        };

        function parenthesised() {
                expect("(");
                var ex = expression();
                expect(")");
                return ex;
        };

        function add_tokens(str, start, end) {
                return new NodeWithToken(str, start, end);
        };

        var statement = embed_tokens ? function(allow_case) {
                var start = S.token;
                var stmt = $statement(allow_case);
                stmt[0] = add_tokens(stmt[0], start, prev());
                return stmt;
        } : $statement;

        function $statement(allow_case) {
                switch (S.token.type) {
                    case "num":
                    case "string":
                    case "regexp":
                    case "operator":
                    case "atom":
                        return simple_statement();

                    case "name":
                        return is_token(peek(), "punc", ":")
                                ? labeled_statement(prog1(S.token.value, next, next))
                                : simple_statement();

                    case "punc":
                        switch (S.token.value) {
                            case "{":
                                next();
                                return block();
                            case "[":
                            case "(":
                                return simple_statement();
                            case ";":
                                next();
                                return as("block");
                            default:
                                unexpected();
                        }

                    case "keyword":
                        switch (prog1(S.token.value, next)) {
                            case "break":
                                return break_cont("break");

                            case "continue":
                                return break_cont("continue");

                            case "case":
                                if (!allow_case)
                                        unexpected();
                                return as("case", prog1(expression, curry(expect, ":")));

                            case "debugger":
                                semicolon();
                                return as("debugger");

                            case "default":
                                if (!allow_case)
                                        unexpected();
                                expect(":");
                                return as("default");

                            case "do":
                                return (function(body){
                                        expect_token("keyword", "while");
                                        return as("do", prog1(parenthesised, semicolon), body);
                                })(in_loop(statement));

                            case "for":
                                return for_();

                            case "function":
                                return function_(true);

                            case "if":
                                return if_();

                            case "return":
                                if (S.in_function == 0)
                                        croak("'return' outside of function");
                                return as("return",
                                          is("punc", ";")
                                          ? (next(), null)
                                          : can_insert_semicolon()
                                          ? null
                                          : prog1(expression, semicolon));

                            case "switch":
                                return as("switch", parenthesised(), in_loop(curry(block_, true)));

                            case "throw":
                                return as("throw", prog1(expression, semicolon));

                            case "try":
                                return try_();

                            case "var":
                                return prog1(var_, semicolon);

                            case "const":
                                return prog1(const_, semicolon);

                            case "while":
                                return as("while", parenthesised(), in_loop(statement));

                            case "with":
                                return as("with", parenthesised(), statement());

                            default:
                                unexpected();
                        }
                }
        };

        function labeled_statement(label) {
                S.labels.push(label);
                var start = S.token, stat = statement();
                if (!HOP(STATEMENTS_WITH_LABELS, stat[0]))
                        unexpected(start);
                S.labels.pop();
                return as("label", label, stat);
        };

        function simple_statement() {
                return as("stat", prog1(expression, semicolon));
        };

        function break_cont(type) {
                if (S.in_loop == 0)
                        croak(type + " not inside a loop or switch");
                var name = is("name") ? S.token.value : null;
                if (name != null) {
                        next();
                        if (!member(name, S.labels))
                                croak("Label " + name + " without matching loop or statement");
                }
                semicolon();
                return as(type, name);
        };

        function block() {
                var a = [];
                while (!is("punc", "}"))
                        a.push(statement());
                next();
                return as("block", a);
        };

        function for_() {
                expect("(");
                var has_var = is("keyword", "var");
                if (has_var)
                        next();
                if (is("name") && is_token(peek(), "operator", "in")) {
                        // for (i in foo)
                        var name = S.token.value;
                        next(); next();
                        var obj = expression();
                        expect(")");
                        return as("for-in", has_var, name, obj, in_loop(statement));
                } else {
                        // classic for
                        var init = is("punc", ";") ? null : has_var ? var_() : expression();
                        expect(";");
                        var test = is("punc", ";") ? null : expression();
                        expect(";");
                        var step = is("punc", ")") ? null : expression();
                        expect(")");
                        return as("for", init, test, step, in_loop(statement));
                }
        };

        function function_(in_statement) {
                var name = is("name") ? prog1(S.token.value, next) : null;
                if (in_statement && !name)
                        unexpected();
                expect("(");
                return as(in_statement ? "defun" : "function",
                          name,
                          // arguments
                          (function(first, a){
                                  while (!is("punc", ")")) {
                                          if (first) first = false; else expect(",");
                                          if (!is("name")) unexpected();
                                          a.push(S.token.value);
                                          next();
                                  }
                                  next();
                                  return a;
                          })(true, []),
                          // body
                          (function(){
                                  ++S.in_function;
                                  var a = block_();
                                  --S.in_function;
                                  return a;
                          })());
        };

        function if_() {
                var cond = parenthesised(), body = statement(), belse;
                if (is("keyword", "else")) {
                        next();
                        belse = statement();
                }
                return as("if", cond, body, belse);
        };

        function block_(allow_case) {
                expect("{");
                var a = [];
                while (!is("punc", "}"))
                        a.push(statement(allow_case));
                next();
                return a;
        };

        function try_() {
                var body = block_(), bcatch, bfinally;
                if (is("keyword", "catch")) {
                        next();
                        expect("(");
                        if (!is("name"))
                                croak("Name expected");
                        var name = S.token.value;
                        next();
                        expect(")");
                        bcatch = [ name, block_() ];
                }
                if (is("keyword", "finally")) {
                        next();
                        bfinally = block_();
                }
                return as("try", body, bcatch, bfinally);
        };

        function vardefs() {
                var a = [];
                for (;;) {
                        if (!is("name"))
                                unexpected();
                        var name = S.token.value;
                        next();
                        if (is("operator", "=")) {
                                next();
                                a.push([ name, expression(false) ]);
                        } else {
                                a.push([ name ]);
                        }
                        if (!is("punc", ","))
                                break;
                        next();
                }
                return a;
        };

        function var_() {
                return as("var", vardefs());
        };

        function const_() {
                return as("const", vardefs());
        };

        function new_() {
                var newexp = expr_atom(false), args;
                if (is("punc", "(")) {
                        next();
                        args = expr_list(")");
                } else {
                        args = [];
                }
                return subscripts(as("new", newexp, args), true);
        };

        function expr_atom(allow_calls) {
                if (is("operator", "new")) {
                        next();
                        return new_();
                }
                if (is("operator") && HOP(UNARY_PREFIX, S.token.value)) {
                        return make_unary("unary-prefix",
                                          prog1(S.token.value, next),
                                          expr_atom(allow_calls));
                }
                if (is("punc")) {
                        switch (S.token.value) {
                            case "(":
                                next();
                                return subscripts(prog1(expression, curry(expect, ")")), allow_calls);
                            case "[":
                                next();
                                return subscripts(array_(), allow_calls);
                            case "{":
                                next();
                                return subscripts(object_(), allow_calls);
                        }
                        unexpected();
                }
                if (is("keyword", "function")) {
                        next();
                        return subscripts(function_(false), allow_calls);
                }
                if (HOP(ATOMIC_START_TOKEN, S.token.type)) {
                        var atom = S.token.type == "regexp"
                                ? as("regexp", S.token.value[0], S.token.value[1])
                                : as(S.token.type, S.token.value);
                        return subscripts(prog1(atom, next), allow_calls);
                }
                unexpected();
        };

        function expr_list(closing, allow_trailing_comma) {
                var first = true, a = [];
                while (!is("punc", closing)) {
                        if (first) first = false; else expect(",");
                        if (allow_trailing_comma && is("punc", closing))
                                break;
                        a.push(expression(false));
                }
                next();
                return a;
        };

        function array_() {
                return as("array", expr_list("]", !strict_semicolons));
        };

        function object_() {
                var first = true, a = [];
                while (!is("punc", "}")) {
                        if (first) first = false; else expect(",");
                        if (!strict_semicolons && is("punc", "}"))
                                // allow trailing comma
                                break;
                        var name = as_property_name();
                        expect(":");
                        var value = expression(false);
                        a.push([ name, value ]);
                }
                next();
                return as("object", a);
        };

        function as_property_name() {
                switch (S.token.type) {
                    case "num":
                    case "string":
                        return prog1(S.token.value, next);
                }
                return as_name();
        };

        function as_name() {
                switch (S.token.type) {
                    case "name":
                    case "operator":
                    case "keyword":
                    case "atom":
                        return prog1(S.token.value, next);
                    default:
                        unexpected();
                }
        };

        function subscripts(expr, allow_calls) {
                if (is("punc", ".")) {
                        next();
                        return subscripts(as("dot", expr, as_name()), allow_calls);
                }
                if (is("punc", "[")) {
                        next();
                        return subscripts(as("sub", expr, prog1(expression, curry(expect, "]"))), allow_calls);
                }
                if (allow_calls && is("punc", "(")) {
                        next();
                        return subscripts(as("call", expr, expr_list(")")), true);
                }
                if (allow_calls && is("operator") && HOP(UNARY_POSTFIX, S.token.value)) {
                        return prog1(curry(make_unary, "unary-postfix", S.token.value, expr),
                                     next);
                }
                return expr;
        };

        function make_unary(tag, op, expr) {
                if ((op == "++" || op == "--") && !is_assignable(expr))
                        croak("Invalid use of " + op + " operator");
                return as(tag, op, expr);
        };

        function expr_op(left, min_prec) {
                var op = is("operator") ? S.token.value : null;
                var prec = op != null ? PRECEDENCE[op] : null;
                if (prec != null && prec > min_prec) {
                        next();
                        var right = expr_op(expr_atom(true), prec);
                        return expr_op(as("binary", op, left, right), min_prec);
                }
                return left;
        };

        function expr_ops() {
                return expr_op(expr_atom(true), 0);
        };

        function maybe_conditional(commas) {
                if (arguments.length == 0)
                        commas = true;
                var expr = expr_ops();
                if (is("operator", "?")) {
                        next();
                        var yes = expression();
                        expect(":");
                        return as("conditional", expr, yes, expression(commas));
                }
                return expr;
        };

        function is_assignable(expr) {
                expr = expr[0];
                return expr == "name" || expr == "dot" || expr == "sub";
        };

        function maybe_assign(commas) {
                if (arguments.length == 0)
                        commas = true;
                var left = maybe_conditional(commas), val = S.token.value;
                if (is("operator") && HOP(ASSIGNMENT, val)) {
                        if (is_assignable(left)) {
                                next();
                                return as("assign", ASSIGNMENT[val], left, maybe_assign(commas));
                        }
                        croak("Invalid assignment");
                }
                return left;
        };

        function expression(commas) {
                if (arguments.length == 0)
                        commas = true;
                var expr = maybe_assign(commas);
                if (commas && is("punc", ",")) {
                        next();
                        return as("seq", expr, expression());
                }
                return expr;
        };

        function in_loop(cont) {
                try {
                        ++S.in_loop;
                        return cont();
                } finally {
                        --S.in_loop;
                }
        };

        return as("toplevel", (function(a){
                while (!is("eof"))
                        a.push(statement());
                return a;
        })([]));

};

/* -----[ Utilities ]----- */

function curry(f) {
        var args = slice(arguments, 1);
        return function() { return f.apply(this, args.concat(slice(arguments))); };
};

function prog1(ret) {
        if (ret instanceof Function)
                ret = ret();
        for (var i = 1, n = arguments.length; --n > 0; ++i)
                arguments[i]();
        return ret;
};

function array_to_hash(a) {
        var ret = {};
        for (var i = 0; i < a.length; ++i)
                ret[a[i]] = true;
        return ret;
};

function slice(a, start) {
        return Array.prototype.slice.call(a, start == null ? 0 : start);
};

function characters(str) {
        return str.split("");
};

function member(name, array) {
        for (var i = array.length; --i >= 0;)
                if (array[i] === name)
                        return true;
        return false;
};

function HOP(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
};

/* -----[ Exports ]----- */

exports.tokenizer = tokenizer;
exports.parse = parse;
exports.slice = slice;
exports.curry = curry;
exports.member = member;
exports.array_to_hash = array_to_hash;
exports.PRECEDENCE = PRECEDENCE;
exports.KEYWORDS_ATOM = KEYWORDS_ATOM;
exports.RESERVED_WORDS = RESERVED_WORDS;
exports.KEYWORDS = KEYWORDS;
exports.ATOMIC_START_TOKEN = ATOMIC_START_TOKEN;
exports.is_alphanumeric_char = is_alphanumeric_char;

// end module: kaffeine/uglify/parse-js.js
});
;

require.register('kaffeine/uglify/process.js', function(module, exports, require) {
// start module: kaffeine/uglify/process.js

/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.

  This version is suitable for Node.js.  With minimal changes (the
  exports stuff) it should work on any JS platform.

  This file implements some AST processors.  They work on data built
  by parse-js.

  Exported functions:

    - ast_mangle(ast, include_toplevel) -- mangles the
      variable/function names in the AST.  Returns an AST.  Pass true
      as second argument to mangle toplevel names too.

    - ast_squeeze(ast) -- employs various optimizations to make the
      final generated code even smaller.  Returns an AST.

    - gen_code(ast, beautify) -- generates JS code from the AST.  Pass
      true (or an object, see the code for some options) as second
      argument to get "pretty" (indented) code.

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under a ZLIB license:

    Copyright 2010 (c) Mihai Bazon <mihai.bazon@gmail.com>

    This software is provided 'as-is', without any express or implied
    warranty. In no event will the authors be held liable for any
    damages arising from the use of this software.

    Permission is granted to anyone to use this software for any
    purpose, including commercial applications, and to alter it and
    redistribute it freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must
       not claim that you wrote the original software. If you use this
       software in a product, an acknowledgment in the product
       documentation would be appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must
       not be misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
       distribution.

 ***********************************************************************/

var jsp = require("./parse-js"),
    slice = jsp.slice,
    member = jsp.member,
    PRECEDENCE = jsp.PRECEDENCE;

/* -----[ helper for AST traversal ]----- */

function ast_walker(ast) {
        function _vardefs(defs) {
                return defs.map(function(def){
                        var a = [ def[0] ];
                        if (def.length > 1)
                                a[1] = walk(def[1]);
                        return a;
                });
        };
        var walkers = {
                "string": function(str) {
                        return [ "string", str ];
                },
                "num": function(num) {
                        return [ "num", num ];
                },
                "name": function(name) {
                        return [ "name", name ];
                },
                "toplevel": function(statements) {
                        return [ "toplevel", statements.map(walk) ];
                },
                "block": function(statements) {
                        var out = [ "block" ];
                        if (statements != null)
                                out.push(statements.map(walk));
                        return out;
                },
                "var": function(defs) {
                        return [ "var", _vardefs(defs) ];
                },
                "const": function(defs) {
                        return [ "const", _vardefs(defs) ];
                },
                "try": function(t, c, f) {
                        return [
                                "try",
                                t.map(walk),
                                c != null ? [ c[0], c[1].map(walk) ] : null,
                                f != null ? f.map(walk) : null
                        ];
                },
                "throw": function(expr) {
                        return [ "throw", walk(expr) ];
                },
                "new": function(ctor, args) {
                        return [ "new", walk(ctor), args.map(walk) ];
                },
                "switch": function(expr, body) {
                        return [ "switch", walk(expr), body.map(walk) ];
                },
                "case": function(expr) {
                        return [ "case", walk(expr) ];
                },
                "default": function() {
                        return [ "default" ];
                },
                "break": function(label) {
                        return [ "break", label ];
                },
                "continue": function(label) {
                        return [ "continue", label ];
                },
                "conditional": function(cond, t, e) {
                        return [ "conditional", walk(cond), walk(t), walk(e) ];
                },
                "assign": function(op, lvalue, rvalue) {
                        return [ "assign", op, walk(lvalue), walk(rvalue) ];
                },
                "dot": function(expr) {
                        return [ "dot", walk(expr) ].concat(slice(arguments, 1));
                },
                "call": function(expr, args) {
                        return [ "call", walk(expr), args.map(walk) ];
                },
                "function": function(name, args, body) {
                        return [ "function", name, args.slice(), body.map(walk) ];
                },
                "defun": function(name, args, body) {
                        return [ "defun", name, args.slice(), body.map(walk) ];
                },
                "if": function(conditional, t, e) {
                        return [ "if", walk(conditional), walk(t), walk(e) ];
                },
                "for": function(init, cond, step, block) {
                        return [ "for", walk(init), walk(cond), walk(step), walk(block) ];
                },
                "for-in": function(has_var, key, hash, block) {
                        return [ "for-in", has_var, key, walk(hash), walk(block) ];
                },
                "while": function(cond, block) {
                        return [ "while", walk(cond), walk(block) ];
                },
                "do": function(cond, block) {
                        return [ "do", walk(cond), walk(block) ];
                },
                "return": function(expr) {
                        return [ "return", walk(expr) ];
                },
                "binary": function(op, left, right) {
                        return [ "binary", op, walk(left), walk(right) ];
                },
                "unary-prefix": function(op, expr) {
                        return [ "unary-prefix", op, walk(expr) ];
                },
                "unary-postfix": function(op, expr) {
                        return [ "unary-postfix", op, walk(expr) ];
                },
                "sub": function(expr, subscript) {
                        return [ "sub", walk(expr), walk(subscript) ];
                },
                "object": function(props) {
                        return [ "object", props.map(function(p){
                                return [ p[0], walk(p[1]) ];
                        }) ];
                },
                "regexp": function(rx, mods) {
                        return [ "regexp", rx, mods ];
                },
                "array": function(elements) {
                        return [ "array", elements.map(walk) ];
                },
                "stat": function(stat) {
                        return [ "stat", walk(stat) ];
                },
                "seq": function() {
                        return [ "seq" ].concat(slice(arguments).map(walk));
                },
                "label": function(name, block) {
                        return [ "label", name, walk(block) ];
                },
                "with": function(expr, block) {
                        return [ "with", walk(expr), walk(block) ];
                },
                "atom": function(name) {
                        return [ "atom", name ];
                }
        };

        var user = {};
        var stack = [];
        function walk(ast) {
                if (ast == null)
                        return null;
                try {
                        stack.push(ast);
                        var type = ast[0];
                        var gen = user[type];
                        if (gen) {
                                var ret = gen.apply(ast, ast.slice(1));
                                if (ret != null)
                                        return ret;
                        }
                        gen = walkers[type];
                        return gen.apply(ast, ast.slice(1));
                } finally {
                        stack.pop();
                }
        };

        function with_walkers(walkers, cont){
                var save = {}, i;
                for (i in walkers) if (HOP(walkers, i)) {
                        save[i] = user[i];
                        user[i] = walkers[i];
                }
                try { return cont(); }
                finally {
                        for (i in save) if (HOP(save, i)) {
                                if (!save[i]) delete user[i];
                                else user[i] = save[i];
                        }
                }
        };

        return {
                walk: walk,
                with_walkers: with_walkers,
                parent: function() {
                        return stack[stack.length - 2]; // last one is current node
                },
                stack: function() {
                        return stack;
                }
        };
};

/* -----[ Scope and mangling ]----- */

function Scope(parent) {
        this.names = {};        // names defined in this scope
        this.mangled = {};      // mangled names (orig.name => mangled)
        this.rev_mangled = {};  // reverse lookup (mangled => orig.name)
        this.cname = -1;        // current mangled name
        this.refs = {};         // names referenced from this scope
        this.uses_with = false; // will become TRUE if eval() is detected in this or any subscopes
        this.uses_eval = false; // will become TRUE if with() is detected in this or any subscopes
        this.parent = parent;   // parent scope
        this.children = [];     // sub-scopes
        if (parent) {
                this.level = parent.level + 1;
                parent.children.push(this);
        } else {
                this.level = 0;
        }
};

var base54 = (function(){
        var DIGITS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
        return function(num) {
                var ret = "";
                do {
                        ret = DIGITS.charAt(num % 54) + ret;
                        num = Math.floor(num / 54);
                } while (num > 0);
                return ret;
        };
})();

Scope.prototype = {
        has: function(name) {
                for (var s = this; s; s = s.parent)
                        if (HOP(s.names, name))
                                return s;
        },
        has_mangled: function(mname) {
                for (var s = this; s; s = s.parent)
                        if (HOP(s.rev_mangled, mname))
                                return s;
        },
        toJSON: function() {
                return {
                        names: this.names,
                        uses_eval: this.uses_eval,
                        uses_with: this.uses_with
                };
        },

        next_mangled: function() {
                // we must be careful that the new mangled name:
                //
                // 1. doesn't shadow a mangled name from a parent
                //    scope, unless we don't reference the original
                //    name from this scope OR from any sub-scopes!
                //    This will get slow.
                //
                // 2. doesn't shadow an original name from a parent
                //    scope, in the event that the parent scope
                //    doesn't support mangling (uses_eval or
                //    uses_with) and we reference that name here OR IN
                //    ANY SUBSCOPES!  Damn!
                //
                // 3. doesn't shadow a name that is referenced but not
                //    defined (possibly global defined elsewhere).
                for (;;) {
                        var m = base54(++this.cname), prior;

                        // case 1.
                        prior = this.has_mangled(m);
                        if (prior && this.refs[prior.rev_mangled[m]] === prior)
                                continue;

                        // case 2.
                        prior = this.has(m);
                        if (prior && (prior.uses_eval || prior.uses_with) && this.refs[m] === prior)
                                continue;

                        // case 3.
                        if (HOP(this.refs, m) && this.refs[m] == null)
                                continue;

                        // I got "do" once. :-/
                        if (!is_identifier(m))
                                continue;

                        return m;
                }
        },
        get_mangled: function(name, newMangle) {
                if (this.uses_eval || this.uses_with) return name; // no mangle if eval or with is in use
                var s = this.has(name);
                if (!s) return name; // not in visible scope, no mangle
                if (HOP(s.mangled, name)) return s.mangled[name]; // already mangled in this scope
                if (!newMangle) return name;                      // not found and no mangling requested

                var m = s.next_mangled();
                s.rev_mangled[m] = name;
                return s.mangled[name] = m;
        },
        define: function(name) {
                if (name != null)
                        return this.names[name] = name;
        }
};

function ast_add_scope(ast) {

        var current_scope = null;
        var w = ast_walker(), walk = w.walk;
        var having_eval = [];

        function with_new_scope(cont) {
                current_scope = new Scope(current_scope);
                try {
                        var ret = current_scope.body = cont();
                        ret.scope = current_scope;
                        return ret;
                }
                finally {
                        current_scope = current_scope.parent;
                }
        };

        function define(name) {
                return current_scope.define(name);
        };

        function reference(name) {
                current_scope.refs[name] = true;
        };

        function _lambda(name, args, body) {
                return [ this[0], define(name), args, with_new_scope(function(){
                        args.map(define);
                        return body.map(walk);
                })];
        };

        return with_new_scope(function(){
                // process AST
                var ret = w.with_walkers({
                        "function": _lambda,
                        "defun": _lambda,
                        "with": function(expr, block) {
                                for (var s = current_scope; s; s = s.parent)
                                        s.uses_with = true;
                        },
                        "var": function(defs) {
                                defs.map(function(d){ define(d[0]) });
                        },
                        "const": function(defs) {
                                defs.map(function(d){ define(d[0]) });
                        },
                        "try": function(t, c, f) {
                                if (c != null) return [
                                        "try",
                                        t.map(walk),
                                        with_new_scope(function(){
                                                return [ define(c[0]), c[1].map(walk) ];
                                        }),
                                        f != null ? f.map(walk) : null
                                ];
                        },
                        "name": function(name) {
                                if (name == "eval")
                                        having_eval.push(current_scope);
                                reference(name);
                        },
                        "for-in": function(has_var, name) {
                                if (has_var) define(name);
                        }
                }, function(){
                        return walk(ast);
                });

                // the reason why we need an additional pass here is
                // that names can be used prior to their definition.

                // scopes where eval was detected and their parents
                // are marked with uses_eval, unless they define the
                // "eval" name.
                having_eval.map(function(scope){
                        if (!scope.has("eval")) while (scope) {
                                scope.uses_eval = true;
                                scope = scope.parent;
                        }
                });

                // for referenced names it might be useful to know
                // their origin scope.  current_scope here is the
                // toplevel one.
                function fixrefs(scope, i) {
                        // do children first; order shouldn't matter
                        for (i = scope.children.length; --i >= 0;)
                                fixrefs(scope.children[i]);
                        for (i in scope.refs) if (HOP(scope.refs, i)) {
                                // find origin scope and propagate the reference to origin
                                for (var origin = scope.has(i), s = scope; s; s = s.parent) {
                                        s.refs[i] = origin;
                                        if (s === origin) break;
                                }
                        }
                };
                fixrefs(current_scope);

                return ret;
        });

};

/* -----[ mangle names ]----- */

function ast_mangle(ast, do_toplevel) {
        var w = ast_walker(), walk = w.walk, scope;

        function get_mangled(name, newMangle) {
                if (!do_toplevel && !scope.parent) return name; // don't mangle toplevel
                return scope.get_mangled(name, newMangle);
        };

        function _lambda(name, args, body) {
                if (name) name = get_mangled(name);
                body = with_scope(body.scope, function(){
                        args = args.map(function(name){ return get_mangled(name) });
                        return body.map(walk);
                });
                return [ this[0], name, args, body ];
        };

        function with_scope(s, cont) {
                var _scope = scope;
                scope = s;
                for (var i in s.names) if (HOP(s.names, i)) {
                        get_mangled(i, true);
                }
                try { var ret = cont(); ret.scope = s; return ret; }
                finally { scope = _scope; };
        };

        function _vardefs(defs) {
                return defs.map(function(d){
                        return [ get_mangled(d[0]), walk(d[1]) ];
                });
        };

        return w.with_walkers({
                "function": _lambda,
                "defun": _lambda,
                "var": function(defs) {
                        return [ "var", _vardefs(defs) ];
                },
                "const": function(defs) {
                        return [ "const", _vardefs(defs) ];
                },
                "name": function(name) {
                        return [ "name", get_mangled(name) ];
                },
                "try": function(t, c, f) {
                        return [ "try",
                                 t.map(walk),
                                 c ? with_scope(c.scope, function(){
                                         return [ get_mangled(c[0]), c[1].map(walk) ];
                                 }) : null,
                                 f != null ? f.map(walk) : null ];
                },
                "toplevel": function(body) {
                        return with_scope(this.scope, function(){
                                return [ "toplevel", body.map(walk) ];
                        });
                },
                "for-in": function(has_var, name, obj, stat) {
                        return [ "for-in", has_var, get_mangled(name), walk(obj), walk(stat) ];
                }
        }, function() {
                return walk(ast_add_scope(ast));
        });
};

// function ast_has_side_effects(ast) {
//         var w = ast_walker();
//         var FOUND_SIDE_EFFECTS = {};
//         function _found() { throw FOUND_SIDE_EFFECTS };
//         try {
//                 w.with_walkers({
//                         "new": _found,
//                         "call": _found,
//                         "assign": _found,
//                         "defun": _found,
//                         "var": _found,
//                         "const": _found,
//                         "throw": _found,
//                         "return": _found,
//                         "break": _found,
//                         "continue": _found,
//                         "case": _found,
//                         "default": _found,
//                         "label": _found,
//                         "function": function(name) {
//                                 if (name) _found();
//                         }
//                 }, function(){
//                         w.walk(ast);
//                 });
//         } catch(ex) {
//                 if (ex === FOUND_SIDE_EFFECTS)
//                         return true;
//                 throw ex;
//         }
// };

/* -----[
   - compress foo["bar"] into foo.bar,
   - remove block brackets {} where possible
   - join consecutive var declarations
   - various optimizations for IFs:
     - if (cond) foo(); else bar();  ==>  cond?foo():bar();
     - if (cond) foo();  ==>  cond&&foo();
     - if (foo) return bar(); else return baz();  ==> return foo?bar():baz(); // also for throw
     - if (foo) return bar(); else something();  ==> {if(foo)return bar();something()}
   ]----- */

function ast_squeeze(ast, options) {
        options = defaults(options, {
                make_seqs: true
        });

        var w = ast_walker(), walk = w.walk;

        function is_constant(node) {
                return node[0] == "string" || node[0] == "num";
        };

        function rmblock(block) {
                if (block != null && block[0] == "block" && block[1] && block[1].length == 1)
                        block = block[1][0];
                return block;
        };

        function _lambda(name, args, body) {
                return [ this[0], name, args, tighten(body.map(walk)) ];
        };

        // we get here for blocks that have been already transformed.
        // this function does two things:
        // 1. discard useless blocks
        // 2. join consecutive var declarations
        function tighten(statements) {
                var cur, prev;
                for (var i = 0, ret1 = []; i < statements.length; ++i) {
                        cur = statements[i];
                        if (cur[0] == "block") {
                                if (cur[1]) {
                                        ret1.push.apply(ret1, cur[1]);
                                }
                        } else {
                                ret1.push(cur);
                        }
                }
                prev = null;
                for (var i = 0, ret2 = []; i < ret1.length; ++i) {
                        cur = ret1[i];
                        if (prev && ((cur[0] == "var" && prev[0] == "var") ||
                                     (cur[0] == "const" && prev[0] == "const"))) {
                                prev[1] = prev[1].concat(cur[1]);
                        } else {
                                ret2.push(cur);
                                prev = cur;
                        }
                }
                if (!options.make_seqs)
                        return ret2;
                prev = null;
                for (var i = 0, ret3 = []; i < ret2.length; ++i) {
                        cur = ret2[i];
                        if (!prev) {
                                if (cur[0] == "stat") {
                                        prev = [ "seq", cur[1] ];
                                        ret3.push([ "stat", prev ]);
                                } else {
                                        ret3.push(cur);
                                }
                        } else if (cur[0] == "stat") {
                                prev.push(cur[1]);
                        } else if (cur[0] == "seq") {
                                prev.push.apply(prev, slice(cur, 1));
                        } else {
                                prev = null;
                                ret3.push(cur);
                        }
                }
                return ret3.map(walk);
        };

        function best_of(ast1, ast2) {
                return gen_code(ast1).length > gen_code(ast2[0] == "stat" ? ast2[1] : ast2).length ? ast2 : ast1;
        };

        function aborts(t) {
                if (t[0] == "block" && t[1] && t[1].length > 0)
                        t = t[1][t[1].length - 1]; // interested in last statement
                if (t[0] == "return" || t[0] == "break" || t[0] == "continue" || t[0] == "throw")
                        return true;
        };

        function make_conditional(c, t, e) {
                if (c[0] == "unary-prefix" && c[1] == "!") {
                        return e ? [ "conditional", c[2], e, t ] : [ "binary", "||", c[2], t ];
                } else {
                        return e ? [ "conditional", c, t, e ] : [ "binary", "&&", c, t ];
                }
        };

        function empty(b) {
                return !b || (b[0] == "block" && (!b[1] || b[1].length == 0));
        };

        return w.with_walkers({
                "sub": function(expr, subscript) {
                        if (subscript[0] == "string") {
                                var name = subscript[1];
                                if (is_identifier(name)) {
                                        return [ "dot", walk(expr), name ];
                                }
                        }
                },
                "if": function(c, t, e) {
                        c = walk(c);
                        t = walk(t);
                        e = walk(e);
                        var negated = c[0] == "unary-prefix" && c[1] == "!";
                        if (empty(t)) {
                                if (negated) c = c[2];
                                else c = [ "unary-prefix", "!", c ];
                                t = e;
                                e = null;
                        }
                        if (empty(e)) {
                                e = null;
                        } else {
                                if (negated) {
                                        c = c[2];
                                        var tmp = t; t = e; e = tmp;
                                }
                        }
                        if (empty(e) && empty(t))
                                return [ "stat", c ];
                        var ret = [ "if", c, t, e ];
                        if (t[0] == "stat") {
                                if (e) {
                                        if (e[0] == "stat") {
                                                ret = best_of(ret, [ "stat", make_conditional(c, t[1], e[1]) ]);
                                        }
                                }
                                else {
                                        ret = best_of(ret, [ "stat", make_conditional(c, t[1]) ]);
                                }
                        }
                        else if (e && t[0] == e[0] && (t[0] == "return" || t[0] == "throw")) {
                                ret = best_of(ret, [ t[0], make_conditional(c, t[1], e[1] ) ]);
                        }
                        else if (e && aborts(t)) {
                                ret = [ [ "if", c, t ] ];
                                if (e[0] == "block") {
                                        if (e[1]) ret = ret.concat(e[1]);
                                }
                                else {
                                        ret.push(e);
                                }
                                ret = [ "block", ret ];
                        }
                        return ret;
                },
                "toplevel": function(body) {
                        return [ "toplevel", tighten(body.map(walk)) ];
                },
                "switch": function(expr, body) {
                        return [ "switch", walk(expr), tighten(body.map(walk)) ];
                },
                "function": _lambda,
                "defun": _lambda,
                "block": function(body) {
                        if (body) return rmblock([ "block", tighten(body.map(walk)) ]);
                },
                "binary": function(op, left, right) {
                        left = walk(left);
                        right = walk(right);
                        var best = [ "binary", op, left, right ];
                        if (is_constant(left) && is_constant(right)) {
                                var val = null;
                                switch (op) {
                                    case "+": val = left[1] + right[1]; break;
                                    case "*": val = left[1] * right[1]; break;
                                    case "/": val = left[1] / right[1]; break;
                                    case "-": val = left[1] - right[1]; break;
                                }
                                if (val != null) {
                                        best = best_of(best, [ typeof val == "string" ? "string" : "num", val ]);
                                }
                        }
                        return best;
                },
                "conditional": function(c, t, e) {
                        if (c[0] == "unary-prefix" && c[1] == "!")
                                return [ "conditional", walk(c[2]), walk(e), walk(t) ];
                },
                "seq": function() {
                        if (arguments.length == 1)
                                return walk(arguments[0]);
                }
        }, function() {
                return walk(ast);
        });

};

/* -----[ re-generate code from the AST ]----- */

var DOT_CALL_NO_PARENS = jsp.array_to_hash([
        "name",
        "array",
        "string",
        "dot",
        "sub",
        "call",
        "regexp"
]);

function gen_code(ast, beautify) {
        if (beautify) beautify = defaults(beautify, {
                indent_start : 0,
                indent_level : 4,
                quote_keys   : false,
                space_colon  : false
        });
        var indentation = 0,
            newline = beautify ? "\n" : "",
            space = beautify ? " " : "";

        function indent(line) {
                if (line == null)
                        line = "";
                if (beautify)
                        line = repeat_string(" ", beautify.indent_start + indentation * beautify.indent_level) + line;
                return line;
        };

        function with_indent(cont, incr) {
                if (incr == null) incr = 1;
                indentation += incr;
                try { return cont.apply(null, slice(arguments, 1)); }
                finally { indentation -= incr; }
        };

        function add_spaces(a) {
                if (beautify)
                        return a.join(" ");
                var b = [];
                for (var i = 0; i < a.length; ++i) {
                        var next = a[i + 1];
                        b.push(a[i]);
                        if (next &&
                            ((/[a-z0-9_\x24]$/i.test(a[i].toString()) && /^[a-z0-9_\x24]/i.test(next.toString())) ||
                             (/[\+\-]$/.test(a[i].toString()) && /^[\+\-]/.test(next.toString())))) {
                                b.push(" ");
                        }
                }
                return b.join("");
        };

        function add_commas(a) {
                return a.join("," + space);
        };

        function parenthesize(expr) {
                var gen = make(expr);
                for (var i = 1; i < arguments.length; ++i) {
                        var el = arguments[i];
                        if ((el instanceof Function && el(expr)) || expr[0] == el)
                                return "(" + gen + ")";
                }
                return gen;
        };

        var generators = {
                "string": make_string,
                "num": function(num) {
                        return String(num);
                },
                "name": make_name,
                "toplevel": function(statements) {
                        return make_block_statements(statements)
                                .join(newline + newline);
                },
                "block": make_block,
                "var": function(defs) {
                        return "var " + add_commas(defs.map(make_1vardef)) + ";";
                },
                "const": function(defs) {
                        return "const " + add_commas(defs.map(make_1vardef)) + ";";
                },
                "try": function(tr, ca, fi) {
                        var out = [ "try", make_block(tr) ];
                        if (ca) out.push("catch", "(" + ca[0] + ")", make_block(ca[1]));
                        if (fi) out.push("finally", make_block(fi));
                        return add_spaces(out);
                },
                "throw": function(expr) {
                        return add_spaces([ "throw", make(expr) ]) + ";";
                },
                "new": function(ctor, args) {
                        args = args.length > 0 ? "(" + add_commas(args.map(make)) + ")" : "";
                        return add_spaces([ "new", parenthesize(ctor, "seq", "binary", "conditional", "assign", "dot") + args ]);
                },
                "switch": function(expr, body) {
                        return add_spaces([ "switch", "(" + make(expr) + ")", make_block(body) ]);
                },
                "case": function(expr) {
                        return add_spaces([ "\x08case", make(expr) + ":" ]);
                },
                "default": function() {
                        return "\x08default:";
                },
                "break": function(label) {
                        var out = "break";
                        if (label != null)
                                out += " " + make_name(label);
                        return out + ";";
                },
                "continue": function(label) {
                        var out = "continue";
                        if (label != null)
                                out += " " + make_name(label);
                        return out + ";";
                },
                "conditional": function(co, th, el) {
                        return add_spaces([ parenthesize(co, "assign", "seq"), "?",
                                            parenthesize(th, "seq"), ":",
                                            parenthesize(el, "seq") ]);
                },
                "assign": function(op, lvalue, rvalue) {
                        if (op && op !== true) op += "=";
                        else op = "=";
                        return add_spaces([ make(lvalue), op, make(rvalue) ]);
                },
                "dot": function(expr) {
                        var out = make(expr), i = 1;
                        if (!HOP(DOT_CALL_NO_PARENS, expr[0]))
                                out = "(" + out + ")";
                        while (i < arguments.length)
                                out += "." + make_name(arguments[i++]);
                        return out;
                },
                "call": function(func, args) {
                        var f = make(func);
                        if (!HOP(DOT_CALL_NO_PARENS, func[0]))
                                f = "(" + f + ")";
                        return f + "(" + add_commas(args.map(make)) + ")";
                },
                "function": make_function,
                "defun": make_function,
                "if": function(co, th, el) {
                        var out = [ "if", "(" + make(co) + ")", el ? make_then(th) : make(th) ];
                        if (el) {
                                out.push("else", make(el));
                        }
                        return add_spaces(out);
                },
                "for": function(init, cond, step, block) {
                        var out = [ "for" ];
                        init = (init != null ? make(init) : "").replace(/;*\s*$/, ";" + space);
                        cond = (cond != null ? make(cond) : "").replace(/;*\s*$/, ";" + space);
                        step = (step != null ? make(step) : "").replace(/;*\s*$/, "");
                        var args = init + cond + step;
                        if (args == "; ; ") args = ";;";
                        out.push("(" + args + ")", make(block));
                        return add_spaces(out);
                },
                "for-in": function(has_var, key, hash, block) {
                        var out = add_spaces([ "for", "(" ]);
                        if (has_var)
                                out += "var ";
                        out += add_spaces([ make_name(key) + " in " + make(hash) + ")", make(block) ]);
                        return out;
                },
                "while": function(condition, block) {
                        return add_spaces([ "while", "(" + make(condition) + ")", make(block) ]);
                },
                "do": function(condition, block) {
                        return add_spaces([ "do", make(block), "while", "(" + make(condition) + ")" ]) + ";";
                },
                "return": function(expr) {
                        var out = [ "return" ];
                        if (expr != null) out.push(make(expr));
                        return add_spaces(out) + ";";
                },
                "binary": function(operator, lvalue, rvalue) {
                        var left = make(lvalue), right = make(rvalue);
                        // XXX: I'm pretty sure other cases will bite here.
                        //      we need to be smarter.
                        //      adding parens all the time is the safest bet.
                        if (member(lvalue[0], [ "assign", "conditional", "seq" ]) ||
                            lvalue[0] == "binary" && PRECEDENCE[operator] > PRECEDENCE[lvalue[1]]) {
                                left = "(" + left + ")";
                        }
                        if (member(rvalue[0], [ "assign", "conditional", "seq" ]) ||
                            rvalue[0] == "binary" && PRECEDENCE[operator] >= PRECEDENCE[rvalue[1]]) {
                                right = "(" + right + ")";
                        }
                        return add_spaces([ left, operator, right ]);
                },
                "unary-prefix": function(operator, expr) {
                        var val = make(expr);
                        if (!(HOP(DOT_CALL_NO_PARENS, expr[0]) || expr[0] == "num"))
                                val = "(" + val + ")";
                        return operator + (jsp.is_alphanumeric_char(operator.charAt(0)) ? " " : "") + val;
                },
                "unary-postfix": function(operator, expr) {
                        var val = make(expr);
                        if (!(HOP(DOT_CALL_NO_PARENS, expr[0]) || expr[0] == "num"))
                                val = "(" + val + ")";
                        return val + operator;
                },
                "sub": function(expr, subscript) {
                        var hash = make(expr);
                        if (!HOP(DOT_CALL_NO_PARENS, expr[0]))
                                hash = "(" + hash + ")";
                        return hash + "[" + make(subscript) + "]";
                },
                "object": function(props) {
                        if (props.length == 0)
                                return "{}";
                        return "{" + newline + with_indent(function(){
                                return props.map(function(p){
                                        var key = p[0], val = make(p[1]);
                                        if (beautify && beautify.quote_keys || !is_identifier(key))
                                                key = make_string(key);
                                        return indent(add_spaces(beautify && beautify.space_colon
                                                                 ? [ key, ":", val ]
                                                                 : [ key + ":", val ]));
                                }).join("," + newline);
                        }) + newline + indent("}");
                },
                "regexp": function(rx, mods) {
                        return "/" + rx + "/" + mods;
                },
                "array": function(elements) {
                        if (elements.length == 0) return "[]";
                        return add_spaces([ "[", add_commas(elements.map(make)), "]" ]);
                },
                "stat": function(stmt) {
                        return make(stmt).replace(/;*\s*$/, ";");
                },
                "seq": function() {
                        return add_commas(slice(arguments).map(make));
                },
                "label": function(name, block) {
                        return add_spaces([ make_name(name), ":", make(block) ]);
                },
                "with": function(expr, block) {
                        return add_spaces([ "with", "(" + make(expr) + ")", make(block) ]);
                },
                "atom": function(name) {
                        return make_name(name);
                },
                "comment1": function(text) {
                        return "//" + text + "\n";
                },
                "comment2": function(text) {
                        return "/*" + text + "*/";
                }
        };

        // The squeezer replaces "block"-s that contain only a single
        // statement with the statement itself; technically, the AST
        // is correct, but this can create problems when we output an
        // IF having an ELSE clause where the THEN clause ends in an
        // IF *without* an ELSE block (then the outer ELSE would refer
        // to the inner IF).  This function checks for this case and
        // adds the block brackets if needed.
        function make_then(th) {
                var b = th;
                while (true) {
                        var type = b[0];
                        if (type == "if") {
                                if (!b[3])
                                        // no else, we must add the block
                                        return make([ "block", [ th ]]);
                                b = b[3];
                        }
                        else if (type == "while" || type == "do") b = b[2];
                        else if (type == "for" || type == "for-in") b = b[4];
                        else break;
                }
                return make(th);
        };

        function make_function(name, args, body) {
                var out = "function";
                if (name) {
                        out += " " + make_name(name);
                }
                out += "(" + add_commas(args.map(make_name)) + ")";
                return add_spaces([ out, make_block(body) ]);
        };

        function make_string(str) {
                // return '"' +
                //         str.replace(/\x5c/g, "\\\\")
                //         .replace(/\r?\n/g, "\\n")
                //         .replace(/\t/g, "\\t")
                //         .replace(/\r/g, "\\r")
                //         .replace(/\f/g, "\\f")
                //         .replace(/[\b]/g, "\\b")
                //         .replace(/\x22/g, "\\\"")
                //         .replace(/[\x00-\x1f]|[\x80-\xff]/g, function(c){
                //                 var hex = c.charCodeAt(0).toString(16);
                //                 if (hex.length < 2)
                //                         hex = "0" + hex;
                //                 return "\\x" + hex;
                //         })
                //         + '"';
                return JSON.stringify(str); // STILL cheating.
        };

        function make_name(name) {
                return name.toString();
        };

        function make_block_statements(statements) {
                for (var a = [], last = statements.length - 1, i = 0; i <= last; ++i) {
                        var stat = statements[i];
                        var code = make(stat);
                        if (code != ";") {
                                if (!beautify && i == last)
                                        code = code.replace(/;+\s*$/, "");
                                a.push(code);
                        }
                }
                return a.map(indent);
        };

        function make_block(statements) {
                if (!statements) return ";";
                if (statements.length == 0) return "{}";
                return "{" + newline + with_indent(function(){
                        return make_block_statements(statements)
                                .join(newline);
                }) + newline + indent("}");
        };

        function make_1vardef(def) {
                var name = def[0], val = def[1];
                if (val != null)
                        name = add_spaces([ name, "=", make(val) ]);
                return name;
        };

        function make(node) {
                var type = node[0];
                var gen = generators[type];
                if (!gen)
                        throw new Error("Can't find generator for \"" + type + "\"");
                return gen.apply(type, node.slice(1));
        };

        var out = make(ast);
        if (beautify) {
                var rx = repeat_string(" ", beautify.indent_level / 2) + "\x08";
                rx = new RegExp(rx, "g");
                out = out.replace(rx, "");
        } else {
                out = out.replace(/\x08/g, "");
        }
        return out;
};

/* -----[ Utilities ]----- */

function repeat_string(str, i) {
        if (i <= 0) return "";
        if (i == 1) return str;
        var d = repeat_string(str, i >> 1);
        d += d;
        if (i & 1) d += str;
        return d;
};

function defaults(args, defs) {
        var ret = {};
        if (args === true)
                args = {};
        for (var i in defs) if (HOP(defs, i)) {
                ret[i] = (args && HOP(args, i)) ? args[i] : defs[i];
        }
        return ret;
};

function is_identifier(name) {
        return /^[a-z_$][a-z0-9_$]*$/i.test(name) &&
                !HOP(jsp.KEYWORDS_ATOM, name) &&
                !HOP(jsp.RESERVED_WORDS, name) &&
                !HOP(jsp.KEYWORDS, name);
};

function HOP(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
};

/* -----[ Exports ]----- */

exports.ast_walker = ast_walker;
exports.ast_mangle = ast_mangle;
exports.ast_squeeze = ast_squeeze;
exports.gen_code = gen_code;
exports.ast_add_scope = ast_add_scope;

// end module: kaffeine/uglify/process.js
});
;

