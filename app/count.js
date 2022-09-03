exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout;

    function counter() {
      if (start <= end) {
        console.log(start);
        timeout = setTimeout(counter, 100);
        start += 1;
      }
    }

    counter();

    return {
      cancel: function () {
        clearTimeout(timeout);
      },
    };
  },
};
