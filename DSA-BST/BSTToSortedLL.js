class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  let prev;
  let inorder = function(root){
    if(!root)
        return;
    inorder(root.left);
    prev.right = root;
    prev.left = null;
    prev = root;
    inorder(root.right);
  }
  let BSTToLinkedList = function(root){

    let dummy = new TreeNode(null);
    prev = dummy;

    inorder(root);
    prev.left = null;
    prev.right = null;
    return dummy.right;
}

let printLL = function(root){
    while(root){
        console.log(root.value + '- ');
        root = root.right;
    }
}


let root = new TreeNode(8);
root.left = new TreeNode(6);
root.right = new TreeNode(16);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);

root = BSTToLinkedList(root);
printLL(root);
