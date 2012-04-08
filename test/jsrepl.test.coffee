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

