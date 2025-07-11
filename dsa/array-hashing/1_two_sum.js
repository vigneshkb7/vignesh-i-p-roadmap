// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Approach 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);

// Approach 2

const twoSum = function (nums, target) {
  const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}

  for (let i = 0; i < nums.length; i++) {
    // loop through all numbers
    const n = nums[i]; // grab the current number `n`.
    if (hash[target - n] !== undefined) {
      // check if the number we need to add to `n` to reach our target has been seen:
      return [hash[target - n], i]; // grab the index of the seen number, and the index of the current number
    }
    hash[n] = i; // update our hash to include the. number we just saw along with its index.
  }
  return []; // If no numbers add up to equal the `target`, we can return an empty array
};

console.log(twoSum([1, 2, 3], 5)); // [1, 2]

/** 
  So, so far, we have met the number 1, which was at index 0. This is stored in the hashmap (ie object) as {'1': 0}. Where the key is the number and the value (0) is the index it was seen at. The purpose of the object is to store the numbers we have seen and the indexes they appear at.

Next, the loop continues to index 1, with the current number being 2. We can now ask ourselves the question: Is there a number which I have already seen in my array that I can add to my current number of 2 to get the target sum of 5. The amount needed to add to the current number to get to the target can be obtained by doing target-currentNumber. In this case, we are currently on 2, so we need to add 3 to get to our target sum of 5. Using the hashmap/object, we can check if we have already seen the number 3. To do this, we can try and access the object 3 key by doing obj[target-currentNumber]. Currently, our object only has the key of '1', so when we try and access the 3 key you'll get undefined. This means we haven't seen the number 3 yet, so, as of now, there isn't anything we can add to 2 to get our target sum.

So now our object/hashmap looks like {'1': 0, '2': 1}, as we have seen the number 1 which was at index 0, and we have seen the number 2 which was at index 1.

Finally, we reach the last number in your array which is at index 2. Index 2 of the array holds the number 3. Now again, we ask ourselves the question: Is there a number we have already seen which we can add to 3 (our current number) to get the target sum?. The number we need to add to 3 to get our target number of 5 is 2 (obtained by doing target-currentNumber). We can now check our object to see if we have already seen a number 2 in the array. To do so we can use obj[target-currentNumber] to get the value stored at the key 2, which stores the index of 1. This means that the number 2 does exist in the array, and so we can add it to 3 to reach our target. Since the value was in the object, we can now return our findings. That being the index of where the seen number occurred, and the index of the current number.

In general, the object is used to keep track of all the previously seen numbers in your array and keep a value of the index at which the number was seen at.

Here is an example of running your code. It returns [1, 2], as the numbers at indexes 1 and 2 can be added together to give the target sum of 5: */
