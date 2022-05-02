const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '@') {
      arr.splice(0, i + 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '@') {
      arr.splice(0, i + 1);
    }
  }
  return arr.join('');
}

module.exports = {
  getEmailDomain
};
