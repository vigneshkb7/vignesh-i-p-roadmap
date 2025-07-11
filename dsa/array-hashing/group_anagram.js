var groupAnagrams = function (strs) {
  let ans = {};

  for (let s of strs) {
    let key = s.split("").sort().join("");
    if (!ans[key]) {
      ans[key] = [];
    }
    ans[key].push(s);
  }

  return Object.values(ans);
};

/**
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * "eat"   →   "aet"
"tea"   →   "aet"
"tan"   →   "ant"
"ate"   →   "aet"
"nat"   →   "ant"
"bat"   →   "abt"

"aet": ["eat", "tea", "ate"] 
"ant": ["tan", "nat"]
"bat": ["abt"]
 */
