/**
 * @param {string[]} words
 * @return {string}
 * 
 * 
 * 
 * Example 1:

Input: words = ["adc","wzy","abc"]
Output: "abc"
Explanation: 
- The difference integer array of "adc" is [3 - 0, 2 - 3] = [3, -1].
- The difference integer array of "wzy" is [25 - 22, 24 - 25]= [3, -1].
- The difference integer array of "abc" is [1 - 0, 2 - 1] = [1, 1]. 
The odd array out is [1, 1], so we return the corresponding string, "abc".
Example 2:

Input: words = ["aaa","bob","ccc","ddd"]
Output: "bob"
Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].
 */
var oddString = function (words) {
  let hash = {};
  for (let i = 0; i < words.length; i++) {
    let diff = "";
    for (let j = 0; j < words[i].length - 1; j++) {
      diff =
        diff +
        "." +
        String(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j));
    }
    if (hash[diff]) hash[diff].push(i);
    else hash[diff] = [i];
  }
  for (const [key, value] of Object.entries(hash)) {
    if (value.length === 1) return words[value[0]];
  }
};
