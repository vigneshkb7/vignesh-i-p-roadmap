/**
 * Deque or double ended queue is a type of queue in which insertion and removal of elements can be
 * performed from either from the front rear of the queue.
 */

class Deque {
  constructor() {
    this.queue = [];
  }

  insertFront(x) {
    if (this.queue.length == 0) {
      this.queue.push(x);
    } else {
      this.queue.unshift(x);
    }
  }

  deleteFront() {
    this.queue.shift();
  }

  insertRear(x) {
    this.queue.push(x);
  }

  deleteRear() {
    this.queue.pop();
  }

  print() {
    console.log(this.queue);
  }
}

var d = new Deque();

d.insertFront(1);
d.insertFront(2);
d.insertRear(3);
d.print();
