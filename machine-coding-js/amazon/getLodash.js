function get(obj, path, defaultValue = undefined) {
  // Convert the path to an array if it's a string, using dot notation and bracket notation
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, ".$1").split(".");

  // Traverse the object based on the path array
  return (
    pathArray.reduce((acc, key) => {
      if (acc && acc.hasOwnProperty(key)) {
        return acc[key];
      }
      return undefined; // Return undefined if the property doesn't exist
    }, obj) ?? defaultValue
  ); // Use default value if result is undefined
}

const obj = { a: { b: { c: 42 } }, d: [10, 20, 30] };

console.log(get(obj, "a.b.c")); // Output: 42
console.log(get(obj, "a.b.d", "Not Found")); // Output: "Not Found"
console.log(get(obj, "d[1]")); // Output: 20
console.log(get(obj, ["d", 2])); // Output: 30
console.log(get(obj, "d[5]", "Default")); // Output: "Default"
