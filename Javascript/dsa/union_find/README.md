# Union-Find / DSU (JavaScript)

Disjoint Set Union (DSU) maintains a partition of elements into disjoint sets, supporting:
- `find(x)`: return representative (root) of x's set
- `union(a,b)`: merge sets containing a and b

## Optimizations
- Path compression (in `find`): point nodes directly to root to flatten trees.
- Union by rank/size: attach smaller tree under larger to limit height.
- With both, amortized time is nearly O(1) per operation (inverse Ackermann).

## Use Cases
- Kruskal's Minimum Spanning Tree.
- Counting connected components in an undirected graph.
- Dynamic connectivity; union of overlapping intervals; percolation problems.

## Pitfalls
- Forgetting to initialize each element as its own parent.
- Not applying path compression leads to near-linear chains.
- Mixing 0/1-based indices inconsistently.

## Practice Prompts
1) Number of connected components in an undirected graph.
2) Redundant connection (detect extra edge forming a cycle).
3) Accounts merge (union by email/person).
4) Evaluate division (union with weights/ratios variant).

See `index.js` for a DSU class with union by rank and path compression.
