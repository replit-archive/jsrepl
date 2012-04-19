describe 'Loader', ->
  Loader = JSREPL::__test__::Loader
  loader = new Loader
  
  describe '#_appendChild()', ->
    it 'should append an element to a head/body elem', ->
      div = document.createElement 'div'
      div.setAttribute('id', 'mos-div')
      loader._appendChild 'head', div
      
      head = document.getElementsByTagName('head')[0]
      expect(head.children).to.contain div
  
  getIframe = -> document.getElementsByTagName('iframe')[0]
  
  describe '#createSandbox()', ->
    it 'should append an invisible iframe to the body and callback on iframe load', (done) ->
      loader.createSandbox (win) ->
        iframe = getIframe()
        expect(iframe.parentElement || iframe.parentNode).to.be(document.getElementsByTagName('body')[0])
        expect(iframe.style.display).to.be 'none'
        expect(iframe.contentWindow).to.be win
        done()
    it 'should when called again delete the old iframe and create a new one', (done) ->
      origIframe = getIframe()
      loader.createSandbox (win) ->
        expect(getIframe()).not.to.be(origIframe)
        done()
