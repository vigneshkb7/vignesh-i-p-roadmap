// Find the longest common prefix string amongst an array of strings.
// Input: ["interspecies","interstellar","interstate"]
// Output: "inters"
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      console.log(prefix, i);
      if (!prefix) return "";
    }
  }
  return prefix;
}

// two pointer
function longestCommonPrefixTP(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // Compare characters using two pointers
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }
    // Update prefix to the matched part
    prefix = prefix.slice(0, j);
    console.log(prefix);
    if (!prefix) return ""; // Early exit if prefix becomes empty
  }

  return prefix;
}

longestCommonPrefix(["interspecies", "interstellar", "interstate"]);
//longestCommonPrefix(["fl", "interstellar", "interstate"]);
//longestCommonPrefixTP(["interspecies", "interstellar", "interstate"]);
