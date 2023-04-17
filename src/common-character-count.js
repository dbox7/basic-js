const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let str = '';
  let res = [];
  const chars = s1.split('');
  function check(char) {
    if (s2.includes(char) && !res.includes(char)) {
      res.push(char);
      sum++;
    }
  }
  for (let i = 0; i < chars.length - 1; i++) {
    check(chars[i]);
    str = chars[i];
    for (let j = i + 1; j < chars.length; j++) {
      str += chars[j]
      check(str);
    }
    str = '';
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
