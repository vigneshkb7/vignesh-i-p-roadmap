var productExceptSelf = function (nums) {
  let n = nums.length;
  let ans = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        ans[i] *= nums[j];
      }
    }
  }
  return ans;
};

//Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
