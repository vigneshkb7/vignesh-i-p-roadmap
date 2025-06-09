// sliding window
// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  const seen = Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
