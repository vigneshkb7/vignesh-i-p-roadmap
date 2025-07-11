var isValid = function (s) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === maps[i]) {
      stack.pop();
    } else return false;
  }

  return stack.length ? false : true;
};
