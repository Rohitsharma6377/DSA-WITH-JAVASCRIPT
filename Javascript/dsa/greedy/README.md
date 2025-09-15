# Greedy (JavaScript)

 Greedy algorithms build a solution step by step by making the locally optimal (best-looking) choice at each step, hoping it leads to a globally optimal solution. They are simple, fast, and often optimal on problems that satisfy the greedy-choice property and optimal substructure.

 ## When to use Greedy
 - You can formulate a local choice rule that never prevents an optimal global result.
 - The problem exhibits optimal substructure (optimal solutions composed of optimal subsolutions).
 - A proof exists (exchange argument or matroid/interval structure) that greedy is optimal.

 If a counterexample exists or you cannot prove correctness, prefer Dynamic Programming.

 ## Core Patterns
 - Activity/interval selection: sort by earliest finishing time, pick non-overlapping intervals.
 - Scheduling by ratio/weight: sort by ratio or weight (e.g., min average waiting time using shortest job first).
 - Huffman coding: repeatedly combine two least-frequent nodes using a min-heap.
 - Kruskal’s MST: sort edges by weight; union if it doesn’t create a cycle (DSU/Union-Find).
 - Dijkstra’s shortest path: repeatedly relax the smallest-distance node (non-negative weights).
 - Canonical coin change systems: always pick the largest coin not exceeding the remaining amount.

 ## Proving Greedy Correct
 - Exchange argument: show any optimal solution can be transformed into the greedy one without worsening cost.
 - Greedy stays feasible: the local choice never violates constraints.
 - Matroid theory: if the problem fits a matroid, greedy is optimal.

 ## Common Interview Problems
 - Select maximum number of non-overlapping intervals.
 - Merge intervals and count rooms (meeting rooms II) using a sweep line or two-pointer technique.
 - Minimum arrows to burst balloons (intervals variant).
 - Fractional knapsack (greedy by value/weight), 0/1 knapsack is NOT greedy (use DP).
 - Reorganize string / task scheduling by max-heap with counts.
 - Connect ropes with minimum cost (always join two smallest first via min-heap).

 ## Pitfalls
 - Greedy for 0/1 knapsack fails; use DP.
 - Greedy coin change fails on non-canonical coin systems.
 - Greedy with negative weights often breaks (e.g., Dijkstra requires non-negative weights).
 - Sorting key matters: incorrect comparator leads to suboptimal solutions.

 ## Complexity
 - Sorting-based greedy: O(n log n).
 - Heap-based greedy: O(n log n) for n push/pop operations.
 - Linear greedy (single pass): O(n).

 ## Templates (JavaScript)
 - Sort-then-pick pattern:
   1. Sort by a key (end time, value/weight, etc.).
   2. Iterate once, greedily accept if feasible.

 - Heap (priority queue) pattern:
   1. Push candidates into a heap by priority.
   2. Repeatedly pop best candidate and update state.

 ## Quick Checklist
 - Is there an exchange argument or known proof the greedy choice is safe?
 - Does sorting/heap order match the desired local optimal choice?
 - Are constraints preserved after each choice?
 - Do you need additional data structures to maintain feasibility (e.g., DSU, heaps)?

 ## Practice Prompts
 1) Maximum number of non-overlapping intervals.
 2) Minimum number of meeting rooms needed.
 3) Connect ropes with minimum total cost.
 4) Reorganize string to avoid adjacent equals.
 5) Fractional knapsack (contrast with 0/1 knapsack).

 See `index.js` in this folder for a runnable example of interval selection.
