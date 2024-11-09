function curry(fn) {
  const placeholder = curry.placeholder;

  function curried(...args) {
    // Check if enough arguments have been provided (non-placeholder)
    const filledArgs = args.filter((arg) => arg !== placeholder).length;
    if (filledArgs >= fn.length) {
      // If enough arguments are provided, call the original function
      return fn.apply(this, args);
    }

    // Otherwise, return a new function that accepts more arguments
    return (...newArgs) => {
      const mergedArgs = args
        .map((arg) =>
          arg === placeholder && newArgs.length ? newArgs.shift() : arg
        )
        .concat(newArgs);
      return curried(...mergedArgs);
    };
  }

  return curried;
}

// Define a placeholder
curry.placeholder = Symbol("placeholder");

const _ = curry.placeholder;

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2, 3)); // Output: 6
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(_, 2)(1)(3)); // Output: 6
console.log(curriedAdd(1, _, 3)(2)); // Output: 6
