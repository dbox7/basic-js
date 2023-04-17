const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  while (str.length != 0) {
    function concat(char) {
      if (str.includes(substr + char)) {
        substr += char;
        concat(char);
      } else {
        return (substr);
      } 
    }
    let substr = '';
    concat(str[0]);
    res += substr.length != 1 ? `${substr.length}${str[0]}` : `${str[0]}`;
    str = str.replace(substr, ``);
  }
  return(res);
}

module.exports = {
  encodeLine
};
