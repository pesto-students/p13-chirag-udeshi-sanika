const Queue = require('./Queue.js');

const rearrangeKElements = (queue, k) => {
    let stack = [];

    for( let i = 0; i < k ; i++){
        stack.push(queue.dequeue());
    }

    let resultQueue = new Queue();

    while(stack.length !== 0){
        resultQueue.enqueue(stack.pop());
    }
    while(!queue.isEmpty()){
        resultQueue.enqueue(queue.dequeue());
    }
    return resultQueue.items;
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(rearrangeKElements( queue, 3));