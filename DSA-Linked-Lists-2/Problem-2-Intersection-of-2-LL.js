const LinkedList = require('../DSA-Linked-Lists-1/LinkedList');
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let nodeSet = new Set();

    let curr = headA;
    while(curr){
        nodeSet.add(curr);
        curr = curr.next;
    }

    curr = headB;
    while(curr){
        if(nodeSet.has(curr))
            return curr.data;
        curr = curr.next;
    }

    return null;
};


