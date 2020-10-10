/**
 * circular queue is similar to circular linked list in which the last element always points to the first element
 *  Main advantage of circular queue is better memory utilization
 */

/**
  * two pointer FRONT and REAR to -1
  *  FRONT track first element
  *  REAR track last element of the queue
  * /

  /**
  *  insertion -> check queue is full if not set front rear to 0 
  *  increment rear by one
  *  add new elemnet in the position to by rear
  */

/**
 *  deletion
 *  check queue is empty
 *  return the element pointed by front and index by 1
 *  for last element reset the value to -1
 *
 */

class CircularQueue {
  constructor(x) {
    this.front = -1;
    this.rear = -1;
    this.size = 7;
    this.queue = Array(7).fill(null);
  }

  enqueue(x) {
    if ((this.rear + 1) % this.size === this.front) {
      throw new Error("Queue is full");
    } else if (this.front == -1 && this.rear == -1) {
      this.rear = 0;
      this.front = 0;
      this.queue[this.rear] = x;
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = x;
    }
  }

  dequeue() {
    var temp;
    if (this.front == -1) {
      throw new Error("Queue is Empty");
    } else if (this.front == this.rear) {
      temp = this.queue[this.front];
      this.front = -1;
      this.rear = -1;
      return temp;
    } else {
      temp = this.queue[this.front];
      this.front = (this.front + 1) % this.size;
      return temp;
    }
  }

  print() {
    console.log(this.queue);
  }
}

var c = new CircularQueue(7);
c.enqueue(8);
c.enqueue(9);
c.enqueue(3);
c.enqueue(6);
c.enqueue(9);
c.enqueue(3);
c.enqueue(1);

c.print();
