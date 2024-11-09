// The structuredClone function is a built -in way to create deep copies of objects, including those with circular references.
//     It’s available in modern JavaScript environments(browsers and Node.js 17 +).

const deepClone = (obj) => structuredClone(obj);

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

console.log(cloned); // { a: 1, b: { c: 2 } }
console.log(cloned !== original); // true
console.log(cloned.b !== original.b); // true

// Using JSON.parse and JSON.stringify

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

console.log(cloned); // { a: 1, b: { c: 2 } }
console.log(cloned !== original); // true
console.log(cloned.b !== original.b); // true

// Using Recursive Function

function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj); // Handle circular references

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

console.log(cloned); // { a: 1, b: { c: 2 } }
console.log(cloned !== original); // true
console.log(cloned.b !== original.b); // true
