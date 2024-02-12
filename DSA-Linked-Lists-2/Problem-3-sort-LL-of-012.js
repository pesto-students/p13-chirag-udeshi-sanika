const LinkedList = require('../DSA-Linked-Lists-1/LinkedList');

const sortLLof012 = (head) => {
    let curr = head;
    let llMap = new Map([[0 , 0] , [ 1, 0] , [2, 0]]);
    
    while(curr){
        llMap.set(curr.data, llMap.get(curr.data) + 1);
        curr = curr.next;
    }
    console.log(llMap);
    curr = head;
    let zeros = llMap.get(0);
    let ones = llMap.get(1);
    let twos = llMap.get(2);
    while(zeros > 0){
        curr.data = 0;
        curr = curr.next;
        zeros --;
    }
    while(ones > 0){
        curr.data = 1;
        curr = curr.next;
        ones--;
    }
    while(twos > 0){
        curr.data = 2;
        curr = curr.next;
        twos--;
    }

}

let list = new LinkedList();
list.append(1);
list.append(0);
list.append(2);
list.append(1);
list.append(2);
list.append(0);

sortLLof012(list.head);
list.print();
