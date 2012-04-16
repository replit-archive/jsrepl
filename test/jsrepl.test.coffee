HELLOS = {
  'qbasic': 'PRINT "Hello world!"'

}
describe 'JSREPL', ->
  
  jsrepl = null
  describe '#constructor', ->
    it 'should be able to instantiate (and function) without initial arguments', (done) ->
      jsrepl = new JSREPL
      jsrepl.on 'ready', ->
        jsrepl.on 'result', ->
          done()
        jsrepl.eval '1'
      jsrepl.loadLanguage 'javascript'

    it 'should be able to instantiate with initial handlers', (done) ->
      jsrepl = new JSREPL {
        result: -> done()
        error: ->
        input: ->
        output: ->
        progress: ->
      }
      jsrepl.loadLanguage 'javascript', ->
        jsrepl.eval '1'

  describe '#loadLanguage', ->
    for lang, confg of JSREPL::Languages::
      do (lang) ->
        it "it should load #{lang} in under than 5 seconds", (done) ->
          @timeout 5000
          jsrepl.loadLanguage lang, ->
            jsrepl.once 'result', (x) -> done()
            console.log "loaded #{lang}"
            jsrepl.eval '1'




