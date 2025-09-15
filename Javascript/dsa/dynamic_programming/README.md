# Dynamic Programming (JavaScript)

 Dynamic Programming (DP) optimizes recursive solutions by storing results of overlapping subproblems and exploiting optimal substructure.

 ## When to Use DP
 - Overlapping subproblems: repeated subcalls with same parameters.
 - Optimal substructure: optimal solution composed of optimal subsolutions.
 - Greedy fails or is hard to prove; recursion alone is exponential.

 ## Approaches
 - Top-down (Memoization): write a recursive function `f(state)` and cache results in a map/array.
 - Bottom-up (Tabulation): define states and transitions, fill a DP table iteratively.
 - Space optimization: reduce dimensions by only keeping previous layers if transitions allow.

 ## Common Patterns
 - 1D DP: Fibonacci, climbing stairs, house robber.
 - Knapsack family: 0/1, unbounded, bounded; subset sum; partition equal subset.
 - Sequence alignment/edit distance: LCS, LIS, edit distance.
 - Interval DP: matrix chain multiplication, burst balloons.
 - Grid DP: paths with obstacles, minimum path sum, unique paths with combinatorics.
 - Bitmask DP: traveling salesman, assign tasks.
 - DP on trees: rerooting, subtree sums, independent set on trees.

 ## Pitfalls
 - Wrong state definition leads to exponential blow-up.
 - Order of filling table matters in bottom-up.
 - Modulo arithmetic and integer overflow (less a concern in JS but watch precision for big ints).
 - Time/memory explosion: ensure state count × transition cost is acceptable.

 ## Complexity
 - Total states × average transition cost.
 - Typical: O(n), O(nk), O(n^2), O(n^3), or O(n·2^n) for bitmask DP.

 ## Checklist
 - Define state clearly: what parameters fully describe a subproblem?
 - Base cases defined and consistent with transitions?
 - Transition correct and covers all cases?
 - Memoization keys or table dimensions correct and bounded?

 ## Practice Prompts
 1) Coin change (min coins / number of ways)
 2) Longest increasing subsequence (LIS) O(n^2) DP and O(n log n) patience sorting
 3) 0/1 knapsack and variations
 4) Edit distance (Levenshtein)
 5) Partition equal subset sum

 See `index.js` for Fibonacci and a small 0/1 knapsack demo.
