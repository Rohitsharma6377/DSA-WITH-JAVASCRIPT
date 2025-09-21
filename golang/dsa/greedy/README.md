# Greedy (Go)

Greedy algorithms make locally optimal choices hoping for a global optimum. They are simple and fast when the problem has the greedy-choice property and optimal substructure.

## When It Works
- Exchange argument or known proof that the local choice is safe.
- Interval/matroid-like structure (e.g., activity selection).

## Patterns
- Interval scheduling (sort by finish time).
- Huffman coding (min-heap combine two smallest).
- Kruskal MST (sort edges; union if no cycle).
- Dijkstra (non-negative weights).

## Pitfalls
- 0/1 knapsack is not greedy (use DP).
- Coin change fails on non-canonical systems.
- Negative weights break Dijkstra.

## Complexity
- Sort-based: O(n log n)
- Heap-based: O(n log n)

## Practice Prompts
- Max non-overlapping intervals
- Meeting rooms II (sweep line)
- Connect ropes with min cost (min-heap)
- Fractional vs 0/1 knapsack

Add greedy algorithms and examples here.
