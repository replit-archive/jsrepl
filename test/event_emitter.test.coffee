describe 'EventEmitter', ->

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

  EventEmitter = JSREPL::__test__::EventEmitter
  obj = new EventEmitter
  a = 1
  b = 2
  i = 0
  describe '#on', ->
  	it 'should add a listener', ->
      obj.on 'fake', lis
      expect(obj.listeners).to.eql  fake: [lis]
  	 
    it 'should add multiple listeners', ->
      obj.on 'fake', lis2
      expect(obj.listeners).to.eql  fake: [lis, lis2]

    it 'should listen to multiple events ', ->
      obj.on ['A', 'B', 'C'], lis
      expect(obj.listeners.A).to.eql [lis]
      expect(obj.listeners.B).to.eql [lis]
      expect(obj.listeners.C).to.eql [lis]

  describe '#fire', ->
  	it 'should fire listeners in order and pass args', ->
  	  obj.fire 'fake', [a, b]

    it 'should fire multiple events', ->
      obj.fire ['A', 'B', 'C'], [a, b]
	
  describe '#off', ->
  	it 'should remove a listener by reference', ->
  	  obj.off 'fake', lis
  	  expect(obj.listeners.fake).to.eql [lis2]

  	it 'should remove all listeners', ->
  	  obj.on 'fake', lis
  	  expect(obj.listeners.fake).to.eql [lis2, lis]
  	  
  	  obj.off 'fake'
  	  expect(obj.listeners.fake).to.eql []

    it 'should remove listneres for multiple events', ->
      obj.off ['A', 'B', 'C']
      expect(obj.listeners.A).to.eql []
      expect(obj.listeners.B).to.eql []
      expect(obj.listeners.C).to.eql []

  describe '#once', ->
  	it 'should fire a listener once and remove it', ->
  	  j = 0
  	  one = -> j++
  	  obj.once 'oneevent', one
  	  obj.fire 'oneevent'
  	  
  	  expect(j).to.be 1
  	  expect(obj.listeners.oneevent).to.eql []

    it 'should attach a once listner to multiple event and remove it when any fire', ->
      j = 0
      one = -> j++
      obj.once ['A', 'B', 'C'], one
      obj.fire 'A'
      obj.fire 'B'
      obj.fire 'C'

      expect(j).to.be(1)
      expect(obj.listeners.A).to.eql []
      expect(obj.listeners.B).to.eql []
      expect(obj.listeners.C).to.eql []
