const reverseString = function (words) {
  let revesedWord = "";
  for (let i = words.length - 1; i >= 0; i--) {
    revesedWord += words[i]
  }
  return revesedWord
};

// Do not edit below this line
module.exports = reverseString;
