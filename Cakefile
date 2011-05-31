{exec} = require 'child_process'
fs = require 'fs'
languages = require   './languages.coffee'

stdout = process.stdout

handle = (error, out, err)->
  stdout.write(out)
  stdout.write(err)
  
fileCount = (Object.keys languages).length
ct = 0
processFiles = (js, name, langConfig)->
  ct++;
  console.log name
  js = js.reduce (p, file)-> p + ";\n" + file
  fs.writeFileSync(name + '-min.js', js)
  console.log fileCount, ct
  if fileCount  == ct
    langsjs = "JSREPL.prototype.Languages.prototype = " + JSON.stringify langConfig
    console.log(langsjs)
    fs.writeFileSync 'languages.js', langsjs
    
# "bake" makes more sense.
task 'bake', 'Compile to javascript', ->
  exec 'coffee -c repl.coffee', handle
  exec 'coffee -c languages.coffee', handle
  exec 'coffee -c langs/lisp/jsrepl_lisp.coffee', handle
  exec 'coffee -c langs/lisp/jsrepl_lisp_lib.coffee', handle
  exec 'coffee -c langs/scheme/jsrepl_scheme.coffee', handle
  exec 'coffee -c langs/qbasic/jsrepl_qbasic.coffee', handle
  exec 'coffee -c langs/coffee-script/jsrepl_coffee.coffee', handle
  
  langConfig = {}
  #JSREPL.prototype.languages 
  for name, config of languages
    langConfig[name] = {}
    for option, value of config
      if option == 'scripts'
        value.files = []
        value.ct = 0;
        value.forEach (js, i,arr)->
          n = name
          if js == 'extern/biwascheme/src/system/port.js' 
            arr.ct++;
            arr.files[i] = fs.readFileSync(js)
          else
            exec 'uglifyjs -nc --unsafe ' + js , (error, stdout)->
              arr.ct++;
              arr.files[i] = stdout
              processFiles(arr.files, n, langConfig) if arr.ct  == arr.length
        langConfig[name][option] = [name + '-min.js']
      else
        langConfig[name][option] = value
        
        
  #console.log(langConfig)
  