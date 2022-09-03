exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    let result = [];

    function recursionData(data) {
      return data.files.forEach((el) => {
        if (el.files) {
          recursionData(el);
        } else {
          if (dirName) {
            const extension = el.split(".");

            if (extension[1] === dirName) {
              result.push(el);
            }
          } else {
            result.push(el);
          }
        }
      });
    }

    recursionData(data);

    return result;
  },

  permute: function (arr) {},

  fibonacci: function (n) {
    if (n === 1 || n === 0) {
      return n;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function (n) {},
};
