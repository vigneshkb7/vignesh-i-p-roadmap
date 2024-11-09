Function.prototype.customBind = function (context, ...boundArgs) {
  // Save the original function
  const originalFunction = this;

  return function (...args) {
    // Combine bound arguments with new arguments
    const allArgs = [...boundArgs, ...args];

    // Call original function with the specified context and combined arguments
    return originalFunction.apply(context, allArgs);
  };
};
