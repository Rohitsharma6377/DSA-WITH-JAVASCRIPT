# Recursion (JavaScript)

Recursion is defining a problem in terms of smaller subproblems of the same type.

## Essentials
- Base case: a simple case with a direct answer (stops recursion).
- Recursive case: reduce the problem and call the function again.
- Progress: each step must move toward the base case.

## Tail Recursion
- A recursion where the recursive call is the last action. Some languages optimize this; most JS engines do not guarantee TCO. Prefer iterative for very deep recursion.

## Memoization
- Cache results of `f(args)` to avoid recomputation (bridge to DP top-down).

## Pitfalls
- Missing/incorrect base case => infinite recursion/stack overflow.
- Overlapping subproblems causing exponential blow-up (consider memoization/DP).
- Mutating shared state across branches unexpectedly.

## Practice Prompts
1) Factorial / Fibonacci (recursive, memoized)
2) Binary search (recursive)
3) Permutations / combinations (ties into backtracking)
4) Tree traversals (pre/in/post/level via recursion or iteration)
5) DFS on graphs (use visited set)

See `index.js` for factorial and recursive binary search examples.
