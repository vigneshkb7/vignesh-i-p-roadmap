// min stack

// operation

// push , pop , top, slice, getMin

//. steps to design

// have a stack variable to store the values that are inserted! [10,11,9]
// have a track variable to track the the min variable on every push so that every push will update the min stack

// [{10,10},{11,10},{9,9}]
// { `stackvalue`, `minvalueinstack`}

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = {};
  }

  push(a) {
    this.minStack[a] = Math.min(a, this.top());
    this.stack.push(a);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    const topValue = this.top();
    return this.minStack[topValue];
  }
}

const minstack = new MinStack();

minstack.push(10);
minstack.push(9);
minstack.push(11);
console.log(minstack.minStack);
console.log(minstack.top());

console.log(minstack.getMin());
