// An EventEmitter is a pattern in JavaScript that allows an object to emit events and other objects to listen for
// those events.This is commonly used in frameworks and libraries to handle asynchronous or decoupled
// communication between different parts of an application.

class EventEmitter {
  constructor() {
    this.events = {}; // Stores events and their listeners
  }

  // Register a listener for a specific event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []; // Initialize the event array if not present
    }
    this.events[event].push(listener); // Add the listener to the event
  }

  // Remove a specific listener for an event
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Register a one-time listener for an event
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper); // Remove listener after it is called once
    };
    this.on(event, wrapper); // Register the wrapped listener
  }

  // Emit an event, calling all listeners attached to that event
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => listener(...args));
  }
}

const emitter = new EventEmitter();

function responseToEvent(data) {
  console.log(`Event received with data: ${data}`);
}

// Listen to an event
emitter.on("eventName", responseToEvent);

// Emit the event
emitter.emit("eventName", "Hello, World!"); // Logs: Event received with data: Hello, World!

// Remove the listener
emitter.off("eventName", responseToEvent);

// Emit again (no listener should be called)
emitter.emit("eventName", "Hello again!"); // No output

// One-time listener
emitter.once("onceEvent", (data) => console.log(`Once event: ${data}`));
emitter.emit("onceEvent", "This will appear once"); // Logs: Once event: This will appear once
emitter.emit("onceEvent", "This will not appear"); // No output
