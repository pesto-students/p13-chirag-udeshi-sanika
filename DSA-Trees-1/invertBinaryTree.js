class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)
       return root;
   
  
   let temp = root.left;
   root.left= root.right;
  root.right = temp;
   if (root.left )invertTree(root.left);
   if(root.right) invertTree(root.right);
   return root;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(10);
 console.log(countLeafNodes(root))