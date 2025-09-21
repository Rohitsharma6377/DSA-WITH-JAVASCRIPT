/*
Theory: Hash Table
- Stores key->value pairs with average O(1) insert, search, delete using hashing.
- In JS, `Map` and `Object` are common hash-based structures.
- Collisions handled by chaining or open addressing (engine-specific for built-ins).

Implementation: Simple frequency map and two-sum using a hash table.
*/

// Build frequency map
function freqMap(arr) {
  const m = new Map();
  for (const x of arr) m.set(x, (m.get(x) || 0) + 1);
  return m;
}

// Two-sum (unsorted) using a set
function twoSum(arr, target) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];
    if (seen.has(need)) return true;
    seen.add(arr[i]);
  }
  return false;
}

// Example
(function example() {
  console.log('freqMap', [...freqMap(['a','b','a']).entries()]);
  console.log('twoSum', twoSum([2,7,11,15], 9)); // true
})();

/*
Practice Q&A
Q: Find first non-repeating character in a string.
A: Count with a hash map, then scan again to return the first char with freq 1.
*/
