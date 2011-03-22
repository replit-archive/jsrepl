JSREPL.Languages = {};
JSREPL.Engines = {};

JSREPL.Languages.Scheme = {
  name: 'Scheme',
  category: 'Functional',
  scripts: [
    'lib/prototype-1.6.0.3.js',
    'langs/scheme/biwascheme.js',
    'langs/scheme/jsrepl_scheme.js'
  ],
  example_file: 'langs/scheme/examples.json',
  help_link: 'http://en.wikipedia.org/wiki/Scheme_(programming_language)',
  extension: 'scm',
  logo: 'langs/scheme/logo.png'
};
