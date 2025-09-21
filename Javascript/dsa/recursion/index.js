/*
Theory: Recursion
- A function calls itself on smaller subproblems until base case.
- Ensure base case, progress, and correctness.

Implementation: factorial and binary search via recursion.
*/

function factorial(n) { return n <= 1 ? 1 : n * factorial(n-1); }

function binarySearchRec(arr, target, l = 0, r = arr.length - 1) {
  if (l > r) return -1;
  const m = l + ((r - l) >> 1);
  if (arr[m] === target) return m;
  if (arr[m] < target) return binarySearchRec(arr, target, m + 1, r);
  return binarySearchRec(arr, target, l, m - 1);
}

// Example
(function example() {
  console.log('factorial 5 =', factorial(5));
  console.log('binarySearchRec', binarySearchRec([1,3,5,7], 5));
})();

/*
Practice Q&A
Q: Why might recursion be problematic in JS?
A: JS has limited call stack size; deep recursion can cause stack overflow. Convert to iterative or use tail-call in engines that support it.
*/
