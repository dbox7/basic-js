const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sum = 0;
  let res = JSON.parse(JSON.stringify(matrix))
  function common(signI, signJ, i, j) {
    matrix[i + signI][j] ? sum++ : 0;
    matrix[i][j + signJ] ? sum++ : 0;
    matrix[i + signI][j + signJ] ? sum++ : 0;
    return sum;
  } 

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i - 1 < 0 && j - 1 < 0) {
        sum = common(1, 1, i, j);
      } else if (i + 1 > matrix.length - 1 && j + 1 > matrix.length - 1) {
        sum = common(-1, -1, i, j);
      } else if (i - 1 < 0 && j + 1 > matrix.length - 1) {
        sum = common(1, -1, i, j);
      } else if (i + 1 > matrix.length - 1 && j - 1 < 0) {
        sum = common(-1, 1, i, j);
      } else if (i - 1 < 0) {
        matrix[i][j - 1] ? sum++ : 0;
        matrix[i + 1][j - 1] ? sum++ : 0;
        sum = common(1, 1, i, j);
      } else if (j - 1 < 0) {
        matrix[i - 1][j] ? sum++ : 0;
        matrix[i - 1][j + 1] ? sum++ : 0;
        sum = common(1, 1, i, j);
      } else if (i + 1 > matrix.length - 1) {
        matrix[i][j + 1] ? sum++ : 0;
        matrix[i - 1][j + 1] ? sum++ : 0;
        sum = common(-1, -1, i, j);
      } else if (j + 1 > matrix.length - 1) {
        matrix[i + 1][j] ? sum++ : 0;
        matrix[i + 1][j - 1] ? sum++ : 0;
        sum = common(-1, -1, i, j);
      } 
      if ((i - 1 >= 0) && (j - 1 >= 0) && (i + 1 <= matrix.length - 1) && (j + 1 <= matrix.length - 1)) {
        common(1, 1, i, j);
        common(-1, -1, i, j);
        matrix[i + 1][j - 1] ? sum++ : 0;
        matrix[i - 1][j + 1] ? sum++ : 0;
      }
      res[i][j] = sum;
      sum = 0;
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
