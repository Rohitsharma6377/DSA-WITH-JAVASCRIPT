/*
Theory: Trie (Prefix Tree)
- Efficient for storing/searching strings by prefixes.
- Each node has links for characters and end-of-word flag.

Implementation: insert and search.
*/

class TrieNode { constructor() { this.children = new Map(); this.end = false; } }
class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.end = true;
  }
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
    }
    return node.end === true;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
    }
    return true;
  }
}

// Example
(function example(){
  const t = new Trie();
  t.insert('cat'); t.insert('car');
  console.log('search cat', t.search('cat'));
  console.log('startsWith ca', t.startsWith('ca'));
})();

/*
Practice Q&A
Q: How to list words with a given prefix?
A: Traverse to the prefix node, then DFS to collect all words under it.
*/
