/*
Theory: Queue
- FIFO (First In, First Out) structure.
- Operations: enqueue, dequeue, front/peek, isEmpty. Uses: scheduling, BFS.

Implementation: Use two stacks to achieve amortized O(1) operations.
*/

class Queue {
  constructor() { this.s1 = []; this.s2 = []; }
  enqueue(x) { this.s1.push(x); }
  dequeue() {
    if (!this.s2.length) while (this.s1.length) this.s2.push(this.s1.pop());
    return this.s2.pop();
  }
  front() {
    if (!this.s2.length) while (this.s1.length) this.s2.push(this.s1.pop());
    return this.s2[this.s2.length - 1];
  }
  isEmpty() { return this.s1.length === 0 && this.s2.length === 0; }
}

// Example
(function example() {
  const q = new Queue();
  q.enqueue(1); q.enqueue(2); q.enqueue(3);
  console.log('front', q.front()); // 1
  console.log('dequeue', q.dequeue()); // 1
  console.log('dequeue', q.dequeue()); // 2
})();

/*
Practice Q&A
Q: Implement a circular queue with fixed capacity.
A: Use a fixed-size array with head, tail pointers and size tracking; wrap indices using modulo.
*/
