exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    const arr = str.split("");
    let count = {};
    let result = [];
    let lastLetter = "startLetter";

    for (let i = 0; i < arr.length; i++) {
      let currentLetter = arr[i];
      if (lastLetter !== currentLetter) {
        count[lastLetter] = 0;
      }
      if (count[currentLetter] && count[currentLetter] < amount) {
        result.push(currentLetter);
        count[currentLetter] += 1;
      } else if (count[currentLetter] && count[currentLetter] >= amount) {
        continue;
      } else {
        result.push(currentLetter);
        count[currentLetter] = 1;
        lastLetter = currentLetter;
      }
    }
    return result.join("");
  },

  wordWrap: function (str, cols) {
    const arr = str.split(" ");
    let tempStr = ""; //abc
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const currentStr = arr[i];

      if (currentStr.length >= cols && !tempStr) {
        result.push(currentStr + "\n");
      }
      if (currentStr.length < cols && tempStr) {
        let currentTemp = tempStr + " " + currentStr;

        if (currentTemp.length > cols) {
          result.push(tempStr + "\n");

          tempStr = "";
          if (i === arr.length - 1) {
            result.push(currentStr);
            tempStr = "";
          } else {
            tempStr = currentStr;
          }
        } else {
          tempStr += ` ${currentStr}`;
        }
      }
      if (currentStr.length < cols && !tempStr) {
        tempStr += currentStr;
      }
    }

    return result.join("");
  },

  reverseString: function (str) {
    return str.split("").reverse().join("");
  },
};
