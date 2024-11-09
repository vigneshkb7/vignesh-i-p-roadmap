// Cache object to store results for identical API calls
const apiCache = new Map();

function fetchWithCache(url, options = {}) {
  // Generate a unique cache key using URL and options
  const cacheKey = JSON.stringify({ url, ...options });

  // Check if we already have a cached response for this request
  if (apiCache.has(cacheKey)) {
    console.log("Returning cached response for:", url);
    return Promise.resolve(apiCache.get(cacheKey));
  }

  // Make the API call if there is no cached response
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      // Cache the response data
      apiCache.set(cacheKey, data);
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Re-throw error after logging it
    });
}
