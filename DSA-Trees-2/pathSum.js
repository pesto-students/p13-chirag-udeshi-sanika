class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let pathSum = function (root, target) {
  if (!root) return false;

  if (target == root.value && root.left == null && root.right == null)
    return true;

  return (
    pathSum(root.left, target - root.value) ||
    pathSum(root.right, target - root.value)
  );
};
/*   let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(5);
  root.left.right = new TreeNode(6);
  root.left.right.right = new TreeNode(10);
  root.right.left = new TreeNode(7);
  root.right.right = new TreeNode(8);
 */

let root = new TreeNode(-2);
root.right = new TreeNode(-3);
console.log(pathSum(root, -5));
