languages = {};

languages['lisp'] = {
  name: 'LISP',
  category: 'functional',
  scripts: [
    'biwascheme.js',
    'jsrepl_scheme.js'
  ],
  eval_func: 'schemeEval',
  highlight_func: 'schemeHighlight',
  example_file: 'examples.txt',
  help_link: 'http://scheme.com',
  extension: 'shcs',
  logo: 'langs/scheme/logo.png'
};

