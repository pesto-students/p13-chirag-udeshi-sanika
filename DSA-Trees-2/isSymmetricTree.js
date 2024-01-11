class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var invertTree = function (root) {
  if (!root) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};

let serialize = function (root) {
  let string = "";

  function serializeHelper(root) {
    let value = "";
    if (!root) {
      value = "null";
      string = string + value + "-";
      return;
    } else value = root.value;
    string = string + value + "-";
    serializeHelper(root.left);
    serializeHelper(root.right);
  }
  if (root) serializeHelper(root);
  return string.slice(0, string.length - 1);
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
/* root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);  */

let originalTreeString = serialize(root);
invertTree(root);
let invertedTreeString = serialize(root);

console.log(originalTreeString == invertedTreeString);
