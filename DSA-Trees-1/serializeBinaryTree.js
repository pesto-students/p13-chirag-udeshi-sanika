class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
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
  
 
  
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  
  console.log(serialize(root));
  