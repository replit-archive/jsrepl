describe 'Sandbox', ->
  Sandbox = JSREPL::__test__::Sandbox
  sandbox = null

  describe '#constructor', ->
    it 'should instantiate sandbox and append basepath to basescripts', ->
      sandbox = new Sandbox ['sandbox.js']
      url = document.location.href.split('/')
      url.pop()
      url.push('sandbox.js')
      expect(sandbox.baseScripts).to.eql [url.join('/')]
    
  describe '#onmsg()', ->
    it 'should recieve a message event and fire the appropriate listeners', ->
      d = [1, 2, 3]
      sandbox.on 'some-event', (data) ->
        expect(data).to.eql d
      
      msg =
        data: JSON.stringify(type: 'some-event', data: d)
      
      sandbox.onmsg msg
      
  describe '#load()', ->
    it 'should load sandbox in an iframe and load sample engine and fire ready event', (done) ->
      sandbox.once 'ready', ->
        expect(sandbox.workerIsIframe).to.be.ok()
        done()
      sandbox.load ['test/dummy-engine.js'], false
    
    it 'should load sandbox in a worker and load sample engine and fire ready event', (done) ->
      sandbox.on 'ready', ->
        done()
      sandbox.load ['test/dummy-engine.js'], true
  
  
  describe 'messaging', ->
    it 'should send eval to worker and worker must respond with result', (done) ->
      sandbox.once 'result', (data) ->
        expect(data).to.be 'done'
        done()
      
      sandbox.post(type: 'engine.dummy_msg', data: 'dummy')
