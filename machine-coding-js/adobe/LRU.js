class LRUCache {
  constructor(capacity) {
    this.cache = new Map(); // maintains insertion order
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // Reinsert key to mark as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key); // remove old
    } else if (this.cache.size >= this.capacity) {
      // Delete least recently used (first inserted)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value); // insert as most recent
  }
}
