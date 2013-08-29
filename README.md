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
  
###Building JSREPL  

#### Build-Dependencies
##### [node.js](http://nodejs.org/)  

##### [npm](http://npmjs.org/)
`curl http://npmjs.org/install.sh | sh`
   
##### [CoffeeScript](http://jashkenas.github.com/coffee-script/)
Using npm :
`sudo npm install -g coffee-script`

#### Getting the source
##### Cloning the repository
`git clone git://github.com/replit/jsrepl.git`

##### Source-Dependencies
`git submodule update --init --recursive`

#### Bake it
`cake bake`


###Including JSREPL  

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
has successfully evaluated a program and passed the resulting evaluated value.  
* `errorCallback`: An optional callback function that is called if evaluatiing a  
program yielded an error and passed the error.  
* `progress`: An optional callback function that is called repeatedly while loading  
a language interpreter with the progress percentage.  
* `timeout`: Sets a timeout for running a program.  
  * `time`: Milliseconds to wait.  
  * `callback`: The callback function that is called when a program times out. This  
  callback must handle recovering the system (i.e. call jsrepl.loadLanguage etc.).  
  Must return `true` to stop the timeout from firing again.  
  
##API

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
Evaluates a program in the currently loaded language interpreter. Takes one argument:  
  
  * __string__ *command*: The program string to evaluate.  
  
Example:

```javascript
  jsrepl.eval('1+1');  
```
  
###JSREPL::getLangConfig  
Returns the configuration object for a given language. Takes one argument:  
  
  * __string__ *lang_name*: The language whose config will be returned. Defaults  
  to the current language name.  
  
###JSREPL::checkLineEnd  
Given a command, decides whether it is ready for execution, as opposed to being  
unfinished, such as missing a closing brace.
  
  * __string__ *command*: The program string.  
  * __function__ *callback*: The callback will be called with true if the command  
  is ready for execution, or false if it is incomplete.
  
###JSREPL::on  
Attaches a listener to one or more events. Takes two arguments:  
  
  * __string | array__ *event_type*: Event(s) to listen to.  
  * __function__ *callback*: The function to call when the event is fired. Will    
  be called with whatever arguments the event supplies.  
  
###JSREPL::off  
Detaches a listener or all listeners to one or more events. Arguments:    
  
  * __string | array__ *event_type*: Event(s) to detach listener(s) from.
  * __function__ *listener*: The listener function to detach. If not supplied then    
  all listeners will be detached.  
    
###JSREPL::once
Attaches a listener to one or more events that will only be called once.
Arguments:

  * __string | array__ *event_type*: Event(s) to listen to.  
  * __function__ *callback*: The function to call when the event is fired.  

##Events

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
If JSREPL was instantiated with the `timeout` option that includes the time  
to wait on a running program before calling the specified callback (see  
Instantiating JSREPL) and firing this event.  

###ready
Fired when a language is loaded and is ready to eval.

##Standard input hacks

###Problem
Language interpreters that are compiled with Emscripten expect input to be  
to be a blocking call (synchronous). The only way to get blocking input  
prompts in browsers is by using `window.prompt`. While suboptimal, it  
works. However, that way we lose the ability to load interpreters in Web  
Workers (because Workers have no access to dialog boxes). 

Loading interpreters in workers has many benefits including not blocking  
the main UI thread while the interpreter is intializing or working and the  
ability to catch infinite loops (see timeout event). Despite these  
advantages, until recently we avoided Workers in order to support input,  
so we loaded languages which expect blocking input calls in an iframe  
instead of a web worker. However in recent builds of Firefox and Chrome  
that approach was broken for us because we could no longer do synchronous  
binary XHRs, e.g. to read library files.

###Solution

####Webkit browsers
In WebKit-based browsers, we have leveraged the non-standard Web SQL Database  
to share resources between the main thread and the worker thread, as they  
provide a synchronization mechanism that can be accessed from both the main  
page thread and from a worker. (See repl.coffee and sandbox.js).

####Firefox
Unfortunately we couldn't do the same in Firefox, as it does not implement Web  
SQL, and still does not support the standard IndexedDB Sync API. Instead, we  
have used XHR to synchronously communicate between the worker and the main  
thread using our server as a crude proxy. There is a sample server  
implementation in the [repl.it static server](https://github.com/replit/repl.it/blob/master/server.js#L31-69).

##License  
  
jsREPL is available under the MIT license. Language interpreters and the   
modifications done to them by jsREPL developers have their own licenses, found  
in their `extern/{language}` folders or submodules.  
