/*
Hinglish Notes (Arrays):
- Array ek ordered list hoti hai jisme hum O(1) average time me index se access kar sakte hain.
- Common ops: push/pop (O(1) amortized), shift/unshift (O(n)), search (O(n)), sorted me binary search (O(log n)).

Basic Question: Reverse an array in-place
Approach: Do pointer swap from dono ends.
*/

export function reverseInPlace<T>(arr: T[]): T[] {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++; j--;
  }
  return arr;
}

// Example
if (require.main === module) {
  const a = [1,2,3,4,5];
  console.log('reverseInPlace TS:', reverseInPlace(a.slice()));
}
