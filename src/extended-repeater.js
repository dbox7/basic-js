const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  function createStr(add = '', length = 1, separator = '', start = '') {
    for (let i = 0; i < length; i++) {
      if (i == length - 1) {
        start += `${add}`;
      } else {
        start += `${add}${separator}`;
      }
      console.log(start)
    }
    return start;
  }
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|'
  let strPart = '';
  strPart = createStr(options?.addition, options?.additionRepeatTimes, options?.additionSeparator, str);
  str = createStr(strPart, options?.repeatTimes, options?.separator);
  console.log(str)
  return str;
}

repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })

module.exports = {
  repeater
};
