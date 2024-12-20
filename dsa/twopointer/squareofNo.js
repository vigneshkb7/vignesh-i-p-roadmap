var sortedSquares = function (nums) {
  let square = nums.map((a) => Math.pow(a, 2));
  return square.sort((a, b) => a - b);
};

// using two pointer
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let result = new Array(n);
  let left = 0,
    right = n - 1,
    index = n - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }
  return result;
};
