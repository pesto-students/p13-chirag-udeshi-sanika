class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
let max = Number.NEGATIVE_INFINITY;
  let maximumPathSum = function(root){
    
     
 //   max = Math.max(max, sum);
    if(!root)
        return 0;
    let left = maximumPathSum(root.left);
    let right = maximumPathSum(root.right);
    let allSum = left + right + root.value;
    let leftSum = left + root.value;
    let rightSum = right + root.value;

    max = Math.max(max, leftSum, rightSum, allSum, root.value);

    return Math.max(leftSum, rightSum, root.value);

  }

  let root = new TreeNode(8);
root.left = new TreeNode(6);
root.right = new TreeNode(16);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);

maximumPathSum(root);
console.log(max);
