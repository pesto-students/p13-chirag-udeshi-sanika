class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function height(root){
    if(!root)
        return 0;
    if(root.left == null && root.right == null)
        return 1;
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    return Math.max(leftHeight,rightHeight) + 1;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
 

console.log(height(root));
