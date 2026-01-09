/**
 * QUEUE DATA STRUCTURE - Complete Implementation
 * Queue ke saare operations with Hinglish explanations
 * FIFO - First In First Out principle
 */

// Simple Queue Implementation
class Queue {
    constructor() {
        this.items = [];
    }

    // 1. Enqueue - Element add karna (rear pe)
    enqueue(element) {
        // Explanation: Queue ke end mein element add karna
        this.items.push(element);
    }

    // 2. Dequeue - Element remove karna (front se)
    dequeue() {
        // Explanation: Queue ke front se element remove karna
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }
        return this.items.shift();
    }

    // 3. Front - Front element dekhna
    front() {
        // Explanation: Queue ka pehla element dekhna
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }
        return this.items[0];
    }

    // 4. Rear - Last element dekhna
    rear() {
        // Explanation: Queue ka last element dekhna
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }
        return this.items[this.items.length - 1];
    }

    // 5. isEmpty - Queue khali hai ya nahi
    isEmpty() {
        return this.items.length === 0;
    }

    // 6. Size - Queue mein kitne elements hain
    size() {
        return this.items.length;
    }

    // 7. Clear - Saare elements remove karna
    clear() {
        this.items = [];
    }

    // 8. Print - Queue ko print karna
    print() {
        console.log(this.items.join(' <- '));
    }
}

// Circular Queue Implementation
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    // 9. Enqueue in Circular Queue
    enqueue(element) {
        // Explanation: Circular queue mein element add karna
        if (this.isFull()) {
            return 'Queue is full!';
        }

        if (this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.size++;
        return true;
    }

    // 10. Dequeue from Circular Queue
    dequeue() {
        // Explanation: Circular queue se element remove karna
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }

        const element = this.items[this.front];
        this.items[this.front] = null;

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }

        this.size--;
        return element;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }
}

// Priority Queue Implementation
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // 11. Enqueue with Priority
    enqueue(element, priority) {
        // Explanation: Priority ke saath element add karna
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    // 12. Dequeue from Priority Queue
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }
        return this.items.shift().element;
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is empty!';
        }
        return this.items[0].element;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.map(item =>
            `${item.element}(${item.priority})`
        ).join(' <- '));
    }
}

// Deque (Double-ended Queue) Implementation
class Deque {
    constructor() {
        this.items = [];
    }

    // 13. Add Front - Front pe element add karna
    addFront(element) {
        this.items.unshift(element);
    }

    // 14. Add Rear - Rear pe element add karna
    addRear(element) {
        this.items.push(element);
    }

    // 15. Remove Front - Front se element remove karna
    removeFront() {
        if (this.isEmpty()) {
            return 'Deque is empty!';
        }
        return this.items.shift();
    }

    // 16. Remove Rear - Rear se element remove karna
    removeRear() {
        if (this.isEmpty()) {
            return 'Deque is empty!';
        }
        return this.items.pop();
    }

    peekFront() {
        if (this.isEmpty()) {
            return 'Deque is empty!';
        }
        return this.items[0];
    }

    peekRear() {
        if (this.isEmpty()) {
            return 'Deque is empty!';
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(' <-> '));
    }
}

// ==================== QUEUE APPLICATIONS ====================

// 17. Generate Binary Numbers using Queue
function generateBinaryNumbers(n) {
    // Explanation: 1 se n tak ke binary numbers generate karna
    const queue = new Queue();
    const result = [];

    queue.enqueue('1');

    for (let i = 0; i < n; i++) {
        const current = queue.dequeue();
        result.push(current);

        queue.enqueue(current + '0');
        queue.enqueue(current + '1');
    }

    return result;
}

// 18. Implement Stack using Queues
class StackUsingQueues {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(element) {
        this.q2.enqueue(element);

        while (!this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        return this.q1.dequeue();
    }

    top() {
        return this.q1.front();
    }

    isEmpty() {
        return this.q1.isEmpty();
    }
}

// 19. Hot Potato Game (Josephus Problem)
function hotPotato(names, num) {
    // Explanation: Hot potato game simulate karna
    const queue = new Queue();

    names.forEach(name => queue.enqueue(name));

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        const eliminated = queue.dequeue();
        console.log(`${eliminated} eliminated`);
    }

    return queue.dequeue();
}

// 20. Sliding Window Maximum
function slidingWindowMaximum(arr, k) {
    // Explanation: Har window ka maximum element find karna
    const result = [];
    const deque = new Deque();

    for (let i = 0; i < arr.length; i++) {
        // Remove elements outside window
        while (!deque.isEmpty() && deque.peekFront() < i - k + 1) {
            deque.removeFront();
        }

        // Remove smaller elements
        while (!deque.isEmpty() && arr[deque.peekRear()] < arr[i]) {
            deque.removeRear();
        }

        deque.addRear(i);

        if (i >= k - 1) {
            result.push(arr[deque.peekFront()]);
        }
    }

    return result;
}

// Export
module.exports = {
    Queue,
    CircularQueue,
    PriorityQueue,
    Deque,
    StackUsingQueues,
    generateBinaryNumbers,
    hotPotato,
    slidingWindowMaximum
};

// Test examples
if (require.main === module) {
    console.log('=== Queue Demo ===\n');

    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    console.log('Queue:');
    queue.print();
    console.log('Front:', queue.front());
    console.log('Dequeued:', queue.dequeue());

    console.log('\n=== Priority Queue Demo ===\n');

    const pq = new PriorityQueue();
    pq.enqueue('Task 1', 2);
    pq.enqueue('Task 2', 1);
    pq.enqueue('Task 3', 3);

    console.log('Priority Queue:');
    pq.print();

    console.log('\n=== Binary Numbers ===');
    console.log('First 10:', generateBinaryNumbers(10));

    console.log('\n=== Hot Potato ===');
    const winner = hotPotato(['A', 'B', 'C', 'D', 'E'], 3);
    console.log('Winner:', winner);
}
