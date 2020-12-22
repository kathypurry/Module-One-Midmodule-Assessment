/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  return "number" === typeof val
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if(val) {
    return true;
  } 
    else return false;
}
//I was trying really hard to figure out how to use a logical operator
//for this but it seemed easiest with an 'if' statement

module.exports = {
  isNumber,
  isTruthy
}
