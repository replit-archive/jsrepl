self.JSREPLEngine = function (input, output, result, error, sandbox, ready) {
  this.result = result;
  ready();
}

self.JSREPLEngine.prototype.dummy_msg = function (d) {
  if (d != 'dummy') throw new Error
  this.result('done');
}