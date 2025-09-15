/*
Theory: Greedy Algorithms
- Build solution step-by-step choosing locally optimal choice, hoping for global optimum.
- Works when greedy-choice property and optimal substructure hold.

Implementation: Activity selection (max non-overlapping intervals).
*/

function activitySelection(intervals) {
  intervals.sort((a,b) => a[1] - b[1]);
  const res = []; let end = -Infinity;
  for (const [s, e] of intervals) {
    if (s >= end) { res.push([s,e]); end = e; }
  }
  return res;
}

// Example
(function example() {
  const intervals = [[1,2],[3,4],[0,6],[5,7],[8,9],[5,9]];
  console.log('activitySelection', activitySelection(intervals));
})();

/*
Practice Q&A
Q: Why does greedy fail for some coin systems?
A: Non-canonical coin systems may require non-greedy combinations to minimize count (use DP instead).
*/
