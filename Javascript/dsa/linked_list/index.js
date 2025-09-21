/*
Theory: Linked List
- A sequence of nodes where each node points to the next (and optionally previous) node.
- Pros: O(1) insert/delete at head/tail with pointers, no contiguous memory requirement.
- Cons: O(n) access by index, extra memory for pointers.

Basic Implementation: Singly Linked List with append, prepend, find, delete.
*/

class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}

class SinglyLinkedList {
  constructor() { this.head = null; this.tail = null; this.length = 0; }
  prepend(val) {
    const node = new ListNode(val, this.head);
    this.head = node; if (!this.tail) this.tail = node; this.length++; return this;
  }
  append(val) {
    const node = new ListNode(val);
    if (!this.head) { this.head = this.tail = node; }
    else { this.tail.next = node; this.tail = node; }
    this.length++; return this;
  }
  find(val) {
    let cur = this.head; while (cur) { if (cur.val === val) return cur; cur = cur.next; } return null;
  }
  delete(val) {
    if (!this.head) return false; let dummy = new ListNode(null, this.head), prev = dummy, cur = this.head;
    while (cur) { if (cur.val === val) { prev.next = cur.next; if (cur === this.tail) this.tail = prev === dummy ? null : prev; this.head = dummy.next; this.length--; return true; }
      prev = cur; cur = cur.next; }
    this.head = dummy.next; return false;
  }
  toArray() { const out = []; let cur = this.head; while (cur) { out.push(cur.val); cur = cur.next; } return out; }
}

// Example
(function example() {
  const list = new SinglyLinkedList();
  list.append(2).prepend(1).append(3);
  console.log('list', list.toArray()); // [1,2,3]
  console.log('find 2', !!list.find(2));
  console.log('delete 2', list.delete(2), list.toArray()); // [1,3]
})();

/*
Practice Q&A
Q: Detect a cycle in a linked list.
A: Use Floyd's tortoise and hare. Move slow by 1, fast by 2; if they meet, there's a cycle.
*/
