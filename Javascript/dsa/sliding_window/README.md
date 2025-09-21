# Sliding Window (JavaScript)

 Sliding window maintains a contiguous range over a sequence while computing metrics efficiently.

 ## Types
 - Fixed-size window: size `k` moves one step each iteration (e.g., max sum of size k).
 - Variable-size window: expand/contract based on constraints (e.g., longest substring without repeat).

 ## Patterns
 - Fixed-size: precompute first `k` sum, then slide: `sum += a[i] - a[i-k]`.
 - Variable-size with counts: expand `right`, update map; while constraint breaks, shrink `left` and update map.
 - Monotonic deque: maintain candidates in decreasing/increasing order for max/min queries.

 ## Pitfalls
 - Off-by-one on window bounds (`[l, r]` vs `[l, r)` semantics).
 - Forgetting to remove/update counts when shrinking.
 - For deques, failing to pop outdated indices that left the window.

 ## Practice Prompts
 1) Max sum subarray of size k (fixed)
 2) Longest substring without repeating characters (variable)
 3) Minimum window substring
 4) Sliding window maximum (monotonic deque)
 5) Number of subarrays with at most k distinct integers

 See `index.js` for a fixed-size example.
