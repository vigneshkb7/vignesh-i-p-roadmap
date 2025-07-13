class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at beginning
  insertAtBeginning(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at end
  insertAtEnd(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Check for cycle
  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }

  // Find middle node
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // Print list
  printList() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
}

// Example usage:
// const ll = new LinkedList();
// ll.insertAtBeginning(3);
// ll.insertAtEnd(5);
// ll.printList();
// console.log(ll.hasCycle());
// console.log(ll.findMiddle());
