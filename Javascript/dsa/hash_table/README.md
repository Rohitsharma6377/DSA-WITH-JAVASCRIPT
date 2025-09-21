# Hash Table (JavaScript)

 Hash tables map keys to values with average O(1) insert/find/delete using hashing. Collisions are resolved by chaining or open addressing.

 ## Concepts
 - Hash function: maps key -> index; good distribution reduces collisions.
 - Collision resolution: separate chaining (buckets/lists) or open addressing (probe sequences).
 - Load factor: elements/capacity; resizing keeps operations near O(1) expected.

 ## Operations (Expected)
 - Insert, Search, Delete: O(1) average; O(n) worst if many collisions.

 ## JavaScript Tips
 - Use `Map`/`Set` for key-value and membership tests; preserves insertion order, supports any key type.
 - Use plain `{}` when keys are strings/symbols and you don't need order; beware prototype keys (use `Object.create(null)`).
 - Use `has`, `get`, `set`, `delete` on `Map`.

 ## Common Interview Problems
 - Two-sum, subarray sum equals k (prefix sums in a map).
 - First unique character, anagram grouping, isomorphic strings.
 - Longest substring without repeats (map from char->index).
 - LRU Cache (hash map + doubly linked list).

 ## Pitfalls
 - Collisions causing degradation: understand expected vs worst-case.
 - Using object as key in `{}` gets coerced to `"[object Object]"`; use `Map` instead.
 - Forgetting to update counts back to zero or delete entries in frequency maps.

 ## Checklist
 - Choose `Map` vs `{}` appropriately.
 - Decide on initialization for counts: `(m.get(k)||0)+1` pattern.
 - For prefix sums, define the base `0 -> 1` occurrence when needed.

 See `index.js` for frequency map and two-sum examples.
