/*
Theory: Divide and Conquer
- Break a problem into subproblems, solve recursively, combine results.
- Examples: mergesort, quicksort, binary search, Karatsuba multiplication.

Implementation: Quicksort (in-place, average O(n log n), worst O(n^2))
*/

function partition(arr, l, r) {
  const pivot = arr[r];
  let i = l;
  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) { [arr[i], arr[j]] = [arr[j], arr[i]]; i++; }
  }
  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
}

function quicksort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return;
  const p = partition(arr, l, r);
  quicksort(arr, l, p - 1);
  quicksort(arr, p + 1, r);
}

// Example
(function example() {
  const a = [5,3,8,4,2,7,1,10];
  quicksort(a);
  console.log('quicksort', a);
})();

/*
Practice Q&A
Q: Why does randomized pivot selection help?
A: It avoids consistently bad pivots on adversarial inputs, making the expected time O(n log n).
*/
