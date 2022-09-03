exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise((res, rej) => {
      res(value);
    });
  },

  manipulateRemoteData: function (url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let result = [];
        data.people.forEach((el) => {
          result.push(el["name"]);
        });
        return result.sort();
      });
  },
};
