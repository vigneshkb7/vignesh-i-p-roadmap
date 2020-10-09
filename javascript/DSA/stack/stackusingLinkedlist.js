class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  insertElement(n) {
    var node = new Node(n);
    var currentHeadNode = this.head;
    this.head = node;
    this.head.next = currentHeadNode;
  }

  deleteElement() {
    if (!this.head) {
      throw new Error("Head is empty");
    } else {
      let temp = this.head;
      this.head = null;
      this.head = temp.next;
    }
  }

  printStack() {
    var curr = this.head;
    var str = "";
    while (curr) {
      console.log(curr.value);
      str += curr.value + " ";
      curr = curr.next;
    }
  }
}

stack = new Stack();

stack.insertElement(1);
stack.insertElement(2);
stack.insertElement(3);

stack.deleteElement();

//console.log(stack.head);

stack.printStack();
