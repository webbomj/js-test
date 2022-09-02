exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((acc, el) => {
      return acc + el;
    }, 0);
  },

  remove: function (arr, item) {
    return arr.filter((el) => el !== item);
  },

  removeWithoutCopy: function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    console.log(arr);
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function (arr, item, index) {
    const newArr = [...arr.slice(0, index), item, ...arr.slice(index)];
    return newArr;
  },

  count: function (arr, item) {
    let count = 0;
    arr.forEach((el) => {
      if (el === item) {
        count += 1;
      }
    });
    return count;
  },

  duplicates: function (arr) {
    const result = [];

    arr.forEach((el, i, array) => {
      if (
        array.filter((elem) => elem === el).length > 1 &&
        !result.includes(el)
      ) {
        result.push(el);
      }
    });

    return result;
  },

  square: function (arr) {
    return arr.map((el) => el * el);
  },

  findAllOccurrences: function (arr, target) {
    let result = [];

    arr.forEach((el, i) => {
      if (el === target) {
        result.push(i);
      }
    });

    return result;
  },
};
