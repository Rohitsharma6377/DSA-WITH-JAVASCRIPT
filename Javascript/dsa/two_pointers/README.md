# Two Pointers (JavaScript)

 Two pointers maintain two indices that move through a sequence to achieve O(n) solutions.

 ## When to Use
 - Sorted arrays where decisions depend on sums/products/comparisons.
 - Partitioning, deduplication, or scanning from both ends.
 - String/array problems requiring a left/right contraction/expansion.

 ## Patterns
 - Opposite ends: `i=0`, `j=n-1`, move based on condition (e.g., pair sum).
 - Fast/slow pointers: detect cycles, remove duplicates, middle of list.
 - Write/read pointers: in-place filtering (remove duplicates/zeros).

 ## Pitfalls
 - Infinite loops when pointers don’t move under certain conditions.
 - Overwriting data when using write pointer; copy carefully.
 - Off-by-one when determining termination (`i <= j` vs `i < j`).

 ## Practice Prompts
 1) Two-sum in sorted array.
 2) Remove duplicates from sorted array (return new length).
 3) Container with most water.
 4) Trapping rain water (two pointers or stack variant).
 5) Palindrome check ignoring non-alphanumerics.

 See `index.js` for a remove-duplicates example.
