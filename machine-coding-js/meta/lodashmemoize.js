function memoize(fn) {
  // Cache object to store results for each set of arguments
  const cache = new Map();

  return function (...args) {
    // Create a cache key by serializing arguments
    const cacheKey = JSON.stringify(args);

    // Check if the result is already cached
    if (cache.has(cacheKey)) {
      console.log("Returning cached result for arguments:", args);
      return cache.get(cacheKey);
    }

    // If not cached, call the function and cache the result
    const result = fn(...args);
    cache.set(cacheKey, result);
    return result;
  };
}

function memo(fn) {
  console.log(fn);
  return function (...args) {
    console.log(args);
  };
}

const d = () => {
  return 1 + 2;
};

memo(d)("vignesh", "hai");
