# Heap (JavaScript)

 A heap is a complete binary tree where each node obeys the heap property.
 - Min-heap: parent <= children (peek gives minimum)
 - Max-heap: parent >= children (peek gives maximum)

 ## Operations & Complexity
 - peek: O(1)
 - push (insert): O(log n)
 - pop (extract top): O(log n)

 ## Implementation Notes (JS)
 - Represent heap with an array; for index `i`, children are `2i+1`, `2i+2`; parent is `(i-1)>>1`.
 - See `index.js` for a `MinHeap` implementation with `_siftUp` and `_siftDown`.

 ## Common Interview Problems
 - Top-k elements / k-th largest (min-heap of size k).
 - Merge k sorted lists/arrays (min-heap of heads).
 - Running median of a stream (two heaps: max-heap and min-heap).
 - Reorganize string / schedule tasks by frequency (max-heap).

 ## Pitfalls
 - Using JS `sort` per operation is O(n log n), worse than proper heap maintenance.
 - Off-by-one when computing child/parent indices.
 - Forgetting to re-heapify after updating the root.

 ## Checklist
 - Choose min vs max heap per problem.
 - Keep heap size bounded for top-k patterns.
 - Consider two-heap approach for medians/balanced partitions.

 See `index.js` for a working min-heap demo.
