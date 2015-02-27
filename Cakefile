#------------------------------------------------------------------------------#
#                                   Imports                                    #
#------------------------------------------------------------------------------#

fs = require 'fs'
path = require 'path'
coffee = require 'coffee-script'
{exec} = require 'child_process'
crypto = require 'crypto'

#------------------------------------------------------------------------------#
#                                    Config                                    #
#------------------------------------------------------------------------------#

CLOSURE_COMPILER_PATH = './tools/closure-compiler/trunk/build/compiler.jar'
YUI_COMPRESSOR_PATH = './tools/yuicompressor-2.4.6/build/yuicompressor-2.4.6.jar'

# The command to use for minifying merged interpreter scripts.
MINIFIERS =
  none: 'cat '
  yui: "java -jar #{YUI_COMPRESSOR_PATH} --type js "
  uglify: 'uglifyjs '
  closure: "java -Xmx4g -jar #{CLOSURE_COMPILER_PATH} --compilation_level SIMPLE_OPTIMIZATIONS --js "
  closure_es5: "java -Xmx4g -jar #{CLOSURE_COMPILER_PATH} --language_in=ECMASCRIPT5 --compilation_level SIMPLE_OPTIMIZATIONS --js "
  closure_advanced: "java -Xmx4g -jar #{CLOSURE_COMPILER_PATH} --compilation_level ADVANCED_OPTIMIZATIONS --js "
DEFAULT_MINIFIER = MINIFIERS.closure

#------------------------------------------------------------------------------#
#                                 Core Files                                   #
#------------------------------------------------------------------------------#

CORE_FILES = ['repl.coffee', 'languages.js']
WORKER_FILES = ['sandbox.js', 'util/mtwister.js', 'util/polyfills.js']
WATCHED_FILES = ['repl.coffee']

#------------------------------------------------------------------------------#
#                                   Helpers                                    #
#------------------------------------------------------------------------------#

# Loads and returns the languages config.
loadLanguagesList = ->
  langs_coffee = fs.readFileSync 'languages.coffee', 'utf8'

  @JSREPL = ->
  @JSREPL::Languages = ->
  eval coffee.compile langs_coffee
  langs = @JSREPL::Languages::
  delete @JSREPL

  return langs

# Compiles a .coffee file to a .js one, synchronously.
compileCoffee = (filename) ->
  console.log "Compiling #{filename}."
  coffee_src = fs.readFileSync filename, 'utf8'
  js_src = coffee.compile coffee_src
  fs.writeFileSync filename.replace(/\.coffee$/, '.js'), js_src

# Creates any elements of the dirname of the given path that do not exist.
ensurePathExists = (the_path) ->
  parts = the_path.split('/').slice 0, -1
  current_path = '.'
  for part in parts
    current_path += '/' + part
    fs.mkdirSync(current_path, 0o755) if not path.existsSync current_path

# Builds the interpreter engine including all dependencies for a given language.
buildEngine = (name, lang, callback) ->
  console.log "Baking the #{name} interpreter."

  # Compile the engine wrapper.
  compileCoffee lang.engine
  lang.engine = lang.engine.replace /\.coffee$/, '.js'
  ensurePathExists 'build/' + lang.engine
  minify lang.engine, 'build/' + lang.engine, DEFAULT_MINIFIER, (checksum) ->
    lang.engine += '?' + checksum

    # Copy non-JS dependencies.
    for include in lang.includes
      ensurePathExists 'build/' + include
      exec "cp -r #{include} build/#{include}"

    # Determine what special browser builds we need.
    builds = {default: []}
    for script in lang.scripts
      if typeof script is 'object'
        for target of script
          if not (target of builds) then builds[target] = []

    # Define the scripts for each browser build.
    for script in lang.scripts
      for build_target, build of builds
        if typeof script is 'string'
          build.push script
        else
          build.push script[build_target] or script.default

    # Merge in dependencies.
    builds = ([i, j] for i,j of builds)
    lang.scripts = [{}]
    doNextBuild = ->
      if builds.length is 0
        if Object.keys(lang.scripts[0]).length is 0
          lang.scripts[0] = lang.scripts[0].default
        if callback then callback()
      else
        [build_target, scripts] = builds.pop()
        console.log "  Creating the #{build_target} build."
        if scripts.length
          min_path = "engines/#{name}-#{build_target}.js"
          squash scripts, min_path, MINIFIERS[lang.minifier], (checksum) ->
            lang.scripts[0][build_target] = [min_path + '?' + checksum]
            doNextBuild()
        else
          doNextBuild()
    doNextBuild()

# Passes a given file through a minifier child process and calls back when done.
minify = (src, dest, minifier, callback) ->
  console.log "   minifying #{src} using #{minifier}"
  exec "#{minifier} #{src}", maxBuffer: 1 << 23, (error, minified) ->
    if error
      console.log "Minifying #{src} failed:\n#{error.message}."
      process.exit 1
    fs.writeFileSync dest, minified
    if callback then callback(checksum(minified))


checksum = (content) ->
  return crypto
    .createHash('md5')
    .update(content, 'utf8')
    .digest('hex')

# Writes the specified languages list to languages.js
buildLanguagesList = (langs) ->
  console.log 'Building languages list.'
  langs_js = "JSREPL.prototype.Languages.prototype=#{JSON.stringify langs}"
  fs.writeFileSync 'languages.js', langs_js

# Watches a file for changes. Calls the callback immediately when first run.
watchFile = (filename, callback) ->
  callback filename
  fs.watchFile filename, (current, old) ->
    if +current.mtime != +old.mtime then callback filename

# Compiles, concatenates and minifies a given sequence of scripts.
squash = (srcs, outname, minifier, callback) ->
  contents = []
  for file in srcs
    if /\.coffee$/.test file
      compileCoffee file
      file = file.replace /\.coffee$/, '.js'
    contents.push fs.readFileSync file, 'utf8'
  fs.writeFileSync 'tmp/' + outname, contents.join ';\n'
  minify 'tmp/' + outname, 'build/' + outname, minifier, callback

#------------------------------------------------------------------------------#
#                                  Main Tasks                                  #
#------------------------------------------------------------------------------#

# Bakes the pies, brews the coffee and sets up the lunch table.
task 'bake', 'Build everything for deployment', ->
  exec 'rm -rf tmp build', ->
    fs.mkdirSync 'tmp', 0o755
    fs.mkdirSync 'build', 0o755

    console.log "Baking worker."
    exec 'cp sandbox.html build', ->
      squash WORKER_FILES, 'sandbox.js', DEFAULT_MINIFIER, ->
        console.log "Baking languages."
        fs.mkdirSync 'tmp/engines', 0o755
        fs.mkdirSync 'build/engines', 0o755
        langs = loadLanguagesList()
        pending_langs = ([i, j] for i,j of langs)
        buildNextLang = (callback) ->
          if pending_langs.length is 0
            callback()
          else
            [name, config] = pending_langs.pop()
            buildEngine name, config, -> buildNextLang callback
        buildNextLang ->
          console.log "Baking core."
          buildLanguagesList langs
          squash CORE_FILES, 'jsrepl.js', DEFAULT_MINIFIER, ->
            # Mark output as pre-baked to prevent loading of merged files.
            contents = ('window.__BAKED_JSREPL_BUILD__ = true;\n' +
                        fs.readFileSync 'build/jsrepl.js', 'utf8')
            fs.writeFileSync 'build/jsrepl.js', contents
            # Remove temp folder.
            exec 'rm -rf tmp', 0o755, ->
              console.log 'Done.'

# Watches all coffee files and compiles them live to Javascript.
task 'watch', 'Watch all coffee files and compile them live to javascript', ->
  console.log 'Watching jsREPL...'

  watched_files = []

  reload = ->
    console.log 'Reloading language config.'
    try
      langs = loadLanguagesList()
    catch e
      console.log "Error reading language config: #{e}."
      return

    files_to_watch = [].concat WATCHED_FILES
    for name, config of langs
      files_to_watch.push config.engine
      config.engine = config.engine.replace /\.coffee$/, '.js'
      for script, index in config.scripts
        if typeof script is 'string' and /\.coffee$/.test script
          files_to_watch.push script
          config.scripts[index] = script.replace /\.coffee$/, '.js'
    buildLanguagesList langs

    compileFile = (filename) ->
      try
        compileCoffee filename
      catch e
        console.log "Error compiling #{filename}: #{e}."

    for file in watched_files
      if file not in files_to_watch
        console.log "Stopped watching #{file}."
        fs.unwatchFile file
    for file in files_to_watch
      if file not in watched_files
        watchFile file, (filename) -> setTimeout (-> compileFile(filename)), 1

    watched_files = files_to_watch

  # Reading directly from a watchFile callback sometimes fails.
  watchFile 'languages.coffee', -> setTimeout reload, 1
