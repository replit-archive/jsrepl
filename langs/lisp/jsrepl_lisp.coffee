isNil = (x) ->
  (not x?) or (x instanceof Array and x.length == 0)

LIB = '''
(defun caar (x) (car (car x)))
(defun caar (x) (car (car x)))
(defun cadr (x) (car (cdr x)))
(defun cdar (x) (cdr (car x)))
(defun cddr (x) (cdr (cdr x)))
(defun caaar (x) (car (car (car x))))
(defun caadr (x) (car (car (cdr x))))
(defun cadar (x) (car (cdr (car x))))
(defun caddr (x) (car (cdr (cdr x))))
(defun cdaar (x) (cdr (car (car x))))
(defun cdadr (x) (cdr (car (cdr x))))
(defun cddar (x) (cdr (cdr (car x))))
(defun cdddr (x) (cdr (cdr (cdr x))))
(defun caaaar (x) (car (car (car (car x)))))
(defun caaadr (x) (car (car (car (cdr x)))))
(defun caadar (x) (car (car (cdr (car x)))))
(defun caaddr (x) (car (car (cdr (cdr x)))))
(defun cadaar (x) (car (cdr (car (car x)))))
(defun cadadr (x) (car (cdr (car (cdr x)))))
(defun caddar (x) (car (cdr (cdr (car x)))))
(defun cadddr (x) (car (cdr (cdr (cdr x)))))
(defun cdaaar (x) (cdr (car (car (car x)))))
(defun cdaadr (x) (cdr (car (car (cdr x)))))
(defun cdadar (x) (cdr (car (cdr (car x)))))
(defun cdaddr (x) (cdr (car (cdr (cdr x)))))
(defun cddaar (x) (cdr (cdr (car (car x)))))
(defun cddadr (x) (cdr (cdr (car (cdr x)))))
(defun cdddar (x) (cdr (cdr (cdr (car x)))))
(defun cddddr (x) (cdr (cdr (cdr (cdr x)))))
(def + plus)
(def define def)
(def #t 't)
(def #f Nil)
(def nil Nil)
(def - minus)
(def / divide)
(def % rem)
(def * times)
(def = equal)
(def eq equal)
(def head car)
(def first car)
(def tail cdr)
(def rest cdr)
(def eq equal)
(defun null (x) (equal x Nil))
(defun zerop (x) (equal x 0))
(defun plusp (x) (> x 0))
(defun minusp (x) (< x 0))
(defun evenp (x) (equal (rem x 2) 0))
(defun oddp (x) (/= (rem x 2) 1))
(defun list-member (E L) (cond ((null L) Nil)
                          ((equal E (first L))  't)
                          ('t (list-member E (rest L)))))
(defun map (F L) (if (null L) Nil (cons (F (head L)) (map F (tail L)))))
'''

class self.JSREPLEngine
  constructor: (input, output, result, @error, @sandbox, ready) ->
    Javathcript = @Javathcript = @sandbox.Javathcript
    Javathcript.Environment::princ = (obj, callback) ->
      this._value obj, (val) ->
        output Javathcript.environment._stringify val
        callback val

    Javathcript.Environment::print = (obj, callback) ->
      this._value obj, (val) ->
        output Javathcript.environment._stringify val
        output '\n'
        callback val

    Javathcript.Environment::input = (callback) ->
      input (str) ->
        callback new Javathcript.Atom str

    Javathcript.Environment::_error = error

    for f in ['princ', 'print', 'input', '_error']
      Javathcript.Environment::[f].toString = -> '{library macro}'

    @result_handler = (r) ->
      result if isNil(r) then '' else r.toString()

    Javathcript.evalMulti LIB, (->) ready


  Eval: (command) ->
    try
      @Javathcript.eval command, @result_handler
    catch e
      try
        last_result = null
        handleMultiResult = (r) => last_result = r
        @Javathcript.evalMulti command, handleMultiResult, =>
          @result_handler last_result
      catch e
        @error e.message

  EvalSync: (command) ->
    ret = null
    try
      @Javathcript.eval command, (r) ->
        ret = r
    catch e
      last_result = null
      handleMultiResult = (r) => last_result = r
      @Javathcript.evalMulti command, handleMultiResult, =>
        ret = last_result

    return ret


  GetNextLineIndent: (command) ->
    countParens = (str) =>
      tokenizer = new @Javathcript.Tokenizer str
      assembly = new @Javathcript.BPWJs.TokenAssembly tokenizer
      tokens = assembly.tokenString.tokens
      parens = 0

      for token in tokens
        if token.ttype is 'symbol'
          switch token.sval
            when '(' then ++parens
            when ')' then --parens

      return parens

    if countParens(command) <= 0
      # All S-exps closed or extra closing parens; don't continue.
      return false
    else
      parens_in_last_line = countParens command.split('\n')[-1..][0]
      if parens_in_last_line > 0
        # A new S-exp opened on the last line; indent one level.
        return 1
      else if parens_in_last_line < 0
        # Some S-exps were closed; realign with the outermost closed S-exp.
        return parens_in_last_line
      else
        return 0
