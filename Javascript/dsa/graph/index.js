/*
Theory: Graphs
- Vertices connected by edges (directed/undirected, weighted/unweighted).
- Traversals: BFS (level-order, shortest path in unweighted), DFS (path exploration, cycle detection).

Implementation: BFS and DFS on adjacency list.
*/

function bfs(adj, start) {
  const q = [start], visited = new Set([start]), order = [];
  while (q.length) {
    const u = q.shift(); order.push(u);
    for (const v of adj[u] || []) if (!visited.has(v)) { visited.add(v); q.push(v); }
  }
  return order;
}

function dfs(adj, start) {
  const stack = [start], visited = new Set(), order = [];
  while (stack.length) {
    const u = stack.pop();
    if (visited.has(u)) continue;
    visited.add(u); order.push(u);
    const nbrs = adj[u] || [];
    for (let i = nbrs.length - 1; i >= 0; i--) if (!visited.has(nbrs[i])) stack.push(nbrs[i]);
  }
  return order;
}

// Example
(function example() {
  const adj = { A: ['B','C'], B: ['D'], C: ['D'], D: [] };
  console.log('BFS A', bfs(adj, 'A'));
  console.log('DFS A', dfs(adj, 'A'));
})();

/*
Practice Q&A
Q: How to detect a cycle in a directed graph?
A: Use DFS with states (unvisited, visiting, visited). A back-edge to a visiting node indicates a cycle.
*/
