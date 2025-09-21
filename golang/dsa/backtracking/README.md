# Backtracking (Go)

Backtracking explores a search space by building candidates and undoing choices that cannot lead to valid solutions.

## Template
- choose -> explore -> un-choose
- Carry `path`, `used` flags, and indices as arguments.
- Prune early when constraints fail.

## Common Problems
- Permutations / combinations / subsets
- N-Queens, Sudoku
- Word search, restore IP addresses
- Partition to k subsets

## Pruning
- Sort and skip duplicates.
- Early bounds checks (sum > target, capacity exceeded).
- Bitmask `uint` for `used` when n is small.

## Pitfalls
- Forgetting to backtrack (not undoing state).
- Duplicates without checks.
- Global state bleeding across branches.

## Checklist
- Define state: index, path, used.
- Add/remove symmetrically.
- Place pruning as early as possible.

Implementations live best as recursive functions in Go files within this folder.
