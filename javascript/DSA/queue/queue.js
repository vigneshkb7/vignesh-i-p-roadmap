class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(x) {
    if (this.queue.length == 0) {
      this.queue.push(x);
    } else {
      this.queue.unshift(x);
    }
  }

  dequeue() {
    this.queue.pop();
  }

  print() {
    return this.queue;
  }
}

var que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(9);

que.dequeue();
console.log(que.print());
