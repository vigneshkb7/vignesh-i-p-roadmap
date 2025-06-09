// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// DFS approach
function maxDepthRecursive(root) {
  if (!root) {
    // base condition
    return 0;
  }

  const left = maxDepthRecursive(root.left);
  const right = maxDepthRecursive(root.right);

  return Math.max(left, right) + 1;
}

// BFS approach or level order traversal

/**
 *
 * 1. initialize the queue with root node
 * 2. while loops continues as long as nodes are in queue in each iteration
 * 3. for loop will looop at each level so it deques the node and enqueue the child nodes
 * 4. incrementing depth at each level of the tree
 */

function maxDepthIterative(root) {
  if (!root) return 0;

  let queue = root;
  let depth = 0;

  while (queue.length > 0) {
    const levesize = queue.length;

    for (let i = 0; i < levesize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth++;
}
