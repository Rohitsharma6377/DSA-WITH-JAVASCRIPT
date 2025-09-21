# Sorting (JavaScript)

 Sorting orders elements by a comparator. Different algorithms offer trade-offs in time, space, and stability.

 ## Algorithms & Complexities
 - Insertion Sort: O(n^2), stable, in-place, great for tiny/nearly-sorted arrays.
 - Selection Sort: O(n^2), unstable (basic form), in-place.
 - Bubble Sort: O(n^2), stable with optimization; educational mostly.
 - Merge Sort: O(n log n), stable, uses O(n) extra space.
 - Quick Sort: Avg O(n log n), Worst O(n^2), in-place, cache friendly; randomize pivot.
 - Heap Sort: O(n log n), in-place, not stable.

 ## Stability & When It Matters
 Stable sorts preserve relative order of equal keys (important in multi-key sorts). Merge sort is stable; quick/heap sort typically are not.

 ## Patterns
 - Sort + Sweep: sort endpoints or intervals, then line-sweep to count overlaps.
 - Custom Comparator: sort by multiple keys, e.g., `a[0] !== b[0] ? a[0]-b[0] : a[1]-b[1]`.
 - Partial Sorting: use heap/quickselect to find k-th or top-k in O(n) average.

 ## Pitfalls
 - JS default sort is lexicographic; provide numeric comparator.
 - Quick sort worst-case on sorted input without randomization.
 - Large stable sorts may require extra memory (merge sort).

 ## Practice Prompts
 1) Merge intervals
 2) Sort colors (Dutch National Flag)
 3) Kth largest element (quickselect/heap)
 4) Meeting rooms II (sort start/end times)
 5) Reorder logs or custom multi-key sorting

 See `index.js` for insertion sort example; `divide_and_conquer/index.js` for quicksort.
