/*
Theory: Strings
- Immutable sequences of characters in JS.
- Common tasks: parsing, searching, pattern matching.

Implementation: reverse words in a sentence and check anagrams.
*/

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
}

function areAnagrams(a, b) {
  if (a.length !== b.length) return false;
  const cnt = new Map();
  for (const ch of a) cnt.set(ch, (cnt.get(ch)||0)+1);
  for (const ch of b) {
    if (!cnt.has(ch)) return false;
    const v = cnt.get(ch) - 1; if (v === 0) cnt.delete(ch); else cnt.set(ch, v);
  }
  return cnt.size === 0;
}

// Example
(function example() {
  console.log('reverseWords', reverseWords('  hello   world  '));
  console.log('areAnagrams', areAnagrams('listen', 'silent'));
})();

/*
Practice Q&A
Q: Find first unique character in a string.
A: Count frequencies with a map, then scan to return the first index with count 1.
*/
