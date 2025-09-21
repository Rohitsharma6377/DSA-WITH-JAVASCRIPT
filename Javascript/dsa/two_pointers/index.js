/*
Theory: Two Pointers
- Use two indices moving through a structure to achieve O(n) solutions.
- Common in sorted arrays and string problems.

Implementation: Remove duplicates from sorted array (return new length and mutate in place).
*/

function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return 0;
  let w = 1;
  for (let r = 1; r < arr.length; r++) {
    if (arr[r] !== arr[w-1]) arr[w++] = arr[r];
  }
  return w; // new length
}

// Example
(function example(){
  const a = [1,1,2,2,3,3,3,4];
  const len = removeDuplicatesSorted(a);
  console.log('removeDuplicatesSorted len', len, 'array', a.slice(0, len));
})();

/*
Practice Q&A
Q: Given sorted array and target, find two numbers that sum to target.
A: Use i=0, j=n-1; move i or j based on sum compare to target.
*/
