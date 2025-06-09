function groupAnagram(strs) {
  const anagram = {};
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!anagram[sortedStr]) {
      anagram[sortedStr] = [];
    }
    anagram[sortedStr].push(str);
  }
  return Object.values(anagram);
  ("");
}
