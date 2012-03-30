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
     
  describe 'events', ->
    a = 1
    b = 2
    i = 0
    
    lis = (arg1, arg2) ->
      expect(i).to.be 0
      expect(arg1).to.be a
      expect(arg2).to.be b
      i++
    
    lis2 = (arg1, arg2) ->
      expect(i).to.be 1
      expect(arg1).to.be a
      expect(arg2).to.be b
      i++
    
    it 'should add listeners', ->
      sandbox.on 'fake', lis
      expect(sandbox.listeners).to.eql  fake: [lis]
      
      sandbox.on 'fake', lis2
      expect(sandbox.listeners).to.eql  fake: [lis, lis2]
    
    it 'should fire listeners in order and pass args', ->
      sandbox.fire 'fake', [a, b]
      
    it 'should remove listeners', ->
      sandbox.off 'fake', lis
      expect(sandbox.listeners).to.eql fake: [lis2]
    
    it 'should remove all listeners', ->
      sandbox.on 'fake', lis
      expect(sandbox.listeners).to.eql fake: [lis2, lis]
      
      sandbox.off 'fake'
      expect(sandbox.listeners).to.eql fake: []
    
    it 'should fire a listener once and remove it', ->
      j = 0
      one = -> j++
      sandbox.once 'oneevent', one
      sandbox.fire 'oneevent'
      
      expect(j).to.be 1
      expect(sandbox.listeners.oneevent).to.eql []
    
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
      sandbox.on 'ready', ->
        expect(sandbox.workerIsIframe).to.be.ok()
        done()
      sandbox.load ['test/dummy-engine.js'], false
    
    it 'should load sandbox in a worker and load sample engine and fire ready event', (done) ->
      sandbox.on 'ready', ->
        done()
      sandbox.load ['test/dummy-engine.js'], true
  
  
  describe 'messaging', ->
    it 'should send eval to worker and worker must respond with result', (done) ->
      sandbox.on 'result', (data) ->
        expect(data).to.be 'done'
      
      sandbox.post(type: 'engine.dummy_msg', data: 'dummy')
