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
