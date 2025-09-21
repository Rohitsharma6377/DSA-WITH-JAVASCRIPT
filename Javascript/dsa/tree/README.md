# Trees (JavaScript)

Trees are hierarchical structures with nodes connected by edges; a Binary Tree has up to two children per node.

## Types
- Binary Tree (BT), Binary Search Tree (BST), AVL/Red-Black (balanced BST), Trie, Heap.
- Full/Complete/Perfect trees; properties affect height and complexity.

## Traversals
- DFS: preorder (NLR), inorder (LNR), postorder (LRN).
- BFS: level-order using a queue.
- In a BST, inorder traversal yields sorted order.

## Common Interview Problems
- Maximum depth / balanced binary tree.
- Lowest common ancestor (LCA).
- Validate BST (use range constraints, not just local comparisons).
- Path sum, diameter of a tree, count nodes of a complete tree.
- Serialize/deserialize tree.

## Pitfalls
- Confusing subtree validity: validating BST needs passing min/max bounds down recursion.
- Modifying nodes while traversing without preserving references.
- Stack overflow on extremely skewed trees with recursive traversals (convert to iterative when needed).

## Complexity
- Most traversals: O(n) time, O(h) space where h is height (stack/queue).
- Balanced BST height is O(log n); skewed can be O(n).

## Checklist
- Choose DFS or BFS appropriately.
- For BST: ensure invariants with min/max bounds.
- When aggregating values (sum/diameter), decide postorder vs preorder placement.

See `index.js` for traversal examples.
