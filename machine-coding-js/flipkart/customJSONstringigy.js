function customStringify(value, seen = new Set()) {
  // Handle primitive types
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  if (value === null) return "null";

  // Handle arrays
  if (Array.isArray(value)) {
    const elements = value.map((element) => customStringify(element, seen));
    return `[${elements.join(",")}]`;
  }

  // Handle objects
  if (typeof value === "object") {
    // Check for circular references
    if (seen.has(value))
      throw new TypeError("Converting circular structure to JSON");

    seen.add(value); // Add to seen set to track circular references

    const properties = Object.keys(value).map((key) => {
      const val = customStringify(value[key], seen);
      return `"${key}":${val}`;
    });

    seen.delete(value); // Remove from seen after processing

    return `{${properties.join(",")}}`;
  }

  // For unsupported types (like functions), return undefined
  return undefined;
}

// Usage example
const obj = {
  name: "Alice",
  age: 30,
  skills: ["JavaScript", "Python"],
  details: { city: "Wonderland", occupation: "Developer" },
};

console.log(customStringify(obj));
// Should output: {"name":"Alice","age":30,"skills":["JavaScript","Python"],"details":{"city":"Wonderland","occupation":"Developer"}}
