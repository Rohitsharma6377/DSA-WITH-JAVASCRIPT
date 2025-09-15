# Arrays (Go)

Arrays/slices store ordered elements with O(1) average access by index. In Go, most work is done with slices (`[]T`) which are views over arrays.

## Operation Complexities
- Index access: O(1)
- Search (unsorted): O(n); (sorted with binary search): O(log n)
- Append to slice: amortized O(1) (may reallocate)
- Insert/Delete in middle: O(n)

## Core Patterns
- Two Pointers: pair sums, deduplication (on sorted data).
- Sliding Window: fixed/variable window for sums/counts.
- Prefix Sums: range queries, subarray sums.
- Binary Search Variants on sorted slices.

## Pitfalls (Go)
- Appending can reallocate; if sharing slices, be aware of capacity/aliasing.
- Copy before modifying when needed: `copy(dst, src)`.
- Ranging over slice while mutating indices can be tricky; prefer indexed loops.

## Practice Prompts
1) Two Sum (sorted/unsorted)
2) Max subarray (Kadane)
3) Product of array except self
4) Merge intervals
5) First/last occurrence with binary search

See `arrays/arrays.go` for an in-place reverse.
