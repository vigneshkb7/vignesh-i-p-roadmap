function deepEqual(a, b) {
  // Check if both values are strictly equal (handles primitives and identical references)
  if (a === b) return true;

  // Check if either value is null or not an object (end of recursion)
  if (a == null || typeof a !== "object" || b == null || typeof b !== "object")
    return false;

  // Handle Date objects
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();

  // Handle RegExp objects
  if (a instanceof RegExp && b instanceof RegExp)
    return a.toString() === b.toString();

  // Handle Array comparison
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Handle Object comparison
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If the number of keys is different, objects are not equal
  if (keysA.length !== keysB.length) return false;

  // Recursively compare each key-value pair
  for (let key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(b, key) ||
      !deepEqual(a[key], b[key])
    )
      return false;
  }

  return true;
}

const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [3, 5] } };

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false

// Date objects example
const date1 = new Date(2021, 1, 1);
const date2 = new Date(2021, 1, 1);
console.log(deepEqual(date1, date2)); // Output: true

// RegExp example
const reg1 = /hello/i;
const reg2 = /hello/i;
console.log(deepEqual(reg1, reg2)); // Output: true
