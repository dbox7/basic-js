const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(a) {
  try {
    if (!Array.isArray(a)) {
      throw new Error('\'arr\' parameter must be an instance of the Array!')
    };
    let arr = a.slice();
    arr.forEach((item, index) => {
      if (typeof item == 'string') {
        switch(item) {
          case '--discard-next': 
            arr.splice(index, 2);
            break;
          case `--discard-prev`:
            if (index != 0 && arr[index - 1]) {
              arr.splice(index - 1, 2);
            } else {
              arr.splice(index, 1);
            }
            break;
          case `--double-next`:
            if (index != 0 && arr[index + 1]) {
              arr[index] = arr[index + 1];
            } else {
              arr.splice(index, 1);
            }
            break;
          case `--double-prev`:
            if (index != 0 && arr[index - 1]) {
              arr[index] = arr[index - 1];
            } else {
              arr.splice(index, 1);
            }
        };
        sum++;
      };
    });
    console.log(arr);
    return arr;
  } catch(e) {
    console.log(e.message);
  }
}

transform(['--discard-prev', 1, 2, 3]);
transform(['--double-prev', 1, 2, 3]);
transform([1, 2, 3, '--double-next']);
transform([1, 2, 3, '--discard-next']);

module.exports = {
  transform
};
