// implement stack using array

class Stack {
  constructor() {
    this.stack = [];
  }

  insert(x) {
    this.stack.push(x);
    console.log(this.stack);
  }

  delete() {
    this.stack.pop();
    console.log(this.stack);
  }
}

const s = new Stack();

s.insert(9);
s.insert(4);
s.delete();
s.insert(6);
s.delete();
