exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function (str) {
    return (str2) => {
      return `${str}, ${str2}`;
    };
  },

  makeClosures: function (arr, fn) {
    return arr.map((el) => {
      return fn.bind(null, el);
    });
  },

  partial: function (fn, str1, str2) {
    const result = (a) => fn.call(null, str1, str2, a);
    return result;
  },

  useArguments: function () {
    const arg = Array.from(arguments);
    return arg.reduce((acc, el) => acc + el, 0);
  },

  callIt: function (fn) {
    const arg = Array.from(arguments);
    arg.shift();
    return fn.apply(null, arg);
  },

  partialUsingArguments: function (fn) {
    const arg = [];

    if (arguments.length !== 1) {
      const argOuter = Array.from(arguments);
      argOuter.forEach((el) => arg.push(el));
      arg.shift();
    }

    return function () {
      const argInner = Array.from(arguments);
      argInner.forEach((el) => arg.push(el));
      return fn.apply(null, arg);
    };
  },

  curryIt: function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return fn.call(null, a, b, c);
        };
      };
    };
  },
};
