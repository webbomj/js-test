exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const numArray = num.toString(2).split("");
    return Number(numArray[numArray.length - bit]);
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    let bin = num.toString(2);
    if (bin.length < 8) {
      bin = bin.padStart(8, "0");
    }
    return bin;
  },

  multiply: function (a, b) {
    const firstArg = a * 1_000;
    const secondArg = b * 1_000;

    return (firstArg * secondArg) / 1_000_000;
  },
};
