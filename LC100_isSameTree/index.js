function isSameTree(p, q) {
  let sameTree = true;

  function checkSamNode(p, q) {
    if (!p && !q) {
      return;
    } else if (!p || !q) {
      sameTree = false;
      return;
    } else if (p.val !== q.val) {
      sameTree = false;
      return;
    }

    checkSamNode(p.left, q.left);
    checkSamNode(p.right, q.right);
  }
  checkSamNode(p, q);

  return sameTree;
}

module.exports = isSameTree;
