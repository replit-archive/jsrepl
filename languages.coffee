@JSREPL::Languages::javascript =
  system_name: 'javascript'
  name: 'JavaScript'
  extension: 'js'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'util/console.js'
  ]
  includes: []
  engine: 'langs/javascript/jsrepl_js.coffee'
  minifier: 'closure'

@JSREPL::Languages::coffeescript =
  system_name: 'coffeescript'
  name: 'CoffeeScript'
  extension: 'coffee'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    'extern/coffee-script/coffee-script.js'
    'util/console.js'
  ]
  includes: []
  engine: 'langs/coffee-script/jsrepl_coffee.coffee'
  minifier: 'uglify'


@JSREPL::Languages::ruby =
  system_name: 'ruby'
  name: 'Ruby'
  extension: 'rb'
  matchings: [
    ['(', ')']
    ['[', ']']
    ['{', '}']
  ]
  scripts: [
    {
      firefox_3: 'extern/ruby/dist/ruby.opt.js'
      opera: 'extern/ruby/dist/ruby.opt.js'
      default: 'extern/ruby/dist/ruby.closure.js'
    }
  ]
  includes: [
    'extern/ruby/dist/lib'
  ]
  engine: 'langs/ruby/jsrepl_ruby.coffee'
  minifier: 'none'
  emscripted: true
