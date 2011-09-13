if (typeof window === "undefined") {
  // Some scripts assume there is a window, don't let them down.
  window = self;
} else {
  // We are in an iframe, self is just the window.
  self = window;
}

// Recieve messages.
(function () {
  var msg_handler = function (e) {
    var message = JSON.parse(e.data),
        current = self,
        parts = message['type'].split('.');
    // Route message.
    for (var i = 0; i < parts.length; i++) {
      current = current[parts[i]];
    }
    current(message.data)
  };
  window.addEventListener('message', msg_handler, false); 
})();

// Dummy console for some scripts would think there is one.
if (typeof console === "undefined") {
  console = {
    log: function(){}
  };  
}

Sandboss = {
  outTimeout: 0,
  output_buffer: [],
  OUT_EVERY_MS: 50,
  syncTimeout: Infinity,
  // Whethere this is an iframe or a worker. better check?
  isFrame : typeof document !== 'undefined',
  // Responsible for posting messages.
  post: function (msg) {
    var msgStr = JSON.stringify(msg);
    if (this.isFrame) {
      // Window communication require additional origin argument.
      window.parent.postMessage(msgStr, '*');
    } else {
      self.postMessage(msgStr);
    }
  },
  // Import an array of scripts.
  importScripts: function (scriptsArr) {
    var that = this;
    if (this.isFrame) {
      // Loader always loads it self in the iframe.
      self.JSREPLLoader.load(scriptsArr, {
        js: true,
        // This must be true, IE is chocking on evaling scripts.
        debug:true,
        success:function () {
          // Instantiate the engine and bind all its methods
          that.engine = new JSREPLEngine(that.input, that.out, that.result, that.err, self, that.ready);
          that.bindAll(Sandboss.engine);
        }
      });
    } else {
      // Synchronusly load scripts
      self.importScripts.apply(self, scriptsArr);
      // Instantiate the engine and bind all its methods
      this.engine = new JSREPLEngine(this.input, this.out, this.result, this.err, self, this.ready);
      this.bindAll(Sandboss.engine);
    }
  },
  // Outbound output.
  out: function (text) {
    var that = this;
    this.output_buffer.push(text);
    if (this.outTimeout === 0) {
      this.outTimeout = setTimeout(this.flush, this.OUT_EVERY_MS);
      this.syncTimeout = Date.now();
    } else if (Date.now() - this.syncTimeout > this.OUT_EVERY_MS) {
      clearTimeout(this.outTimeout);
      this.flush();
    }
  },
  
  flush: function () {
    var message = {
      type: 'out',
      data: this.output_buffer.join('')
    };
    this.post(message);
    this.outTimeout = 0;
    this.output_buffer = [];
  },
  // Outbound errors.
  err: function (e) {
    var message = {
      type: 'err',
      data: e
    };
    this.flush();
    this.post(message);
  },
  // Outbound input.
  input: function (callback) {
    // Incoming input would call "Sandboss.input.write", hence its our continuation callback.
    this.input.write = callback;
    var message = {
      type: 'input'
    };
    this.flush();
    this.post(message);
  },
  result: function (data) {
    var message = {
      type: 'result',
      data: data
    };
    this.flush();
    this.post(message);
  },
  // Outbound language ready function.
  ready: function (data) {
    var message = {
      type: 'ready'
    };
    this.post(message);
  },
  // Inbound/Outbound getNextLineIndent.
  // Gets the nextline indent and sends it in an 'indent' message.
  getNextLineIndent: function (data) {
    // Get line indent 
    var indent = this.engine.GetNextLineIndent(data);
    var message = {
      type: 'indent',
      data: indent
    };
    this.post(message);
  },
  // Bind all methods to its owner object.
  bindAll: function (obj) {
    for (method in obj) {
      (function (method) {
        var fn = obj[method];
        if (typeof fn == "function") {
          obj[method] = function () {
            var args = [].slice.call(arguments);
            return fn.apply(obj, args);
          };
        }
      })(method);
    }
  }
};
// Bind all the sand minions to the SANDBOSS!! MWAHAHAHA
Sandboss.bindAll(Sandboss)
