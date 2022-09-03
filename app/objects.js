exports = typeof window === "undefined" ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    var result = [];
    var x = Object.entries(obj);
    for (let [key, value] of x) {
      result.push(`${key}: ${value}`);
    }
    return result;
  },
};
