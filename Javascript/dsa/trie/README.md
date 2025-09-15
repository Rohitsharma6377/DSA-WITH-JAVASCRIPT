# Trie (JavaScript)

 A Trie (prefix tree) stores strings character-by-character along paths from the root, enabling efficient prefix queries.

 ## Operations & Complexity
 - insert(word): O(L)
 - search(word): O(L)
 - startsWith(prefix): O(L)
 Where L is the word/prefix length.

 ## Implementation Notes
 - Each node maps char -> child and tracks an `end` flag for complete words.
 - In JS, use `Map` for children to support any character set.

 ## Use Cases
 - Autocomplete and prefix search.
 - Dictionary search with wildcards.
 - Word break variants and word games (Boggle, word search).

 ## Pitfalls
 - Memory usage can be high; consider compressing paths (radix tree) if needed.
 - Ensure `end` flag is set only for complete words; `startsWith` should not require it.

 ## Practice Prompts
 1) Implement Trie with insert/search/startsWith.
 2) Word search II (board of letters + dictionary).
 3) Replace words (use shortest dictionary root prefix).
 4) Longest word in dictionary that can be built one char at a time.

 See `index.js` for a basic Trie implementation and usage.
