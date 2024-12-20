class Node {
  constructor(value) {
    this.value = value; // Value of the node
    this.left = null; // Reference to the left child
    this.right = null; // Reference to the right child
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Initialize the tree with no root
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode; // If the tree is empty, set root to the new node
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        // Go left
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        // Go right
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        // Ignore duplicates
        return this;
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true; // Value found
      }
      if (value < current.value) {
        current = current.left; // Go left
      } else {
        current = current.right; // Go right
      }
    }
    return false; // Value not found
  }

  // In-order traversal: Left -> Root -> Right
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Pre-order traversal: Root -> Left -> Right
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // Post-order traversal: Left -> Right -> Root
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("In-order Traversal:", bst.inOrderTraversal()); // [3, 5, 7, 10, 12, 15, 18]
console.log("Pre-order Traversal:", bst.preOrderTraversal()); // [10, 5, 3, 7, 15, 12, 18]
console.log("Post-order Traversal:", bst.postOrderTraversal()); // [3, 7, 5, 12, 18, 15, 10]

console.log("Search 7:", bst.search(7)); // true
console.log("Search 20:", bst.search(20)); // false
