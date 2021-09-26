var isSymmetric = function (root) {
  let res = true;

  function helper(node1, node2) {
    if (!node1 && !node2) {
      return;
    }
    if (!node1 || !node2 || (node1.val !== node2.val)) {
      res = false;
      console.log("🚀 ~ file: index.js ~ line 10 ~ helper ~ res", res)
      return;
    }
    helper(node1.left, node2.right);
    helper(node1.right, node2.left);
  }

  helper(root, root);

  return res;
};

module.exports = isSymmetric;
