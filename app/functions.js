exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (str2) => str + ', ' + str2;
  },

  makeClosures: function(arr, fn) {
    return arr.map((n) => () => fn(n));
  },

  partial: function(fn, str1, str2) {
    return (punctuation) => fn(str1, str2, punctuation);
  },

  useArguments: function() {
    var args = [...arguments];
    return args.reduce((a, b) => a + b);
  },

  callIt: function(fn) {
    var args = [...arguments].slice(1);
    return fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args1 = [...arguments].slice(1);
    return function() {
      return fn(...args1, ...arguments);
    };
  },

  curryIt: function(fn) {
    return function(param1) {
      return function(param2) {
        return function(param3) {
          return fn(param1, param2, param3);
        };
      };
    };
  }
};
