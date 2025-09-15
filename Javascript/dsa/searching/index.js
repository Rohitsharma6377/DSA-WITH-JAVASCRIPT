/*
Theory: Searching
- Linear Search: O(n), scan all elements.
- Binary Search: O(log n), on sorted arrays; repeatedly halve the search interval.

Implementation: binarySearch(arr, target) returns index or -1.
*/

function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = l + ((r - l) >> 1);
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m + 1; else r = m - 1;
  }
  return -1;
}

// Example
(function example() {
  const a = [1, 3, 4, 6, 8, 10, 14];
  console.log('binarySearch 6 ->', binarySearch(a, 6)); // 3
  console.log('binarySearch 7 ->', binarySearch(a, 7)); // -1
})();

/*
Practice Q&A
Q: Find first occurrence of target in a sorted array with duplicates.
A: Variant of binary search: when arr[m] >= target, move r = m - 1 and record answer; otherwise move l = m + 1.
*/
