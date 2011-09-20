if (!Date.now) {
  Date.now = function now() {
    return +new Date();
  };
}

if (!Object.keys) {
  Object.keys = function(o) {
    if (o !== Object(o)) throw new TypeError('Object.keys called on non-object');
    var ret = [];
    for (var p in o) if (Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
    return ret;
  };
}

if (!Object.getOwnPropertyNames) {
  Object.getOwnPropertyNames = Object.keys;
}

if (!Object.create) {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

if (!Array.isArray) {
  Array.isArray = function(a) {
    return {}.toString.call(a) == '[object Array]';
  };
}

if (!Function.prototype.bind) {  
  
  Function.prototype.bind = function (oThis) {  
  
    if (typeof this !== "function") // closest thing possible to the ECMAScript 5 internal IsCallable function  
      throw new TypeError("Function.prototype.bind - what is trying to be fBound is not callable");  
  
    var aArgs = Array.prototype.slice.call(arguments, 1),   
        fToBind = this,   
        fNOP = function () {},  
        fBound = function () {  
          // Fix for safari not allowing instanceof to be called on an undefined prototype;
          try {
            return fToBind.apply(this instanceof fNOP ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments))); 
          } catch (e) {
            return fToBind.apply(oThis || window, aArgs.concat(Array.prototype.slice.call(arguments))); 
          }
        };  
  
    fNOP.prototype = this.prototype;  
    fBound.prototype = new fNOP();  
  
    return fBound;  
  
  };  
  
}
if (!Object.freeze) {
  Object.freeze = function( obj ) {
    return obj.___frozen___ = true;
  };
}

if (!Object.isFrozen) {
  Object.isFrozen = function ( obj ) {
    return Boolean(obj.___frozen___);
  }
}