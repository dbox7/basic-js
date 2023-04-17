const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(Date) {
  if (typeof Date == 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (typeof Date.getMonth !== 'function') {
    throw new Error('Invalid date!');
  } else {
    if (typeof Date.getMonth === 'function') { 
      return Date.getMonth() > 1 && Date.getMonth() < 5 ? 'spring'
        : Date.getMonth() > 4 && Date.getMonth() < 8 ? 'summer'
          : Date.getMonth() > 7 && Date.getMonth() < 11 ? 'autumn'
            : 'winter';} else {
              throw new Error('Invalid date!');
              }
          };
}

module.exports = {
  getSeason
};
