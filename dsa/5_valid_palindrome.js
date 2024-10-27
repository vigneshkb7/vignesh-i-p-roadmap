/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === "" || s === " ") return true;
  let res = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (res === res.split("").reverse().join("")) {
    return true;
  }
  return false;
};

/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
