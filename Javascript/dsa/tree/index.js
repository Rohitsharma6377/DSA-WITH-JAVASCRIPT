/*
Theory: Trees
- Hierarchical structure of nodes with parent-child relationships.
- Binary Tree traversals: preorder, inorder, postorder, level-order.

Implementation: Binary Tree with traversals.
*/

class TreeNode { constructor(val, left=null, right=null) { this.val = val; this.left = left; this.right = right; } }

function preorder(root, out=[]) { if (!root) return out; out.push(root.val); preorder(root.left, out); preorder(root.right, out); return out; }
function inorder(root, out=[]) { if (!root) return out; inorder(root.left, out); out.push(root.val); inorder(root.right, out); return out; }
function postorder(root, out=[]) { if (!root) return out; postorder(root.left, out); postorder(root.right, out); out.push(root.val); return out; }
function levelOrder(root) {
  if (!root) return []; const q=[root], out=[]; while(q.length){ const n=q.length, lvl=[]; for(let i=0;i<n;i++){ const node=q.shift(); lvl.push(node.val); if(node.left) q.push(node.left); if(node.right) q.push(node.right);} out.push(lvl);} return out;
}

// Example
(function example() {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
  console.log('preorder', preorder(root, []));
  console.log('inorder', inorder(root, []));
  console.log('postorder', postorder(root, []));
  console.log('levelOrder', levelOrder(root));
})();

/*
Practice Q&A
Q: Check if a binary tree is height-balanced.
A: Use DFS returning height; if any subtree differs by >1 or returns -1, it's unbalanced. O(n).
*/
