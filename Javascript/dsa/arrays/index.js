/*
Theory: Arrays
- Arrays are contiguous memory structures offering O(1) average access by index.
- Common ops: access O(1), search O(n), push/pop end O(1) amortized, shift/unshift O(n), insert/delete middle O(n).
- Use cases: ordered collections, random access.

Basic Implementation: common utilities
1) reverseInPlace(arr): reverse array in O(n) time, O(1) space
2) twoSumSorted(arr, target): two pointers on sorted array to find a pair
*/

// 1) Reverse array in place
function reverseInPlace(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++; j--;
  }
  return arr;
}

// 2) Two-sum on sorted array (two pointers)
function twoSumSorted(arr, target) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === target) return [i, j];
    if (sum < target) i++; else j--;
  }
  return [-1, -1];
}

// Example
(function example() {
  const a = [1, 2, 3, 4, 5];
  console.log('reverseInPlace', reverseInPlace(a.slice()));
  console.log('twoSumSorted', twoSumSorted([1, 2, 3, 4, 6, 8, 11], 10)); // -> indices of 2 and 8
})();

/*
Practice Q&A
Q: How to rotate an array right by k steps in O(n) time and O(1) space?
A: Use reversal: reverse whole array, reverse first k, reverse remaining n-k.
*/
