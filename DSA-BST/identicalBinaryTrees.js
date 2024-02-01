class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  let isSameTree = function(root1, root2){
    if(!root1 && !root2)
        return true;
    if((root1 && !root2) || (root2 && !root1))
        return false;

    if(root1.value !== root2.value)
        return false;

    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
  }

  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(1);

  let root2 = new TreeNode(1);
  root2.left = new TreeNode(1);
  root2.right = new TreeNode(2);

  console.log(isSameTree(root1,root2));