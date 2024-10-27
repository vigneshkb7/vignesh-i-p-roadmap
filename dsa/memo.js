function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;

    return result;
  };
}

// Example usage:
function expensiveCalculation(num) {
  console.log("Performing expensive calculation...");
  return num * num;
}

const memoizedCalc = memoize(expensiveCalculation);

console.log(memoizedCalc(5));
