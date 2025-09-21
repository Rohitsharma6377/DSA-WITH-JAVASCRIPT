/*
Theory: Backtracking
- Systematically search for solutions by building candidates incrementally and abandoning a candidate (backtrack) as soon as it cannot lead to a valid solution.
- Typical pattern: choose -> explore -> unchoose.

Implementation: Generate permutations of an array.
*/

function permutations(nums) {
  const res = [], used = Array(nums.length).fill(false), path = [];
  function dfs() {
    if (path.length === nums.length) { res.push(path.slice()); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; path.push(nums[i]);
      dfs();
      path.pop(); used[i] = false; // backtrack
    }
  }
  dfs();
  return res;
}

// Example
(function example() {
  console.log('permutations', permutations([1,2,3]));
})();

/*
Practice Q&A
Q: Solve N-Queens briefly.
A: Backtrack row by row; use sets to track used columns and diagonals; place a queen only if safe, then recurse.
*/
