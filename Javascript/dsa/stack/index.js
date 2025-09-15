/*
Theory: Stack
- LIFO (Last In, First Out) structure.
- Operations: push, pop, peek, isEmpty. Typical uses: undo, parsing, DFS.

Implementation: Using JS array as stack.
*/

class Stack {
  constructor() { this.data = []; }
  push(x) { this.data.push(x); }
  pop() { return this.data.pop(); }
  peek() { return this.data[this.data.length - 1]; }
  isEmpty() { return this.data.length === 0; }
}

// Example
(function example() {
  const s = new Stack();
  s.push(1); s.push(2); s.push(3);
  console.log('peek', s.peek()); // 3
  console.log('pop', s.pop());   // 3
  console.log('stack', s.data);  // [1,2]
})();

/*
Practice Q&A
Q: Validate Parentheses string e.g. "()[]{}".
A: Use stack, push opening brackets; on closing, check top pair matches. Empty at end => valid.
*/
