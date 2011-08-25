#------------------------------------------------------------------------------#
#                                   Imports                                    #
#------------------------------------------------------------------------------#

fs = require 'fs'
path = require 'path'
coffee = require 'coffee-script'
{exec} = require 'child_process'

#------------------------------------------------------------------------------#
#                                    Config                                    #
#------------------------------------------------------------------------------#

# The command to use for minifying merged interpreter scripts.
# MINIFIER = 'cat'
MINIFIER = 'yuicompressor --type js'
# TODO(max99x): Fix BiwaScheme so it can be compiled with either of these:
# MINIFIER = 'uglifyjs -nc --unsafe'
# MINIFIER = 'closure --js'

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

# Builds the interpreter engine including all dependencies for a given language.
buildEngine = (name, lang, callback) ->
  console.log "Compiling the #{name} interpreter."
  engine = lang.engine
  lang.engine = lang.engine.replace /\.coffee$/, '.js'
  compileCoffee engine

  # Merge in dependencies.
  if lang.scripts.length
    merged = []
    for script in lang.scripts
      contents = fs.readFileSync script, 'utf8'
      if /\.coffee$/.test script
        contents = coffee.compile contents
      merged.push contents

    # Write out merged file.
    min_path = "build/#{name}-min.js"
    lang.scripts = [min_path]
    fs.writeFileSync min_path, merged.join ';\n'

    # Minify.
    exec "#{MINIFIER} #{min_path}", maxBuffer: 1 << 21, (error, minified) ->
      if error
        console.log "Minifying #{name} failed:\n#{error.message}."
        process.exit 1
      fs.writeFileSync min_path, minified
      callback()
  else
    callback()

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

#------------------------------------------------------------------------------#
#                                  Main Tasks                                  #
#------------------------------------------------------------------------------#

# CLI option, e.x: cake -c cat bake
option '-m',
       '--minifier [compressor]',
       'Manually specify compressor, defaults to YUI'

# Bakes the pies, brews the coffee and sets up the lunch table.
task 'bake', 'Compile to javascript', (options)->
  # TODO(max99x): Replace libs with minified versions.
  MINIFIER = options.minifier || MINIFIER
  console.log "Compiling jsREPL using #{MINIFIER.split(/\s+/)[0]}."
  compileCoffee 'repl.coffee'

  fs.mkdirSync('build', 0755) if not path.existsSync 'build'

  langs = loadLanguagesList()
  langs_remain = Object.keys(langs).length
  for name, config of langs
    buildEngine name, config, ->
      if --langs_remain == 0 then buildLanguagesList langs

  process.on 'exit', -> console.log 'Done.'

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

    files_to_watch = ['repl.coffee', 'app.coffee', 'loader.coffee']
    for name, config of langs
      files_to_watch.push config.engine
      config.engine = config.engine.replace /\.coffee$/, '.js'
      for script, index in config.scripts
        if /\.coffee$/.test script
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
