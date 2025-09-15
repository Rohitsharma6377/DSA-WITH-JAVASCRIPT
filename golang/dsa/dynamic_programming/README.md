# Dynamic Programming (Go)

DP optimizes recursion by storing subproblem results (overlapping subproblems + optimal substructure).

## When to Use
- Repeated subcalls with same state; greedy fails or is hard to prove.

## Approaches
- Top-down (memoization): recursive function with `map`/slice cache.
- Bottom-up (tabulation): define states and transitions; fill table iteratively.
- Space optimization: keep only needed rows/cols.

## Patterns
- 1D DP (stairs, house robber)
- Knapsack family (0/1, unbounded)
- LIS/LCS/Edit Distance
- Grid DP (paths, min path sum)
- Bitmask DP (TSP, assignment)

## Pitfalls
- Wrong state definition; wrong iteration order for tabulation.
- Memory blow-up; compute states count × transition cost.

## Checklist
- State, base, transition well-defined?
- Bounds and initialization correct?
- Memo keys/indexing consistent?

## Prompts
- Coin change (min/ways)
- LIS (O(n^2)) and patience sorting (O(n log n))
- 0/1 knapsack
- Edit distance
