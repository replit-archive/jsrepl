
window.onload = function() {
  //$('body').append('<pre>');
  document.write('<pre id="q">');
  var virtualMachine = new VirtualMachine({
    print: function(x) {
      //$('pre').text($('pre').text() + x);
      document.getElementById('q').innerHTML = document.getElementById('q').innerHTML + x;
    },
    input: function(callback) {
      callback(prompt("Input:"));
    }
  });
  var program = new QBasicProgram('X = 42\nINPUT Y$\nPRINT 1337\nPRINT X\nPRINT Y$\n');
  virtualMachine.run(program, false);
};
