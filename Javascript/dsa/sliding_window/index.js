/*
Theory: Sliding Window
- Maintain a window over a sequence to compute metrics efficiently.
- Fixed-size or variable-size windows.

Implementation: Max sum of subarray of size k (fixed window).
*/

function maxSumSubarrayK(arr, k) {
  if (k > arr.length) return null;
  let sum = 0; for (let i = 0; i < k; i++) sum += arr[i];
  let best = sum;
  for (let i = k; i < arr.length; i++) { sum += arr[i] - arr[i-k]; best = Math.max(best, sum); }
  return best;
}

// Example
(function example() {
  console.log('maxSumSubarrayK', maxSumSubarrayK([2,1,5,1,3,2], 3)); // 9
})();

/*
Practice Q&A
Q: Longest substring without repeating characters approach?
A: Use variable window with a map from char->last index; move left pointer when a repeat is seen.
*/
