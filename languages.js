JSREPL.Languages = {};

JSREPL.Languages.scheme = {
  name: 'Scheme',
  category: 'Functional',
  scripts: [
    'biwascheme.min.js',
    // 'biwascheme.js',  // <-- not working - wtf?
    'jsrepl_scheme.js'
  ],
  eval_func: 'SchemeEval',
  highlight_func: 'SchemeHighlight',
  example_file: 'example.json',
  help_link: 'http://en.wikipedia.org/wiki/Scheme_(programming_language)',
  extension: 'scm',
  logo: 'logo.png'
};

/*
JSREPL.Languages.javascript = {
  name: 'Javascript',
  category: 'Functional',
  scripts: [
    'jsrepl_javascript.js'
  ],
  eval_func: 'JsEval',
  highlight_func: 'JsHighlight',
  example_file: 'example.js',
  help_link: 'https://developer.mozilla.org/en/javascript',
  extension: 'js',
  logo: 'logo.png'
};
*/
