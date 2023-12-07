class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  let isValidBST = function(root , min , max){
    if(!root)
        return true;
    if(root.value < min || root.value > max)       
        return false;
    return isValidBST(root.left, min, root.value - 1) && isValidBST(root.right, root.value + 1, max);
    
    
  }

  let root = new TreeNode(10);
root.left = new TreeNode(1);
root.right = new TreeNode(30);
root.left.left = new TreeNode(60);
root.left.right = new TreeNode(6);

console.log(isValidBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY));