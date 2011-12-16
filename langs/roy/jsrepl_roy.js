
  self.JSREPLEngine = (function() {

    function JSREPLEngine(input, output, result, error, sandbox, ready) {
      this.result = result;
      this.error = error;
      this.sandbox = sandbox;
      this.inspect = this.sandbox.console.inspect;
      this.roy = this.sandbox.roy;
      this.functionClass = this.sandbox.Function;
      this.sandbox.__eval = this.sandbox.eval;
      ready();
    }

    JSREPLEngine.prototype.Eval = function(command) {
      var compiled, result;
      try {
        compiled = this.roy.compile(command).output;
        result = this.sandbox.__eval(compiled);
        return this.result(result === void 0 ? '' : this.inspect(result));
      } catch (e) {
        return this.error(e);
      }
    };

    JSREPLEngine.prototype.RawEval = function(command) {
      var compiled, result;
      try {
        compiled = this.roy.compile(command).output;
        result = this.sandbox.__eval(compiled);
        return this.result(result);
      } catch (e) {
        return this.error(e);
      }
    };

    JSREPLEngine.prototype.GetNextLineIndent = function(command) {
      try {
        this.roy.compile(command);
        return false;
      } catch (e) {
        if (/[\[\{\(]$/.test(command)) {
          return 1;
        } else {
          return 0;
        }
      }
    };

    return JSREPLEngine;

  })();
