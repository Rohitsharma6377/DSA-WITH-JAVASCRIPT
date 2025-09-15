/*
Theory: Heap
- A complete binary tree with heap property (min-heap: parent <= children).
- Supports O(log n) push/pop of min or max.

Implementation: Array-based MinHeap.
*/

class MinHeap {
  constructor() { this.a = []; }
  size() { return this.a.length; }
  peek() { return this.a[0]; }
  push(x) { this.a.push(x); this._siftUp(this.size()-1); }
  pop() {
    if (this.size() === 0) return undefined;
    const top = this.a[0];
    const last = this.a.pop();
    if (this.size()) { this.a[0] = last; this._siftDown(0); }
    return top;
  }
  _siftUp(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.a[p] <= this.a[i]) break;
      [this.a[p], this.a[i]] = [this.a[i], this.a[p]]; i = p;
    }
  }
  _siftDown(i) {
    const n = this.size();
    while (true) {
      let s = i;
      const l = 2*i+1, r = 2*i+2;
      if (l < n && this.a[l] < this.a[s]) s = l;
      if (r < n && this.a[r] < this.a[s]) s = r;
      if (s === i) break;
      [this.a[i], this.a[s]] = [this.a[s], this.a[i]]; i = s;
    }
  }
}

// Example
(function example() {
  const h = new MinHeap();
  [5,3,8,1,4].forEach(x => h.push(x));
  const out = []; while (h.size()) out.push(h.pop());
  console.log('heap pop order', out); // sorted ascending
})();

/*
Practice Q&A
Q: How to get running median of a stream?
A: Use two heaps (max-heap for lower half, min-heap for upper half) and balance sizes.
*/
