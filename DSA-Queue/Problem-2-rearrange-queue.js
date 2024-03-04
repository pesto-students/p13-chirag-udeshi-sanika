const Queue = require('./Queue.js');

const rearrangeQueue = (queue) => {
    let oddQueue = new Queue();
    let evenQueue = new Queue();
   
    while(!queue.isEmpty()){
        if(queue.peek() % 2 !== 0)
        {
            oddQueue.enqueue(queue.dequeue());
        }
        else
            evenQueue.enqueue(queue.dequeue());
    }
    while(!oddQueue.isEmpty()){
        evenQueue.enqueue(oddQueue.dequeue());
    }

    return evenQueue;
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(8);
queue.enqueue(3);
queue.enqueue(9);
queue.enqueue(4);

console.log(rearrangeQueue(queue));