/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencyMap = new Map();

  nums.forEach((num) =>
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  );

  const sortedArr = Array.from(frequencyMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  return sortedArr.slice(0, k).map((item) => item[0]);
};

/**
 * Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
 */
