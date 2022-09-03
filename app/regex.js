exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    return /\d/gm.test(str);
  },

  containsRepeatingLetter: function (str) {
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel: function (str) {
    return /[aeiou]$/gim.test(str);
  },

  captureThreeNumbers: function (str) {
    console.log(str.match(/\d{3}/im));
    return str.match(/\d{3}/gim) ? str.match(/\d{3}/gim)[0] : false;
  },

  matchesPattern: function (str) {
    return /^\d{3}-\d{3}-\d{4}$/gim.test(str);
  },

  isUSD: function (str) {
    return /^\$(\d{1,3}){1}(\,)*(\d{3}\,)*(\d{3})*(\.\d{2})?$/gim.test(str);
  },
};
