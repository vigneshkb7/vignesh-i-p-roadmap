// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

function backspaceCompare(s, t) {
  function getNextValidCharIndex(str, index) {
    let backspaceCount = 0;
    while (index >= 0) {
      if (str[index] === "#") {
        backspaceCount++;
      } else if (backspaceCount > 0) {
        backspaceCount--;
      } else {
        break;
      }
      index--;
    }
    return index;
  }

  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = getNextValidCharIndex(s, i);
    j = getNextValidCharIndex(t, j);

    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false; // Characters do not match
    }

    if (i >= 0 !== j >= 0) {
      return false; // One string is exhausted before the other
    }
    console.log("----i", i, "-----j", j);
    i--;
    j--;
  }

  return true;
}

// Example Usage
console.log(backspaceCompare("ab#c", "ad#c")); // true
// console.log(backspaceCompare("ab##", "c#d#")); // true
// console.log(backspaceCompare("a#c", "b")); // false
