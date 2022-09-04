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

  permute: function (arr) {
    const result = [];
    function startPermute(arr, start, end) {
      if (start === end) {
        result[result.length] = [...arr];
        return;
      }
      for (let i = start; i < end; i++) {
        let temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        startPermute(arr, start + 1, end);
        temp = arr[i];
        arr[i] = arr[start];
        arr[start] = temp;
      }
    }
    startPermute(arr, 0, arr.length);
    return result;
  },

  fibonacci: function (n) {
    if (n === 1 || n === 0) {
      return n;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function (n) {
    let result = [];
    function createBrackets(open, close, str) {
      if (str.length === n * 2) {
        result[result.length] = str;
        return;
      }
      if (open < n) {
        createBrackets(open + 1, close, `${str}(`);
      }
      if (close < open) {
        createBrackets(open, close + 1, `${str})`);
      }
    }
    createBrackets(0, 0, "");
    return result;
  },
};
