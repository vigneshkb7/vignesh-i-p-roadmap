function dailyTemperatures(temperatures) {
  const n = temperatures.length; // Get the length of the temperatures array
  const stack = []; // Create a stack to store indices of temperatures
  const result = new Array(n).fill(0); // Initialize the result array with 0s

  for (let i = 0; i < n; i++) {
    console.log(i);
    // Iterate through each temperature in the array
    console.log(
      "----",
      stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]
    );
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      console.log(i);
      // While there are elements in the stack and the current temperature is warmer than the temperature at the top of the stack
      const topIndex = stack.pop(); // Pop the top index from the stack
      result[topIndex] = i - topIndex; // Calculate the difference in indices and store it in the result array
    }
    stack.push(i); // Push the current index onto the stack
  }
  console.log(result);
  return result; // Return the result array containing the number of days until the next warmer temperature for each day
}

//
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
