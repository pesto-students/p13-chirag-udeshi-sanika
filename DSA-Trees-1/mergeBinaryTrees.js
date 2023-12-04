class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  var serialize = function (root) {
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
    return string.slice(0, string.length-1);
  };
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1)
        return root2;
    if(!root2)
        return root1;
    let root3 = new TreeNode(root1.value + root2.value);
    root3.left = mergeTrees(root1.left,root2.left);
    root3.right = mergeTrees(root1.right, root2.right);
    return root3;
};

//Test Case 1
/* 
//first tree
let root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);

//second tree
let root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7); */

//Test Case 2
//first tree
let root1 = new TreeNode(1);

//second tree
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);

console.log(serialize(mergeTrees(root1,root2)));
