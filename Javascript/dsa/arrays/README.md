# Arrays (JavaScript)

Arrays store ordered elements with O(1) average access by index. They are the most common structure for problems involving sequences, subarrays, or two-pointer patterns.

## Operation Complexities
- Index access: O(1)
- Search (unsorted): O(n); (sorted with binary search): O(log n)
- Push/Pop end: O(1) amortized
- Shift/Unshift (front): O(n)
- Insert/Delete middle: O(n)

## Core Patterns
- Two Pointers: on sorted arrays for pair sums, deduplication, partitions.
- Sliding Window: fixed/variable window for sums, counts, longest/shortest subarray.
- Prefix Sum / Difference Array: range queries, subarray sums, balancing problems.
- Binary Search Variants: first/last occurrence, boundary checks, answer-on-monotonic-space.
- Sorting + Sweep: sort with custom comparator, then single pass to compute results.

## Pitfalls
- Mutations while iterating can skip elements; prefer indices or copy when needed.
- Off-by-one in windows and binary search boundaries.
- Large concatenations or frequent unshift/shift are costly.
- Beware sparse arrays and methods that rely on holes (e.g., map/forEach behavior).

## JavaScript Tips
- Clone: `arr.slice()` or `[...arr]`.
- Sort numeric: `arr.sort((a,b)=>a-b)`; default is lexicographic.
- Sum quickly: `arr.reduce((a,b)=>a+b,0)`.
- Unique elements: `Array.from(new Set(arr))`.

## Practice Prompts
1) Two Sum (sorted and unsorted variants)
2) Maximum subarray (Kadane), maximum circular subarray
3) Product of array except self (no division)
4) Merge intervals, insert interval
5) Find first/last position of element in sorted array

See `index.js` for examples like in-place reverse and two-sum on sorted arrays.
