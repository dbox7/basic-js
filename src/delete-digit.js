const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  n = n.toString()
        .split('')
        .forEach((item, idx, arr) => {
          let tmp = arr.splice(idx, 1);
          let res = Number(arr.join(''));
          max = res > max ? res : max;
          arr.splice(idx, 0, tmp[0]);
        });
  return max;
};

module.exports = {
  deleteDigit
};
