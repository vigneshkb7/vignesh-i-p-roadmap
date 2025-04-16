const objIntro = {
  name: "rahul",
  city: "chennai",
};

Function.prototype.myCall = function (context, ...args) {
  console.log(...args);
  console.log(args);
  if (typeof this !== "function") {
    throw new Error(this, "invalid call");
  }

  context.func = this;

  context.func(...args);
};

function say(greeting) {
  console.log(`name is ${this.name} uhffjd ${greeting}`);
}

say.myCall(objIntro, "hello");

//apply

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("myApply can only be called on functions");
  }

  context = context || globalThis; // Use globalThis for the default context
  const uniqueFuncKey = Symbol("func"); // Use a unique key to avoid overwriting existing properties
  context[uniqueFuncKey] = this;

  let result;
  if (Array.isArray(args)) {
    result = context[uniqueFuncKey](...args); // Spread the array as arguments
  } else if (args === undefined || args === null) {
    result = context[uniqueFuncKey](); // No arguments passed
  } else {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  delete context[uniqueFuncKey]; // Clean up
  return result;
};

// Example usage
const objIntro = {
  name: "rahul",
  city: "chennai",
};

function say(greeting, punctuation) {
  console.log(`name is ${this.name} ${greeting}${punctuation}`);
}

say.myApply(objIntro, ["hello", "!"]); // Output: name is rahul hello!
