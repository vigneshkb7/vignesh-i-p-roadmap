// Debouncing in JavaScript is used to limit the rate at which a function is executed.
// It delays the function call until a certain period has passed without the function being called again,
// which is useful in scenarios
// like search inputs or resizing events to avoid excessive executions.

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear any existing timeout to reset the delay
    clearTimeout(timeoutId);

    // Set a new timeout to call the function after the specified delay
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Call the function with the right context and arguments
    }, delay);
  };
}

// Usage example
const handleResize = debounce(() => {
  console.log("Resized window!");
}, 500);

window.addEventListener("resize", handleResize);
