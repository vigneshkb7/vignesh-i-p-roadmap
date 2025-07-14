// Given an array height[] representing the elevation map, compute how much water it can trap after raining.

// 🧠 Intuition:
// At each position, the water trapped =
// min(max_left, max_right) - height[i]

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }

  return water;
};
