class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
let count = 0;
  let kThSmallestElement = function(root, k){
    if(!root)
        return null;
   
    let left = kThSmallestElement(root.left, k);
    if(left)
        return left;
    count++;
    if(count == k)
    return root.value;
    return kThSmallestElement(root.right, k);
    
    
  }

  let root = new TreeNode(8);
  root.left = new TreeNode(6);
  root.right = new TreeNode(16);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(7);

  console.log(kThSmallestElement(root, 3));