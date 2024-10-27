class CustomHistory {
  constructor() {
    this.history = []; // Array to store the URLs
    this.currentIndex = -1; // Track the current position in history
  }

  // Add a new URL to history and move the current index to it
  push(url) {
    // If we're not at the end, remove everything forward before adding new URL
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }
    this.history.push(url);
    this.currentIndex++;
    console.log(`Navigated to ${url}`);
  }

  // Move back in history, if possible
  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log(`Went back to ${this.history[this.currentIndex]}`);
      return this.history[this.currentIndex];
    } else {
      console.log("No previous history to go back to.");
      return null;
    }
  }

  // Move forward in history, if possible
  forward() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      console.log(`Moved forward to ${this.history[this.currentIndex]}`);
      return this.history[this.currentIndex];
    } else {
      console.log("No forward history to go to.");
      return null;
    }
  }

  // Get the current URL
  getCurrent() {
    if (this.currentIndex >= 0) {
      return this.history[this.currentIndex];
    } else {
      console.log("No current URL in history.");
      return null;
    }
  }
}

// Usage example
const browserHistory = new CustomHistory();
browserHistory.push("https://example.com");
browserHistory.push("https://google.com");
browserHistory.back(); // Should go back to example.com
browserHistory.forward(); // Should go forward to google.com
browserHistory.push("https://openai.com"); // Adds new entry and discards forward history
browserHistory.back(); // Should go back to google.com
browserHistory.getCurrent(); // Get the current URL in history
