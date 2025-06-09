class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// traverse the tree at each level

function levelOrder(root) {
  if (!root) {
    return [];
  }

  const result = [];

  const queue = [root];

  while (queue.length > 0) {
    const level = [];

    const levelsize = queue.length;
    for (let i = 0; i < levelsize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
