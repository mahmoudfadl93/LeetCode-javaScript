var rangeSumBST = function (root, low, high) {
  let totalSum = 0;

  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      totalSum += node.val;
    }
    if (low < node.val) {
      dfs(node.left);
    }
    if (high > node.val) {
      dfs(node.right);
    }
  }

  dfs(root);
  return totalSum;
};

rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10);
