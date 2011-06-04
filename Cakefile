{exec} = require 'child_process'
fs = require 'fs'
path = require 'path'
languages = require './languages.coffee'

#------------------------------------------------------------------------------#
#                                    Config                                    #
#------------------------------------------------------------------------------#

# The command to use for minifying merged interpreter scripts.
# MINIFIER = 'cat'
MINIFIER = 'yuicompressor --type js'
# TODO: Fix BiwaScheme so it can be compiled with either of these:
# MINIFIER = 'uglifyjs -nc --unsafe'
# MINIFIER = 'closure --js'

#------------------------------------------------------------------------------#
#                                   Helpers                                    #
#------------------------------------------------------------------------------#

# A simple shortcut to forward child output.
forwardStreams = (_, out, err) ->
  process.stdout.write(out)
  process.stderr.write(err)

# Builds the interpreter engine including all dependencies for a given language.
buildEngine = (name, lang, callback) ->
  console.log "Compiling #{name} interpreter."
  engine = lang.engine.replace /\.js$/, '.coffee'
  exec "coffee --compile #{engine}", (error) ->
    if error
      console.log "Coffee compiling #{name} failed:\n#{error.message}"
      process.exit 1

    # Merge in dependencies.
    merged = (fs.readFileSync file for file in lang.scripts).join ';\n'

    # Merge.
    min_path = "build/#{name}-min.js"
    lang.scripts = [min_path]
    fs.writeFileSync min_path, merged

    # Minify.
    exec "#{MINIFIER} #{min_path}", maxBuffer: 1<<21, (error, minified) ->
      if error
        console.log "Minifying #{name} failed:\n#{error.message}"
        process.exit 1
      fs.writeFileSync min_path, minified
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

# Bakes the pies, brews the coffee and sets up the lunch table.
task 'bake', 'Compile to javascript', ->
  console.log 'Compiling jsREPL.'

  exec 'coffee --compile repl.coffee', forwardStreams

  fs.mkdirSync('build', 0755) if not path.existsSync 'build'
  langs_remain = Object.keys(languages).length
  for name, config of languages
    buildEngine name, config, ->
      if --langs_remain == 0 then buildLanguagesList languages

  process.on 'exit', -> console.log 'Done.'

# Watches all coffee files and compiles them live to Javascript.
task 'watch', 'Watch all coffee files and compile them live to javascript', ->
  console.log 'Watching jsREPL...'

  files_to_watch = ['repl.coffee', 'languages.coffee']
  for name, config of languages
    files_to_watch.push config.engine.replace /\.js$/, '.coffee'

  for file in files_to_watch
    watchFile file, (filename) ->
      console.log "Compiling #{filename}."
      exec "coffee --compile #{filename}", forwardStreams
