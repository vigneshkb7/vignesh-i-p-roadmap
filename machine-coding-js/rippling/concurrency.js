//How to implement an Asynchronous Task Runner with Concurrency Control? Rippling Frontend Interview Question

class TaskRunner {
  constructor(concurrencyLimit) {
    this.concurrencyLimit = concurrencyLimit;
    this.currentlyRunning = 0;
    this.queue = [];
  }

  async push(task) {
    if (this.currentlyRunning < this.concurrencyLimit) {
      await execute(task);
    }
  }

  async execute(task) {
    try {
      this.currentlyRunning += 1;
      await task();
    } finally {
      this.currentlyRunning -= 1;
      if (this.currentlyRunning < this.concurrencyLimit) {
        const nextTask = this.queue.shift();
        await this.execute(nextTask);
      }
    }
  }
}
