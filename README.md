#JSREPL  
  
A sandboxed polyglot browser REPL.  
  
##Current Languages  
  
* JavaScript Variants  
  * JavaScript  
  * CoffeeScript  
  * Kaffeine  
  * Move  
  * Traceur (JavaScript.next)  
  
* Esoteric  
  * Bloop  
  * Brainfuck  
  * LOLCODE  
  * Unlambda  
  * Emoticon  
  
* Classic  
  * Quick Basic  
  * Forth  
  
* Serious  
  * Scheme  
  * Lua  
  * Python  
  * Ruby (beta)  
    
## Browser Support  
* IE 9-10  
* Chrome 10+  
* Safari 5  
* Firefox 3.6+  
* Opera 11+  
* iOS 5 Safari  
  
## Getting Started  
  
Include the built jsrepl script with the id "jsrepl-script".  

```html
  <script src="jsrepl.js" id="jsrepl-script"></script>  
```  
  
###Instantiating JSREPL  
  
```javascript
  var jsrepl = new JSREPL({  
    input: inputCallback,  
    output: outputCallback,  
    result: resultCallback,  
    error: errorCallback,  
    progress: progressCallback,  
    timeout: {  
      time: 30000,  
      callback: timeoutCallback  
    }  
  });  
```  
  
* `inputCallback`: A callback function that is called when the language interpreter    
is requesting input from the user. It will be passed a continuation callback that    
should be called with the user input. Typically the interpreter would block until  
input is received hence this is a mandatory callback.  
* `outputCallback`: An optional callback function that is called when the engine  
has output to flush out to the standard out.  
* `resultCallback`: An optional callback function that is called when the interpreter  
had successfully eval'ed a program with the result from it.  
* `errorCallback`: An optional callback function that is called if eval'ing a program  
yielded an error with the error.  
* `progress`: An optional callback function that is called with the progress percentage  
of loading a language interpreter.  
* `timeout`: Sets a timeout for running a program.  
  * `time`: Milliseconds to wait.  
  * `callback`: The callback function that is called when a program times out. This  
  callback must handle recovering the system (i.e. call jsrepl.loadLanguage etc.).  
  Must return `true` to stop the timeout from firing again.  
  
##Usage  
###JSREPL::loadLanguage  
Loads a language interpreter. Takes three arguments:  
  
  * __string__ *lang_name*: The name of the language to load.  
  * __function__ *callback*: Called when the language has been successfully loaded.  
  * __boolean__ *worker_friendly* (optional): By default JSRPEL would try to load  
  interpreters into Web Workers, this argument would force either loading in a   
  Worker (true) or loading in an iframe (false).  
  
Example:

```javascript
  jsrepl.loadLanguage('python', function () {  
    alert('Python loaded');  
  });
```
  
###JSRPEL::eval  
Evaluates a program in the current loaded language interpreter. Takes one argument:  
  
  * __string__ *command*: The program string to evaluate.  
  
Example:

```javascript
  jsrepl.eval('1+1');  
```
  
###JSREPL::getLangConfig  
Returns the configuration object for a given language. Takes one argument:  
  
  * __string__ *lang_name*: The language to return its config object. Defaults to  
  the current language name.  
  
###JSREPL::checkLineEnd  
Given a command, decides whether it is ready for execution, as opposed to being  
unfinished, such as missing a closing brace.
  
  * __string__ *command*: The program string.  
  * __function__ *callback*: The callback will be called with true if the command  
  is ready for execution
  
##Events  
  
###JSREPL::on  
Attaches a listener to an event. Takes two arguments:  
  
  * __string__ *event_type*: The event to listen to.  
  * __function__ *callback*: The function to call when the event is fired. Will    
  be called with whatever arguments the event supplies.  
  
###JSREPL::off  
Detaches a listener or all listeners to an event.    
Arguments:    
  
  * __string__ *event_type*: The event to detach listener(s) from.  
  * __function__ *listener*: The listener function to detach. If not supplied then    
  all listeners will be detached.  
    
  
###input  
Fired when the current language interpreter asks for input.    
Arguments:  
  
  * __function__ *callback*: The program execution continuation callback.    
  Must be called with the string from the user input. Note that only    
  one input listener should call this callback.  
  
  
###output  
Fired each time the current language interpreter has output to standard out.    
Arguments:  
    
  * __string__ *data*: The output string.  
    
###result  
Fired when the language interpreter has a result from the latest eval.    
Arguments:  
  
  * __string__ *data*: The *stringified* result from the latest eval.  
    
###error  
Fired when the language interpreter has an error from the latest eval.    
Arguments:  
  
  * __string__ *error*: The *stringified* error from the latest eval.  
  
###progress  
Fired when JSREPL has load progress percentage from loading a language    
interpreter to report.    
Arguments:    
  
  * __float__ *percentage*: How much of the interpreter file(s) was loaded.  
  
###timeout  
Fired when a program times out.    
  
##License  
  
jsREPL is available under the MIT license. Language interpreters and the   
modifications done to them by jsREPL developers have their own licenses, found  
in their `extern/{language}` folders or submodules.  
