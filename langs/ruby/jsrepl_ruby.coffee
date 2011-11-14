class self.JSREPLEngine
  constructor: (unused_input, output, @result, @error, sandbox, ready) ->
    @Ruby = sandbox.Ruby
    sandbox.print = (->)
    @error_buffer = []
    printOutput = (chr) => if chr? then output String.fromCharCode chr
    bufferError = (chr) =>
      if chr? then @error_buffer.push String.fromCharCode chr
    @Ruby.initialize null, printOutput, bufferError
    ready()

  Eval: (command) ->
    @error_buffer = []
    try
      result = @Ruby.eval command
      @result @Ruby.stringify result
    catch e
      if typeof e isnt 'number'
        @error 'Internal error: ' + e
      else if @error_buffer.length
        @error @error_buffer.join ''
      else
        @error 'Unknown error.'
  
  RawEval: (command) -> @Eval(command)

  GetNextLineIndent: (command) ->
    # A very primitive depth balance estimator.
    levels = 0
    parens = 0
    braces = 0
    brackets = 0
    last_line_changes = 0
    for line in command.split '\n'
      last_line_changes = 0
      for token in (line.match(TOKENS) or [])
        if token in BLOCK_OPENERS
          levels++
          last_line_changes++
        else if token is '('
          parens++
          last_line_changes++
        else if token is '{'
          braces++
          last_line_changes++
        else if token is '['
          brackets++
          last_line_changes++
        else if token is 'end'
          levels--
          last_line_changes--
        else if token is ')'
          parens--
          last_line_changes--
        else if token is ']'
          braces--
          last_line_changes--
        else if token is '}'
          brackets--
          last_line_changes--

        if levels < 0 or parens < 0 or braces < 0 or brackets < 0
          return false

    if levels > 0 or parens > 0 or braces > 0 or brackets > 0
      return if last_line_changes > 0 then 1 else 0
    else
      return false

BLOCK_OPENERS = [
  "begin"
  "module"
  "def"
  "class"
  "if"
  "unless"
  "case"
  "for"
  "while"
  "until"
  "do"
]

TOKENS = ///
  \s+
 |\d+(?:\.\d*)?
 |"(?:[^"]|\\.)*"
 |'(?:[^']|\\.)*'
 |/(?:[^/]|\\.)*/
 |[-+/*]
 |[<>=]=?
 |:?[a-z@$][\w?!]*
 |[{}()\[\]]
 |[^\w\s]+
///ig
