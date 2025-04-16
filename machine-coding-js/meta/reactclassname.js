function classNames(...args) {
  console.log(args);
  let classes = [];

  for (let arg of args) {
    if (!arg) continue;

    // If argument is a string, add it as a class name
    if (typeof arg === "string") {
      classes.push(arg);
    }
    // If argument is an array, recursively call classNames on each item and flatten
    else if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
    }
    // If argument is an object, add keys as class names if their values are truthy
    else if (typeof arg === "object") {
      for (let key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  // Join all class names with a space and return as a single string
  return classes.join(" ");
}

const btnClass = classNames(
  "btn", // String
  { "btn-primary": true, "btn-disabled": false }, // Object
  ["rounded", "shadow"], // Array
  ["bg-blue", { "bg-green": false, "bg-red": true }] // Nested Array with an Object
);

console.log(btnClass); // Output: "btn btn-primary rounded shadow bg-blue bg-red"
