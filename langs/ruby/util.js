//// Util ////////////////////////////////////////////////////////////

RubyEngine.Util = {
  getRubyScriptList: function(){
    var ret = []
    var ary = document.getElementsByTagName("script");
    for(var i=0; i < ary.length; i++) {
    	if(ary[i].type == "text/ruby") ret.push(ary[i]);
    }
    return ret;
  },
  getRubyScript: function(){
    var t="",list=this.getRubyScriptList();
    for(var i=0; i < list.length; i++) t+=list[i].text;
    return t;
  }
}

