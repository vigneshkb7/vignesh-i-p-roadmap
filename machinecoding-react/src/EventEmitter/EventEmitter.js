// eventEmitter.js

const listeners = new Map();

export function on(eventName, callback) {
  if (!listeners.has(eventName)) {
    listeners.set(eventName, new Set());
  }
  listeners.get(eventName).add(callback);
}

export function off(eventName, callback) {
  if (listeners.has(eventName)) {
    listeners.get(eventName).delete(callback);
    if (listeners.get(eventName).size === 0) {
      listeners.delete(eventName);
    }
  }
}

export function emit(eventName, payload) {
  if (listeners.has(eventName)) {
    for (const cb of listeners.get(eventName)) {
      try {
        cb(payload);
      } catch (err) {
        console.error(`Error in listener for ${eventName}:`, err);
      }
    }
  }
}
