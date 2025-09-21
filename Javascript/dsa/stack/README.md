# Stack (JavaScript)

 A stack is a LIFO (Last In, First Out) structure supporting:
 - push (add to top), pop (remove from top), peek (inspect top), isEmpty.

 ## Complexity
 - push/pop/peek: O(1)

 ## Common Interview Problems
 - Valid parentheses/brackets.
 - Evaluate Reverse Polish Notation (RPN) / infix to postfix.
 - Min-stack (track current minimum in O(1)).
 - Next greater element / daily temperatures (monotonic stack).
 - Decode string (k[pattern]) using stack.

 ## Pitfalls
 - Forgetting order when popping two operands for binary operations.
 - Off-by-one when mapping indices to values in monotonic stacks.

 ## Checklist
 - Choose plain array for stack in JS.
 - For monotonic stack, define invariant (increasing/decreasing) clearly.
 - Store indices rather than values when output needs positions.

 See `index.js` for a simple stack class and usage.
