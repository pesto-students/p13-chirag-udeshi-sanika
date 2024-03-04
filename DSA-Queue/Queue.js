class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue: Add an element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue: Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Peek: View the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // IsEmpty: Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Queue;