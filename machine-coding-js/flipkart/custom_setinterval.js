// implementing custom set interval

function customSetInterval(callback, interval) {
  // Define an object to track if the interval is cleared
  let intervalId = { active: true };

  function execute() {
    if (!intervalId.active) return; // Stop if interval is cleared

    callback(); // Call the callback function

    // Use setTimeout to simulate the interval
    setTimeout(execute, interval);
  }

  // Start the execution loop
  setTimeout(execute, interval);

  // Return an object with a clear method to stop the interval
  return {
    clear() {
      intervalId.active = false;
    },
  };
}

// Usage example
let counter = 0;
const interval = customSetInterval(() => {
  console.log(`Interval fired: ${++counter}`);
  if (counter === 5) interval.clear(); // Stop after 5 executions
}, 1000);
