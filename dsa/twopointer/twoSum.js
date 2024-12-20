/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let result = [];

  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      result[0] = start + 1;
      result[1] = end + 1;
      break;
    } else if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    }
  }
  return result;
};
