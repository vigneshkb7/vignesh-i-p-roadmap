// serialization of binary tree

var serialize = function (root) {
  const serilaizedNodes = [];
  function serializerHelper(node) {
    if (!node) {
      serilaizedNodes.push("#");
      return;
    }
    serilaizedNodes.push(node.val);
    serializerHelper(node.left);
    serializerHelper(node.right);
  }

  serializerHelper(root);

  return serilaizedNodes.join(",");
};

var deserialize = function (data) {
  const nodes = data.split(",");

  let index = 0;
  function deserializerHelper(node) {
    if (nodes[index] === "#") {
      index++;
      return null;
    }

    const node = new TreeNode(parseInt(nodes[index]));
    index++;
    node.left = deserializerHelper();
    node.right = deserializerHelper();
    return node;
  }

  return deserializerHelper();
};
