/*
Hinglish Notes (Searching):
- Linear search O(n) hota hai; sorted array par Binary Search O(log n) hota hai.
- Binary Search me mid nikalke half space discard karte hain.

Basic Question: Binary Search (sorted array me target ka index)
Approach: l, r pointers; mid compare; accordingly l/r move.
*/

export function binarySearch(arr: number[], target: number): number {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = l + ((r - l) >> 1);
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m + 1; else r = m - 1;
  }
  return -1;
}

if (require.main === module) {
  const a = [1,3,4,6,8,10];
  console.log('binarySearch TS 6 ->', binarySearch(a, 6));
}
