# Linked List (JavaScript)

 A linked list is a sequence of nodes where each node points to the next (and optionally previous) node.

## Variants
- Singly Linked List (SLL)
- Doubly Linked List (DLL)
- Circular Linked List (CLL)

## Operations
- Insert/Delete at head: O(1)
- Insert/Delete at tail: O(1) with tail pointer (SLL/DLL)
- Search by value or index: O(n)
- Insert/Delete in middle: O(1) given node reference; O(n) to locate

## Common Interview Problems
- Reverse a linked list (iterative/recursive)
- Detect cycle (Floyd's tortoise and hare) and find cycle start
- Merge two sorted lists; merge k lists with a heap
- Remove N-th node from end (two pointers)
- Reorder list, odd-even list, palindrome linked list (reverse second half)

## Pitfalls
- Losing references when re-linking (store `next` first).
- Handling edge cases: empty list, one node, deleting head/tail.
- For DLL, keep `prev` pointers consistent.

## Complexity
- Most operations are O(1) given direct node, otherwise O(n) to locate.

## Checklist
- Track `head` and `tail` updates on insert/delete.
- Use dummy/sentinel nodes to simplify edge cases.
- For two-pointer tasks, reason about movement and termination.

See `index.js` for a simple SLL implementation and examples.
