/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of elements.
 *  It works by repeatedly dividing the search interval in half. The key idea is to eliminate half of the
 *  remaining elements at each step, which makes binary search significantly faster than linear search,
 * 
 * 
 * If the target equals the middle element, you have found the item and return its index.
If the target is smaller than the middle element, discard the right half and continue searching in the left half.
If the target is larger than the middle element, discard the left half and search in the right half.


 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}
