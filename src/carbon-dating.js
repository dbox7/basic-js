const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const ModernActivity = 15;
  const HalfLifePeriod = 5730;

  if (typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity <= ModernActivity) {
    let k = 0.693 / HalfLifePeriod;
    let time = Math.log(ModernActivity / sampleActivity) / k;
    return Math.ceil(time);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
