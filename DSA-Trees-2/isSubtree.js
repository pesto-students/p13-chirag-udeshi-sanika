class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root) return false;

  if (root && !subRoot) return false;

  if (root.value == subRoot.value)
    return (
      isSubtree(root.left, subRoot.left) && isSubtree(root.right, subRoot.right)
    );
  else return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(5);
//root.left.right.left = new TreeNode(0);

let subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);

console.log(isSubtree(root, subRoot));
