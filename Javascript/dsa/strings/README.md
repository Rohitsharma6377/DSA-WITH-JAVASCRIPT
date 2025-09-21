# Strings (JavaScript)

 Strings are immutable sequences of UTF-16 code units in JS. Typical tasks include searching, parsing, and pattern matching.

 ## Operations & Tips
 - Build with arrays then `join('')` for performance in large concatenations.
 - Regex for pattern matching; `indexOf`, `includes`, `startsWith`, `endsWith` for simple search.
 - Normalize case/whitespace when comparing user input.

 ## Patterns
 - Frequency maps for anagram checks and window problems.
 - Sliding window for substring problems (longest unique, minimum window substring).
 - Two pointers for palindrome checks and reversing words.
 - Rolling hash (Rabin–Karp) for substring search; KMP/Z algorithms for linear-time search.

 ## Pitfalls
 - Unicode complexities (surrogate pairs, grapheme clusters). For simple interview tasks, plain methods usually suffice, but be aware.
 - Mutability: operations like `s[i] = 'x'` won't work; create new strings.

 ## Practice Prompts
 1) Reverse words in a string.
 2) Valid palindrome ignoring non-alphanumeric.
 3) Group anagrams.
 4) Longest substring without repeating characters.
 5) Minimum window substring.

 See `index.js` for reverse words and anagram examples.
