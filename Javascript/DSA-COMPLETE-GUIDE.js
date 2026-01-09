/**
 * DSA WITH JAVASCRIPT - COMPLETE REFERENCE GUIDE
 * 150+ Functions across all Data Structures
 * Hinglish explanations ke saath
 */

// ==================== TABLE OF CONTENTS ====================

/*
1. ARRAY (25 functions) - array-methods.js
   - Basic Operations, Sorting, Searching, Array Problems
   
2. LINKED LIST (25 functions) - linkedlist.js
   - Singly Linked List, Doubly Linked List, Operations
   
3. STACK (15 functions) - stack.js
   - Stack Implementation, Applications
   
4. QUEUE (15 functions) - queue.js
   - Queue, Circular Queue, Priority Queue, Deque
   
5. TREE (20 functions) - tree.js
   - Binary Tree, BST, Traversals, Operations
   
6. GRAPH (15 functions) - graph.js
   - Graph Representation, BFS, DFS, Shortest Path
   
7. HASH TABLE (15 functions) - hash.js
   - Hash Map, Hash Set, Collision Handling
   
8. STRING (20 functions) - string.js
   - String Manipulation, Pattern Matching
   
9. ALGORITHMS (20 functions) - algo.js
   - Sorting, Searching, Recursion, Dynamic Programming
   
10. INTERVIEW PROBLEMS (20+ functions) - interview.js
    - Common Interview Questions
*/

// ==================== QUICK REFERENCE ====================

const DSA_QUICK_REFERENCE = {
    // Time Complexities
    timeComplexities: {
        'Array Access': 'O(1)',
        'Array Search': 'O(n)',
        'Binary Search': 'O(log n)',
        'Bubble Sort': 'O(n²)',
        'Quick Sort': 'O(n log n)',
        'Merge Sort': 'O(n log n)',
        'Hash Table Insert': 'O(1)',
        'Hash Table Search': 'O(1)',
        'BFS/DFS': 'O(V + E)',
        'Dijkstra': 'O((V + E) log V)'
    },

    // Space Complexities
    spaceComplexities: {
        'Array': 'O(n)',
        'Linked List': 'O(n)',
        'Stack/Queue': 'O(n)',
        'Hash Table': 'O(n)',
        'Tree': 'O(n)',
        'Graph': 'O(V + E)'
    },

    // Common Patterns
    patterns: {
        'Two Pointers': 'Sorted array problems',
        'Sliding Window': 'Subarray/substring problems',
        'Fast & Slow Pointers': 'Cycle detection',
        'Merge Intervals': 'Overlapping intervals',
        'Cyclic Sort': 'Missing numbers',
        'In-place Reversal': 'Linked list reversal',
        'Tree BFS': 'Level order traversal',
        'Tree DFS': 'Path problems',
        'Two Heaps': 'Median finding',
        'Subsets': 'Permutations/combinations',
        'Modified Binary Search': 'Rotated arrays',
        'Top K Elements': 'Heap problems',
        'K-way Merge': 'Merge sorted arrays',
        'Dynamic Programming': 'Optimization problems'
    }
};

// ==================== COMMON INTERVIEW QUESTIONS ====================

const INTERVIEW_QUESTIONS = {
    easy: [
        'Two Sum',
        'Reverse String',
        'Valid Parentheses',
        'Merge Two Sorted Lists',
        'Maximum Subarray',
        'Best Time to Buy and Sell Stock',
        'Contains Duplicate',
        'Valid Anagram',
        'Climbing Stairs',
        'Linked List Cycle'
    ],

    medium: [
        'Add Two Numbers',
        'Longest Substring Without Repeating Characters',
        'Container With Most Water',
        'Three Sum',
        'Group Anagrams',
        'Product of Array Except Self',
        'Rotate Image',
        'Spiral Matrix',
        'Jump Game',
        'Unique Paths'
    ],

    hard: [
        'Median of Two Sorted Arrays',
        'Merge K Sorted Lists',
        'Trapping Rain Water',
        'Longest Valid Parentheses',
        'Wildcard Matching',
        'Regular Expression Matching',
        'Edit Distance',
        'Word Ladder',
        'Palindrome Partitioning II',
        'Burst Balloons'
    ]
};

// ==================== DATA STRUCTURE CHEAT SHEET ====================

const CHEAT_SHEET = {
    array: {
        creation: 'const arr = [1, 2, 3] or new Array(5)',
        access: 'arr[index]',
        insertion: 'arr.push(item), arr.unshift(item), arr.splice(index, 0, item)',
        deletion: 'arr.pop(), arr.shift(), arr.splice(index, 1)',
        search: 'arr.indexOf(item), arr.find(callback)',
        iteration: 'for, forEach, map, filter, reduce'
    },

    linkedList: {
        creation: 'new LinkedList()',
        insertion: 'insertAtBeginning(), insertAtEnd(), insertAtPosition()',
        deletion: 'deleteFromBeginning(), deleteFromEnd(), deleteAtPosition()',
        search: 'search(data)',
        traversal: 'while(current) { current = current.next }'
    },

    stack: {
        creation: 'new Stack()',
        operations: 'push(), pop(), peek(), isEmpty()',
        applications: 'Expression evaluation, Backtracking, Function calls'
    },

    queue: {
        creation: 'new Queue()',
        operations: 'enqueue(), dequeue(), front(), isEmpty()',
        applications: 'BFS, Task scheduling, Buffer'
    },

    tree: {
        creation: 'new BinaryTree()',
        traversals: 'inorder, preorder, postorder, levelorder',
        operations: 'insert(), delete(), search(), height()',
        types: 'Binary Tree, BST, AVL, Red-Black, Heap'
    },

    graph: {
        representation: 'Adjacency Matrix, Adjacency List',
        traversals: 'BFS, DFS',
        algorithms: 'Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal, Prim',
        applications: 'Social networks, Maps, Web crawling'
    },

    hashTable: {
        creation: 'new Map() or new Set()',
        operations: 'set(), get(), has(), delete()',
        collisionHandling: 'Chaining, Open Addressing',
        applications: 'Caching, Indexing, Counting'
    }
};

// ==================== ALGORITHM TEMPLATES ====================

const ALGORITHM_TEMPLATES = {
    // Binary Search Template
    binarySearch: `
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,

    // Two Pointers Template
    twoPointers: `
function twoPointers(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        // Process elements
        if (condition) left++;
        else right--;
    }
}`,

    // Sliding Window Template
    slidingWindow: `
function slidingWindow(arr, k) {
    let windowSum = 0, maxSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}`,

    // DFS Template
    dfs: `
function dfs(node, visited = new Set()) {
    if (!node || visited.has(node)) return;
    visited.add(node);
    // Process node
    for (const neighbor of node.neighbors) {
        dfs(neighbor, visited);
    }
}`,

    // BFS Template
    bfs: `
function bfs(start) {
    const queue = [start];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const node = queue.shift();
        // Process node
        for (const neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}`,

    // Dynamic Programming Template
    dp: `
function dpProblem(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = baseCase;
    
    for (let i = 1; i <= n; i++) {
        dp[i] = // recurrence relation
    }
    return dp[n];
}`,

    // Backtracking Template
    backtracking: `
function backtrack(path, choices) {
    if (isComplete(path)) {
        result.push([...path]);
        return;
    }
    
    for (const choice of choices) {
        // Make choice
        path.push(choice);
        backtrack(path, getNextChoices());
        // Undo choice
        path.pop();
    }
}`
};

// ==================== TIPS AND TRICKS ====================

const TIPS_AND_TRICKS = {
    general: [
        'Pehle problem ko samjho, phir code karo',
        'Edge cases ko handle karo (empty, null, single element)',
        'Time aur space complexity ko optimize karo',
        'Test cases likho aur verify karo',
        'Code ko readable aur maintainable rakho'
    ],

    arrays: [
        'Sorted array mein binary search use karo',
        'Two pointers technique se space optimize karo',
        'Hash map se O(1) lookup achieve karo',
        'Sliding window se subarray problems solve karo'
    ],

    strings: [
        'Character frequency count ke liye hash map use karo',
        'Palindrome check ke liye two pointers use karo',
        'Pattern matching ke liye KMP algorithm use karo',
        'Anagram check ke liye sorting ya frequency count use karo'
    ],

    linkedLists: [
        'Cycle detection ke liye fast-slow pointers use karo',
        'Reverse ke liye iterative ya recursive approach use karo',
        'Dummy node se edge cases handle karo',
        'Two pointers se middle element find karo'
    ],

    trees: [
        'Recursion naturally trees ke saath fit hota hai',
        'Level order traversal ke liye queue use karo',
        'Path problems ke liye DFS use karo',
        'BST mein search O(log n) hoti hai'
    ],

    graphs: [
        'Connected components ke liye DFS/BFS use karo',
        'Shortest path ke liye Dijkstra use karo',
        'Cycle detection ke liye DFS use karo',
        'Topological sort ke liye Kahn\'s algorithm use karo'
    ]
};

// ==================== PRACTICE RESOURCES ====================

const PRACTICE_RESOURCES = {
    websites: [
        'LeetCode - leetcode.com',
        'HackerRank - hackerrank.com',
        'CodeForces - codeforces.com',
        'GeeksforGeeks - geeksforgeeks.org',
        'InterviewBit - interviewbit.com',
        'Codewars - codewars.com',
        'TopCoder - topcoder.com'
    ],

    studyPlan: {
        week1: 'Arrays and Strings',
        week2: 'Linked Lists and Stacks',
        week3: 'Trees and Graphs',
        week4: 'Dynamic Programming',
        week5: 'Advanced Topics',
        week6: 'Mock Interviews'
    }
};

// Export everything
module.exports = {
    DSA_QUICK_REFERENCE,
    INTERVIEW_QUESTIONS,
    CHEAT_SHEET,
    ALGORITHM_TEMPLATES,
    TIPS_AND_TRICKS,
    PRACTICE_RESOURCES
};

// Print reference guide
if (require.main === module) {
    console.log('=== DSA COMPLETE REFERENCE GUIDE ===\n');
    console.log('📚 Total Functions: 150+');
    console.log('📁 Data Structures: 10');
    console.log('🎯 Interview Questions: 30+');
    console.log('\n✨ All files created with Hinglish explanations!');
    console.log('\n📖 Check individual files for detailed implementations:');
    console.log('   - array-methods.js (25 functions)');
    console.log('   - linkedlist.js (25 functions)');
    console.log('   - stack.js (15 functions)');
    console.log('   - queue.js (15 functions)');
    console.log('   - tree.js (20 functions)');
    console.log('   - graph.js (15 functions)');
    console.log('   - hash.js (15 functions)');
    console.log('   - string.js (20 functions)');
    console.log('   - algo.js (20 functions)');
    console.log('   - interview.js (20+ functions)');
}
