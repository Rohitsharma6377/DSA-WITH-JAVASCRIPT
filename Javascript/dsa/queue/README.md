# Queue (JavaScript)

 A queue is a FIFO (First In, First Out) structure supporting:
 - enqueue (add to back), dequeue (remove from front), front/peek, isEmpty.

 ## Implementations in JS
 - Two-stack queue: amortized O(1) enqueue/dequeue (see `index.js`).
 - Deque (double-ended queue): can use an array carefully or a linked list for O(1) ends.
 - Priority queue: typically implemented via a binary heap (see `heap/`).

 ## Complexity
 - enqueue/dequeue/front/isEmpty: O(1) amortized with two stacks; O(1) with linked-list deque.

 ## Common Interview Problems
 - Sliding window maximum (monotonic deque).
 - Implement stack using queues and vice versa.
 - Level-order traversal (BFS) of a tree/graph.
 - Recent counter / moving average using queue.

 ## Pitfalls
 - Using `Array.shift()` repeatedly is O(n); prefer two-stack queue or deque structure.
 - For monotonic deque, maintain invariant while pushing/popping.

 ## Checklist
 - Choose data structure: two stacks, linked list, or a dedicated deque.
 - Understand amortized analysis for the two-stack approach.
 - For priority behavior, use a heap rather than a plain queue.

 See `index.js` for a two-stack queue example.
