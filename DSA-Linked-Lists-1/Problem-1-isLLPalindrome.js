const LinkedList = require('./LinkedList');


function isPalindrome(head) {
    let count = 1;
  
    
    let prev = head;
    let curr = head.next;
    let reverseNode = null;
    //setting prev pointers to each node, while also counting total nodes.
    while (curr !== null) {
      count++;
      curr.prev = prev;
      if(curr.next == null) reverseNode = curr; //setting reverseNode to point to last node
      curr = curr.next;
      prev = prev.next;
    }
    head.prev = null;

    let mid = Math.floor(count / 2);
  
    let counter = 1;
    let forwardNode = head;
  
    while (counter <= mid) {
      if (forwardNode.data !== reverseNode.data) return false;
      counter++;
      forwardNode = forwardNode.next;
      reverseNode = reverseNode.prev;
    }
    return true;
  }

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(2);
list.append(1);
//list.append(6)

console.log(isPalindrome(list.head));
  