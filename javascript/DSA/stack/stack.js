class Stack {
  constructor() {
    this.stack = [];
  }

  pushElement(x) {
    this.stack.push(x);
  }

  popElement(x) {
    this.stack.pop(x);
  }

  stackLength() {
    return this.stack.length;
  }

  printStack() {
    return this.stack;
  }
}

var s1 = new Stack();

s1.pushElement(1);
s1.pushElement(2);
let s = s1.printStack();
console.log(s);
console.log(s1.stackLength());
