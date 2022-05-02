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
  let splitArr = String(n).split('');
  let result = [];
  for(let i = 0; i < splitArr.length; i++) {
    splitArr.splice(i, 1);
    result.push(splitArr.join(''));
    splitArr = String(n).split('');
  }
  return Math.max.apply(null, result);
}

module.exports = {
  deleteDigit
};
