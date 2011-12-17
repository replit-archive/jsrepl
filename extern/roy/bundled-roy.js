var roy = {};

//     Underscore.js 1.2.3
//     (c) 2009-2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) { return new wrapper(obj); };

  // Export the Underscore object for **Node.js** and **"CommonJS"**, with
  // backwards-compatibility for the old `require()` API. If we're not in
  // CommonJS, add `_` to the global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else if (typeof define === 'function' && define.amd) {
    // Register as a named module with AMD.
    define('underscore', function() {
      return _;
    });
  } else {
    // Exported as a string, for Closure Compiler "advanced" mode.
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.2.3';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = _.toArray(obj).reverse();
    if (context && !initial) iterator = _.bind(iterator, context);
    return initial ? _.reduce(reversed, iterator, memo, context) : _.reduce(reversed, iterator);
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  _.include = _.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (method.call ? method || value : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.max.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.min.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var shuffled = [], rand;
    each(obj, function(value, index, list) {
      if (index == 0) {
        shuffled[0] = value;
      } else {
        rand = Math.floor(Math.random() * (index + 1));
        shuffled[index] = shuffled[rand];
        shuffled[rand] = value;
      }
    });
    return shuffled;
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, val) {
    var result = {};
    var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
    each(obj, function(value, index) {
      var key = iterator(value, index);
      (result[key] || (result[key] = [])).push(value);
    });
    return result;
  };

  // Use a comparator function to figure out at what index an object should
  // be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator) {
    iterator || (iterator = _.identity);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >> 1;
      iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(iterable) {
    if (!iterable)                return [];
    if (iterable.toArray)         return iterable.toArray();
    if (_.isArray(iterable))      return slice.call(iterable);
    if (_.isArguments(iterable))  return slice.call(iterable);
    return _.values(iterable);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return _.toArray(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head`. The **guard** check allows it to work
  // with `_.map`.
  _.first = _.head = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especcialy useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail`.
  // Especially useful on the arguments object. Passing an **index** will return
  // the rest of the values in the array from that index onward. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = function(array, index, guard) {
    return slice.call(array, (index == null) || guard ? 1 : index);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return _.reduce(array, function(memo, value) {
      if (_.isArray(value)) return memo.concat(shallow ? value : _.flatten(value));
      memo[memo.length] = value;
      return memo;
    }, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator) {
    var initial = iterator ? _.map(array, iterator) : array;
    var result = [];
    _.reduce(initial, function(memo, el, i) {
      if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el))) {
        memo[memo.length] = el;
        result[result.length] = array[i];
      }
      return memo;
    }, []);
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays. (Aliased as "intersect" for back-compat.)
  _.intersection = _.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = _.flatten(slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.include(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
    return results;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i, l;
    if (isSorted) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
    for (i = 0, l = array.length; i < l; i++) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return hasOwnProperty.call(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(func, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) func.apply(context, args);
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        func.apply(context, args);
      }
      whenDone();
      throttling = true;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds.
  _.debounce = function(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      return memo = func.apply(this, arguments);
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = concat.apply([func], arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) { return func.apply(this, arguments); }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    return _.map(obj, _.identity);
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (source[prop] !== void 0) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function.
  function eq(a, b, stack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a._chain) a = a._wrapped;
    if (b._chain) b = b._wrapped;
    // Invoke a custom `isEqual` method if one is provided.
    if (a.isEqual && _.isFunction(a.isEqual)) return a.isEqual(b);
    if (b.isEqual && _.isFunction(b.isEqual)) return b.isEqual(a);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = stack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (stack[length] == a) return true;
    }
    // Add the first object to the stack of traversed objects.
    stack.push(a);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          // Ensure commutative equality for sparse arrays.
          if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent.
      if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) return false;
      // Deep compare objects.
      for (var key in a) {
        if (hasOwnProperty.call(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = hasOwnProperty.call(b, key) && eq(a[key], b[key], stack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (hasOwnProperty.call(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    stack.pop();
    return result;
  }

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (hasOwnProperty.call(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Is a given variable an arguments object?
  _.isArguments = function(obj) {
    return toString.call(obj) == '[object Arguments]';
  };
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && hasOwnProperty.call(obj, 'callee'));
    };
  }

  // Is a given value a function?
  _.isFunction = function(obj) {
    return toString.call(obj) == '[object Function]';
  };

  // Is a given value a string?
  _.isString = function(obj) {
    return toString.call(obj) == '[object String]';
  };

  // Is a given value a number?
  _.isNumber = function(obj) {
    return toString.call(obj) == '[object Number]';
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    // `NaN` is the only value for which `===` is not reflexive.
    return obj !== obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value a date?
  _.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };

  // Is the given value a regular expression?
  _.isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function (n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Escape a string for HTML interpolation.
  _.escape = function(string) {
    return (''+string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
  };

  // Add your own custom functions to the Underscore object, ensuring that
  // they're correctly added to the OOP wrapper as well.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      addToWrapper(name, _[name] = obj[name]);
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(str, data) {
    var c  = _.templateSettings;
    var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' +
      'with(obj||{}){__p.push(\'' +
      str.replace(/\\/g, '\\\\')
         .replace(/'/g, "\\'")
         .replace(c.escape, function(match, code) {
           return "',_.escape(" + code.replace(/\\'/g, "'") + "),'";
         })
         .replace(c.interpolate, function(match, code) {
           return "'," + code.replace(/\\'/g, "'") + ",'";
         })
         .replace(c.evaluate || null, function(match, code) {
           return "');" + code.replace(/\\'/g, "'")
                              .replace(/[\r\n\t]/g, ' ') + ";__p.push('";
         })
         .replace(/\r/g, '\\r')
         .replace(/\n/g, '\\n')
         .replace(/\t/g, '\\t')
         + "');}return __p.join('');";
    var func = new Function('obj', '_', tmpl);
    if (data) return func(data, _);
    return function(data) {
      return func.call(this, data, _);
    };
  };

  // The OOP Wrapper
  // ---------------

  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Expose `wrapper.prototype` as `_.prototype`
  _.prototype = wrapper.prototype;

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = slice.call(arguments);
      unshift.call(args, this._wrapped);
      return result(func.apply(_, args), this._chain);
    };
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      method.apply(this._wrapped, arguments);
      return result(this._wrapped, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.value = function() {
    return this._wrapped;
  };

}).call(this);



(function(){
    var module = {"parent": true};
    var modules = {"underscore": _};
    var load = {};
    var require = function(x){
        if(!modules[x]) {
            load[x](modules[x] = {})
        }
        return modules[x];
    }

    load["unicode-categories"] = function(exports) {
        // A full list of JS unicode categories.
        var unicode = {};
        
        // Upper case.
        unicode.Lu = /\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004A\u004B\u004C\u004D\u004E\u004F\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005A\u00C0\u00C1\u00C2\u00C3\u00C4\u00C5\u00C6\u00C7\u00C8\u00C9\u00CA\u00CB\u00CC\u00CD\u00CE\u00CF\u00D0\u00D1\u00D2\u00D3\u00D4\u00D5\u00D6\u00D8\u00D9\u00DA\u00DB\u00DC\u00DD\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189\u018A\u018B\u018E\u018F\u0190\u0191\u0193\u0194\u0196\u0197\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1\u01B2\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6\u01F7\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243\u0244\u0245\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388\u0389\u038A\u038C\u038E\u038F\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C\u039D\u039E\u039F\u03A0\u03A1\u03A3\u03A4\u03A5\u03A6\u03A7\u03A8\u03A9\u03AA\u03AB\u03CF\u03D2\u03D3\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD\u03FE\u03FF\u0400\u0401\u0402\u0403\u0404\u0405\u0406\u0407\u0408\u0409\u040A\u040B\u040C\u040D\u040E\u040F\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0531\u0532\u0533\u0534\u0535\u0536\u0537\u0538\u0539\u053A\u053B\u053C\u053D\u053E\u053F\u0540\u0541\u0542\u0543\u0544\u0545\u0546\u0547\u0548\u0549\u054A\u054B\u054C\u054D\u054E\u054F\u0550\u0551\u0552\u0553\u0554\u0555\u0556\u10A0\u10A1\u10A2\u10A3\u10A4\u10A5\u10A6\u10A7\u10A8\u10A9\u10AA\u10AB\u10AC\u10AD\u10AE\u10AF\u10B0\u10B1\u10B2\u10B3\u10B4\u10B5\u10B6\u10B7\u10B8\u10B9\u10BA\u10BB\u10BC\u10BD\u10BE\u10BF\u10C0\u10C1\u10C2\u10C3\u10C4\u10C5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08\u1F09\u1F0A\u1F0B\u1F0C\u1F0D\u1F0E\u1F0F\u1F18\u1F19\u1F1A\u1F1B\u1F1C\u1F1D\u1F28\u1F29\u1F2A\u1F2B\u1F2C\u1F2D\u1F2E\u1F2F\u1F38\u1F39\u1F3A\u1F3B\u1F3C\u1F3D\u1F3E\u1F3F\u1F48\u1F49\u1F4A\u1F4B\u1F4C\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68\u1F69\u1F6A\u1F6B\u1F6C\u1F6D\u1F6E\u1F6F\u1FB8\u1FB9\u1FBA\u1FBB\u1FC8\u1FC9\u1FCA\u1FCB\u1FD8\u1FD9\u1FDA\u1FDB\u1FE8\u1FE9\u1FEA\u1FEB\u1FEC\u1FF8\u1FF9\u1FFA\u1FFB\u2102\u2107\u210B\u210C\u210D\u2110\u2111\u2112\u2115\u2119\u211A\u211B\u211C\u211D\u2124\u2126\u2128\u212A\u212B\u212C\u212D\u2130\u2131\u2132\u2133\u213E\u213F\u2145\u2183\u2C00\u2C01\u2C02\u2C03\u2C04\u2C05\u2C06\u2C07\u2C08\u2C09\u2C0A\u2C0B\u2C0C\u2C0D\u2C0E\u2C0F\u2C10\u2C11\u2C12\u2C13\u2C14\u2C15\u2C16\u2C17\u2C18\u2C19\u2C1A\u2C1B\u2C1C\u2C1D\u2C1E\u2C1F\u2C20\u2C21\u2C22\u2C23\u2C24\u2C25\u2C26\u2C27\u2C28\u2C29\u2C2A\u2C2B\u2C2C\u2C2D\u2C2E\u2C60\u2C62\u2C63\u2C64\u2C67\u2C69\u2C6B\u2C6D\u2C6E\u2C6F\u2C72\u2C75\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uFF21\uFF22\uFF23\uFF24\uFF25\uFF26\uFF27\uFF28\uFF29\uFF2A\uFF2B\uFF2C\uFF2D\uFF2E\uFF2F\uFF30\uFF31\uFF32\uFF33\uFF34\uFF35\uFF36\uFF37\uFF38\uFF39\uFF3A/;
        
        // Lower case.
        unicode.Ll = /\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006A\u006B\u006C\u006D\u006E\u006F\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007A\u00AA\u00B5\u00BA\u00DF\u00E0\u00E1\u00E2\u00E3\u00E4\u00E5\u00E6\u00E7\u00E8\u00E9\u00EA\u00EB\u00EC\u00ED\u00EE\u00EF\u00F0\u00F1\u00F2\u00F3\u00F4\u00F5\u00F6\u00F8\u00F9\u00FA\u00FB\u00FC\u00FD\u00FE\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E\u017F\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199\u019A\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD\u01BE\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233\u0234\u0235\u0236\u0237\u0238\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F\u0250\u0251\u0252\u0253\u0254\u0255\u0256\u0257\u0258\u0259\u025A\u025B\u025C\u025D\u025E\u025F\u0260\u0261\u0262\u0263\u0264\u0265\u0266\u0267\u0268\u0269\u026A\u026B\u026C\u026D\u026E\u026F\u0270\u0271\u0272\u0273\u0274\u0275\u0276\u0277\u0278\u0279\u027A\u027B\u027C\u027D\u027E\u027F\u0280\u0281\u0282\u0283\u0284\u0285\u0286\u0287\u0288\u0289\u028A\u028B\u028C\u028D\u028E\u028F\u0290\u0291\u0292\u0293\u0295\u0296\u0297\u0298\u0299\u029A\u029B\u029C\u029D\u029E\u029F\u02A0\u02A1\u02A2\u02A3\u02A4\u02A5\u02A6\u02A7\u02A8\u02A9\u02AA\u02AB\u02AC\u02AD\u02AE\u02AF\u0371\u0373\u0377\u037B\u037C\u037D\u0390\u03AC\u03AD\u03AE\u03AF\u03B0\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BB\u03BC\u03BD\u03BE\u03BF\u03C0\u03C1\u03C2\u03C3\u03C4\u03C5\u03C6\u03C7\u03C8\u03C9\u03CA\u03CB\u03CC\u03CD\u03CE\u03D0\u03D1\u03D5\u03D6\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF\u03F0\u03F1\u03F2\u03F3\u03F5\u03F8\u03FB\u03FC\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E\u044F\u0450\u0451\u0452\u0453\u0454\u0455\u0456\u0457\u0458\u0459\u045A\u045B\u045C\u045D\u045E\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0561\u0562\u0563\u0564\u0565\u0566\u0567\u0568\u0569\u056A\u056B\u056C\u056D\u056E\u056F\u0570\u0571\u0572\u0573\u0574\u0575\u0576\u0577\u0578\u0579\u057A\u057B\u057C\u057D\u057E\u057F\u0580\u0581\u0582\u0583\u0584\u0585\u0586\u0587\u1D00\u1D01\u1D02\u1D03\u1D04\u1D05\u1D06\u1D07\u1D08\u1D09\u1D0A\u1D0B\u1D0C\u1D0D\u1D0E\u1D0F\u1D10\u1D11\u1D12\u1D13\u1D14\u1D15\u1D16\u1D17\u1D18\u1D19\u1D1A\u1D1B\u1D1C\u1D1D\u1D1E\u1D1F\u1D20\u1D21\u1D22\u1D23\u1D24\u1D25\u1D26\u1D27\u1D28\u1D29\u1D2A\u1D2B\u1D62\u1D63\u1D64\u1D65\u1D66\u1D67\u1D68\u1D69\u1D6A\u1D6B\u1D6C\u1D6D\u1D6E\u1D6F\u1D70\u1D71\u1D72\u1D73\u1D74\u1D75\u1D76\u1D77\u1D79\u1D7A\u1D7B\u1D7C\u1D7D\u1D7E\u1D7F\u1D80\u1D81\u1D82\u1D83\u1D84\u1D85\u1D86\u1D87\u1D88\u1D89\u1D8A\u1D8B\u1D8C\u1D8D\u1D8E\u1D8F\u1D90\u1D91\u1D92\u1D93\u1D94\u1D95\u1D96\u1D97\u1D98\u1D99\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95\u1E96\u1E97\u1E98\u1E99\u1E9A\u1E9B\u1E9C\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF\u1F00\u1F01\u1F02\u1F03\u1F04\u1F05\u1F06\u1F07\u1F10\u1F11\u1F12\u1F13\u1F14\u1F15\u1F20\u1F21\u1F22\u1F23\u1F24\u1F25\u1F26\u1F27\u1F30\u1F31\u1F32\u1F33\u1F34\u1F35\u1F36\u1F37\u1F40\u1F41\u1F42\u1F43\u1F44\u1F45\u1F50\u1F51\u1F52\u1F53\u1F54\u1F55\u1F56\u1F57\u1F60\u1F61\u1F62\u1F63\u1F64\u1F65\u1F66\u1F67\u1F70\u1F71\u1F72\u1F73\u1F74\u1F75\u1F76\u1F77\u1F78\u1F79\u1F7A\u1F7B\u1F7C\u1F7D\u1F80\u1F81\u1F82\u1F83\u1F84\u1F85\u1F86\u1F87\u1F90\u1F91\u1F92\u1F93\u1F94\u1F95\u1F96\u1F97\u1FA0\u1FA1\u1FA2\u1FA3\u1FA4\u1FA5\u1FA6\u1FA7\u1FB0\u1FB1\u1FB2\u1FB3\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2\u1FC3\u1FC4\u1FC6\u1FC7\u1FD0\u1FD1\u1FD2\u1FD3\u1FD6\u1FD7\u1FE0\u1FE1\u1FE2\u1FE3\u1FE4\u1FE5\u1FE6\u1FE7\u1FF2\u1FF3\u1FF4\u1FF6\u1FF7\u2071\u207F\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146\u2147\u2148\u2149\u214E\u2184\u2C30\u2C31\u2C32\u2C33\u2C34\u2C35\u2C36\u2C37\u2C38\u2C39\u2C3A\u2C3B\u2C3C\u2C3D\u2C3E\u2C3F\u2C40\u2C41\u2C42\u2C43\u2C44\u2C45\u2C46\u2C47\u2C48\u2C49\u2C4A\u2C4B\u2C4C\u2C4D\u2C4E\u2C4F\u2C50\u2C51\u2C52\u2C53\u2C54\u2C55\u2C56\u2C57\u2C58\u2C59\u2C5A\u2C5B\u2C5C\u2C5D\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76\u2C77\u2C78\u2C79\u2C7A\u2C7B\u2C7C\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2D00\u2D01\u2D02\u2D03\u2D04\u2D05\u2D06\u2D07\u2D08\u2D09\u2D0A\u2D0B\u2D0C\u2D0D\u2D0E\u2D0F\u2D10\u2D11\u2D12\u2D13\u2D14\u2D15\u2D16\u2D17\u2D18\u2D19\u2D1A\u2D1B\u2D1C\u2D1D\u2D1E\u2D1F\u2D20\u2D21\u2D22\u2D23\u2D24\u2D25\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F\uA730\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771\uA772\uA773\uA774\uA775\uA776\uA777\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uFB00\uFB01\uFB02\uFB03\uFB04\uFB05\uFB06\uFB13\uFB14\uFB15\uFB16\uFB17\uFF41\uFF42\uFF43\uFF44\uFF45\uFF46\uFF47\uFF48\uFF49\uFF4A\uFF4B\uFF4C\uFF4D\uFF4E\uFF4F\uFF50\uFF51\uFF52\uFF53\uFF54\uFF55\uFF56\uFF57\uFF58\uFF59\uFF5A/;
        
        // Title case.
        unicode.Lt = /\u01C5\u01C8\u01CB\u01F2\u1F88\u1F89\u1F8A\u1F8B\u1F8C\u1F8D\u1F8E\u1F8F\u1F98\u1F99\u1F9A\u1F9B\u1F9C\u1F9D\u1F9E\u1F9F\u1FA8\u1FA9\u1FAA\u1FAB\u1FAC\u1FAD\u1FAE\u1FAF\u1FBC\u1FCC/;
        
        // Modifier letter.
        unicode.Lm = /\u02B0\u02B1\u02B2\u02B3\u02B4\u02B5\u02B6\u02B7\u02B8\u02B9\u02BA\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C1\u02C6\u02C7\u02C8\u02C9\u02CA\u02CB\u02CC\u02CD\u02CE\u02CF\u02D0\u02D1\u02E0\u02E1\u02E2\u02E3\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1C78\u1C79\u1C7A\u1C7B\u1C7C\u1C7D\u1D2C\u1D2D\u1D2E\u1D2F\u1D30\u1D31\u1D32\u1D33\u1D34\u1D35\u1D36\u1D37\u1D38\u1D39\u1D3A\u1D3B\u1D3C\u1D3D\u1D3E\u1D3F\u1D40\u1D41\u1D42\u1D43\u1D44\u1D45\u1D46\u1D47\u1D48\u1D49\u1D4A\u1D4B\u1D4C\u1D4D\u1D4E\u1D4F\u1D50\u1D51\u1D52\u1D53\u1D54\u1D55\u1D56\u1D57\u1D58\u1D59\u1D5A\u1D5B\u1D5C\u1D5D\u1D5E\u1D5F\u1D60\u1D61\u1D78\u1D9B\u1D9C\u1D9D\u1D9E\u1D9F\u1DA0\u1DA1\u1DA2\u1DA3\u1DA4\u1DA5\u1DA6\u1DA7\u1DA8\u1DA9\u1DAA\u1DAB\u1DAC\u1DAD\u1DAE\u1DAF\u1DB0\u1DB1\u1DB2\u1DB3\u1DB4\u1DB5\u1DB6\u1DB7\u1DB8\u1DB9\u1DBA\u1DBB\u1DBC\u1DBD\u1DBE\u1DBF\u2090\u2091\u2092\u2093\u2094\u2C7D\u2D6F\u2E2F\u3005\u3031\u3032\u3033\u3034\u3035\u303B\u309D\u309E\u30FC\u30FD\u30FE\uA015\uA60C\uA67F\uA717\uA718\uA719\uA71A\uA71B\uA71C\uA71D\uA71E\uA71F\uA770\uA788\uFF70\uFF9E\uFF9F/;
        
        // Other letter.
        unicode.Lo = /\u01BB\u01C0\u01C1\u01C2\u01C3\u0294\u05D0\u05D1\u05D2\u05D3\u05D4\u05D5\u05D6\u05D7\u05D8\u05D9\u05DA\u05DB\u05DC\u05DD\u05DE\u05DF\u05E0\u05E1\u05E2\u05E3\u05E4\u05E5\u05E6\u05E7\u05E8\u05E9\u05EA\u05F0\u05F1\u05F2\u0621\u0622\u0623\u0624\u0625\u0626\u0627\u0628\u0629\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u063B\u063C\u063D\u063E\u063F\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u0649\u064A\u066E\u066F\u0671\u0672\u0673\u0674\u0675\u0676\u0677\u0678\u0679\u067A\u067B\u067C\u067D\u067E\u067F\u0680\u0681\u0682\u0683\u0684\u0685\u0686\u0687\u0688\u0689\u068A\u068B\u068C\u068D\u068E\u068F\u0690\u0691\u0692\u0693\u0694\u0695\u0696\u0697\u0698\u0699\u069A\u069B\u069C\u069D\u069E\u069F\u06A0\u06A1\u06A2\u06A3\u06A4\u06A5\u06A6\u06A7\u06A8\u06A9\u06AA\u06AB\u06AC\u06AD\u06AE\u06AF\u06B0\u06B1\u06B2\u06B3\u06B4\u06B5\u06B6\u06B7\u06B8\u06B9\u06BA\u06BB\u06BC\u06BD\u06BE\u06BF\u06C0\u06C1\u06C2\u06C3\u06C4\u06C5\u06C6\u06C7\u06C8\u06C9\u06CA\u06CB\u06CC\u06CD\u06CE\u06CF\u06D0\u06D1\u06D2\u06D3\u06D5\u06EE\u06EF\u06FA\u06FB\u06FC\u06FF\u0710\u0712\u0713\u0714\u0715\u0716\u0717\u0718\u0719\u071A\u071B\u071C\u071D\u071E\u071F\u0720\u0721\u0722\u0723\u0724\u0725\u0726\u0727\u0728\u0729\u072A\u072B\u072C\u072D\u072E\u072F\u074D\u074E\u074F\u0750\u0751\u0752\u0753\u0754\u0755\u0756\u0757\u0758\u0759\u075A\u075B\u075C\u075D\u075E\u075F\u0760\u0761\u0762\u0763\u0764\u0765\u0766\u0767\u0768\u0769\u076A\u076B\u076C\u076D\u076E\u076F\u0770\u0771\u0772\u0773\u0774\u0775\u0776\u0777\u0778\u0779\u077A\u077B\u077C\u077D\u077E\u077F\u0780\u0781\u0782\u0783\u0784\u0785\u0786\u0787\u0788\u0789\u078A\u078B\u078C\u078D\u078E\u078F\u0790\u0791\u0792\u0793\u0794\u0795\u0796\u0797\u0798\u0799\u079A\u079B\u079C\u079D\u079E\u079F\u07A0\u07A1\u07A2\u07A3\u07A4\u07A5\u07B1\u07CA\u07CB\u07CC\u07CD\u07CE\u07CF\u07D0\u07D1\u07D2\u07D3\u07D4\u07D5\u07D6\u07D7\u07D8\u07D9\u07DA\u07DB\u07DC\u07DD\u07DE\u07DF\u07E0\u07E1\u07E2\u07E3\u07E4\u07E5\u07E6\u07E7\u07E8\u07E9\u07EA\u0904\u0905\u0906\u0907\u0908\u0909\u090A\u090B\u090C\u090D\u090E\u090F\u0910\u0911\u0912\u0913\u0914\u0915\u0916\u0917\u0918\u0919\u091A\u091B\u091C\u091D\u091E\u091F\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u0929\u092A\u092B\u092C\u092D\u092E\u092F\u0930\u0931\u0932\u0933\u0934\u0935\u0936\u0937\u0938\u0939\u093D\u0950\u0958\u0959\u095A\u095B\u095C\u095D\u095E\u095F\u0960\u0961\u0972\u097B\u097C\u097D\u097E\u097F\u0985\u0986\u0987\u0988\u0989\u098A\u098B\u098C\u098F\u0990\u0993\u0994\u0995\u0996\u0997\u0998\u0999\u099A\u099B\u099C\u099D\u099E\u099F\u09A0\u09A1\u09A2\u09A3\u09A4\u09A5\u09A6\u09A7\u09A8\u09AA\u09AB\u09AC\u09AD\u09AE\u09AF\u09B0\u09B2\u09B6\u09B7\u09B8\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF\u09E0\u09E1\u09F0\u09F1\u0A05\u0A06\u0A07\u0A08\u0A09\u0A0A\u0A0F\u0A10\u0A13\u0A14\u0A15\u0A16\u0A17\u0A18\u0A19\u0A1A\u0A1B\u0A1C\u0A1D\u0A1E\u0A1F\u0A20\u0A21\u0A22\u0A23\u0A24\u0A25\u0A26\u0A27\u0A28\u0A2A\u0A2B\u0A2C\u0A2D\u0A2E\u0A2F\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59\u0A5A\u0A5B\u0A5C\u0A5E\u0A72\u0A73\u0A74\u0A85\u0A86\u0A87\u0A88\u0A89\u0A8A\u0A8B\u0A8C\u0A8D\u0A8F\u0A90\u0A91\u0A93\u0A94\u0A95\u0A96\u0A97\u0A98\u0A99\u0A9A\u0A9B\u0A9C\u0A9D\u0A9E\u0A9F\u0AA0\u0AA1\u0AA2\u0AA3\u0AA4\u0AA5\u0AA6\u0AA7\u0AA8\u0AAA\u0AAB\u0AAC\u0AAD\u0AAE\u0AAF\u0AB0\u0AB2\u0AB3\u0AB5\u0AB6\u0AB7\u0AB8\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05\u0B06\u0B07\u0B08\u0B09\u0B0A\u0B0B\u0B0C\u0B0F\u0B10\u0B13\u0B14\u0B15\u0B16\u0B17\u0B18\u0B19\u0B1A\u0B1B\u0B1C\u0B1D\u0B1E\u0B1F\u0B20\u0B21\u0B22\u0B23\u0B24\u0B25\u0B26\u0B27\u0B28\u0B2A\u0B2B\u0B2C\u0B2D\u0B2E\u0B2F\u0B30\u0B32\u0B33\u0B35\u0B36\u0B37\u0B38\u0B39\u0B3D\u0B5C\u0B5D\u0B5F\u0B60\u0B61\u0B71\u0B83\u0B85\u0B86\u0B87\u0B88\u0B89\u0B8A\u0B8E\u0B8F\u0B90\u0B92\u0B93\u0B94\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8\u0BA9\u0BAA\u0BAE\u0BAF\u0BB0\u0BB1\u0BB2\u0BB3\u0BB4\u0BB5\u0BB6\u0BB7\u0BB8\u0BB9\u0BD0\u0C05\u0C06\u0C07\u0C08\u0C09\u0C0A\u0C0B\u0C0C\u0C0E\u0C0F\u0C10\u0C12\u0C13\u0C14\u0C15\u0C16\u0C17\u0C18\u0C19\u0C1A\u0C1B\u0C1C\u0C1D\u0C1E\u0C1F\u0C20\u0C21\u0C22\u0C23\u0C24\u0C25\u0C26\u0C27\u0C28\u0C2A\u0C2B\u0C2C\u0C2D\u0C2E\u0C2F\u0C30\u0C31\u0C32\u0C33\u0C35\u0C36\u0C37\u0C38\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85\u0C86\u0C87\u0C88\u0C89\u0C8A\u0C8B\u0C8C\u0C8E\u0C8F\u0C90\u0C92\u0C93\u0C94\u0C95\u0C96\u0C97\u0C98\u0C99\u0C9A\u0C9B\u0C9C\u0C9D\u0C9E\u0C9F\u0CA0\u0CA1\u0CA2\u0CA3\u0CA4\u0CA5\u0CA6\u0CA7\u0CA8\u0CAA\u0CAB\u0CAC\u0CAD\u0CAE\u0CAF\u0CB0\u0CB1\u0CB2\u0CB3\u0CB5\u0CB6\u0CB7\u0CB8\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05\u0D06\u0D07\u0D08\u0D09\u0D0A\u0D0B\u0D0C\u0D0E\u0D0F\u0D10\u0D12\u0D13\u0D14\u0D15\u0D16\u0D17\u0D18\u0D19\u0D1A\u0D1B\u0D1C\u0D1D\u0D1E\u0D1F\u0D20\u0D21\u0D22\u0D23\u0D24\u0D25\u0D26\u0D27\u0D28\u0D2A\u0D2B\u0D2C\u0D2D\u0D2E\u0D2F\u0D30\u0D31\u0D32\u0D33\u0D34\u0D35\u0D36\u0D37\u0D38\u0D39\u0D3D\u0D60\u0D61\u0D7A\u0D7B\u0D7C\u0D7D\u0D7E\u0D7F\u0D85\u0D86\u0D87\u0D88\u0D89\u0D8A\u0D8B\u0D8C\u0D8D\u0D8E\u0D8F\u0D90\u0D91\u0D92\u0D93\u0D94\u0D95\u0D96\u0D9A\u0D9B\u0D9C\u0D9D\u0D9E\u0D9F\u0DA0\u0DA1\u0DA2\u0DA3\u0DA4\u0DA5\u0DA6\u0DA7\u0DA8\u0DA9\u0DAA\u0DAB\u0DAC\u0DAD\u0DAE\u0DAF\u0DB0\u0DB1\u0DB3\u0DB4\u0DB5\u0DB6\u0DB7\u0DB8\u0DB9\u0DBA\u0DBB\u0DBD\u0DC0\u0DC1\u0DC2\u0DC3\u0DC4\u0DC5\u0DC6\u0E01\u0E02\u0E03\u0E04\u0E05\u0E06\u0E07\u0E08\u0E09\u0E0A\u0E0B\u0E0C\u0E0D\u0E0E\u0E0F\u0E10\u0E11\u0E12\u0E13\u0E14\u0E15\u0E16\u0E17\u0E18\u0E19\u0E1A\u0E1B\u0E1C\u0E1D\u0E1E\u0E1F\u0E20\u0E21\u0E22\u0E23\u0E24\u0E25\u0E26\u0E27\u0E28\u0E29\u0E2A\u0E2B\u0E2C\u0E2D\u0E2E\u0E2F\u0E30\u0E32\u0E33\u0E40\u0E41\u0E42\u0E43\u0E44\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94\u0E95\u0E96\u0E97\u0E99\u0E9A\u0E9B\u0E9C\u0E9D\u0E9E\u0E9F\u0EA1\u0EA2\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD\u0EAE\u0EAF\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0\u0EC1\u0EC2\u0EC3\u0EC4\u0EDC\u0EDD\u0F00\u0F40\u0F41\u0F42\u0F43\u0F44\u0F45\u0F46\u0F47\u0F49\u0F4A\u0F4B\u0F4C\u0F4D\u0F4E\u0F4F\u0F50\u0F51\u0F52\u0F53\u0F54\u0F55\u0F56\u0F57\u0F58\u0F59\u0F5A\u0F5B\u0F5C\u0F5D\u0F5E\u0F5F\u0F60\u0F61\u0F62\u0F63\u0F64\u0F65\u0F66\u0F67\u0F68\u0F69\u0F6A\u0F6B\u0F6C\u0F88\u0F89\u0F8A\u0F8B\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u1009\u100A\u100B\u100C\u100D\u100E\u100F\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101A\u101B\u101C\u101D\u101E\u101F\u1020\u1021\u1022\u1023\u1024\u1025\u1026\u1027\u1028\u1029\u102A\u103F\u1050\u1051\u1052\u1053\u1054\u1055\u105A\u105B\u105C\u105D\u1061\u1065\u1066\u106E\u106F\u1070\u1075\u1076\u1077\u1078\u1079\u107A\u107B\u107C\u107D\u107E\u107F\u1080\u1081\u108E\u10D0\u10D1\u10D2\u10D3\u10D4\u10D5\u10D6\u10D7\u10D8\u10D9\u10DA\u10DB\u10DC\u10DD\u10DE\u10DF\u10E0\u10E1\u10E2\u10E3\u10E4\u10E5\u10E6\u10E7\u10E8\u10E9\u10EA\u10EB\u10EC\u10ED\u10EE\u10EF\u10F0\u10F1\u10F2\u10F3\u10F4\u10F5\u10F6\u10F7\u10F8\u10F9\u10FA\u1100\u1101\u1102\u1103\u1104\u1105\u1106\u1107\u1108\u1109\u110A\u110B\u110C\u110D\u110E\u110F\u1110\u1111\u1112\u1113\u1114\u1115\u1116\u1117\u1118\u1119\u111A\u111B\u111C\u111D\u111E\u111F\u1120\u1121\u1122\u1123\u1124\u1125\u1126\u1127\u1128\u1129\u112A\u112B\u112C\u112D\u112E\u112F\u1130\u1131\u1132\u1133\u1134\u1135\u1136\u1137\u1138\u1139\u113A\u113B\u113C\u113D\u113E\u113F\u1140\u1141\u1142\u1143\u1144\u1145\u1146\u1147\u1148\u1149\u114A\u114B\u114C\u114D\u114E\u114F\u1150\u1151\u1152\u1153\u1154\u1155\u1156\u1157\u1158\u1159\u115F\u1160\u1161\u1162\u1163\u1164\u1165\u1166\u1167\u1168\u1169\u116A\u116B\u116C\u116D\u116E\u116F\u1170\u1171\u1172\u1173\u1174\u1175\u1176\u1177\u1178\u1179\u117A\u117B\u117C\u117D\u117E\u117F\u1180\u1181\u1182\u1183\u1184\u1185\u1186\u1187\u1188\u1189\u118A\u118B\u118C\u118D\u118E\u118F\u1190\u1191\u1192\u1193\u1194\u1195\u1196\u1197\u1198\u1199\u119A\u119B\u119C\u119D\u119E\u119F\u11A0\u11A1\u11A2\u11A8\u11A9\u11AA\u11AB\u11AC\u11AD\u11AE\u11AF\u11B0\u11B1\u11B2\u11B3\u11B4\u11B5\u11B6\u11B7\u11B8\u11B9\u11BA\u11BB\u11BC\u11BD\u11BE\u11BF\u11C0\u11C1\u11C2\u11C3\u11C4\u11C5\u11C6\u11C7\u11C8\u11C9\u11CA\u11CB\u11CC\u11CD\u11CE\u11CF\u11D0\u11D1\u11D2\u11D3\u11D4\u11D5\u11D6\u11D7\u11D8\u11D9\u11DA\u11DB\u11DC\u11DD\u11DE\u11DF\u11E0\u11E1\u11E2\u11E3\u11E4\u11E5\u11E6\u11E7\u11E8\u11E9\u11EA\u11EB\u11EC\u11ED\u11EE\u11EF\u11F0\u11F1\u11F2\u11F3\u11F4\u11F5\u11F6\u11F7\u11F8\u11F9\u1200\u1201\u1202\u1203\u1204\u1205\u1206\u1207\u1208\u1209\u120A\u120B\u120C\u120D\u120E\u120F\u1210\u1211\u1212\u1213\u1214\u1215\u1216\u1217\u1218\u1219\u121A\u121B\u121C\u121D\u121E\u121F\u1220\u1221\u1222\u1223\u1224\u1225\u1226\u1227\u1228\u1229\u122A\u122B\u122C\u122D\u122E\u122F\u1230\u1231\u1232\u1233\u1234\u1235\u1236\u1237\u1238\u1239\u123A\u123B\u123C\u123D\u123E\u123F\u1240\u1241\u1242\u1243\u1244\u1245\u1246\u1247\u1248\u124A\u124B\u124C\u124D\u1250\u1251\u1252\u1253\u1254\u1255\u1256\u1258\u125A\u125B\u125C\u125D\u1260\u1261\u1262\u1263\u1264\u1265\u1266\u1267\u1268\u1269\u126A\u126B\u126C\u126D\u126E\u126F\u1270\u1271\u1272\u1273\u1274\u1275\u1276\u1277\u1278\u1279\u127A\u127B\u127C\u127D\u127E\u127F\u1280\u1281\u1282\u1283\u1284\u1285\u1286\u1287\u1288\u128A\u128B\u128C\u128D\u1290\u1291\u1292\u1293\u1294\u1295\u1296\u1297\u1298\u1299\u129A\u129B\u129C\u129D\u129E\u129F\u12A0\u12A1\u12A2\u12A3\u12A4\u12A5\u12A6\u12A7\u12A8\u12A9\u12AA\u12AB\u12AC\u12AD\u12AE\u12AF\u12B0\u12B2\u12B3\u12B4\u12B5\u12B8\u12B9\u12BA\u12BB\u12BC\u12BD\u12BE\u12C0\u12C2\u12C3\u12C4\u12C5\u12C8\u12C9\u12CA\u12CB\u12CC\u12CD\u12CE\u12CF\u12D0\u12D1\u12D2\u12D3\u12D4\u12D5\u12D6\u12D8\u12D9\u12DA\u12DB\u12DC\u12DD\u12DE\u12DF\u12E0\u12E1\u12E2\u12E3\u12E4\u12E5\u12E6\u12E7\u12E8\u12E9\u12EA\u12EB\u12EC\u12ED\u12EE\u12EF\u12F0\u12F1\u12F2\u12F3\u12F4\u12F5\u12F6\u12F7\u12F8\u12F9\u12FA\u12FB\u12FC\u12FD\u12FE\u12FF\u1300\u1301\u1302\u1303\u1304\u1305\u1306\u1307\u1308\u1309\u130A\u130B\u130C\u130D\u130E\u130F\u1310\u1312\u1313\u1314\u1315\u1318\u1319\u131A\u131B\u131C\u131D\u131E\u131F\u1320\u1321\u1322\u1323\u1324\u1325\u1326\u1327\u1328\u1329\u132A\u132B\u132C\u132D\u132E\u132F\u1330\u1331\u1332\u1333\u1334\u1335\u1336\u1337\u1338\u1339\u133A\u133B\u133C\u133D\u133E\u133F\u1340\u1341\u1342\u1343\u1344\u1345\u1346\u1347\u1348\u1349\u134A\u134B\u134C\u134D\u134E\u134F\u1350\u1351\u1352\u1353\u1354\u1355\u1356\u1357\u1358\u1359\u135A\u1380\u1381\u1382\u1383\u1384\u1385\u1386\u1387\u1388\u1389\u138A\u138B\u138C\u138D\u138E\u138F\u13A0\u13A1\u13A2\u13A3\u13A4\u13A5\u13A6\u13A7\u13A8\u13A9\u13AA\u13AB\u13AC\u13AD\u13AE\u13AF\u13B0\u13B1\u13B2\u13B3\u13B4\u13B5\u13B6\u13B7\u13B8\u13B9\u13BA\u13BB\u13BC\u13BD\u13BE\u13BF\u13C0\u13C1\u13C2\u13C3\u13C4\u13C5\u13C6\u13C7\u13C8\u13C9\u13CA\u13CB\u13CC\u13CD\u13CE\u13CF\u13D0\u13D1\u13D2\u13D3\u13D4\u13D5\u13D6\u13D7\u13D8\u13D9\u13DA\u13DB\u13DC\u13DD\u13DE\u13DF\u13E0\u13E1\u13E2\u13E3\u13E4\u13E5\u13E6\u13E7\u13E8\u13E9\u13EA\u13EB\u13EC\u13ED\u13EE\u13EF\u13F0\u13F1\u13F2\u13F3\u13F4\u1401\u1402\u1403\u1404\u1405\u1406\u1407\u1408\u1409\u140A\u140B\u140C\u140D\u140E\u140F\u1410\u1411\u1412\u1413\u1414\u1415\u1416\u1417\u1418\u1419\u141A\u141B\u141C\u141D\u141E\u141F\u1420\u1421\u1422\u1423\u1424\u1425\u1426\u1427\u1428\u1429\u142A\u142B\u142C\u142D\u142E\u142F\u1430\u1431\u1432\u1433\u1434\u1435\u1436\u1437\u1438\u1439\u143A\u143B\u143C\u143D\u143E\u143F\u1440\u1441\u1442\u1443\u1444\u1445\u1446\u1447\u1448\u1449\u144A\u144B\u144C\u144D\u144E\u144F\u1450\u1451\u1452\u1453\u1454\u1455\u1456\u1457\u1458\u1459\u145A\u145B\u145C\u145D\u145E\u145F\u1460\u1461\u1462\u1463\u1464\u1465\u1466\u1467\u1468\u1469\u146A\u146B\u146C\u146D\u146E\u146F\u1470\u1471\u1472\u1473\u1474\u1475\u1476\u1477\u1478\u1479\u147A\u147B\u147C\u147D\u147E\u147F\u1480\u1481\u1482\u1483\u1484\u1485\u1486\u1487\u1488\u1489\u148A\u148B\u148C\u148D\u148E\u148F\u1490\u1491\u1492\u1493\u1494\u1495\u1496\u1497\u1498\u1499\u149A\u149B\u149C\u149D\u149E\u149F\u14A0\u14A1\u14A2\u14A3\u14A4\u14A5\u14A6\u14A7\u14A8\u14A9\u14AA\u14AB\u14AC\u14AD\u14AE\u14AF\u14B0\u14B1\u14B2\u14B3\u14B4\u14B5\u14B6\u14B7\u14B8\u14B9\u14BA\u14BB\u14BC\u14BD\u14BE\u14BF\u14C0\u14C1\u14C2\u14C3\u14C4\u14C5\u14C6\u14C7\u14C8\u14C9\u14CA\u14CB\u14CC\u14CD\u14CE\u14CF\u14D0\u14D1\u14D2\u14D3\u14D4\u14D5\u14D6\u14D7\u14D8\u14D9\u14DA\u14DB\u14DC\u14DD\u14DE\u14DF\u14E0\u14E1\u14E2\u14E3\u14E4\u14E5\u14E6\u14E7\u14E8\u14E9\u14EA\u14EB\u14EC\u14ED\u14EE\u14EF\u14F0\u14F1\u14F2\u14F3\u14F4\u14F5\u14F6\u14F7\u14F8\u14F9\u14FA\u14FB\u14FC\u14FD\u14FE\u14FF\u1500\u1501\u1502\u1503\u1504\u1505\u1506\u1507\u1508\u1509\u150A\u150B\u150C\u150D\u150E\u150F\u1510\u1511\u1512\u1513\u1514\u1515\u1516\u1517\u1518\u1519\u151A\u151B\u151C\u151D\u151E\u151F\u1520\u1521\u1522\u1523\u1524\u1525\u1526\u1527\u1528\u1529\u152A\u152B\u152C\u152D\u152E\u152F\u1530\u1531\u1532\u1533\u1534\u1535\u1536\u1537\u1538\u1539\u153A\u153B\u153C\u153D\u153E\u153F\u1540\u1541\u1542\u1543\u1544\u1545\u1546\u1547\u1548\u1549\u154A\u154B\u154C\u154D\u154E\u154F\u1550\u1551\u1552\u1553\u1554\u1555\u1556\u1557\u1558\u1559\u155A\u155B\u155C\u155D\u155E\u155F\u1560\u1561\u1562\u1563\u1564\u1565\u1566\u1567\u1568\u1569\u156A\u156B\u156C\u156D\u156E\u156F\u1570\u1571\u1572\u1573\u1574\u1575\u1576\u1577\u1578\u1579\u157A\u157B\u157C\u157D\u157E\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u1586\u1587\u1588\u1589\u158A\u158B\u158C\u158D\u158E\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1596\u1597\u1598\u1599\u159A\u159B\u159C\u159D\u159E\u159F\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u15A7\u15A8\u15A9\u15AA\u15AB\u15AC\u15AD\u15AE\u15AF\u15B0\u15B1\u15B2\u15B3\u15B4\u15B5\u15B6\u15B7\u15B8\u15B9\u15BA\u15BB\u15BC\u15BD\u15BE\u15BF\u15C0\u15C1\u15C2\u15C3\u15C4\u15C5\u15C6\u15C7\u15C8\u15C9\u15CA\u15CB\u15CC\u15CD\u15CE\u15CF\u15D0\u15D1\u15D2\u15D3\u15D4\u15D5\u15D6\u15D7\u15D8\u15D9\u15DA\u15DB\u15DC\u15DD\u15DE\u15DF\u15E0\u15E1\u15E2\u15E3\u15E4\u15E5\u15E6\u15E7\u15E8\u15E9\u15EA\u15EB\u15EC\u15ED\u15EE\u15EF\u15F0\u15F1\u15F2\u15F3\u15F4\u15F5\u15F6\u15F7\u15F8\u15F9\u15FA\u15FB\u15FC\u15FD\u15FE\u15FF\u1600\u1601\u1602\u1603\u1604\u1605\u1606\u1607\u1608\u1609\u160A\u160B\u160C\u160D\u160E\u160F\u1610\u1611\u1612\u1613\u1614\u1615\u1616\u1617\u1618\u1619\u161A\u161B\u161C\u161D\u161E\u161F\u1620\u1621\u1622\u1623\u1624\u1625\u1626\u1627\u1628\u1629\u162A\u162B\u162C\u162D\u162E\u162F\u1630\u1631\u1632\u1633\u1634\u1635\u1636\u1637\u1638\u1639\u163A\u163B\u163C\u163D\u163E\u163F\u1640\u1641\u1642\u1643\u1644\u1645\u1646\u1647\u1648\u1649\u164A\u164B\u164C\u164D\u164E\u164F\u1650\u1651\u1652\u1653\u1654\u1655\u1656\u1657\u1658\u1659\u165A\u165B\u165C\u165D\u165E\u165F\u1660\u1661\u1662\u1663\u1664\u1665\u1666\u1667\u1668\u1669\u166A\u166B\u166C\u166F\u1670\u1671\u1672\u1673\u1674\u1675\u1676\u1681\u1682\u1683\u1684\u1685\u1686\u1687\u1688\u1689\u168A\u168B\u168C\u168D\u168E\u168F\u1690\u1691\u1692\u1693\u1694\u1695\u1696\u1697\u1698\u1699\u169A\u16A0\u16A1\u16A2\u16A3\u16A4\u16A5\u16A6\u16A7\u16A8\u16A9\u16AA\u16AB\u16AC\u16AD\u16AE\u16AF\u16B0\u16B1\u16B2\u16B3\u16B4\u16B5\u16B6\u16B7\u16B8\u16B9\u16BA\u16BB\u16BC\u16BD\u16BE\u16BF\u16C0\u16C1\u16C2\u16C3\u16C4\u16C5\u16C6\u16C7\u16C8\u16C9\u16CA\u16CB\u16CC\u16CD\u16CE\u16CF\u16D0\u16D1\u16D2\u16D3\u16D4\u16D5\u16D6\u16D7\u16D8\u16D9\u16DA\u16DB\u16DC\u16DD\u16DE\u16DF\u16E0\u16E1\u16E2\u16E3\u16E4\u16E5\u16E6\u16E7\u16E8\u16E9\u16EA\u1700\u1701\u1702\u1703\u1704\u1705\u1706\u1707\u1708\u1709\u170A\u170B\u170C\u170E\u170F\u1710\u1711\u1720\u1721\u1722\u1723\u1724\u1725\u1726\u1727\u1728\u1729\u172A\u172B\u172C\u172D\u172E\u172F\u1730\u1731\u1740\u1741\u1742\u1743\u1744\u1745\u1746\u1747\u1748\u1749\u174A\u174B\u174C\u174D\u174E\u174F\u1750\u1751\u1760\u1761\u1762\u1763\u1764\u1765\u1766\u1767\u1768\u1769\u176A\u176B\u176C\u176E\u176F\u1770\u1780\u1781\u1782\u1783\u1784\u1785\u1786\u1787\u1788\u1789\u178A\u178B\u178C\u178D\u178E\u178F\u1790\u1791\u1792\u1793\u1794\u1795\u1796\u1797\u1798\u1799\u179A\u179B\u179C\u179D\u179E\u179F\u17A0\u17A1\u17A2\u17A3\u17A4\u17A5\u17A6\u17A7\u17A8\u17A9\u17AA\u17AB\u17AC\u17AD\u17AE\u17AF\u17B0\u17B1\u17B2\u17B3\u17DC\u1820\u1821\u1822\u1823\u1824\u1825\u1826\u1827\u1828\u1829\u182A\u182B\u182C\u182D\u182E\u182F\u1830\u1831\u1832\u1833\u1834\u1835\u1836\u1837\u1838\u1839\u183A\u183B\u183C\u183D\u183E\u183F\u1840\u1841\u1842\u1844\u1845\u1846\u1847\u1848\u1849\u184A\u184B\u184C\u184D\u184E\u184F\u1850\u1851\u1852\u1853\u1854\u1855\u1856\u1857\u1858\u1859\u185A\u185B\u185C\u185D\u185E\u185F\u1860\u1861\u1862\u1863\u1864\u1865\u1866\u1867\u1868\u1869\u186A\u186B\u186C\u186D\u186E\u186F\u1870\u1871\u1872\u1873\u1874\u1875\u1876\u1877\u1880\u1881\u1882\u1883\u1884\u1885\u1886\u1887\u1888\u1889\u188A\u188B\u188C\u188D\u188E\u188F\u1890\u1891\u1892\u1893\u1894\u1895\u1896\u1897\u1898\u1899\u189A\u189B\u189C\u189D\u189E\u189F\u18A0\u18A1\u18A2\u18A3\u18A4\u18A5\u18A6\u18A7\u18A8\u18AA\u1900\u1901\u1902\u1903\u1904\u1905\u1906\u1907\u1908\u1909\u190A\u190B\u190C\u190D\u190E\u190F\u1910\u1911\u1912\u1913\u1914\u1915\u1916\u1917\u1918\u1919\u191A\u191B\u191C\u1950\u1951\u1952\u1953\u1954\u1955\u1956\u1957\u1958\u1959\u195A\u195B\u195C\u195D\u195E\u195F\u1960\u1961\u1962\u1963\u1964\u1965\u1966\u1967\u1968\u1969\u196A\u196B\u196C\u196D\u1970\u1971\u1972\u1973\u1974\u1980\u1981\u1982\u1983\u1984\u1985\u1986\u1987\u1988\u1989\u198A\u198B\u198C\u198D\u198E\u198F\u1990\u1991\u1992\u1993\u1994\u1995\u1996\u1997\u1998\u1999\u199A\u199B\u199C\u199D\u199E\u199F\u19A0\u19A1\u19A2\u19A3\u19A4\u19A5\u19A6\u19A7\u19A8\u19A9\u19C1\u19C2\u19C3\u19C4\u19C5\u19C6\u19C7\u1A00\u1A01\u1A02\u1A03\u1A04\u1A05\u1A06\u1A07\u1A08\u1A09\u1A0A\u1A0B\u1A0C\u1A0D\u1A0E\u1A0F\u1A10\u1A11\u1A12\u1A13\u1A14\u1A15\u1A16\u1B05\u1B06\u1B07\u1B08\u1B09\u1B0A\u1B0B\u1B0C\u1B0D\u1B0E\u1B0F\u1B10\u1B11\u1B12\u1B13\u1B14\u1B15\u1B16\u1B17\u1B18\u1B19\u1B1A\u1B1B\u1B1C\u1B1D\u1B1E\u1B1F\u1B20\u1B21\u1B22\u1B23\u1B24\u1B25\u1B26\u1B27\u1B28\u1B29\u1B2A\u1B2B\u1B2C\u1B2D\u1B2E\u1B2F\u1B30\u1B31\u1B32\u1B33\u1B45\u1B46\u1B47\u1B48\u1B49\u1B4A\u1B4B\u1B83\u1B84\u1B85\u1B86\u1B87\u1B88\u1B89\u1B8A\u1B8B\u1B8C\u1B8D\u1B8E\u1B8F\u1B90\u1B91\u1B92\u1B93\u1B94\u1B95\u1B96\u1B97\u1B98\u1B99\u1B9A\u1B9B\u1B9C\u1B9D\u1B9E\u1B9F\u1BA0\u1BAE\u1BAF\u1C00\u1C01\u1C02\u1C03\u1C04\u1C05\u1C06\u1C07\u1C08\u1C09\u1C0A\u1C0B\u1C0C\u1C0D\u1C0E\u1C0F\u1C10\u1C11\u1C12\u1C13\u1C14\u1C15\u1C16\u1C17\u1C18\u1C19\u1C1A\u1C1B\u1C1C\u1C1D\u1C1E\u1C1F\u1C20\u1C21\u1C22\u1C23\u1C4D\u1C4E\u1C4F\u1C5A\u1C5B\u1C5C\u1C5D\u1C5E\u1C5F\u1C60\u1C61\u1C62\u1C63\u1C64\u1C65\u1C66\u1C67\u1C68\u1C69\u1C6A\u1C6B\u1C6C\u1C6D\u1C6E\u1C6F\u1C70\u1C71\u1C72\u1C73\u1C74\u1C75\u1C76\u1C77\u2135\u2136\u2137\u2138\u2D30\u2D31\u2D32\u2D33\u2D34\u2D35\u2D36\u2D37\u2D38\u2D39\u2D3A\u2D3B\u2D3C\u2D3D\u2D3E\u2D3F\u2D40\u2D41\u2D42\u2D43\u2D44\u2D45\u2D46\u2D47\u2D48\u2D49\u2D4A\u2D4B\u2D4C\u2D4D\u2D4E\u2D4F\u2D50\u2D51\u2D52\u2D53\u2D54\u2D55\u2D56\u2D57\u2D58\u2D59\u2D5A\u2D5B\u2D5C\u2D5D\u2D5E\u2D5F\u2D60\u2D61\u2D62\u2D63\u2D64\u2D65\u2D80\u2D81\u2D82\u2D83\u2D84\u2D85\u2D86\u2D87\u2D88\u2D89\u2D8A\u2D8B\u2D8C\u2D8D\u2D8E\u2D8F\u2D90\u2D91\u2D92\u2D93\u2D94\u2D95\u2D96\u2DA0\u2DA1\u2DA2\u2DA3\u2DA4\u2DA5\u2DA6\u2DA8\u2DA9\u2DAA\u2DAB\u2DAC\u2DAD\u2DAE\u2DB0\u2DB1\u2DB2\u2DB3\u2DB4\u2DB5\u2DB6\u2DB8\u2DB9\u2DBA\u2DBB\u2DBC\u2DBD\u2DBE\u2DC0\u2DC1\u2DC2\u2DC3\u2DC4\u2DC5\u2DC6\u2DC8\u2DC9\u2DCA\u2DCB\u2DCC\u2DCD\u2DCE\u2DD0\u2DD1\u2DD2\u2DD3\u2DD4\u2DD5\u2DD6\u2DD8\u2DD9\u2DDA\u2DDB\u2DDC\u2DDD\u2DDE\u3006\u303C\u3041\u3042\u3043\u3044\u3045\u3046\u3047\u3048\u3049\u304A\u304B\u304C\u304D\u304E\u304F\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305A\u305B\u305C\u305D\u305E\u305F\u3060\u3061\u3062\u3063\u3064\u3065\u3066\u3067\u3068\u3069\u306A\u306B\u306C\u306D\u306E\u306F\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307A\u307B\u307C\u307D\u307E\u307F\u3080\u3081\u3082\u3083\u3084\u3085\u3086\u3087\u3088\u3089\u308A\u308B\u308C\u308D\u308E\u308F\u3090\u3091\u3092\u3093\u3094\u3095\u3096\u309F\u30A1\u30A2\u30A3\u30A4\u30A5\u30A6\u30A7\u30A8\u30A9\u30AA\u30AB\u30AC\u30AD\u30AE\u30AF\u30B0\u30B1\u30B2\u30B3\u30B4\u30B5\u30B6\u30B7\u30B8\u30B9\u30BA\u30BB\u30BC\u30BD\u30BE\u30BF\u30C0\u30C1\u30C2\u30C3\u30C4\u30C5\u30C6\u30C7\u30C8\u30C9\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D0\u30D1\u30D2\u30D3\u30D4\u30D5\u30D6\u30D7\u30D8\u30D9\u30DA\u30DB\u30DC\u30DD\u30DE\u30DF\u30E0\u30E1\u30E2\u30E3\u30E4\u30E5\u30E6\u30E7\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EE\u30EF\u30F0\u30F1\u30F2\u30F3\u30F4\u30F5\u30F6\u30F7\u30F8\u30F9\u30FA\u30FF\u3105\u3106\u3107\u3108\u3109\u310A\u310B\u310C\u310D\u310E\u310F\u3110\u3111\u3112\u3113\u3114\u3115\u3116\u3117\u3118\u3119\u311A\u311B\u311C\u311D\u311E\u311F\u3120\u3121\u3122\u3123\u3124\u3125\u3126\u3127\u3128\u3129\u312A\u312B\u312C\u312D\u3131\u3132\u3133\u3134\u3135\u3136\u3137\u3138\u3139\u313A\u313B\u313C\u313D\u313E\u313F\u3140\u3141\u3142\u3143\u3144\u3145\u3146\u3147\u3148\u3149\u314A\u314B\u314C\u314D\u314E\u314F\u3150\u3151\u3152\u3153\u3154\u3155\u3156\u3157\u3158\u3159\u315A\u315B\u315C\u315D\u315E\u315F\u3160\u3161\u3162\u3163\u3164\u3165\u3166\u3167\u3168\u3169\u316A\u316B\u316C\u316D\u316E\u316F\u3170\u3171\u3172\u3173\u3174\u3175\u3176\u3177\u3178\u3179\u317A\u317B\u317C\u317D\u317E\u317F\u3180\u3181\u3182\u3183\u3184\u3185\u3186\u3187\u3188\u3189\u318A\u318B\u318C\u318D\u318E\u31A0\u31A1\u31A2\u31A3\u31A4\u31A5\u31A6\u31A7\u31A8\u31A9\u31AA\u31AB\u31AC\u31AD\u31AE\u31AF\u31B0\u31B1\u31B2\u31B3\u31B4\u31B5\u31B6\u31B7\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3400\u4DB5\u4E00\u9FC3\uA000\uA001\uA002\uA003\uA004\uA005\uA006\uA007\uA008\uA009\uA00A\uA00B\uA00C\uA00D\uA00E\uA00F\uA010\uA011\uA012\uA013\uA014\uA016\uA017\uA018\uA019\uA01A\uA01B\uA01C\uA01D\uA01E\uA01F\uA020\uA021\uA022\uA023\uA024\uA025\uA026\uA027\uA028\uA029\uA02A\uA02B\uA02C\uA02D\uA02E\uA02F\uA030\uA031\uA032\uA033\uA034\uA035\uA036\uA037\uA038\uA039\uA03A\uA03B\uA03C\uA03D\uA03E\uA03F\uA040\uA041\uA042\uA043\uA044\uA045\uA046\uA047\uA048\uA049\uA04A\uA04B\uA04C\uA04D\uA04E\uA04F\uA050\uA051\uA052\uA053\uA054\uA055\uA056\uA057\uA058\uA059\uA05A\uA05B\uA05C\uA05D\uA05E\uA05F\uA060\uA061\uA062\uA063\uA064\uA065\uA066\uA067\uA068\uA069\uA06A\uA06B\uA06C\uA06D\uA06E\uA06F\uA070\uA071\uA072\uA073\uA074\uA075\uA076\uA077\uA078\uA079\uA07A\uA07B\uA07C\uA07D\uA07E\uA07F\uA080\uA081\uA082\uA083\uA084\uA085\uA086\uA087\uA088\uA089\uA08A\uA08B\uA08C\uA08D\uA08E\uA08F\uA090\uA091\uA092\uA093\uA094\uA095\uA096\uA097\uA098\uA099\uA09A\uA09B\uA09C\uA09D\uA09E\uA09F\uA0A0\uA0A1\uA0A2\uA0A3\uA0A4\uA0A5\uA0A6\uA0A7\uA0A8\uA0A9\uA0AA\uA0AB\uA0AC\uA0AD\uA0AE\uA0AF\uA0B0\uA0B1\uA0B2\uA0B3\uA0B4\uA0B5\uA0B6\uA0B7\uA0B8\uA0B9\uA0BA\uA0BB\uA0BC\uA0BD\uA0BE\uA0BF\uA0C0\uA0C1\uA0C2\uA0C3\uA0C4\uA0C5\uA0C6\uA0C7\uA0C8\uA0C9\uA0CA\uA0CB\uA0CC\uA0CD\uA0CE\uA0CF\uA0D0\uA0D1\uA0D2\uA0D3\uA0D4\uA0D5\uA0D6\uA0D7\uA0D8\uA0D9\uA0DA\uA0DB\uA0DC\uA0DD\uA0DE\uA0DF\uA0E0\uA0E1\uA0E2\uA0E3\uA0E4\uA0E5\uA0E6\uA0E7\uA0E8\uA0E9\uA0EA\uA0EB\uA0EC\uA0ED\uA0EE\uA0EF\uA0F0\uA0F1\uA0F2\uA0F3\uA0F4\uA0F5\uA0F6\uA0F7\uA0F8\uA0F9\uA0FA\uA0FB\uA0FC\uA0FD\uA0FE\uA0FF\uA100\uA101\uA102\uA103\uA104\uA105\uA106\uA107\uA108\uA109\uA10A\uA10B\uA10C\uA10D\uA10E\uA10F\uA110\uA111\uA112\uA113\uA114\uA115\uA116\uA117\uA118\uA119\uA11A\uA11B\uA11C\uA11D\uA11E\uA11F\uA120\uA121\uA122\uA123\uA124\uA125\uA126\uA127\uA128\uA129\uA12A\uA12B\uA12C\uA12D\uA12E\uA12F\uA130\uA131\uA132\uA133\uA134\uA135\uA136\uA137\uA138\uA139\uA13A\uA13B\uA13C\uA13D\uA13E\uA13F\uA140\uA141\uA142\uA143\uA144\uA145\uA146\uA147\uA148\uA149\uA14A\uA14B\uA14C\uA14D\uA14E\uA14F\uA150\uA151\uA152\uA153\uA154\uA155\uA156\uA157\uA158\uA159\uA15A\uA15B\uA15C\uA15D\uA15E\uA15F\uA160\uA161\uA162\uA163\uA164\uA165\uA166\uA167\uA168\uA169\uA16A\uA16B\uA16C\uA16D\uA16E\uA16F\uA170\uA171\uA172\uA173\uA174\uA175\uA176\uA177\uA178\uA179\uA17A\uA17B\uA17C\uA17D\uA17E\uA17F\uA180\uA181\uA182\uA183\uA184\uA185\uA186\uA187\uA188\uA189\uA18A\uA18B\uA18C\uA18D\uA18E\uA18F\uA190\uA191\uA192\uA193\uA194\uA195\uA196\uA197\uA198\uA199\uA19A\uA19B\uA19C\uA19D\uA19E\uA19F\uA1A0\uA1A1\uA1A2\uA1A3\uA1A4\uA1A5\uA1A6\uA1A7\uA1A8\uA1A9\uA1AA\uA1AB\uA1AC\uA1AD\uA1AE\uA1AF/;
        
        // Number letter.
        unicode.Nl = /\u16EE\u16EF\u16F0\u2160\u2161\u2162\u2163\u2164\u2165\u2166\u2167\u2168\u2169\u216A\u216B\u216C\u216D\u216E\u216F\u2170\u2171\u2172\u2173\u2174\u2175\u2176\u2177\u2178\u2179\u217A\u217B\u217C\u217D\u217E\u217F\u2180\u2181\u2182\u2185\u2186\u2187\u2188\u3007\u3021\u3022\u3023\u3024\u3025\u3026\u3027\u3028\u3029\u3038\u3039\u303A/;
        
        // Non-spacing mark.
        unicode.Mn = /\u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030A\u030B\u030C\u030D\u030E\u030F\u0310\u0311\u0312\u0313\u0314\u0315\u0316\u0317\u0318\u0319\u031A\u031B\u031C\u031D\u031E\u031F\u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032A\u032B\u032C\u032D\u032E\u032F\u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033A\u033B\u033C\u033D\u033E\u033F\u0340\u0341\u0342\u0343\u0344\u0345\u0346\u0347\u0348\u0349\u034A\u034B\u034C\u034D\u034E\u034F\u0350\u0351\u0352\u0353\u0354\u0355\u0356\u0357\u0358\u0359\u035A\u035B\u035C\u035D\u035E\u035F\u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036A\u036B\u036C\u036D\u036E\u036F\u0483\u0484\u0485\u0486\u0487\u0591\u0592\u0593\u0594\u0595\u0596\u0597\u0598\u0599\u059A\u059B\u059C\u059D\u059E\u059F\u05A0\u05A1\u05A2\u05A3\u05A4\u05A5\u05A6\u05A7\u05A8\u05A9\u05AA\u05AB\u05AC\u05AD\u05AE\u05AF\u05B0\u05B1\u05B2\u05B3\u05B4\u05B5\u05B6\u05B7\u05B8\u05B9\u05BA\u05BB\u05BC\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610\u0611\u0612\u0613\u0614\u0615\u0616\u0617\u0618\u0619\u061A\u064B\u064C\u064D\u064E\u064F\u0650\u0651\u0652\u0653\u0654\u0655\u0656\u0657\u0658\u0659\u065A\u065B\u065C\u065D\u065E\u0670\u06D6\u06D7\u06D8\u06D9\u06DA\u06DB\u06DC\u06DF\u06E0\u06E1\u06E2\u06E3\u06E4\u06E7\u06E8\u06EA\u06EB\u06EC\u06ED\u0711\u0730\u0731\u0732\u0733\u0734\u0735\u0736\u0737\u0738\u0739\u073A\u073B\u073C\u073D\u073E\u073F\u0740\u0741\u0742\u0743\u0744\u0745\u0746\u0747\u0748\u0749\u074A\u07A6\u07A7\u07A8\u07A9\u07AA\u07AB\u07AC\u07AD\u07AE\u07AF\u07B0\u07EB\u07EC\u07ED\u07EE\u07EF\u07F0\u07F1\u07F2\u07F3\u0901\u0902\u093C\u0941\u0942\u0943\u0944\u0945\u0946\u0947\u0948\u094D\u0951\u0952\u0953\u0954\u0962\u0963\u0981\u09BC\u09C1\u09C2\u09C3\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1\u0AC2\u0AC3\u0AC4\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41\u0B42\u0B43\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E\u0C3F\u0C40\u0C46\u0C47\u0C48\u0C4A\u0C4B\u0C4C\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41\u0D42\u0D43\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2\u0DD3\u0DD4\u0DD6\u0E31\u0E34\u0E35\u0E36\u0E37\u0E38\u0E39\u0E3A\u0E47\u0E48\u0E49\u0E4A\u0E4B\u0E4C\u0E4D\u0E4E\u0EB1\u0EB4\u0EB5\u0EB6\u0EB7\u0EB8\u0EB9\u0EBB\u0EBC\u0EC8\u0EC9\u0ECA\u0ECB\u0ECC\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71\u0F72\u0F73\u0F74\u0F75\u0F76\u0F77\u0F78\u0F79\u0F7A\u0F7B\u0F7C\u0F7D\u0F7E\u0F80\u0F81\u0F82\u0F83\u0F84\u0F86\u0F87\u0F90\u0F91\u0F92\u0F93\u0F94\u0F95\u0F96\u0F97\u0F99\u0F9A\u0F9B\u0F9C\u0F9D\u0F9E\u0F9F\u0FA0\u0FA1\u0FA2\u0FA3\u0FA4\u0FA5\u0FA6\u0FA7\u0FA8\u0FA9\u0FAA\u0FAB\u0FAC\u0FAD\u0FAE\u0FAF\u0FB0\u0FB1\u0FB2\u0FB3\u0FB4\u0FB5\u0FB6\u0FB7\u0FB8\u0FB9\u0FBA\u0FBB\u0FBC\u0FC6\u102D\u102E\u102F\u1030\u1032\u1033\u1034\u1035\u1036\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E\u105F\u1060\u1071\u1072\u1073\u1074\u1082\u1085\u1086\u108D\u135F\u1712\u1713\u1714\u1732\u1733\u1734\u1752\u1753\u1772\u1773\u17B7\u17B8\u17B9\u17BA\u17BB\u17BC\u17BD\u17C6\u17C9\u17CA\u17CB\u17CC\u17CD\u17CE\u17CF\u17D0\u17D1\u17D2\u17D3\u17DD\u180B\u180C\u180D\u18A9\u1920\u1921\u1922\u1927\u1928\u1932\u1939\u193A\u193B\u1A17\u1A18\u1B00\u1B01\u1B02\u1B03\u1B34\u1B36\u1B37\u1B38\u1B39\u1B3A\u1B3C\u1B42\u1B6B\u1B6C\u1B6D\u1B6E\u1B6F\u1B70\u1B71\u1B72\u1B73\u1B80\u1B81\u1BA2\u1BA3\u1BA4\u1BA5\u1BA8\u1BA9\u1C2C\u1C2D\u1C2E\u1C2F\u1C30\u1C31\u1C32\u1C33\u1C36\u1C37\u1DC0\u1DC1\u1DC2\u1DC3\u1DC4\u1DC5\u1DC6\u1DC7\u1DC8\u1DC9\u1DCA\u1DCB\u1DCC\u1DCD\u1DCE\u1DCF\u1DD0\u1DD1\u1DD2\u1DD3\u1DD4\u1DD5\u1DD6\u1DD7\u1DD8\u1DD9\u1DDA\u1DDB\u1DDC\u1DDD\u1DDE\u1DDF\u1DE0\u1DE1\u1DE2\u1DE3\u1DE4\u1DE5\u1DE6\u1DFE\u1DFF\u20D0\u20D1\u20D2\u20D3\u20D4\u20D5\u20D6\u20D7\u20D8\u20D9\u20DA\u20DB\u20DC\u20E1\u20E5\u20E6\u20E7\u20E8\u20E9\u20EA\u20EB\u20EC\u20ED\u20EE\u20EF\u20F0\u2DE0\u2DE1\u2DE2\u2DE3\u2DE4\u2DE5\u2DE6\u2DE7\u2DE8\u2DE9\u2DEA\u2DEB\u2DEC\u2DED\u2DEE\u2DEF\u2DF0\u2DF1\u2DF2\u2DF3\u2DF4\u2DF5\u2DF6\u2DF7\u2DF8\u2DF9\u2DFA\u2DFB\u2DFC\u2DFD\u2DFE\u2DFF\u302A\u302B\u302C\u302D\u302E\u302F\u3099\u309A\uA66F\uA67C\uA67D\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA926\uA927\uA928\uA929\uA92A\uA92B\uA92C\uA92D\uA947\uA948\uA949\uA94A\uA94B\uA94C\uA94D\uA94E\uA94F\uA950\uA951\uAA29\uAA2A\uAA2B\uAA2C\uAA2D\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uFB1E\uFE00\uFE01\uFE02\uFE03\uFE04\uFE05\uFE06\uFE07\uFE08\uFE09\uFE0A\uFE0B\uFE0C\uFE0D\uFE0E\uFE0F\uFE20\uFE21\uFE22\uFE23\uFE24\uFE25\uFE26/;
        
        // Combining space mark.
        unicode.Mc = /\u0903\u093E\u093F\u0940\u0949\u094A\u094B\u094C\u0982\u0983\u09BE\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E\u0A3F\u0A40\u0A83\u0ABE\u0ABF\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6\u0BC7\u0BC8\u0BCA\u0BCB\u0BCC\u0BD7\u0C01\u0C02\u0C03\u0C41\u0C42\u0C43\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC2\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E\u0D3F\u0D40\u0D46\u0D47\u0D48\u0D4A\u0D4B\u0D4C\u0D57\u0D82\u0D83\u0DCF\u0DD0\u0DD1\u0DD8\u0DD9\u0DDA\u0DDB\u0DDC\u0DDD\u0DDE\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062\u1063\u1064\u1067\u1068\u1069\u106A\u106B\u106C\u106D\u1083\u1084\u1087\u1088\u1089\u108A\u108B\u108C\u108F\u17B6\u17BE\u17BF\u17C0\u17C1\u17C2\u17C3\u17C4\u17C5\u17C7\u17C8\u1923\u1924\u1925\u1926\u1929\u192A\u192B\u1930\u1931\u1933\u1934\u1935\u1936\u1937\u1938\u19B0\u19B1\u19B2\u19B3\u19B4\u19B5\u19B6\u19B7\u19B8\u19B9\u19BA\u19BB\u19BC\u19BD\u19BE\u19BF\u19C0\u19C8\u19C9\u1A19\u1A1A\u1A1B\u1B04\u1B35\u1B3B\u1B3D\u1B3E\u1B3F\u1B40\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1C24\u1C25\u1C26\u1C27\u1C28\u1C29\u1C2A\u1C2B\u1C34\u1C35\uA823\uA824\uA827\uA880\uA881\uA8B4\uA8B5\uA8B6\uA8B7\uA8B8\uA8B9\uA8BA\uA8BB\uA8BC\uA8BD\uA8BE\uA8BF\uA8C0\uA8C1\uA8C2\uA8C3\uA952\uA953\uAA2F\uAA30\uAA33\uAA34\uAA4D/;
        
        // Decimal number.
        unicode.Nd = /\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9\u07C0\u07C1\u07C2\u07C3\u07C4\u07C5\u07C6\u07C7\u07C8\u07C9\u0966\u0967\u0968\u0969\u096A\u096B\u096C\u096D\u096E\u096F\u09E6\u09E7\u09E8\u09E9\u09EA\u09EB\u09EC\u09ED\u09EE\u09EF\u0A66\u0A67\u0A68\u0A69\u0A6A\u0A6B\u0A6C\u0A6D\u0A6E\u0A6F\u0AE6\u0AE7\u0AE8\u0AE9\u0AEA\u0AEB\u0AEC\u0AED\u0AEE\u0AEF\u0B66\u0B67\u0B68\u0B69\u0B6A\u0B6B\u0B6C\u0B6D\u0B6E\u0B6F\u0BE6\u0BE7\u0BE8\u0BE9\u0BEA\u0BEB\u0BEC\u0BED\u0BEE\u0BEF\u0C66\u0C67\u0C68\u0C69\u0C6A\u0C6B\u0C6C\u0C6D\u0C6E\u0C6F\u0CE6\u0CE7\u0CE8\u0CE9\u0CEA\u0CEB\u0CEC\u0CED\u0CEE\u0CEF\u0D66\u0D67\u0D68\u0D69\u0D6A\u0D6B\u0D6C\u0D6D\u0D6E\u0D6F\u0E50\u0E51\u0E52\u0E53\u0E54\u0E55\u0E56\u0E57\u0E58\u0E59\u0ED0\u0ED1\u0ED2\u0ED3\u0ED4\u0ED5\u0ED6\u0ED7\u0ED8\u0ED9\u0F20\u0F21\u0F22\u0F23\u0F24\u0F25\u0F26\u0F27\u0F28\u0F29\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1090\u1091\u1092\u1093\u1094\u1095\u1096\u1097\u1098\u1099\u17E0\u17E1\u17E2\u17E3\u17E4\u17E5\u17E6\u17E7\u17E8\u17E9\u1810\u1811\u1812\u1813\u1814\u1815\u1816\u1817\u1818\u1819\u1946\u1947\u1948\u1949\u194A\u194B\u194C\u194D\u194E\u194F\u19D0\u19D1\u19D2\u19D3\u19D4\u19D5\u19D6\u19D7\u19D8\u19D9\u1B50\u1B51\u1B52\u1B53\u1B54\u1B55\u1B56\u1B57\u1B58\u1B59\u1BB0\u1BB1\u1BB2\u1BB3\u1BB4\u1BB5\u1BB6\u1BB7\u1BB8\u1BB9\u1C40\u1C41\u1C42\u1C43\u1C44\u1C45\u1C46\u1C47\u1C48\u1C49\u1C50\u1C51\u1C52\u1C53\u1C54\u1C55\u1C56\u1C57\u1C58\u1C59\uA620\uA621\uA622\uA623\uA624\uA625\uA626\uA627\uA628\uA629\uA8D0\uA8D1\uA8D2\uA8D3\uA8D4\uA8D5\uA8D6\uA8D7\uA8D8\uA8D9\uA900\uA901\uA902\uA903\uA904\uA905\uA906\uA907\uA908\uA909\uAA50\uAA51\uAA52\uAA53\uAA54\uAA55\uAA56\uAA57\uAA58\uAA59\uFF10\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19/;
        
        // Punctuation connector.
        unicode.Pc = /\u005F\u203F\u2040\u2054\uFE33\uFE34\uFE4D\uFE4E\uFE4F\uFF3F/;
        exports.ECMA = ECMA = {};
        
        (function() {
          var getSource = function(regExp) {
            return regExp.source;
          };
          var startArray = [
            /$_/, unicode.Lu,
            unicode.Ll, unicode.Lt,
            unicode.Lm, unicode.Lo, unicode.Nl
          ];
          var partArray = startArray.concat([
            unicode.Nd, unicode.Mc, unicode.Mn, unicode.Pc
          ]);
        
          var start = '[' + startArray.map(getSource).join('') + ']';
          var part = '[' + partArray.map(getSource).join('') + ']';
          
          ECMA.start = new RegExp(start);
          ECMA.part = new RegExp(part);
          ECMA.identifier = new RegExp('^' + start + part + '*');
        })();
        
        (function() {
          var categoryName, source;
          var categories = ['Lu', 'Ll', 'Lt', 'Lm', 'Lo', 'Mn', 'Mc', 'Nl', 'Nd', 'Pc'];
          for (categoryName in unicode) {
            source = unicode[categoryName].source
            exports[categoryName] = new RegExp('[' + source + ']');
          }
        })();
        

    };

    load["./compile"] = function(exports) {
        var typecheck = require('./typeinference').typecheck,
            nodes = require('./nodes').nodes,
            types = require('./types'),
            parser = require('./parser').parser,
            lexer = require('./lexer'),
            _ = require('underscore');
        
        // Assigning the nodes to `parser.yy` allows the grammar to access the nodes from
        // the `yy` namespace.
        parser.yy = nodes;
        
        parser.lexer =  {
            "lex": function() {
                var token = this.tokens[this.pos] ? this.tokens[this.pos++] : ['EOF'];
                this.yytext = token[1];
                this.yylineno = token[2];
                return token[0];
            },
            "setInput": function(tokens) {
                this.tokens = tokens;
                this.pos = 0;
            },
            "upcomingInput": function() {
                return "";
            }
        };
        
        // Compile an abstract syntax tree (AST) node to JavaScript.
        var data = {};
        var macros = {};
        var indent = 0;
        var getIndent = function(extra) {
            if(!extra) {
                extra = 0;
            }
            var spacing = "";
            var i;
            for(i = 0; i < indent + extra; i++) {
                spacing += "    ";
            }
            return spacing;
        };
        var joinIndent = function(args, extra) {
            var lineIndent = "\n" + getIndent(extra);
            var argIndent = args.join("\n" + getIndent(extra));
            if(argIndent) {
                return argIndent + lineIndent;
            }
            return "";
        };
        var pushIndent = function() {
            indent++;
            return getIndent();
        };
        var popIndent = function() {
            indent--;
            return getIndent();
        };
        var compileNode = function(n) {
            return n.accept({
                // Function definition to JavaScript function.
                visitFunction: function() {
                    var getArgs = function(a) {
                        return _.map(a, function(v) {
                            return v.name;
                        }).join(", ");
                    };
                    pushIndent();
                    var compiledNodeBody = _.map(n.body, compileNode);
                    var init = [];
                    if(compiledNodeBody.length > 1) {
                        init.push(compiledNodeBody.slice(0, compiledNodeBody.length - 1).join(';\n' + getIndent()) + ';');
                    }
                    var lastString = compiledNodeBody[compiledNodeBody.length - 1];
                    var varEquals = "";
                    if(n.name) {
                        varEquals = "var " + n.name + " = ";
                    }
                    return varEquals + "function(" + getArgs(n.args) + ") {\n" +
                        getIndent() + joinIndent(init) + "return " + lastString +
                        ";\n" + popIndent() + "}";
                },
                visitIfThenElse: function() {
                    var compiledNodeCondition = compileNode(n.condition);
        
                    var compileAppendSemicolon = function(n) {
                        return compileNode(n) + ';';
                    };
        
                    pushIndent();
                    pushIndent();
                    var compiledNodeIfTrueInit = joinIndent(_.map(n.ifTrue.slice(0, n.ifTrue.length - 1), compileAppendSemicolon));
                    var compiledNodeIfTrueLast = compileNode(n.ifTrue[n.ifTrue.length - 1]);
                    var compiledNodeIfFalseInit = joinIndent(_.map(n.ifFalse.slice(0, n.ifFalse.length - 1), compileAppendSemicolon));
                    var compiledNodeIfFalseLast = compileNode(n.ifFalse[n.ifFalse.length - 1]);
                    popIndent();
                    popIndent();
        
                    return "(function() {\n" +
                        getIndent(1) + "if(" + compiledNodeCondition + ") {\n" +
                        getIndent(2) + compiledNodeIfTrueInit + "return " + compiledNodeIfTrueLast + ";\n" +
                        getIndent(1) + "} else {\n" +
                        getIndent(2) + compiledNodeIfFalseInit + "return " + compiledNodeIfFalseLast + ";\n" +
                        getIndent(1) + "}\n" +
                        getIndent() + "})()";
                },
                // Let binding to JavaScript variable.
                visitLet: function() {
                    return "var " + n.name + " = " + compileNode(n.value) + ";";
                },
                visitData: function() {
                    _.each(n.tags, function(tag) {
                        data[tag.name] = n.name;
                    });
                    var defs = _.map(n.tags, compileNode);
                    return defs.join("\n");
                },
                visitReplacement: function() {
                    return n.value;
                },
                visitQuoted: function() {
                    var serializeNode = {
                        visitReplacement: function(v) {
                            return "new nodes.Replacement(" + compileNode(v.value) + ")";
                        },
                        visitIdentifier: function(v) {
                            return "new nodes.Identifier(" + JSON.stringify(v.value) + ")";
                        },
                        visitAccess: function(v) {
                            return "new nodes.Access(" + serialize(v.value) + ", " + JSON.stringify(v.property) + ")";
                        },
                        visitCall: function(v) {
                            return "new nodes.Call(" + serialize(v.func) + ", [" + _.map(v.args, serialize).join(', ') + "])";
                        }
                    };
                    var serialize = function(v) {
                        return v.accept(serializeNode);
                    };
                    return serialize(n.value);
                },
                visitMacro: function() {
                    var init = n.body.slice(0, n.body.length - 1);
                    var last = n.body[n.body.length - 1];
                    var code = _.map(init, compileNode).join('\n') + '\nreturn ' + compileNode(last) + ';';
                    macros[n.name] = 'var nodes = this.nodes; ' + code;
                },
                visitReturn: function() {
                    return "return __monad__[\"return\"](" + compileNode(n.value) + ");";
                },
                visitBind: function() {
                    return "return __monad__[\"bind\"](" + compileNode(n.value) +
                        ", function(" + n.name + ") {\n" + pushIndent() +
                        _.map(n.rest, compileNode).join("\n" + getIndent()) + "\n" +
                        popIndent() + "});";
                },
                visitDo: function() {
                    var compiledInit = [];
                    var firstBind;
                    var lastBind;
                    var lastBindIndex = 0;
                    _.each(n.body, function(node, i) {
                        if(node instanceof nodes.Bind) {
                            if(!lastBind) {
                                firstBind = node;
                            } else {
                                lastBind.rest = n.body.slice(lastBindIndex + 1, i + 1);
                            }
                            lastBindIndex = i;
                            lastBind = node;
                        } else {
                            if(!lastBind) {
                                compiledInit.push(compileNode(node));
                            }
                        }
                    });
                    if(lastBind) {
                        lastBind.rest = n.body.slice(lastBindIndex + 1);
                    }
                    return "(function(){\n" + pushIndent() + "var __monad__ = " +
                        compileNode(n.value) + ";\n" + getIndent() +
                        compiledInit.join('\n' + getIndent()) +
                        (firstBind ? compileNode(firstBind) : '') + "\n" +
                        popIndent() + "})()";
                },
                visitTag: function() {
                    var args = _.map(n.vars, function(v) {
                        return v.value;
                    });
                    var setters = _.map(n.vars, function(v, i) {
                        return "this._" + i + " = " + v.value;
                    });
                    return "var " + n.name + " = function(" + args.join(", ") + "){" + setters.join(";") + "};";
                },
                visitMatch: function() {
                    var flatMap = function(a, f) {
                        return _.flatten(_.map(a, f));
                    };
        
                    var pathConditions = _.map(n.cases, function(c) {
                        var getVars = function(pattern, varPath) {
                            return flatMap(pattern.vars, function(a, i) {
                                var nextVarPath = varPath.slice();
                                nextVarPath.push(i);
        
                                return a.accept({
                                    visitIdentifier: function() {
                                        if(a.value in data) return [];
        
                                        var accessors = _.map(nextVarPath, function(x) {
                                            return "._" + x;
                                        }).join('');
                                        return ["var " + a.value + " = " + compileNode(n.value) + accessors + ";"];
                                    },
                                    visitPattern: function() {
                                        return getVars(a, nextVarPath);
                                    }
                                });
                            });
                        };
                        var vars = getVars(c.pattern, []);
        
                        var getTagPaths = function(pattern, patternPath) {
                            return flatMap(pattern.vars, function(a, i) {
                                var nextPatternPath = patternPath.slice();
        
                                nextPatternPath.push(i);
                                return a.accept({
                                    visitIdentifier: function() {
                                        if(a.value in data) {
                                            return [{path: nextPatternPath, tag: a}];
                                        }
                                        return [];
                                    },
                                    visitPattern: function() {
                                        var inner = getTagPaths(a, nextPatternPath);
                                        inner.unshift({path: nextPatternPath, tag: a.tag});
                                        return inner;
                                    }
                                });
                            });
                        };
                        var tagPaths = getTagPaths(c.pattern, []);
                        var compiledValue = compileNode(n.value);
                        var extraConditions = _.map(tagPaths, function(e) {
                            return ' && ' + compiledValue + '._' + e.path.join('._') + ' instanceof ' + e.tag.value;
                        }).join('');
        
                        // More specific patterns need to appear first
                        // Need to sort by the length of the path
                        var maxTagPath = _.max(tagPaths, function(t) {
                            return t.path.length;
                        });
                        var maxPath = maxTagPath ? maxTagPath.path : [];
        
                        return {
                            path: maxPath,
                            condition: "if(" + compiledValue + " instanceof " + c.pattern.tag.value +
                                extraConditions + ") {\n" + getIndent(2) +
                                joinIndent(vars, 2) + "return " + compileNode(c.value) +
                                ";\n" + getIndent(1) + "}"
                        };
                    });
        
                    var cases = _.map(_.sortBy(pathConditions, function(t) {
                        return -t.path.length;
                    }), function(e) {
                        return e.condition;
                    });
        
                    return "(function() {\n" + getIndent(1) + cases.join(" else ") + "\n" + getIndent() + "})()";
                },
                // Call to JavaScript call.
                visitCall: function() {
                    if(macros[n.func.value]) {
                        // Is a macro
                        var f = new Function(macros[n.func.value]);
                        var tree = f.apply({nodes: nodes}, n.args);
                        // TODO: Give an actual env
                        typecheck([tree], {});
                        return compileNode(tree);
                    } else if(data[n.func.value]) {
                        // Is a tag
                        return 'new ' + n.func.value + "(" + _.map(n.args, compileNode).join(", ") + ")";
                    }
                    return compileNode(n.func) + "(" + _.map(n.args, compileNode).join(", ") + ")";
                },
                visitAccess: function() {
                    return compileNode(n.value) + "." + n.property;
                },
                visitBinaryGenericOperator: function() {
                    return [compileNode(n.left), n.name, compileNode(n.right)].join(" ");
                },
                visitBinaryNumberOperator: function() {
                    return [compileNode(n.left), n.name, compileNode(n.right)].join(" ");
                },
                visitBinaryBooleanOperator: function() {
                    return [compileNode(n.left), n.name, compileNode(n.right)].join(" ");
                },
                visitBinaryStringOperator: function() {
                    return [compileNode(n.left), n.name, compileNode(n.right)].join(" ");
                },
                visitWith: function() {
                    var args = compileNode(n.left) + ', ' + compileNode(n.right);
                    var inner = _.map(['__l__', '__r__'], function(name) {
                        return 'for(__n__ in ' + name + ') {\n' + getIndent(2) + '__o__[__n__] = ' + name + '[__n__];\n' + getIndent(1) + '}';
                    });
                    return joinIndent(['(function(__l__, __r__) {', 'var __o__ = {}, __n__;'], 1) + joinIndent(inner, 1) + 'return __o__;\n' + getIndent() + '})(' + args + ')';
                },
                // Print all other nodes directly.
                visitComment: function() {
                    return n.value;
                },
                visitIdentifier: function() {
                    var prefix = '';
                    var suffix = '';
                    if(data[n.value]) {
                        prefix = 'new ';
                        suffix = '()';
                    }
                    return prefix + n.value + suffix;
                },
                visitNumber: function() {
                    return n.value;
                },
                visitString: function() {
                    return n.value;
                },
                visitBoolean: function() {
                    return n.value;
                },
                visitUnit: function() {
                    return "null";
                },
                visitArray: function() {
                    return '[' + _.map(n.values, compileNode).join(', ') + ']';
                },
                visitTuple: function() {
                    return '[' + _.map(n.values, compileNode).join(', ') + ']';
                },
                visitObject: function() {
                    var key;
                    var pairs = [];
                    pushIndent();
                    for(key in n.values) {
                        pairs.push("\"" + key + "\": " + compileNode(n.values[key]));
                    }
                    return "{\n" + getIndent() + pairs.join(",\n" + getIndent()) + "\n" + popIndent() + "}";
                }
            });
        };
        
        var compile = function(source, env, data, aliases, opts) {
            if(!env) env = {};
            if(!data) data = {};
            if(!aliases) aliases = {};
            if(!opts) opts = {};
        
            // Parse the file to an AST.
            var tokens = lexer.tokenise(source);
            var ast = parser.parse(tokens);
        
            // Typecheck the AST. Any type errors will throw an exception.
            var resultType = typecheck(ast, env, data, aliases);
        
            // Output strict JavaScript.
            var output = [];
            if(opts.strict) {
                output.push('"use strict";');
            }
            _.each(ast, function(v) {
                output.push(compileNode(v));
            });
            // Add a newline at the end
            output.push("");
        
            return {type: resultType, output: output.join('\n')};
        };
        exports.compile = compile;
        
        var getSandbox = function() {
            var sandbox = {require: require};
        
            var name;
            for(name in global) {
                sandbox[name] = global[name];
            }
        
            return sandbox;
        };
        
        var nodeRepl = function(opts) {
            var readline = require('readline'),
                fs = require('fs'),
                path = require('path'),
                vm = require('vm'),
                prettyPrint = require('./prettyprint').prettyPrint;
        
            var stdout = process.stdout;
            var stdin = process.openStdin();
            var repl = readline.createInterface(stdin, stdout);
        
            var env = {};
            var data = {};
            var sources = {};
            var aliases = {};
            var sandbox = getSandbox();
        
            var colorLog = function(color) {
                var args = [].slice.call(arguments, 1);
        
                if(opts.colorConsole) {
                    args[0] = '\u001b[' + color + 'm' + args[0];
                    args[args.length - 1] = args[args.length - 1] + '\u001b[0m';
                }
        
                console.log.apply(console, args);
            };
        
            // Include the standard library
            var prelude = fs.readFileSync(path.dirname(__dirname) + '/lib/prelude.roy', 'utf8');
            vm.runInNewContext(compile(prelude, env).output, sandbox, 'eval');
            repl.setPrompt('roy> ');
            repl.on('close', function() {
                stdin.destroy();
            });
            repl.on('line', function(line) {
                var compiled;
                var output;
        
                var filename;
                var source;
        
                var tokens;
                var ast;
        
                // Check for a "metacommand"
                // e.g. ":q" or ":l test.roy"
                var metacommand = line.replace(/^\s+/, '').split(' ');
                try {
                    switch(metacommand[0]) {
                    case ":q":
                        // Exit
                        process.exit();
                        break;
                    case ":l":
                        // Load
                        filename = metacommand[1];
                        source = fs.readFileSync(filename, 'utf8');
                        compiled = compile(source, env, data, aliases);
                        break;
                    case ":s":
                        // Source
                        if(sources[metacommand[1]]) {
                            colorLog(33, metacommand[1], "=", prettyPrint(sources[metacommand[1]]));
                        } else {
                            if(metacommand[1]){
                                colorLog(33, metacommand[1], "is not defined.");
                            }else{
                                console.log("Usage :s command ")
                                console.log(":s [identifier] :: show original code about identifier.");
                            }
                        }
                        break;
                    case ":?":
                        // Help
                        colorLog(32, "Commands available from the prompt");
                        console.log(":l -- load and run an external file");
                        console.log(":q -- exit REPL");
                        console.log(":s -- show original code about identifier.");
                        console.log(":? -- show help");
                        break;
                    default:
                        // The line isn't a metacommand
        
                        // Remember the source if it's a binding
                        tokens = lexer.tokenise(line);
                        ast = parser.parse(tokens);
                        ast[0].accept({
                            visitLet: function(n) {
                                sources[n.name] = n.value;
                            }
                        });
        
                        // Just eval it
                        compiled = compile(line, env, data, aliases);
                        break;
                    }
        
                    if(compiled) {
                        output = vm.runInNewContext(compiled.output, sandbox, 'eval');
        
                        if(typeof output != 'undefined') {
                            colorLog(32, output + " : " + compiled.type);
                        }
                    }
                } catch(e) {
                    colorLog(31, (e.stack || e.toString()));
                }
                repl.prompt();
            });
            repl.prompt();
        };
        
        var main = function() {
            var argv = process.argv.slice(2);
            
            // Meta Env Configure Data
            var opts = {
                colorConsole: false
            };
        
            // Get Roy infomation
            var fs = require('fs');
            var infofile = fs.readFileSync('package.json', 'utf8');
            var info = JSON.parse(infofile);
            if(process.argv.length < 3) {
                console.log("Roy: " + info.description);
                console.log(info.author);
                console.log(":? for help");
                nodeRepl(opts);
                return;
            }
        
            var path = require('path');
            var vm;
            var run = false;
            switch(argv[0]) {
            case "-v":
            case "--version":
                console.log("Roy: " + info.description);
                console.log(info.version);
                process.exit();
                break;
            case "-h":
                console.log("Roy: " + info.description + "\n");
                console.log("-v        : show current version");
                console.log("-r [file] : run Roy-code without JavaScript output");
                console.log("-c        : colorful REPL mode");
                console.log("-h        : show this help");
            case "-r":
                vm = require('vm');
                run = true;
                argv.shift();
                break;
            case "-c":
            case "--color":
                opts.colorConsole = true;
                nodeRepl(opts);
                return;
            }
        
            // Include the standard library
            argv.unshift(path.dirname(__dirname) + '/lib/prelude.roy');
        
            var env = {};
            var data = {};
            var aliases = {};
            var sandbox = getSandbox();
            _.each(argv, function(filename) {
                // Read the file content.
                var source = fs.readFileSync(filename, 'utf8');
        
                // Write the JavaScript output.
                var extension = /\.roy$/;
                console.assert(filename.match(extension), 'Filename must end with ".roy"');
                var compiled = compile(source, env, data, aliases);
                if(run) {
                    output = vm.runInNewContext(compiled.output, sandbox, 'eval');
                } else {
                    fs.writeFile(filename.replace(extension, '.js'), compiled.output, 'utf8');
                }
            });
        };
        exports.main = main;
        
        if(exports && !module.parent) {
            main();
        }
        

    };
    load["./lexer"] = function(exports) {
        var unicode = require('unicode-categories');
        
        // http://es5.github.com/#x7.6
        // ECMAscript identifier starts with `$`, `_`,
        // or letter from (Lu Ll Lt Lm Lo Nl) unicode groups.
        // Then identifier can also be from groups (Nd, Mn, Mc, or Pc).
        // Roy identifier cannot have letter u03BB (greek lowercase lambda)
        // because it's used in anonymous functions.
        var IDENTIFIER = new RegExp(
            unicode.ECMA.identifier.source.replace('\\u03BB', '')
        );
        
        var NUMBER = /^-?[0-9]+(\.[0-9]+)?/;
        var COMMENT = /^\/\/.*/;
        var WHITESPACE = /^[^\n\S]+/;
        var INDENT = /^(?:\n[^\n\S]*)+/;
        
        var chunk;
        var indent;
        var indents;
        var tokens;
        var lineno;
        
        var identifierToken = function() {
            var value,
                name,
                token = IDENTIFIER.exec(chunk);
            if(token) {
                value = token[0];
                switch(value) {
                case 'true':
                case 'false':
                    name = 'BOOLEAN';
                    break;
                case 'let':
                case 'fn':
                case 'if':
                case 'then':
                case 'else':
                case 'data':
                case 'type':
                case 'match':
                case 'case':
                case 'do':
                case 'return':
                case 'macro':
                case 'with':
                    name = value.toUpperCase();
                    break;
                default:
                    name = 'IDENTIFIER';
                    break;
                }
                tokens.push([name, value, lineno]);
                return token[0].length;
            }
            return 0;
        };
        
        var numberToken = function() {
            var token = NUMBER.exec(chunk);
            if(token) {
                tokens.push(['NUMBER', token[0], lineno]);
                return token[0].length;
            }
            return 0;
        };
        
        var stringToken = function() {
            var firstChar = chunk.charAt(0),
                quoted = false,
                nextChar;
            if(firstChar == '"' || firstChar == "'") {
                for(var i = 1; i < chunk.length; i++) {
                    if(!quoted) {
                        nextChar = chunk.charAt(i);
                        if(nextChar == "\\") {
                            quoted = true;
                        } else if(nextChar == firstChar) {
                            tokens.push(['STRING', chunk.substring(0, i + 1), lineno]);
                            return i + 1;
                        }
                    } else {
                        quoted = false;
                    }
                }
            }
            return 0;
        };
        
        var commentToken = function() {
            var token = COMMENT.exec(chunk);
            if(token) {
                tokens.push(['COMMENT', token[0], lineno]);
                return token[0].length;
            }
            return 0;
        };
        
        var whitespaceToken = function() {
            var token = WHITESPACE.exec(chunk);
            if(token) {
                return token[0].length;
            }
            return 0;
        };
        
        var lineToken = function() {
            var token = INDENT.exec(chunk);
            if(token) {
                var lastNewline = token[0].lastIndexOf("\n") + 1;
                var size = token[0].length - lastNewline;
                var terminated = false;
                if(size > indent) {
                    indents.push(size);
                    tokens.push(['INDENT', size - indent, lineno]);
                } else {
                    if(size < indent) {
                        var last = indents[indents.length - 1];
                        while(size < last) {
                            tokens.push(['OUTDENT', last - size, lineno]);
                            indents.pop();
                            last = indents[indents.length - 1];
                        }
                    }
                    if(tokens.length > 0)
                        tokens.push(['TERMINATOR', token[0].substring(0, lastNewline), lineno]);
                }
                indent = size;
                return token[0].length;
            }
            return 0;
        };
        
        var literalToken = function() {
            var tag = chunk.slice(0, 1);
            var next;
            switch(tag) {
            case '<':
                next = chunk.slice(0, 2);
                if(next == '<-') {
                    tokens.push(['LEFTARROW', next, lineno]);
                    return 2;
                }
                tokens.push(['COMPARE', tag, lineno]);
                return 1;
            case '>':
                tokens.push(['COMPARE', tag, lineno]);
                return 1;
            case '=':
                next = chunk.slice(0, 2);
                if(next == '==') {
                    tokens.push(['COMPARE', next, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case '!':
                next = chunk.slice(0, 2);
                if(next == '!=') {
                    tokens.push(['COMPARE', next, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case '*':
            case '/':
            case '%':
                tokens.push(['MATH', tag, lineno]);
                return 1;
            case '[':
            case '|':
                next = chunk.slice(0, 2);
                switch(next) {
                case '[|':
                case '|]':
                    tokens.push([next, next, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case ')':
                if(tokens[tokens.length-1][0] == 'TERMINATOR') {
                    tokens.pop();
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case '+':
                next = chunk.slice(0, 2);
                if(next == '++') {
                    tokens.push(['CONCAT', tag, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case '-':
                next = chunk.slice(0, 2);
                if (next == '->') {
                    tokens.push(['RIGHTARROW', next, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case '&':
                next = chunk.slice(0, 2);
                if(next == '&&') {
                    tokens.push(['BOOLOP', next, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case '|':
                next = chunk.slice(0, 2);
                if(next == '||') {
                    tokens.push(['BOOLOP', next, lineno]);
                    return 2;
                }
                tokens.push([tag, tag, lineno]);
                return 1;
            case 'λ':
            case '\\':
                tokens.push(['LAMBDA', tag, lineno]);
                return 1;
            case '←':
                tokens.push(['LEFTARROW', tag, lineno]);
                return 1;
            case '→':
                tokens.push(['RIGHTARROW', tag, lineno]);
                return 1;
            case '⇒':
                tokens.push(['RIGHTFATARROW', tag, lineno]);
                return 1;
            case ']':
            case ':':
            case '.':
            case ',':
            case '{':
            case '}':
            case '(':
                tokens.push([tag, tag, lineno]);
                return 1;
            }
            return 0;
        };
        
        exports.tokenise = function(source) {
            indent = 0;
            indents = [];
            tokens = [];
            lineno = 1;
            var i = 0;
            while(chunk = source.slice(i)) {
                var diff = identifierToken() || numberToken() || stringToken() || commentToken() || whitespaceToken() || lineToken() || literalToken();
                if(!diff) {
                    throw "Couldn't tokenise: " + chunk.substring(0, chunk.indexOf("\n"));
                }
                lineno += source.slice(i, i + diff).split('\n').length - 1;
                i += diff;
            }
            tokens.push(['EOF', '', lineno]);
            return tokens;
        };
        
        if(!module.parent) {
            exports.tokenise([
                "// Testing",
                " ",
                "let x =",
                " 8",
                " if true then 10 else 100",
                " if true then",
                "  false",
                " else",
                "  true",
                " // Inner comment",
                " console.log 10 * 20",
                " console.log [1, 2, 3].length",
                " true",
                "console.log 'example'"
            ].join("\n"));
            console.log(tokens);
        }
        

    };
    load["./nodes"] = function(exports) {
        exports.nodes = {
            Arg: function(name, type) {
                this.name = name;
        
                // Optional
                this.type = type;
        
                this.accept = function(a) {
                    if(a.visitArg) {
                        return a.visitArg(this);
                    }
                };
            },
            Function: function(name, args, body, type) {
                this.name = name;
                this.args = args;
                this.body = body;
        
                // Optional
                this.type = type;
        
                this.accept = function(a) {
                    if(a.visitFunction) {
                        return a.visitFunction(this);
                    }
                };
            },
            Data: function(name, args, tags) {
                this.name = name;
                this.args = args;
                this.tags = tags;
        
                this.accept = function(a) {
                    if(a.visitData) {
                        return a.visitData(this);
                    }
                };
            },
            Type: function(name, value) {
                this.name = name;
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitType) {
                        return a.visitType(this);
                    }
                };
            },
            TypeName: function(value, args) {
                this.value = value;
                this.args = args;
        
                this.accept = function(a) {
                    if(a.visitTypeName) {
                        return a.visitTypeName(this);
                    }
                };
            },
            TypeObject: function(values) {
                this.values = values;
        
                this.accept = function(a) {
                    if(a.visitTypeObject) {
                        return a.visitTypeObject(this);
                    }
                };
            },
            Return: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitReturn) {
                        return a.visitReturn(this);
                    }
                };
            },
            Bind: function(name, value) {
                this.name = name;
                this.value = value;
        
                // Set in compile stage
                this.rest = [];
        
                this.accept = function(a) {
                    if(a.visitBind) {
                        return a.visitBind(this);
                    }
                };
            },
            Do: function(value, body) {
                this.value = value;
                this.body = body;
        
                this.accept = function(a) {
                    if(a.visitDo) {
                        return a.visitDo(this);
                    }
                };
            },
            Match: function(value, cases) {
                this.value = value;
                this.cases = cases;
        
                this.accept = function(a) {
                    if(a.visitMatch) {
                        return a.visitMatch(this);
                    }
                };
            },
            Case: function(pattern, value) {
                this.pattern = pattern;
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitCase) {
                        return a.visitCase(this);
                    }
                };
            },
            Tag: function(name, vars) {
                this.name = name;
                this.vars = vars;
        
                this.accept = function(a) {
                    if(a.visitTag) {
                        return a.visitTag(this);
                    }
                };
            },
            Pattern: function(tag, vars) {
                this.tag = tag;
                this.vars = vars;
        
                this.accept = function(a) {
                    if(a.visitPattern) {
                        return a.visitPattern(this);
                    }
                };
            },
            Let: function(name, value, type) {
                this.name = name;
                this.value = value;
        
                // Optional
                this.type = type;
        
                this.accept = function(a) {
                    if(a.visitLet) {
                        return a.visitLet(this);
                    }
                };
            },
            Call: function(func, args) {
                this.func = func;
                this.args = args;
        
                this.accept = function(a) {
                    if(a.visitCall) {
                        return a.visitCall(this);
                    }
                };
            },
            IfThenElse: function(condition, ifTrue, ifFalse) {
                this.condition = condition;
                this.ifTrue = ifTrue;
                this.ifFalse = ifFalse;
        
                this.accept = function(a) {
                    if(a.visitIfThenElse) {
                        return a.visitIfThenElse(this);
                    }
                };
            },
            Comment: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitComment) {
                        return a.visitComment(this);
                    }
                };
            },
            Access: function(value, property) {
                this.value = value;
                this.property = property;
        
                this.accept = function(a) {
                    if(a.visitAccess) {
                        return a.visitAccess(this);
                    }
                };
            },
            BinaryGenericOperator: function(name, left, right) {
                this.name = name;
                this.left = left;
                this.right = right;
        
                this.accept = function(a) {
                    if(a.visitBinaryGenericOperator) {
                        return a.visitBinaryGenericOperator(this);
                    }
                };
            },
            BinaryNumberOperator: function(name, left, right) {
                this.name = name;
                this.left = left;
                this.right = right;
        
                this.accept = function(a) {
                    if(a.visitBinaryNumberOperator) {
                        return a.visitBinaryNumberOperator(this);
                    }
                };
            },
            BinaryBooleanOperator: function(name, left, right) {
                this.name = name;
                this.left = left;
                this.right = right;
        
                this.accept = function(a) {
                    if(a.visitBinaryBooleanOperator) {
                        return a.visitBinaryBooleanOperator(this);
                    }
                };
            },
            BinaryStringOperator: function(name, left, right) {
                this.name = name;
                this.left = left;
                this.right = right;
        
                this.accept = function(a) {
                    if(a.visitBinaryStringOperator) {
                        return a.visitBinaryStringOperator(this);
                    }
                };
            },
            With: function(left, right) {
                this.left = left;
                this.right = right;
        
                this.accept = function(a) {
                    if(a.visitWith) {
                        return a.visitWith(this);
                    }
                };
            },
            Replacement: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitReplacement) {
                        return a.visitReplacement(this);
                    }
                };
            },
            Macro: function(name, body) {
                this.name = name;
                this.body = body;
        
                this.accept = function(a) {
                    if(a.visitMacro) {
                        return a.visitMacro(this);
                    }
                };
            },
            Quoted: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitQuoted) {
                        return a.visitQuoted(this);
                    }
                };
            },
            Identifier: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitIdentifier) {
                        return a.visitIdentifier(this);
                    }
                };
            },
            Tuple: function(values) {
                this.values= values;
        
                this.accept = function(a) {
                    if(a.visitTuple) {
                        return a.visitTuple(this);
                    }
                };
            },
            Number: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitNumber) {
                        return a.visitNumber(this);
                    }
                };
            },
            String: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitString) {
                        return a.visitString(this);
                    }
                };
            },
            Boolean: function(value) {
                this.value = value;
        
                this.accept = function(a) {
                    if(a.visitBoolean) {
                        return a.visitBoolean(this);
                    }
                };
            },
            Array: function(values) {
                this.values = values;
        
                this.accept = function(a) {
                    if(a.visitArray) {
                        return a.visitArray(this);
                    }
                };
            },
            Object: function(values) {
                this.values = values;
        
                this.accept = function(a) {
                    if(a.visitObject) {
                        return a.visitObject(this);
                    }
                };
            }
        };
        

    };
    load["./parser"] = function(exports) {
        /* Jison generated parser */
        var parser = (function(){
        undefined
        var parser = {trace: function trace() { },
        yy: {},
        symbols_: {"error":2,"program":3,"EOF":4,"body":5,"line":6,"TERMINATOR":7,"statement":8,"expression":9,"COMMENT":10,"block":11,"INDENT":12,"OUTDENT":13,"doBody":14,"doLine":15,"IDENTIFIER":16,"LEFTARROW":17,"RETURN":18,"doBlock":19,"letFunction":20,"letBinding":21,"dataDecl":22,"typeDecl":23,"macro":24,"innerExpression":25,"LAMBDA":26,"paramList":27,"optType":28,"RIGHTARROW":29,"MATCH":30,"caseList":31,"DO":32,"call":33,"ifThenElse":34,"(":35,")":36,"&":37,"[|":38,"|]":39,"accessor":40,"MATH":41,"CONCAT":42,"+":43,"-":44,"BOOLOP":45,"COMPARE":46,"WITH":47,"literal":48,"CASE":49,"pattern":50,"=":51,"innerPattern":52,"identifier":53,"patternIdentifiers":54,"IF":55,"THEN":56,"ELSE":57,"DATA":58,"optParamList":59,"dataList":60,"optTypeParamList":61,"|":62,"TYPE":63,"type":64,"{":65,"optTypePairs":66,"}":67,"typeParamList":68,"keywordOrIdentifier":69,":":70,",":71,"MACRO":72,"LET":73,"param":74,"argList":75,"tuple":76,"tupleList":77,"NUMBER":78,"STRING":79,"BOOLEAN":80,"[":81,"optValues":82,"]":83,"optPairs":84,"arrayValues":85,"keyPairs":86,"optTerm":87,".":88,"FN":89,"$accept":0,"$end":1},
        terminals_: {2:"error",4:"EOF",7:"TERMINATOR",10:"COMMENT",12:"INDENT",13:"OUTDENT",16:"IDENTIFIER",17:"LEFTARROW",18:"RETURN",26:"LAMBDA",29:"RIGHTARROW",30:"MATCH",32:"DO",35:"(",36:")",37:"&",38:"[|",39:"|]",41:"MATH",42:"CONCAT",43:"+",44:"-",45:"BOOLOP",46:"COMPARE",47:"WITH",49:"CASE",51:"=",55:"IF",56:"THEN",57:"ELSE",58:"DATA",62:"|",63:"TYPE",65:"{",67:"}",70:":",71:",",72:"MACRO",73:"LET",78:"NUMBER",79:"STRING",80:"BOOLEAN",81:"[",83:"]",88:".",89:"FN"},
        productions_: [0,[3,1],[3,2],[5,1],[5,3],[5,2],[6,1],[6,1],[6,1],[11,3],[11,2],[14,1],[14,3],[14,2],[15,1],[15,3],[15,2],[19,3],[8,1],[8,1],[8,1],[8,1],[8,1],[9,1],[9,5],[9,5],[9,5],[9,3],[9,1],[25,1],[25,3],[25,4],[25,3],[25,1],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,1],[31,4],[31,6],[50,1],[50,1],[52,4],[54,1],[54,1],[54,2],[54,2],[34,7],[22,5],[22,7],[59,0],[59,1],[60,2],[60,4],[23,4],[64,2],[64,3],[61,0],[61,1],[68,1],[68,3],[68,2],[68,4],[66,0],[66,3],[66,5],[24,4],[24,4],[20,6],[20,6],[21,5],[21,7],[27,2],[27,1],[27,3],[27,2],[74,1],[74,5],[28,0],[28,2],[33,2],[33,4],[75,2],[75,1],[75,3],[75,2],[76,5],[77,1],[77,3],[48,1],[48,1],[48,1],[48,1],[48,3],[48,3],[82,0],[82,1],[85,1],[85,3],[84,0],[84,4],[84,1],[86,3],[86,5],[86,6],[87,0],[87,1],[40,1],[40,3],[40,5],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[69,1],[53,1]],
        performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {
        
        var $0 = $$.length - 1;
        switch (yystate) {
        case 1:return [];
        break;
        case 2:return $$[$0-1];
        break;
        case 3:this.$ = [$$[$0]];
        break;
        case 4:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
        break;
        case 5:this.$ = $$[$0-1];
        break;
        case 6:this.$ = $$[$0];
        break;
        case 7:this.$ = $$[$0];
        break;
        case 8:this.$ = new yy.Comment($$[$0]);
        break;
        case 9:this.$ = $$[$0-1];
        break;
        case 10:this.$ = $$[$0-1];
        break;
        case 11:this.$ = [$$[$0]];
        break;
        case 12:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
        break;
        case 13:this.$ = $$[$0-1];
        break;
        case 14:this.$ = $$[$0];
        break;
        case 15:this.$ = new yy.Bind($$[$0-2], $$[$0]);
        break;
        case 16:this.$ = new yy.Return($$[$0]);
        break;
        case 17:this.$ = $$[$0-1];
        break;
        case 18:this.$ = $$[$0];
        break;
        case 19:this.$ = $$[$0];
        break;
        case 20:this.$ = $$[$0];
        break;
        case 21:this.$ = $$[$0];
        break;
        case 22:this.$ = $$[$0];
        break;
        case 23:this.$ = $$[$0];
        break;
        case 24:this.$ = new yy.Function(undefined, $$[$0-3], [$$[$0]], $$[$0-2]);
        break;
        case 25:this.$ = new yy.Function(undefined, $$[$0-3], $$[$0], $$[$0-2]);
        break;
        case 26:this.$ = new yy.Match($$[$0-3], $$[$0-1]);
        break;
        case 27:this.$ = new yy.Do($$[$0-1], $$[$0]);
        break;
        case 28:this.$ = $$[$0];
        break;
        case 29:this.$ = $$[$0];
        break;
        case 30:this.$ = $$[$0-1];
        break;
        case 31:this.$ = new yy.Replacement($$[$0-1]);
        break;
        case 32:this.$ = new yy.Quoted($$[$0-1]);
        break;
        case 33:this.$ = $$[$0];
        break;
        case 34:this.$ = new yy.BinaryNumberOperator($$[$0-1], $$[$0-2], $$[$0]);
        break;
        case 35:this.$ = new yy.BinaryStringOperator($$[$0-1], $$[$0-2], $$[$0]);
        break;
        case 36:this.$ = new yy.BinaryNumberOperator($$[$0-1], $$[$0-2], $$[$0]);
        break;
        case 37:this.$ = new yy.BinaryNumberOperator($$[$0-1], $$[$0-2], $$[$0]);
        break;
        case 38:this.$ = new yy.BinaryBooleanOperator($$[$0-1], $$[$0-2], $$[$0]);
        break;
        case 39:this.$ = new yy.BinaryGenericOperator($$[$0-1], $$[$0-2], $$[$0]);
        break;
        case 40:this.$ = new yy.With($$[$0-2], $$[$0]);
        break;
        case 41:this.$ = $$[$0];
        break;
        case 42:this.$ = [new yy.Case($$[$0-2], $$[$0])];
        break;
        case 43:this.$ = $$[$0-5]; $$[$0-5].push(new yy.Case($$[$0-2], $$[$0]));
        break;
        case 44:this.$ = $$[$0];
        break;
        case 45:this.$ = new yy.Pattern($$[$0], []);
        break;
        case 46:this.$ = new yy.Pattern($$[$0-2], $$[$0-1]);
        break;
        case 47:this.$ = [$$[$0]];
        break;
        case 48:this.$ = [$$[$0]];
        break;
        case 49:this.$ = $$[$0-1]; $$[$0-1].push($$[$0]);
        break;
        case 50:this.$ = $$[$0-1]; $$[$0-1].push($$[$0]);
        break;
        case 51:this.$ = new yy.IfThenElse($$[$0-5], $$[$0-3], $$[$0]);
        break;
        case 52:this.$ = new yy.Data($$[$0-3], $$[$0-2], $$[$0]);
        break;
        case 53:this.$ = new yy.Data($$[$0-5], $$[$0-4], $$[$0-1]);
        break;
        case 54:this.$ = [];
        break;
        case 55:this.$ = $$[$0];
        break;
        case 56:this.$ = [new yy.Tag($$[$0-1], $$[$0])];
        break;
        case 57:this.$ = $$[$0-3]; $$[$0-3].push(new yy.Tag($$[$0-1], $$[$0]));
        break;
        case 58:this.$ = new yy.Type($$[$0-2], $$[$0]);
        break;
        case 59:this.$ = new yy.TypeName($$[$0-1], $$[$0]);
        break;
        case 60:this.$ = new yy.TypeObject($$[$0-1]);
        break;
        case 61:this.$ = [];
        break;
        case 62:this.$ = $$[$0];
        break;
        case 63:this.$ = [new yy.TypeName($$[$0], [])];
        break;
        case 64:this.$ = [$$[$0-1]];
        break;
        case 65:this.$ = $$[$0-1]; $$[$0-1].push(new yy.TypeName($$[$0], []));
        break;
        case 66:this.$ = $$[$0-3]; $$[$0-3].push($$[$0-1]);
        break;
        case 67:this.$ = {};
        break;
        case 68:this.$ = {}; this.$[$$[$0-2]] = $$[$0];
        break;
        case 69:this.$ = $$[$0-4]; $$[$0-4][$$[$0-2]] = $$[$0];
        break;
        case 70:this.$ = new yy.Macro($$[$0-2], [$$[$0]]);
        break;
        case 71:this.$ = new yy.Macro($$[$0-2], $$[$0]);
        break;
        case 72:this.$ = new yy.Function($$[$0-4], $$[$0-3], $$[$0], $$[$0-2]);
        break;
        case 73:this.$ = new yy.Function($$[$0-4], $$[$0-3], [$$[$0]], $$[$0-2]);
        break;
        case 74:this.$ = new yy.Let($$[$0-3], $$[$0], $$[$0-2]);
        break;
        case 75:this.$ = new yy.Let($$[$0-5], $$[$0-1], $$[$0-4]);
        break;
        case 76:this.$ = [];
        break;
        case 77:this.$ = [$$[$0]];
        break;
        case 78:this.$ = $$[$0-2];
        break;
        case 79:this.$ = $$[$0-1]; $$[$0-1].push($$[$0]);
        break;
        case 80:this.$ = new yy.Arg($$[$0]);
        break;
        case 81:this.$ = new yy.Arg($$[$0-3], $$[$0-1]);
        break;
        case 82:
        break;
        case 83:this.$ = $$[$0]
        break;
        case 84:this.$ = new yy.Call($$[$0-1], $$[$0]);
        break;
        case 85:this.$ = new yy.Call($$[$0-2], $$[$0]);
        break;
        case 86:this.$ = [];
        break;
        case 87:this.$ = [$$[$0]];
        break;
        case 88:this.$ = $$[$0-2];
        break;
        case 89:this.$ = $$[$0-1]; $$[$0-1].push($$[$0]);
        break;
        case 90:$$[$0-1].unshift($$[$0-3]); this.$ = new yy.Tuple($$[$0-1]);
        break;
        case 91:this.$ = [$$[$0]];
        break;
        case 92:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
        break;
        case 93:this.$ = new yy.Number($$[$0]);
        break;
        case 94:this.$ = new yy.String($$[$0]);
        break;
        case 95:this.$ = new yy.Boolean($$[$0]);
        break;
        case 96:this.$ = $$[$0];
        break;
        case 97:this.$ = new yy.Array($$[$0-1]);
        break;
        case 98:this.$ = new yy.Object($$[$0-1]);
        break;
        case 99:this.$ = [];
        break;
        case 100:this.$ = $$[$0];
        break;
        case 101:this.$ = [$$[$0]];
        break;
        case 102:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
        break;
        case 103:this.$ = {};
        break;
        case 104:this.$ = $$[$0-2];
        break;
        case 105:this.$ = $$[$0];
        break;
        case 106:this.$ = {}; this.$[$$[$0-2]] = $$[$0];
        break;
        case 107:this.$ = $$[$0-4]; $$[$0-4][$$[$0-2]] = $$[$0];
        break;
        case 108:this.$ = $$[$0-5]; $$[$0-5][$$[$0-2]] = $$[$0];
        break;
        case 109:
        break;
        case 110:
        break;
        case 111:this.$ = new yy.Identifier($$[$0]);
        break;
        case 112:this.$ = new yy.Access($$[$0-2], $$[$0]);
        break;
        case 113:this.$ = new yy.Access($$[$0-3], $$[$0]);
        break;
        case 114:this.$ = $$[$0];
        break;
        case 115:this.$ = $$[$0];
        break;
        case 116:this.$ = $$[$0];
        break;
        case 117:this.$ = $$[$0];
        break;
        case 118:this.$ = $$[$0];
        break;
        case 119:this.$ = $$[$0];
        break;
        case 120:this.$ = $$[$0];
        break;
        case 121:this.$ = $$[$0];
        break;
        case 122:this.$ = $$[$0];
        break;
        case 123:this.$ = $$[$0];
        break;
        case 124:this.$ = $$[$0];
        break;
        case 125:this.$ = $$[$0];
        break;
        case 126:this.$ = new yy.Identifier($$[$0]);
        break;
        }
        },
        table: [{3:1,4:[1,2],5:3,6:4,8:5,9:6,10:[1,7],16:[1,29],20:8,21:9,22:10,23:11,24:12,25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],58:[1,19],63:[1,20],65:[1,35],72:[1,21],73:[1,18],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{1:[3]},{1:[2,1]},{4:[1,36],7:[1,37]},{4:[2,3],7:[2,3],13:[2,3]},{4:[2,6],7:[2,6],13:[2,6]},{4:[2,7],7:[2,7],13:[2,7]},{4:[2,8],7:[2,8],13:[2,8]},{4:[2,18],7:[2,18],13:[2,18]},{4:[2,19],7:[2,19],13:[2,19]},{4:[2,20],7:[2,20],13:[2,20]},{4:[2,21],7:[2,21],13:[2,21]},{4:[2,22],7:[2,22],13:[2,22]},{4:[2,23],7:[2,23],13:[2,23],36:[2,23],39:[2,23],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],67:[2,23],71:[2,23],83:[2,23]},{16:[1,48],27:45,35:[1,46],74:47},{16:[1,29],25:49,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:52,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,28],7:[2,28],13:[2,28],36:[2,28],39:[2,28],67:[2,28],71:[2,28],83:[2,28]},{16:[1,53]},{16:[1,54]},{16:[1,55]},{16:[1,56]},{4:[2,29],7:[2,29],12:[2,29],13:[2,29],16:[2,29],35:[2,29],36:[2,29],37:[2,29],38:[2,29],39:[2,29],41:[2,29],42:[2,29],43:[2,29],44:[2,29],45:[2,29],46:[2,29],47:[2,29],55:[2,29],56:[2,29],65:[2,29],67:[2,29],71:[2,29],78:[2,29],79:[2,29],80:[2,29],81:[2,29],83:[2,29]},{9:57,16:[1,29],25:58,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{35:[1,59]},{9:60,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,33],7:[2,33],13:[2,33],16:[1,29],25:64,34:22,35:[1,63],36:[2,33],37:[1,24],38:[1,25],39:[2,33],40:51,41:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],46:[2,33],47:[2,33],48:27,55:[1,28],65:[1,35],67:[2,33],71:[2,33],75:61,76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34],83:[2,33],88:[1,62]},{4:[2,41],7:[2,41],12:[2,41],13:[2,41],16:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41],46:[2,41],47:[2,41],55:[2,41],56:[2,41],65:[2,41],67:[2,41],71:[2,41],78:[2,41],79:[2,41],80:[2,41],81:[2,41],83:[2,41]},{16:[1,29],25:65,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,111],7:[2,111],12:[2,111],13:[2,111],16:[2,111],35:[2,111],36:[2,111],37:[2,111],38:[2,111],39:[2,111],41:[2,111],42:[2,111],43:[2,111],44:[2,111],45:[2,111],46:[2,111],47:[2,111],55:[2,111],56:[2,111],65:[2,111],67:[2,111],71:[2,111],78:[2,111],79:[2,111],80:[2,111],81:[2,111],83:[2,111],88:[2,111]},{4:[2,93],7:[2,93],12:[2,93],13:[2,93],16:[2,93],35:[2,93],36:[2,93],37:[2,93],38:[2,93],39:[2,93],41:[2,93],42:[2,93],43:[2,93],44:[2,93],45:[2,93],46:[2,93],47:[2,93],55:[2,93],56:[2,93],65:[2,93],67:[2,93],71:[2,93],78:[2,93],79:[2,93],80:[2,93],81:[2,93],83:[2,93]},{4:[2,94],7:[2,94],12:[2,94],13:[2,94],16:[2,94],35:[2,94],36:[2,94],37:[2,94],38:[2,94],39:[2,94],41:[2,94],42:[2,94],43:[2,94],44:[2,94],45:[2,94],46:[2,94],47:[2,94],55:[2,94],56:[2,94],65:[2,94],67:[2,94],71:[2,94],78:[2,94],79:[2,94],80:[2,94],81:[2,94],83:[2,94]},{4:[2,95],7:[2,95],12:[2,95],13:[2,95],16:[2,95],35:[2,95],36:[2,95],37:[2,95],38:[2,95],39:[2,95],41:[2,95],42:[2,95],43:[2,95],44:[2,95],45:[2,95],46:[2,95],47:[2,95],55:[2,95],56:[2,95],65:[2,95],67:[2,95],71:[2,95],78:[2,95],79:[2,95],80:[2,95],81:[2,95],83:[2,95]},{4:[2,96],7:[2,96],12:[2,96],13:[2,96],16:[2,96],35:[2,96],36:[2,96],37:[2,96],38:[2,96],39:[2,96],41:[2,96],42:[2,96],43:[2,96],44:[2,96],45:[2,96],46:[2,96],47:[2,96],55:[2,96],56:[2,96],65:[2,96],67:[2,96],71:[2,96],78:[2,96],79:[2,96],80:[2,96],81:[2,96],83:[2,96]},{9:68,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34],82:66,83:[2,99],85:67},{12:[1,70],16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],67:[2,103],69:72,72:[1,82],84:69,86:71,89:[1,73]},{1:[2,2]},{4:[2,5],6:85,7:[2,5],8:5,9:6,10:[1,7],13:[2,5],16:[1,29],20:8,21:9,22:10,23:11,24:12,25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],58:[1,19],63:[1,20],65:[1,35],72:[1,21],73:[1,18],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:86,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:87,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:88,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:89,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:90,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:91,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,29],25:92,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,48],28:93,29:[2,82],35:[1,94],70:[1,96],74:95},{16:[1,98],36:[1,97]},{16:[2,77],29:[2,77],35:[2,77],51:[2,77],70:[2,77]},{16:[2,80],29:[2,80],35:[2,80],51:[2,80],70:[2,80]},{12:[1,99],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44]},{9:100,16:[1,29],25:58,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,33],7:[2,33],12:[2,33],13:[2,33],16:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33],39:[2,33],41:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],46:[2,33],47:[2,33],55:[2,33],56:[2,33],65:[2,33],67:[2,33],71:[2,33],78:[2,33],79:[2,33],80:[2,33],81:[2,33],83:[2,33],88:[1,62]},{12:[1,102],19:101,41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44]},{16:[1,48],27:103,28:104,35:[1,46],51:[2,82],70:[1,96],74:47},{16:[1,48],27:106,35:[1,46],51:[2,54],59:105,74:47},{51:[1,107]},{51:[1,108]},{36:[1,109]},{36:[2,23],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],71:[1,110]},{9:111,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{39:[1,112]},{4:[2,84],7:[2,84],13:[2,84],16:[1,29],25:114,34:22,35:[1,113],36:[2,84],37:[1,24],38:[1,25],39:[2,84],40:51,48:27,55:[1,28],65:[1,35],67:[2,84],71:[2,84],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34],83:[2,84]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],69:115,72:[1,82],89:[1,73]},{9:100,16:[1,29],25:58,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],36:[1,116],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,87],7:[2,87],13:[2,87],16:[2,87],35:[2,87],36:[2,87],37:[2,87],38:[2,87],39:[2,87],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],55:[2,87],65:[2,87],67:[2,87],71:[2,87],78:[2,87],79:[2,87],80:[2,87],81:[2,87],83:[2,87]},{41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],56:[1,117]},{83:[1,118]},{71:[1,119],83:[2,100]},{71:[2,101],83:[2,101]},{67:[1,120]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],69:72,72:[1,82],86:121,89:[1,73]},{7:[1,123],67:[2,105],71:[1,122]},{70:[1,124]},{4:[2,114],7:[2,114],12:[2,114],13:[2,114],16:[2,114],35:[2,114],36:[2,114],37:[2,114],38:[2,114],39:[2,114],41:[2,114],42:[2,114],43:[2,114],44:[2,114],45:[2,114],46:[2,114],47:[2,114],55:[2,114],56:[2,114],65:[2,114],67:[2,114],70:[2,114],71:[2,114],78:[2,114],79:[2,114],80:[2,114],81:[2,114],83:[2,114],88:[2,114]},{4:[2,115],7:[2,115],12:[2,115],13:[2,115],16:[2,115],35:[2,115],36:[2,115],37:[2,115],38:[2,115],39:[2,115],41:[2,115],42:[2,115],43:[2,115],44:[2,115],45:[2,115],46:[2,115],47:[2,115],55:[2,115],56:[2,115],65:[2,115],67:[2,115],70:[2,115],71:[2,115],78:[2,115],79:[2,115],80:[2,115],81:[2,115],83:[2,115],88:[2,115]},{4:[2,116],7:[2,116],12:[2,116],13:[2,116],16:[2,116],35:[2,116],36:[2,116],37:[2,116],38:[2,116],39:[2,116],41:[2,116],42:[2,116],43:[2,116],44:[2,116],45:[2,116],46:[2,116],47:[2,116],55:[2,116],56:[2,116],65:[2,116],67:[2,116],70:[2,116],71:[2,116],78:[2,116],79:[2,116],80:[2,116],81:[2,116],83:[2,116],88:[2,116]},{4:[2,117],7:[2,117],12:[2,117],13:[2,117],16:[2,117],35:[2,117],36:[2,117],37:[2,117],38:[2,117],39:[2,117],41:[2,117],42:[2,117],43:[2,117],44:[2,117],45:[2,117],46:[2,117],47:[2,117],55:[2,117],56:[2,117],65:[2,117],67:[2,117],70:[2,117],71:[2,117],78:[2,117],79:[2,117],80:[2,117],81:[2,117],83:[2,117],88:[2,117]},{4:[2,118],7:[2,118],12:[2,118],13:[2,118],16:[2,118],35:[2,118],36:[2,118],37:[2,118],38:[2,118],39:[2,118],41:[2,118],42:[2,118],43:[2,118],44:[2,118],45:[2,118],46:[2,118],47:[2,118],55:[2,118],56:[2,118],65:[2,118],67:[2,118],70:[2,118],71:[2,118],78:[2,118],79:[2,118],80:[2,118],81:[2,118],83:[2,118],88:[2,118]},{4:[2,119],7:[2,119],12:[2,119],13:[2,119],16:[2,119],35:[2,119],36:[2,119],37:[2,119],38:[2,119],39:[2,119],41:[2,119],42:[2,119],43:[2,119],44:[2,119],45:[2,119],46:[2,119],47:[2,119],55:[2,119],56:[2,119],65:[2,119],67:[2,119],70:[2,119],71:[2,119],78:[2,119],79:[2,119],80:[2,119],81:[2,119],83:[2,119],88:[2,119]},{4:[2,120],7:[2,120],12:[2,120],13:[2,120],16:[2,120],35:[2,120],36:[2,120],37:[2,120],38:[2,120],39:[2,120],41:[2,120],42:[2,120],43:[2,120],44:[2,120],45:[2,120],46:[2,120],47:[2,120],55:[2,120],56:[2,120],65:[2,120],67:[2,120],70:[2,120],71:[2,120],78:[2,120],79:[2,120],80:[2,120],81:[2,120],83:[2,120],88:[2,120]},{4:[2,121],7:[2,121],12:[2,121],13:[2,121],16:[2,121],35:[2,121],36:[2,121],37:[2,121],38:[2,121],39:[2,121],41:[2,121],42:[2,121],43:[2,121],44:[2,121],45:[2,121],46:[2,121],47:[2,121],55:[2,121],56:[2,121],65:[2,121],67:[2,121],70:[2,121],71:[2,121],78:[2,121],79:[2,121],80:[2,121],81:[2,121],83:[2,121],88:[2,121]},{4:[2,122],7:[2,122],12:[2,122],13:[2,122],16:[2,122],35:[2,122],36:[2,122],37:[2,122],38:[2,122],39:[2,122],41:[2,122],42:[2,122],43:[2,122],44:[2,122],45:[2,122],46:[2,122],47:[2,122],55:[2,122],56:[2,122],65:[2,122],67:[2,122],70:[2,122],71:[2,122],78:[2,122],79:[2,122],80:[2,122],81:[2,122],83:[2,122],88:[2,122]},{4:[2,123],7:[2,123],12:[2,123],13:[2,123],16:[2,123],35:[2,123],36:[2,123],37:[2,123],38:[2,123],39:[2,123],41:[2,123],42:[2,123],43:[2,123],44:[2,123],45:[2,123],46:[2,123],47:[2,123],55:[2,123],56:[2,123],65:[2,123],67:[2,123],70:[2,123],71:[2,123],78:[2,123],79:[2,123],80:[2,123],81:[2,123],83:[2,123],88:[2,123]},{4:[2,124],7:[2,124],12:[2,124],13:[2,124],16:[2,124],35:[2,124],36:[2,124],37:[2,124],38:[2,124],39:[2,124],41:[2,124],42:[2,124],43:[2,124],44:[2,124],45:[2,124],46:[2,124],47:[2,124],55:[2,124],56:[2,124],65:[2,124],67:[2,124],70:[2,124],71:[2,124],78:[2,124],79:[2,124],80:[2,124],81:[2,124],83:[2,124],88:[2,124]},{4:[2,125],7:[2,125],12:[2,125],13:[2,125],16:[2,125],35:[2,125],36:[2,125],37:[2,125],38:[2,125],39:[2,125],41:[2,125],42:[2,125],43:[2,125],44:[2,125],45:[2,125],46:[2,125],47:[2,125],55:[2,125],56:[2,125],65:[2,125],67:[2,125],70:[2,125],71:[2,125],78:[2,125],79:[2,125],80:[2,125],81:[2,125],83:[2,125],88:[2,125]},{4:[2,4],7:[2,4],13:[2,4]},{4:[2,34],7:[2,34],12:[2,34],13:[2,34],16:[2,34],35:[2,34],36:[2,34],37:[2,34],38:[2,34],39:[2,34],41:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],47:[2,34],55:[2,34],56:[2,34],65:[2,34],67:[2,34],71:[2,34],78:[2,34],79:[2,34],80:[2,34],81:[2,34],83:[2,34]},{4:[2,35],7:[2,35],12:[2,35],13:[2,35],16:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],47:[2,35],55:[2,35],56:[2,35],65:[2,35],67:[2,35],71:[2,35],78:[2,35],79:[2,35],80:[2,35],81:[2,35],83:[2,35]},{4:[2,36],7:[2,36],12:[2,36],13:[2,36],16:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],41:[1,38],42:[1,39],43:[2,36],44:[2,36],45:[2,36],46:[2,36],47:[2,36],55:[2,36],56:[2,36],65:[2,36],67:[2,36],71:[2,36],78:[2,36],79:[2,36],80:[2,36],81:[2,36],83:[2,36]},{4:[2,37],7:[2,37],12:[2,37],13:[2,37],16:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],41:[1,38],42:[1,39],43:[2,37],44:[2,37],45:[2,37],46:[2,37],47:[2,37],55:[2,37],56:[2,37],65:[2,37],67:[2,37],71:[2,37],78:[2,37],79:[2,37],80:[2,37],81:[2,37],83:[2,37]},{4:[2,38],7:[2,38],12:[2,38],13:[2,38],16:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[2,38],46:[1,43],47:[1,44],55:[2,38],56:[2,38],65:[2,38],67:[2,38],71:[2,38],78:[2,38],79:[2,38],80:[2,38],81:[2,38],83:[2,38]},{4:[2,39],7:[2,39],12:[2,39],13:[2,39],16:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[2,39],46:[2,39],47:[2,39],55:[2,39],56:[2,39],65:[2,39],67:[2,39],71:[2,39],78:[2,39],79:[2,39],80:[2,39],81:[2,39],83:[2,39]},{4:[2,40],7:[2,40],12:[2,40],13:[2,40],16:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[2,40],46:[2,40],47:[2,40],55:[2,40],56:[2,40],65:[2,40],67:[2,40],71:[2,40],78:[2,40],79:[2,40],80:[2,40],81:[2,40],83:[2,40]},{29:[1,125]},{16:[1,98],36:[1,126]},{16:[2,79],29:[2,79],35:[2,79],51:[2,79],70:[2,79]},{16:[1,128],64:127,65:[1,129]},{16:[2,76],29:[2,76],35:[2,76],51:[2,76],70:[2,76]},{70:[1,130]},{31:131,49:[1,132]},{36:[1,133]},{4:[2,27],7:[2,27],13:[2,27],36:[2,27],39:[2,27],67:[2,27],71:[2,27],83:[2,27]},{6:136,8:5,9:6,10:[1,7],14:134,15:135,16:[1,137],18:[1,138],20:8,21:9,22:10,23:11,24:12,25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],58:[1,19],63:[1,20],65:[1,35],72:[1,21],73:[1,18],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,48],28:139,35:[1,94],51:[2,82],70:[1,96],74:95},{51:[1,140]},{51:[1,141]},{16:[1,48],35:[1,94],51:[2,55],74:95},{16:[1,128],64:142,65:[1,129]},{9:143,11:144,12:[1,145],16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,30],7:[2,30],13:[2,30],16:[1,29],25:64,34:22,35:[1,63],36:[2,30],37:[1,24],38:[1,25],39:[2,30],40:51,41:[2,30],42:[2,30],43:[2,30],44:[2,30],45:[2,30],46:[2,30],47:[2,30],48:27,55:[1,28],65:[1,35],67:[2,30],71:[2,30],75:146,76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34],83:[2,30],88:[1,147]},{16:[1,29],25:149,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,77:148,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{36:[1,150]},{4:[2,32],7:[2,32],12:[2,32],13:[2,32],16:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32],41:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],46:[2,32],47:[2,32],55:[2,32],56:[2,32],65:[2,32],67:[2,32],71:[2,32],78:[2,32],79:[2,32],80:[2,32],81:[2,32],83:[2,32]},{9:100,16:[1,29],25:58,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],36:[1,151],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,89],7:[2,89],13:[2,89],16:[2,89],35:[2,89],36:[2,89],37:[2,89],38:[2,89],39:[2,89],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],55:[2,89],65:[2,89],67:[2,89],71:[2,89],78:[2,89],79:[2,89],80:[2,89],81:[2,89],83:[2,89]},{4:[2,112],7:[2,112],12:[2,112],13:[2,112],16:[2,112],35:[2,112],36:[2,112],37:[2,112],38:[2,112],39:[2,112],41:[2,112],42:[2,112],43:[2,112],44:[2,112],45:[2,112],46:[2,112],47:[2,112],55:[2,112],56:[2,112],65:[2,112],67:[2,112],71:[2,112],78:[2,112],79:[2,112],80:[2,112],81:[2,112],83:[2,112],88:[2,112]},{4:[2,86],7:[2,86],13:[2,86],16:[2,86],35:[2,86],36:[2,86],37:[2,86],38:[2,86],39:[2,86],55:[2,86],65:[2,86],67:[2,86],71:[2,86],78:[2,86],79:[2,86],80:[2,86],81:[2,86],83:[2,86]},{11:152,12:[1,145]},{4:[2,97],7:[2,97],12:[2,97],13:[2,97],16:[2,97],35:[2,97],36:[2,97],37:[2,97],38:[2,97],39:[2,97],41:[2,97],42:[2,97],43:[2,97],44:[2,97],45:[2,97],46:[2,97],47:[2,97],55:[2,97],56:[2,97],65:[2,97],67:[2,97],71:[2,97],78:[2,97],79:[2,97],80:[2,97],81:[2,97],83:[2,97]},{9:153,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,98],7:[2,98],12:[2,98],13:[2,98],16:[2,98],35:[2,98],36:[2,98],37:[2,98],38:[2,98],39:[2,98],41:[2,98],42:[2,98],43:[2,98],44:[2,98],45:[2,98],46:[2,98],47:[2,98],55:[2,98],56:[2,98],65:[2,98],67:[2,98],71:[2,98],78:[2,98],79:[2,98],80:[2,98],81:[2,98],83:[2,98]},{7:[1,123],13:[1,154],71:[1,122]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],69:155,72:[1,82],89:[1,73]},{7:[1,157],16:[2,109],18:[2,109],30:[2,109],32:[2,109],47:[2,109],49:[2,109],56:[2,109],57:[2,109],58:[2,109],63:[2,109],72:[2,109],87:156,89:[2,109]},{9:158,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{9:159,11:160,12:[1,145],16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[2,78],29:[2,78],35:[2,78],51:[2,78],70:[2,78]},{29:[2,83],51:[2,83]},{4:[2,61],7:[2,61],13:[2,61],16:[1,163],29:[2,61],35:[1,164],36:[2,61],51:[2,61],61:161,67:[2,61],68:162,71:[2,61]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],66:165,67:[2,67],69:166,71:[2,67],72:[1,82],89:[1,73]},{16:[1,128],64:167,65:[1,129]},{7:[1,169],13:[1,168]},{16:[1,174],35:[1,173],50:170,52:171,53:172},{4:[2,30],7:[2,30],12:[2,30],13:[2,30],16:[2,30],35:[2,30],36:[2,30],37:[2,30],38:[2,30],39:[2,30],41:[2,30],42:[2,30],43:[2,30],44:[2,30],45:[2,30],46:[2,30],47:[2,30],55:[2,30],56:[2,30],65:[2,30],67:[2,30],71:[2,30],78:[2,30],79:[2,30],80:[2,30],81:[2,30],83:[2,30],88:[1,147]},{7:[1,176],13:[1,175]},{7:[2,11],13:[2,11]},{7:[2,14],13:[2,14]},{7:[2,111],13:[2,111],16:[2,111],17:[1,177],35:[2,111],37:[2,111],38:[2,111],41:[2,111],42:[2,111],43:[2,111],44:[2,111],45:[2,111],46:[2,111],47:[2,111],55:[2,111],65:[2,111],78:[2,111],79:[2,111],80:[2,111],81:[2,111],88:[2,111]},{9:178,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{51:[1,179]},{9:180,12:[1,181],16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{12:[1,183],16:[1,184],60:182},{4:[2,58],7:[2,58],13:[2,58]},{4:[2,70],7:[2,70],13:[2,70]},{4:[2,71],7:[2,71],13:[2,71]},{5:185,6:4,8:5,9:6,10:[1,7],13:[1,186],16:[1,29],20:8,21:9,22:10,23:11,24:12,25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],58:[1,19],63:[1,20],65:[1,35],72:[1,21],73:[1,18],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,85],7:[2,85],13:[2,85],16:[1,29],25:114,34:22,35:[1,113],36:[2,85],37:[1,24],38:[1,25],39:[2,85],40:51,48:27,55:[1,28],65:[1,35],67:[2,85],71:[2,85],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34],83:[2,85]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],69:187,72:[1,82],89:[1,73]},{36:[1,188],71:[1,189]},{36:[2,91],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],71:[2,91]},{4:[2,31],7:[2,31],12:[2,31],13:[2,31],16:[2,31],35:[2,31],36:[2,31],37:[2,31],38:[2,31],39:[2,31],41:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],46:[2,31],47:[2,31],55:[2,31],56:[2,31],65:[2,31],67:[2,31],71:[2,31],78:[2,31],79:[2,31],80:[2,31],81:[2,31],83:[2,31]},{4:[2,88],7:[2,88],13:[2,88],16:[2,88],35:[2,88],36:[2,88],37:[2,88],38:[2,88],39:[2,88],55:[2,88],65:[2,88],67:[2,88],71:[2,88],78:[2,88],79:[2,88],80:[2,88],81:[2,88],83:[2,88]},{7:[1,190]},{71:[2,102],83:[2,102]},{7:[1,191]},{70:[1,192]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],69:193,72:[1,82],89:[1,73]},{16:[2,110],18:[2,110],30:[2,110],32:[2,110],47:[2,110],49:[2,110],56:[2,110],57:[2,110],58:[2,110],63:[2,110],72:[2,110],89:[2,110]},{7:[2,106],13:[2,106],67:[2,106],71:[2,106]},{4:[2,24],7:[2,24],13:[2,24],36:[2,24],39:[2,24],67:[2,24],71:[2,24],83:[2,24]},{4:[2,25],7:[2,25],13:[2,25],36:[2,25],39:[2,25],67:[2,25],71:[2,25],83:[2,25]},{4:[2,59],7:[2,59],13:[2,59],29:[2,59],36:[2,59],51:[2,59],67:[2,59],71:[2,59]},{4:[2,62],7:[2,62],13:[2,62],16:[1,194],29:[2,62],35:[1,195],36:[2,62],51:[2,62],62:[2,62],67:[2,62],71:[2,62]},{4:[2,63],7:[2,63],13:[2,63],16:[2,63],29:[2,63],35:[2,63],36:[2,63],51:[2,63],62:[2,63],67:[2,63],71:[2,63]},{16:[1,128],64:196,65:[1,129]},{67:[1,197],71:[1,198]},{70:[1,199]},{36:[1,200]},{4:[2,26],7:[2,26],13:[2,26],36:[2,26],39:[2,26],67:[2,26],71:[2,26],83:[2,26]},{49:[1,201]},{51:[1,202]},{51:[2,44]},{51:[2,45]},{16:[1,174],53:203},{16:[2,126],35:[2,126],36:[2,126],51:[2,126]},{4:[2,17],7:[2,17],13:[2,17],36:[2,17],39:[2,17],67:[2,17],71:[2,17],83:[2,17]},{6:136,7:[2,13],8:5,9:6,10:[1,7],13:[2,13],15:204,16:[1,137],18:[1,138],20:8,21:9,22:10,23:11,24:12,25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],58:[1,19],63:[1,20],65:[1,35],72:[1,21],73:[1,18],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{9:205,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{7:[2,16],13:[2,16]},{9:207,11:206,12:[1,145],16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,74],7:[2,74],13:[2,74]},{9:208,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{4:[2,52],7:[2,52],13:[2,52],62:[1,209]},{16:[1,184],60:210},{4:[2,61],7:[2,61],13:[2,61],16:[1,163],35:[1,164],61:211,62:[2,61],68:162},{7:[1,37],13:[1,212]},{4:[2,10],7:[2,10],12:[2,10],13:[2,10],16:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10],39:[2,10],41:[2,10],42:[2,10],43:[2,10],44:[2,10],45:[2,10],46:[2,10],47:[2,10],55:[2,10],56:[2,10],65:[2,10],67:[2,10],71:[2,10],78:[2,10],79:[2,10],80:[2,10],81:[2,10],83:[2,10]},{4:[2,113],7:[2,113],12:[2,113],13:[2,113],16:[2,113],35:[2,113],36:[2,113],37:[2,113],38:[2,113],39:[2,113],41:[2,113],42:[2,113],43:[2,113],44:[2,113],45:[2,113],46:[2,113],47:[2,113],55:[2,113],56:[2,113],65:[2,113],67:[2,113],71:[2,113],78:[2,113],79:[2,113],80:[2,113],81:[2,113],83:[2,113],88:[2,113]},{4:[2,90],7:[2,90],12:[2,90],13:[2,90],16:[2,90],35:[2,90],36:[2,90],37:[2,90],38:[2,90],39:[2,90],41:[2,90],42:[2,90],43:[2,90],44:[2,90],45:[2,90],46:[2,90],47:[2,90],55:[2,90],56:[2,90],65:[2,90],67:[2,90],71:[2,90],78:[2,90],79:[2,90],80:[2,90],81:[2,90],83:[2,90]},{16:[1,29],25:213,34:22,35:[1,50],37:[1,24],38:[1,25],40:51,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{57:[1,214]},{67:[2,104]},{9:215,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{70:[1,216]},{4:[2,65],7:[2,65],13:[2,65],16:[2,65],29:[2,65],35:[2,65],36:[2,65],51:[2,65],62:[2,65],67:[2,65],71:[2,65]},{16:[1,128],64:217,65:[1,129]},{36:[1,218]},{4:[2,60],7:[2,60],13:[2,60],29:[2,60],36:[2,60],51:[2,60],67:[2,60],71:[2,60]},{16:[1,84],18:[1,81],30:[1,78],32:[1,80],47:[1,83],49:[1,79],56:[1,74],57:[1,75],58:[1,76],63:[1,77],69:219,72:[1,82],89:[1,73]},{16:[1,128],64:220,65:[1,129]},{16:[2,81],29:[2,81],35:[2,81],51:[2,81],70:[2,81]},{16:[1,174],35:[1,173],50:221,52:171,53:172},{9:222,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[1,174],35:[1,173],52:225,53:224,54:223},{7:[2,12],13:[2,12]},{7:[2,15],13:[2,15]},{4:[2,72],7:[2,72],13:[2,72]},{4:[2,73],7:[2,73],13:[2,73]},{13:[1,226]},{16:[1,227]},{13:[1,228],62:[1,209]},{4:[2,56],7:[2,56],13:[2,56],62:[2,56]},{4:[2,9],7:[2,9],12:[2,9],13:[2,9],16:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9],41:[2,9],42:[2,9],43:[2,9],44:[2,9],45:[2,9],46:[2,9],47:[2,9],55:[2,9],56:[2,9],65:[2,9],67:[2,9],71:[2,9],78:[2,9],79:[2,9],80:[2,9],81:[2,9],83:[2,9]},{36:[2,92],41:[1,38],42:[1,39],43:[1,40],44:[1,41],45:[1,42],46:[1,43],47:[1,44],71:[2,92]},{11:229,12:[1,145]},{7:[2,107],13:[2,107],67:[2,107],71:[2,107]},{9:230,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{36:[1,231]},{4:[2,64],7:[2,64],13:[2,64],16:[2,64],29:[2,64],35:[2,64],36:[2,64],51:[2,64],62:[2,64],67:[2,64],71:[2,64]},{70:[1,232]},{67:[2,68],71:[2,68]},{51:[1,233]},{7:[2,42],13:[2,42]},{16:[1,174],35:[1,173],36:[1,234],52:235,53:236},{16:[2,47],35:[2,47],36:[2,47]},{16:[2,48],35:[2,48],36:[2,48]},{4:[2,75],7:[2,75],13:[2,75]},{4:[2,61],7:[2,61],13:[2,61],16:[1,163],35:[1,164],61:237,62:[2,61],68:162},{4:[2,53],7:[2,53],13:[2,53]},{4:[2,51],7:[2,51],12:[2,51],13:[2,51],16:[2,51],35:[2,51],36:[2,51],37:[2,51],38:[2,51],39:[2,51],41:[2,51],42:[2,51],43:[2,51],44:[2,51],45:[2,51],46:[2,51],47:[2,51],55:[2,51],56:[2,51],65:[2,51],67:[2,51],71:[2,51],78:[2,51],79:[2,51],80:[2,51],81:[2,51],83:[2,51]},{7:[2,108],13:[2,108],67:[2,108],71:[2,108]},{4:[2,66],7:[2,66],13:[2,66],16:[2,66],29:[2,66],35:[2,66],36:[2,66],51:[2,66],62:[2,66],67:[2,66],71:[2,66]},{16:[1,128],64:238,65:[1,129]},{9:239,16:[1,29],25:13,26:[1,14],30:[1,15],32:[1,16],33:17,34:22,35:[1,23],37:[1,24],38:[1,25],40:26,48:27,55:[1,28],65:[1,35],76:33,78:[1,30],79:[1,31],80:[1,32],81:[1,34]},{16:[2,46],35:[2,46],36:[2,46],51:[2,46]},{16:[2,49],35:[2,49],36:[2,49]},{16:[2,50],35:[2,50],36:[2,50]},{4:[2,57],7:[2,57],13:[2,57],62:[2,57]},{67:[2,69],71:[2,69]},{7:[2,43],13:[2,43]}],
        defaultActions: {2:[2,1],36:[2,2],171:[2,44],172:[2,45],191:[2,104]},
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this,
                stack = [0],
                vstack = [null], // semantic value stack
                lstack = [], // location stack
                table = this.table,
                yytext = '',
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
        
            //this.reductionCount = this.shiftCount = 0;
        
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            if (typeof this.lexer.yylloc == 'undefined')
                this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
        
            if (typeof this.yy.parseError === 'function')
                this.parseError = this.yy.parseError;
        
            function popStack (n) {
                stack.length = stack.length - 2*n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
        
            function lex() {
                var token;
                token = self.lexer.lex() || 1; // $end = 1
                // if token isn't its numeric value, convert
                if (typeof token !== 'number') {
                    token = self.symbols_[token] || token;
                }
                return token;
            }
        
            var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
            while (true) {
                // retreive state number from top of stack
                state = stack[stack.length-1];
        
                // use default actions if available
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                } else {
                    if (symbol == null)
                        symbol = lex();
                    // read action for current state and first input
                    action = table[state] && table[state][symbol];
                }
        
                // handle parse error
                _handle_error:
                if (typeof action === 'undefined' || !action.length || !action[0]) {
        
                    if (!recovering) {
                        // Report error
                        expected = [];
                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
                            expected.push("'"+this.terminals_[p]+"'");
                        }
                        var errStr = '';
                        if (this.lexer.showPosition) {
                            errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                        } else {
                            errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                          (symbol == 1 /*EOF*/ ? "end of input" :
                                                      ("'"+(this.terminals_[symbol] || symbol)+"'"));
                        }
                        this.parseError(errStr,
                            {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
                    }
        
                    // just recovered from another error
                    if (recovering == 3) {
                        if (symbol == EOF) {
                            throw new Error(errStr || 'Parsing halted.');
                        }
        
                        // discard current lookahead and grab another
                        yyleng = this.lexer.yyleng;
                        yytext = this.lexer.yytext;
                        yylineno = this.lexer.yylineno;
                        yyloc = this.lexer.yylloc;
                        symbol = lex();
                    }
        
                    // try to recover from error
                    while (1) {
                        // check for error recovery rule in this state
                        if ((TERROR.toString()) in table[state]) {
                            break;
                        }
                        if (state == 0) {
                            throw new Error(errStr || 'Parsing halted.');
                        }
                        popStack(1);
                        state = stack[stack.length-1];
                    }
        
                    preErrorSymbol = symbol; // save the lookahead token
                    symbol = TERROR;         // insert generic error symbol as new lookahead
                    state = stack[stack.length-1];
                    action = table[state] && table[state][TERROR];
                    recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
                }
        
                // this shouldn't happen, unless resolve defaults are off
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
                }
        
                switch (action[0]) {
        
                    case 1: // shift
                        //this.shiftCount++;
        
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]); // push state
                        symbol = null;
                        if (!preErrorSymbol) { // normal execution/no error
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0)
                                recovering--;
                        } else { // error just occurred, resume old lookahead f/ before error
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
        
                    case 2: // reduce
                        //this.reductionCount++;
        
                        len = this.productions_[action[1]][1];
        
                        // perform semantic action
                        yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                        // default location, uses first token for firsts, last for lasts
                        yyval._$ = {
                            first_line: lstack[lstack.length-(len||1)].first_line,
                            last_line: lstack[lstack.length-1].last_line,
                            first_column: lstack[lstack.length-(len||1)].first_column,
                            last_column: lstack[lstack.length-1].last_column
                        };
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
        
                        if (typeof r !== 'undefined') {
                            return r;
                        }
        
                        // pop off stack
                        if (len) {
                            stack = stack.slice(0,-1*len*2);
                            vstack = vstack.slice(0, -1*len);
                            lstack = lstack.slice(0, -1*len);
                        }
        
                        stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        // goto new state = table[STATE][NONTERMINAL]
                        newState = table[stack[stack.length-2]][stack[stack.length-1]];
                        stack.push(newState);
                        break;
        
                    case 3: // accept
                        return true;
                }
        
            }
        
            return true;
        }};
        return parser;
        })();
        if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
        exports.parser = parser;
        exports.parse = function () { return parser.parse.apply(parser, arguments); }
        exports.main = function commonjsMain(args) {
            if (!args[1])
                throw new Error('Usage: '+args[0]+' FILE');
            if (typeof process !== 'undefined') {
                var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
            } else {
                var cwd = require("file").path(require("file").cwd());
                var source = cwd.join(args[1]).read({charset: "utf-8"});
            }
            return exports.parser.parse(source);
        }
        if (typeof module !== 'undefined' && require.main === module) {
          exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
        }
        }

    };
    load["./typeinference"] = function(exports) {
        // ## Algorithm W (Damas-Hindley-Milner)
        //
        // This is based on Robert Smallshire's [Python code](http://bit.ly/bbVmmX).
        // Which is based on Andrew's [Scala code](http://bit.ly/aztXwD). Which is based
        // on Nikita Borisov's [Perl code](http://bit.ly/myq3uA). Which is based on Luca
        // Cardelli's [Modula-2 code](http://bit.ly/Hjpvb). Wow.
        
        // Type variable and built-in types are defined in the `types` module.
        var t = require('./types'),
            _ = require('underscore');
        
        // ### Unification
        //
        // This is the process of finding a type that satisfies some given constraints.
        // In this system, unification will try to satisfy that either:
        //
        // 1. `t1` and `t2` are equal type variables
        // 2. `t1` and `t2` are equal types
        //
        // In case #1, if `t1` is a type variable and `t2` is not currently equal,
        // unification will set `t1` to have an instance of `t2`. When `t1` is pruned,
        // it will unchain to a type without an instance.
        //
        // In case #2, do a deep unification on the type, using recursion.
        //
        // If neither constraint can be met, the process will throw an error message.
        var unify = function(t1, t2) {
            var alias = t1.aliased || t2.aliased;
            var i;
            t1 = prune(t1);
            t2 = prune(t2);
            if(t1 instanceof t.Variable) {
                if(t1 != t2) {
                    if(occursInType(t1, t2)) {
                        throw "Recursive unification";
                    }
                    t1.instance = t2;
                }
            } else if(t1 instanceof t.BaseType && t2 instanceof t.Variable) {
                unify(t2, t1);
            } else if(t1 instanceof t.BaseType && t2 instanceof t.BaseType) {
                var t1str = t1.aliased || t1.toString();
                var t2str = t2.aliased || t2.toString();
                if(t1.name != t2.name || t1.types.length != t2.types.length) {
                    throw new Error("Type error: " + t1str + " is not " + t2str);
                }
                if(t1 instanceof t.ObjectType) {
                    for(i in t2.props) {
                        if(!(i in t1.props)) {
                            throw new Error("Type error: " + t1str + " is not " + t2str);
                        }
                        unify(t1.props[i], t2.props[i]);
                    }
                }
                for(i = 0; i < Math.min(t1.types.length, t2.types.length); i++) {
                    unify(t1.types[i], t2.types[i]);
                }
                if(alias) t1.aliased = t2.aliased = alias;
            } else {
                throw new Error("Not unified: " + t1 + ", " + t2);
            }
        };
        
        // ### Prune
        //
        // This will unchain variables until it gets to a type or variable without an
        // instance. See `unify` for some details about type variable instances.
        var prune = function(type) {
            if(type instanceof t.Variable && type.instance) {
                type.instance = prune(type.instance);
                return type.instance;
            }
            return type;
        };
        
        // ### Fresh type
        //
        // Getting a "fresh" type will create a recursive copy. When a generic type
        // variable is encountered, a new variable is generated and substituted in.
        //
        // A fresh type is only returned when an identifier is found during analysis.
        // See `analyse` for some context.
        var fresh = function(type, nonGeneric, mappings) {
            if(!mappings) mappings = {};
        
            type = prune(type);
            if(type instanceof t.Variable) {
                if(occursInTypeArray(type, nonGeneric)) {
                    return type;
                } else {
                    if(!mappings[type.id]) {
                        mappings[type.id] = new t.Variable();
                    }
                    return mappings[type.id];
                }
            }
        
            var freshed = new type.constructor(type.map(function(type) {
                return fresh(type, nonGeneric, mappings);
            }));
            if(type.aliased) freshed.aliased = type.aliased;
            return freshed;
        };
        
        // ### Occurs check
        //
        // These functions check whether the type `t2` is equal to or contained within
        // the type `t1`. Used for checking recursive definitions in `unify` and
        // checking if a variable is non-generic in `fresh`.
        var occursInType = function(t1, t2) {
            t2 = prune(t2);
            if(t2 == t1) {
                return true;
            } else if(t2 instanceof t.ObjectType) {
                var types = [];
                for(var prop in t2.props) {
                    types.push(t2.props[prop]);
                }
                return occursInTypeArray(t1, types);
            } else if(t2 instanceof t.BaseType) {
                return occursInTypeArray(t1, t2.types);
            }
            return false;
        };
        
        var occursInTypeArray = function(t1, types) {
            return _.map(types, function(t2) {
                return occursInType(t1, t2);
            }).indexOf(true) >= 0;
        };
        
        // ### Type analysis
        //
        // `analyse` is the core inference function. It takes an AST node and returns
        // the infered type.
        var analyse = function(node, env, nonGeneric, data, aliases) {
            if(!nonGeneric) nonGeneric = [];
        
            return node.accept({
                // #### Function definition
                //
                // Assigns a type variable to each typeless argument and return type.
                //
                // Each typeless argument also gets added to the non-generic scope
                // array. The `fresh` function can then return the existing type from
                // the scope.
                //
                // Assigns the function's type in the environment and returns it.
                //
                // We create temporary types for recursive definitions.
                visitFunction: function() {
                    var types = [];
                    var newNonGeneric = nonGeneric.slice();
        
                    var newEnv = _.clone(env);
        
                    var tempTypes = [];
                    for(var i = 0; i < node.args.length; i++) {
                        tempTypes.push(new t.Variable());
                    }
                    tempTypes.push(new t.Variable());
                    if(node.name) {
                        newEnv[node.name] = new t.FunctionType(tempTypes);
                    }
        
                    var argNames = {};
                    _.each(node.args, function(arg, i) {
                        if(argNames[arg.name]) {
                            throw new Error("Repeated function argument '" + arg.name + "'");
                        }
        
                        var argType;
                        if(arg.type) {
                            argType = nodeToType(arg.type, env, aliases);
                        } else {
                            argType = tempTypes[i];
                            newNonGeneric.push(argType);
                        }
                        newEnv[arg.name] = argType;
                        argNames[arg.name] = argType;
                        types.push(argType);
                    });
        
                    var scopeTypes = _.map(node.body, function(expression) {
                        return analyse(expression, newEnv, newNonGeneric, data, aliases);
                    });
        
                    var resultType = scopeTypes[scopeTypes.length - 1];
                    types.push(resultType);
        
                    var annotationType;
                    if(node.type) {
                        annotationType = nodeToType(node.type, env, aliases);
                        unify(resultType, annotationType);
                    }
        
                    var functionType = new t.FunctionType(types);
                    if(node.name) {
                        env[node.name] = functionType;
                    }
        
                    return functionType;
                },
                visitIfThenElse: function() {
                    var ifTrueScopeTypes = _.map(node.ifTrue, function(expression) {
                        return analyse(expression, env, nonGeneric, data, aliases);
                    });
                    var ifTrueType = ifTrueScopeTypes[ifTrueScopeTypes.length - 1];
        
                    var ifFalseScopeTypes = _.map(node.ifFalse, function(expression) {
                        return analyse(expression, env, nonGeneric, data, aliases);
                    });
                    var ifFalseType = ifFalseScopeTypes[ifFalseScopeTypes.length - 1];
        
                    unify(ifTrueType, ifFalseType);
        
                    return ifTrueType;
                },
                // #### Function call
                //
                // Ensures that all argument types `unify` with the defined function and
                // returns the function's result type.
                visitCall: function() {
                    var types = [];
        
                    _.each(node.args, function(arg) {
                        var argType = analyse(arg, env, nonGeneric, data, aliases);
                        types.push(argType);
                    });
        
                    var funType = analyse(node.func, env, nonGeneric, data, aliases);
                    if(prune(funType) instanceof t.NativeType) {
                        return new t.NativeType();
                    }
        
                    if(prune(funType) instanceof t.TagType) {
                        var mappings = {};
                        var tagType = fresh(env[node.func.value], nonGeneric, mappings);
                        var dataType = _.map(data[node.func.value], function(t) {
                            return fresh(t, nonGeneric, mappings);
                        });
        
                        _.each(dataType, function(x, i) {
                            if(!types[i]) throw new Error("Not enough arguments to " + node.func.value);
        
                            var index = tagType.types.indexOf(x);
                            if(index != -1) {
                                unify(funType.types[index], types[i]);
                            }
                            unify(x, types[i]);
                        });
        
                        return funType;
                    }
        
                    var resultType = new t.Variable();
                    types.push(resultType);
                    unify(new t.FunctionType(types), funType);
        
                    return resultType;
                },
                // #### Let binding
                //
                // Infer the value's type, assigns it in the environment and returns it.
                visitLet: function() {
                    var valueType = analyse(node.value, env, nonGeneric, data, aliases);
        
                    var annotationType;
                    if(node.type) {
                        annotationType = nodeToType(node.type, env, aliases);
                        unify(valueType, annotationType);
                    }
        
                    env[node.name] = valueType;
        
                    return valueType;
                },
                visitDo: function() {
                    // TODO: Make cleaner
                    return env[node.value.value].props['return'].types[1];
                },
                visitAccess: function() {
                    var valueType = analyse(node.value, env, nonGeneric, data, aliases);
        
                    if(prune(valueType) instanceof t.NativeType) {
                        return new t.NativeType();
                    }
        
                    if(valueType instanceof t.ObjectType) {
                        if(!valueType.props[node.property]) {
                            valueType.props[node.property] = new t.Variable();
                        }
                    } else {
                        var propObj = {};
                        propObj[node.property] = new t.Variable();
                        unify(valueType, new t.ObjectType(propObj));
                    }
        
                    return prune(valueType).getPropertyType(node.property);
                },
                visitBinaryGenericOperator: function() {
                    var leftType = analyse(node.left, env, nonGeneric, data, aliases);
                    var rightType = analyse(node.right, env, nonGeneric, data, aliases);
                    unify(leftType, rightType);
        
                    return new t.BooleanType();
                },
                visitBinaryNumberOperator: function() {
                    var resultType = new t.NumberType();
                    var leftType = analyse(node.left, env, nonGeneric, data, aliases);
                    var rightType = analyse(node.right, env, nonGeneric, data, aliases);
                    if(!(prune(leftType) instanceof t.NativeType)) {
                        unify(resultType, leftType);
                    }
                    if(!(prune(rightType) instanceof t.NativeType)) {
                        unify(resultType, rightType);
                    }
        
                    return resultType;
                },
                visitBinaryBooleanOperator: function() {
                    var resultType = new t.BooleanType();
                    var leftType = analyse(node.left, env, nonGeneric, data, aliases);
                    var rightType = analyse(node.right, env, nonGeneric, data, aliases);
                    if(!(prune(leftType) instanceof t.NativeType)) {
                        unify(resultType, leftType);
                    }
                    if(!(prune(rightType) instanceof t.NativeType)) {
                        unify(resultType, rightType);
                    }
        
                    return resultType;
                },
                visitBinaryStringOperator: function() {
                    var resultType = new t.StringType();
                    var leftType = analyse(node.left, env, nonGeneric, data, aliases);
                    var rightType = analyse(node.right, env, nonGeneric, data, aliases);
                    if(!(prune(leftType) instanceof t.NativeType)) {
                        unify(resultType, leftType);
                    }
                    if(!(prune(rightType) instanceof t.NativeType)) {
                        unify(resultType, rightType);
                    }
        
                    return resultType;
                },
                visitWith: function() {
                    var leftType = analyse(node.left, env, nonGeneric, data, aliases);
                    var rightType = analyse(node.right, env, nonGeneric, data, aliases);
                    var combinedTypes = {};
        
                    var emptyObjectType = new t.ObjectType({});
                    unify(leftType, emptyObjectType);
                    unify(rightType, emptyObjectType);
        
                    var name;
                    for(name in leftType.props) {
                        combinedTypes[name] = leftType.props[name];
                    }
                    for(name in rightType.props) {
                        combinedTypes[name] = rightType.props[name];
                    }
        
                    return new t.ObjectType(combinedTypes);
                },
                visitData: function() {
                    var nameType = new t.TagNameType(node.name);
                    var types = [nameType];
        
                    if(env[node.name]) {
                        throw new Error("Multiple declarations of type constructor: " + node.name);
                    }
        
                    var newEnv = _.clone(env);
        
                    var argNames = {};
                    _.map(node.args, function(arg) {
                        if(argNames[arg.name]) {
                            throw new Error("Repeated type variable '" + arg.name + "'");
                        }
        
                        var argType;
                        if(arg.type) {
                            argType = nodeToType(arg, newEnv, aliases);
                        } else {
                            argType = new t.Variable();
                        }
                        newEnv[arg.name] = argType;
                        argNames[arg.name] = argType;
                        types.push(argType);
                    });
        
                    var type = new t.TagType(types);
                    env[node.name] = newEnv[node.name] = type;
                    _.each(node.tags, function(tag) {
                        if(data[tag.name]) {
                            throw new Error("Multiple declarations for data constructor: " + tag.name);
                        }
        
                        data[tag.name] = [];
                        _.each(tag.vars, function(v, i) {
                            data[tag.name][i] = nodeToType(v, newEnv, aliases);
                        });
                        env[tag.name] = type;
                    });
        
                    return new t.NativeType();
                },
                visitMatch: function() {
                    var resultType = new t.Variable();
                    var value = analyse(node.value, env, nonGeneric, data, aliases);
        
                    var newEnv = _.clone(env);
        
                    _.each(node.cases, function(nodeCase) {
                        var newNonGeneric = nonGeneric.slice();
        
                        var tagType = newEnv[nodeCase.pattern.tag.value];
                        unify(value, fresh(prune(tagType), newNonGeneric));
        
                        var addVarsToEnv = function(p, lastPath) {
                            _.each(p.vars, function(v, i) {
                                var index = tagType.types.indexOf(data[p.tag.value][i]);
                                var path = lastPath.slice();
                                path.push(index);
        
                                var currentValue = value;
                                for(var x = 0; x < path.length && path[x] != -1; x++) {
                                    currentValue = prune(currentValue).types[path[x]];
                                }
        
                                v.accept({
                                    visitIdentifier: function() {
                                        if(v.value in data) {
                                            unify(currentValue, fresh(prune(newEnv[v.value]), newNonGeneric));
                                        } else {
                                            newEnv[v.value] = currentValue;
                                            newNonGeneric.push(newEnv[v.value]);
                                        }
                                    },
                                    visitPattern: function() {
                                        unify(currentValue, fresh(prune(newEnv[v.tag.value]), newNonGeneric));
        
                                        addVarsToEnv(v, path);
                                    }
                                });
                            });
                        };
                        addVarsToEnv(nodeCase.pattern, []);
        
                        var caseType = analyse(nodeCase.value, newEnv, newNonGeneric, data, aliases);
                        unify(resultType, caseType);
                    });
                    return resultType;
                },
                // Type alias
                visitType: function() {
                    aliases[node.name] = nodeToType(node.value, env, aliases);
                    aliases[node.name].aliased = node.name;
                    return new t.NativeType();
                },
                // #### Identifier
                //
                // Creates a `fresh` copy of a type if the name is found in an
                // environment, otherwise throws an error.
                visitIdentifier: function() {
                    var name = node.value;
                    if(!env[name]) {
                        return new t.NativeType();
                    }
                    return fresh(env[name], nonGeneric);
                },
                // #### Primitive type
                visitNumber: function() {
                    return new t.NumberType();
                },
                visitString: function() {
                    return new t.StringType();
                },
                visitBoolean: function() {
                    return new t.BooleanType();
                },
                visitArray: function() {
                    var valueType = new t.Variable();
                    _.each(node.values, function(v) {
                        unify(valueType, analyse(v, env, nonGeneric, data, aliases));
                    });
                    return new t.ArrayType(valueType);
                },
                visitTuple: function() {
                    var propTypes = {};
                    _.each(node.values, function(v, i) {
                        propTypes[i] = analyse(v, env, nonGeneric, data, aliases);
                    });
                    return new t.ObjectType(propTypes);
                },
                visitObject: function() {
                    var propTypes = {};
                    var prop;
                    for(prop in node.values) {
                        propTypes[prop] = analyse(node.values[prop], env, nonGeneric, data, aliases);
                    }
                    return new t.ObjectType(propTypes);
                }
            });
        };
        
        // Converts an AST node to type system type.
        var nodeToType = function(n, env, aliases) {
            return n.accept({
                visitTypeName: function(tn) {
                    if(tn.value in aliases) {
                        return aliases[tn.value];
                    }
        
                    if(!tn.args.length) {
                        switch(tn.value) {
                        case 'Number':
                            return new t.NumberType();
                        case 'String':
                            return new t.StringType();
                        case 'Boolean':
                            return new t.BooleanType();
                        }
                    }
        
                    var envType = env[tn.value];
                    if(envType) {
                        if(prune(envType) instanceof t.Variable) {
                            return envType;
                        }
        
                        if(tn.args.length != envType.types.length - 1) {
                            throw new Error("Type arg lengths differ: '" + tn.value + "' given " + tn.args.length + " but should be " + (envType.types.length - 1));
                        }
        
                        envType = fresh(prune(envType));
                        _.forEach(tn.args, function(v, k) {
                            var argType = nodeToType(v, env, aliases);
                            unify(envType.types[1 + k], argType);
                        });
                        return envType;
                    }
        
                    throw new Error("Can't convert from explicit type: " + JSON.stringify(tn));
                },
                visitTypeObject: function(to) {
                    var types = {};
                    _.forEach(to.values, function(v, k) {
                        types[k] = nodeToType(v, env, aliases);
                    });
                    return new t.ObjectType(types);
                }
            });
        };
        
        // Run inference on an array of AST nodes.
        var typecheck = function(ast, env, data, aliases) {
            var types = _.map(ast, function(node) {
                return analyse(node, env, [], data, aliases);
            });
            return types && types[0];
        };
        exports.typecheck = typecheck;
        

    };
    load["./types"] = function(exports) {
        var _ = require('underscore');
        
        // ## Type variable
        //
        // A type variable represents an parameter with an unknown type or any
        // polymorphic type. For example:
        //
        //     fun id x = x
        //
        // Here, `id` has the polymorphic type `'a -> 'a`.
        var Variable = function() {
            this.id = Variable.nextId;
            Variable.nextId++;
            this.instance = null;
        };
        Variable.nextId = 0;
        exports.Variable = Variable;
        
        var toChar = function(n) {
            return String.fromCharCode("a".charCodeAt(0) + n);
        };
        // Type variables should look like `'a`. If the variable has an instance, that
        // should be used for the string instead.
        Variable.prototype.toString = function() {
            if(!this.instance) {
                return "'" + _.map(this.id.toString(26).split(''), function(c) {
                    return toChar(parseInt(c, 26));
                }).join('');
            }
            return this.instance.toString();
        };
        
        // ## Base type
        //
        // Base type for all specific types. Using this type as the prototype allows the
        // use of `instanceof` to detect a type variable or an actual type.
        var BaseType = function() {
            this.types = [];
        };
        BaseType.prototype.map = function() {};
        BaseType.prototype.toString = function() {
            return this.name;
        };
        exports.BaseType = BaseType;
        
        // ## Specific types
        //
        // A `FunctionType` contains a `types` array. The last element represents the
        // return type. Each element before represents an argument type.
        var FunctionType = function(types) {
            this.types = types;
        };
        FunctionType.prototype = new BaseType();
        FunctionType.prototype.constructor = FunctionType;
        FunctionType.prototype.name = "Function";
        FunctionType.prototype.map = function(f) {
            return _.map(this.types, f);
        };
        FunctionType.prototype.toString = function() {
            typeString = _.map(this.types, function(type) {
                return type.toString();
            }).toString();
            return this.name + "(" + typeString + ")";
        };
        exports.FunctionType = FunctionType;
        
        var NumberType = function() {};
        NumberType.prototype = new BaseType();
        NumberType.prototype.constructor = NumberType;
        NumberType.prototype.name = "Number";
        exports.NumberType = NumberType;
        
        var StringType = function() {};
        StringType.prototype = new BaseType();
        StringType.prototype.constructor = StringType;
        StringType.prototype.name = "String";
        exports.StringType = StringType;
        
        var BooleanType = function() {};
        BooleanType.prototype = new BaseType();
        BooleanType.prototype.constructor = BooleanType;
        BooleanType.prototype.name = "Boolean";
        exports.BooleanType = BooleanType;
        
        var ArrayType = function(type) {
            this.type = type;
            this.types = [type];
        };
        ArrayType.prototype = new BaseType();
        ArrayType.prototype.constructor = ArrayType;
        ArrayType.prototype.name = "Array";
        ArrayType.prototype.map = function(f) {
            return f(this.type);
        };
        ArrayType.prototype.toString = function() {
            return '[' + this.type.toString() + ']';
        };
        exports.ArrayType = ArrayType;
        
        var ObjectType = function(props) {
            this.props = props;
        };
        ObjectType.prototype = new BaseType();
        ObjectType.prototype.constructor = ObjectType;
        ObjectType.prototype.name = "Object";
        ObjectType.prototype.map = function(f) {
            var props = this.props;
            var name;
            for(name in props) {
                props[name] = f(props[name]);
            }
            return props;
        };
        ObjectType.prototype.getPropertyType = function(prop) {
            return this.props[prop];
        };
        ObjectType.prototype.toString = function() {
            var strs = [];
            var p;
            for(p in this.props) {
                strs.push(p + ': ' + this.props[p].toString());
            }
            return '{' + strs.join(', ') + '}';
        };
        exports.ObjectType = ObjectType;
        
        var TagNameType = function(name) {
            this.name = name;
        };
        TagNameType.prototype = new BaseType();
        TagNameType.prototype.constructor = TagNameType;
        TagNameType.prototype.map = function() {
            return this.name;
        };
        exports.TagNameType = TagNameType;
        
        var TagType = function(types) {
            this.types = types;
            this.name = types[0].toString();
        };
        TagType.prototype = new BaseType();
        TagType.prototype.constructor = TagType;
        TagType.prototype.map = function(f) {
            return _.map(this.types, f);
        };
        TagType.prototype.toString = function() {
            return _.map(this.types, function(t) {
                return t.toString();
            }).join(' ');
        };
        exports.TagType = TagType;
        
        var UnitType = function() {};
        UnitType.prototype = new BaseType();
        UnitType.prototype.constructor = UnitType;
        UnitType.prototype.name = "Unit";
        exports.UnitType = UnitType;
        
        var NativeType = function() {};
        NativeType.prototype = new BaseType();
        NativeType.prototype.constructor = NativeType;
        NativeType.prototype.name = "Native";
        exports.NativeType = NativeType;
        

    };

    roy.lexer = require("./lexer");
    roy.compile = require("./compile").compile;
})();

