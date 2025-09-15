/*
Theory: Union-Find (Disjoint Set Union, DSU)
- Supports union and find operations to track connected components.
- With path compression and union by rank, operations are almost O(1) amortized.

Implementation: DSU class.
*/

class DSU {
  constructor(n) { this.parent = Array.from({length:n}, (_,i)=>i); this.rank = Array(n).fill(0); }
  find(x) { if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); return this.parent[x]; }
  union(a, b) {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++;
    return true;
  }
}

// Example
(function example(){
  const dsu = new DSU(5);
  dsu.union(0,1); dsu.union(1,2);
  console.log('connected 0-2', dsu.find(0) === dsu.find(2));
  console.log('connected 3-4', dsu.find(3) === dsu.find(4));
})();

/*
Practice Q&A
Q: Applications of DSU?
A: Kruskal's MST, dynamic connectivity, counting components, percolation, union of intervals.
*/
