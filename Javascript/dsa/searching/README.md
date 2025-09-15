# Searching (JavaScript)

 Searching locates a target within a collection. Two essentials:
 - Linear Search: O(n), no ordering required.
 - Binary Search: O(log n), requires a monotonic predicate or sorted order.

 ## Binary Search Prerequisites
 - Array (or answer space) must be sorted/monotonic with respect to a predicate.
 - Define mid carefully to avoid overflow: `m = l + ((r - l) >> 1)`.

 ## Common Variants
 - First occurrence / lower bound (first index >= target).
 - Last occurrence / upper bound (last index <= target).
 - Search on answer: if f(x) is monotonic, binary search minimal x such that f(x) is true.
 - Rotated sorted array search: decide which half is sorted each step.

 ## Pitfalls
 - Infinite loops from incorrect updates of `l` and `r`.
 - Off-by-one when returning bounds; verify with small arrays and edge cases.
 - Duplicates: ensure variant returns the correct boundary.

 ## Patterns
 - Lower bound (first >= target):
   - while (l <= r): if a[m] >= target, ans = m, r = m - 1; else l = m + 1.
 - Upper bound (last <= target):
   - while (l <= r): if a[m] <= target, ans = m, l = m + 1; else r = m - 1.
 - Answer on monotonic function f(mid): move `l`/`r` based on f(mid).

 ## Practice Prompts
 1) First and last position of an element in sorted array.
 2) Search in rotated sorted array (with/without duplicates).
 3) Koko eating bananas / capacity to ship packages (search on answer).
 4) Peak element / mountain array peak index.
 5) Square root with integer part via binary search.

 See `index.js` for a classic binary search implementation.
