class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root;

  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);

  if (l && r) return root;
  if (l && !r) return l;
  else return r;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(10);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(8);

let p = root.left;
let q = root.right.right;
let result = lowestCommonAncestor(root, p, q);
console.log(result.value);
