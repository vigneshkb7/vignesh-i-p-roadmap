function backspaceCompare(s, t) {
  function buildStack(str) {
    const stack = [];
    for (const char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack;
  }

  return buildStack(s).join("") === buildStack(t).join("");
}

// Example Usage
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false

//   Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

//   Note that after backspacing an empty text, the text will continue empty.
