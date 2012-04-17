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
    beforeEach -> jsrepl = new JSREPL

    for lang, config of JSREPL::Languages::
      do (lang, config) ->
        it "it should load #{lang} in a worker under 5 seconds", (done) ->
          @timeout 5000
          jsrepl.loadLanguage lang, ->
            expect(jsrepl.sandbox.workerIsIframe).not.to.be.ok()
            done()

        it "it should load #{lang} under 5 seconds in an iframe if non-emscripten language", (done) ->
          return done() if config.emscripted? 
          @timeout 5000
          jsrepl.loadLanguage lang, false, ->
            expect(jsrepl.sandbox.workerIsIframe).to.be.ok()
            done()

  describe '#eval', ->
    it 'should take code and callback. Execute code and call callback '
    for lang, config of JSREPL::Languages::
      do (lang, config) ->
        it "should succesfully eval a basic predefined and tested piece of code for #{lang}", (done) ->
          @timeout 5000
          jsrepl.loadLanguage lang, ->
            code = if lang is 'unlambda' then 'r' else 1
            jsrepl.eval '1', (error, result) ->
              console.log arguments
              if error
                done new error
              else
                done()








