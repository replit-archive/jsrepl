class JSREPL::Engines::Lisp
  constructor: (input_func, output_func, result_func, error_func) ->
    @error_handler = undefined
    @result_handler = undefined
    # Place in and out methods in a global dummy object.
    # TODO(amasad): Find a name that is less likely to clash or avoid globals.
    window.dummy =
      input: ->
        # Wrapper function to make input_func act syncronously and return a
        # string.
        # TODO(amasad): Hack VM to allow asynchronicity. Breakage imminent.
        str = ''
        input_func (s) -> str = s
        return str
      output: output_func

    # TODO(amasad): Put this into a library.
    library_functions = [
      '(def window (js "window"))'
      '(def dummy (js "window.dummy"))'
      '(def input (method dummy "input"))'
      '(def print (method dummy "output"))'
      '(defun caar (x) (car (car x)))'
      '(defun caar (x) (car (car x)))'
      '(defun cadr (x) (car (cdr x)))'
      '(defun cdar (x) (cdr (car x)))'
      '(defun cddr (x) (cdr (cdr x)))'
      '(defun caaar (x) (car (car (car x))))'
      '(defun caadr (x) (car (car (cdr x))))'
      '(defun cadar (x) (car (cdr (car x))))'
      '(defun caddr (x) (car (cdr (cdr x))))'
      '(defun cdaar (x) (cdr (car (car x))))'
      '(defun cdadr (x) (cdr (car (cdr x))))'
      '(defun cddar (x) (cdr (cdr (car x))))'
      '(defun cdddr (x) (cdr (cdr (cdr x))))'
      '(defun caaaar (x) (car (car (car (car x)))))'
      '(defun caaadr (x) (car (car (car (cdr x)))))'
      '(defun caadar (x) (car (car (cdr (car x)))))'
      '(defun caaddr (x) (car (car (cdr (cdr x)))))'
      '(defun cadaar (x) (car (cdr (car (car x)))))'
      '(defun cadadr (x) (car (cdr (car (cdr x)))))'
      '(defun caddar (x) (car (cdr (cdr (car x)))))'
      '(defun cadddr (x) (car (cdr (cdr (cdr x)))))'
      '(defun cdaaar (x) (cdr (car (car (car x)))))'
      '(defun cdaadr (x) (cdr (car (car (cdr x)))))'
      '(defun cdadar (x) (cdr (car (cdr (car x)))))'
      '(defun cdaddr (x) (cdr (car (cdr (cdr x)))))'
      '(defun cddaar (x) (cdr (cdr (car (car x)))))'
      '(defun cddadr (x) (cdr (cdr (car (cdr x)))))'
      '(defun cdddar (x) (cdr (cdr (cdr (car x)))))'
      '(defun cddddr (x) (cdr (cdr (cdr (cdr x)))))'
      '(def + plus)'
      '(def define def)'
      '(def #t \'t)'
      '(def #f Nil)'
      '(def nil Nil)'
      '(def - minus)'
      '(def / divide)'
      '(def % rem)'
      '(def * times)'
      '(def = equal)'
      '(def eq? equal)'
      '(def head car)'
      '(def first car)'
      '(def tail cdr)'
      '(def rest cdr)'
      '(def eq equal)'
      '(defun null (x) (equal x Nil))'
      '(defun zerop (x) (equal x 0))'
      '(defun plusp (x) (> x 0))'
      '(defun minusp (x) (< x 0))'
      '(defun evenp (x) (equal (rem x 2) 0))'
      '(defun oddp (x) (/= (rem x 2) 1))'
      '(defun list-member (E L) (cond ((null L) Nil)
                                ((equal E (first L))  \'t)
                                (\'t (list-member E (rest L)))))'
      '(defun map (F L) (if (null L) Nil (cons (F (head L)) (map F (tail L)))))'
      # TODO(amasad): Implement Math functions.
    ]

    Javathcript.eval func for func in library_functions

    delete window.dummy
    @result_handler = result_func
    @error_handler = error_func

  Destroy: ->
    delete Javathcript
    # TODO(amasad): Delete the rest.

  Eval: (command) ->
    try
      @result_handler Javathcript.eval command
    catch e
      e.message = 'Error: ' + e.message
      @error_handler e

  Highlight: (element) ->
    # TODO(amasad): Implement.
    console.log 'Higlighting of Lisp code not yet implemented.'
