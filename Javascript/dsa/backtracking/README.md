# Backtracking (JavaScript)

Backtracking explores a state space by building candidates and undoing (backtracking) as soon as a partial candidate cannot lead to a valid solution.

## Template
- choose -> explore -> unchoose
- Use recursion with a `path` and often a `used` set/array.
- Prune early: skip choices that violate constraints.

## Common Problems
- Permutations/Combinations/Subsets
- N-Queens / Sudoku (constraint satisfaction)
- Word search / restore IP addresses
- Partition to k subsets, palindrome partitioning

## Pruning Techniques
- Sort input and skip duplicates (`i > start && a[i] === a[i-1]`).
- Early feasibility checks (bounds, remaining capacity, partial sums).
- Use bitmasks for performance when n is small.

## Pitfalls
- Forgetting to undo the choice (missing backtrack step).
- Duplicates without careful skipping.
- Global state leakage across recursion branches.

## Checklist
- Define state: index/position, current path, used markers.
- Add/Remove from path symmetrically.
- Apply pruning conditions as early as possible.

See `index.js` for a permutations example.
