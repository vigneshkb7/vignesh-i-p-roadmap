Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  // If no initialValue is provided, use the first element as the initial value
  if (accumulator === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const arr = [1, 2, 3, 4];

// Using custom reduce to sum values
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

// Using custom reduce without an initial value
const product = arr.myReduce((acc, curr) => acc * curr);
console.log(product); // Output: 24
