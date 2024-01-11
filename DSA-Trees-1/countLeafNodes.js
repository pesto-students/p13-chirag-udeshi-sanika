class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


const countLeafNodes = function(root) {
    if(!root)
        return 0;
    if(root.left == null && root.right == null)
        return 1;
    return countLeafNodes(root.left) + countLeafNodes(root.right)
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(10);
 console.log(countLeafNodes(root))