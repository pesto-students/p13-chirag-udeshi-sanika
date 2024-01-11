class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let queue = [];
let levelOrderTraversal = function (root) {
  if (!root) return;
  let level = 1;
  let nodesAtCurrLevel = 1;

  queue.push(root);

  while (queue.length > 0) {
    nodesAtCurrLevel = queue.length;
    let nodesAtCurrLevelString = "";
    while (nodesAtCurrLevel > 0) {
      let poppedNode = queue.shift();

      if (poppedNode)
        nodesAtCurrLevelString =
          nodesAtCurrLevelString + " " + poppedNode.value;
      nodesAtCurrLevel--;
      //push its children
      if (poppedNode) queue.push(poppedNode.left, poppedNode.right);
    }
    if (nodesAtCurrLevelString != "")
      console.log(`Level ${level} : ${nodesAtCurrLevelString}`);
    level++;
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);
//root.right.left = new TreeNode(7);
//root.right.right = new TreeNode(8);

levelOrderTraversal(root);
