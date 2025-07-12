/**
Time complexity of O(n) 
Space complexity of O(n)
**/

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = performOperation(token, operand1, operand2);
      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
}

function isOperator(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function performOperation(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return Math.trunc(operand1 / operand2);
  }
}
