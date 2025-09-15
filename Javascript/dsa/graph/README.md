# Graphs (JavaScript)

Graphs model relationships between entities using vertices (nodes) and edges. They can be directed/undirected, weighted/unweighted, cyclic/acyclic.

## Representations
- Adjacency List (object/map of arrays): space-efficient for sparse graphs; typical in interviews.
- Adjacency Matrix (2D array): simpler constant-time edge checks; heavy for large sparse graphs.

## Traversals
- BFS (queue): level-order; shortest path in unweighted graphs; component counting.
- DFS (stack/recursion): path exploration, cycle detection, topological sort on DAGs.

## Shortest Paths
- Unweighted: BFS.
- Weighted (non-negative): Dijkstra with min-heap.
- With negative edges, no negative cycles: Bellman-Ford; with negative cycles: detect cycle.
- All-pairs on dense graphs: Floyd–Warshall.

## Minimum Spanning Tree (MST)
- Kruskal: sort edges by weight, union if no cycle (use DSU). O(E log E).
- Prim: grow from a node using a min-heap of crossing edges. O(E log V).

## Common Interview Tasks
- Count connected components (Union-Find/BFS/DFS).
- Detect cycle (directed: DFS states; undirected: Union-Find or DFS parent check).
- Topological sort and course schedule feasibility.
- Number of islands (grid as graph), shortest path in grid (BFS), rotten oranges, walls and gates.

## Pitfalls
- Revisit without visited set => infinite loops.
- For grids, check bounds and visited marking order.
- Dijkstra requires non-negative weights; otherwise use Bellman-Ford.
- For topological sort, ensure DAG; otherwise cycle exists.

## Checklist
- Choose correct representation (list vs matrix) and traversal (BFS vs DFS).
- Track visited and optionally parent/state for cycle detection.
- For shortest path: confirm edge weights to choose BFS/Dijkstra/Bellman-Ford.
- For MST: Kruskal requires DSU; Prim benefits from a heap.

See `index.js` for BFS/DFS adjacency list examples.
