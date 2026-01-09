/**
 * ARRAY DATA STRUCTURE - Complete Guide
 * Array ke saare important methods aur operations with Hinglish explanations
 */

// ==================== BASIC ARRAY OPERATIONS ====================

// 1. Array Creation - Array banana
function createArray() {
    // Explanation: Array banane ke different tarike
    const arr1 = [1, 2, 3, 4, 5]; // Direct initialization
    const arr2 = new Array(5); // Fixed size array
    const arr3 = Array.from({ length: 5 }, (_, i) => i + 1); // Array.from se
    const arr4 = [...Array(5)].map((_, i) => i + 1); // Spread operator se

    console.log('Arrays created:', arr1, arr2, arr3, arr4);
    return arr1;
}

// 2. Array Traversal - Array ko traverse karna
function traverseArray(arr) {
    // Explanation: Array ke har element ko access karna
    console.log('=== Array Traversal ===');

    // Method 1: For loop
    for (let i = 0; i < arr.length; i++) {
        console.log(`Index ${i}: ${arr[i]}`);
    }

    // Method 2: forEach
    arr.forEach((element, index) => {
        console.log(`Element at ${index}: ${element}`);
    });

    // Method 3: for...of
    for (const element of arr) {
        console.log(`Element: ${element}`);
    }
}

// 3. Array Insertion - Element add karna
function insertElement(arr, element, position) {
    // Explanation: Array mein element insert karna
    if (position === 'start') {
        arr.unshift(element); // Starting mein add
    } else if (position === 'end') {
        arr.push(element); // End mein add
    } else {
        arr.splice(position, 0, element); // Specific position pe add
    }
    return arr;
}

// 4. Array Deletion - Element delete karna
function deleteElement(arr, position) {
    // Explanation: Array se element remove karna
    if (position === 'start') {
        return arr.shift(); // Pehla element remove
    } else if (position === 'end') {
        return arr.pop(); // Last element remove
    } else {
        return arr.splice(position, 1)[0]; // Specific position se remove
    }
}

// 5. Array Search - Element dhundhna
function searchElement(arr, target) {
    // Explanation: Array mein element ko search karna

    // Linear Search
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Element ka index return karo
        }
    }
    return -1; // Nahi mila toh -1
}

// 6. Binary Search - Sorted array mein fast search
function binarySearch(arr, target) {
    // Explanation: Sorted array mein element ko efficiently dhundhna
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element mil gaya
        } else if (arr[mid] < target) {
            left = mid + 1; // Right half mein dhundho
        } else {
            right = mid - 1; // Left half mein dhundho
        }
    }
    return -1; // Element nahi mila
}

// ==================== ARRAY MANIPULATION ====================

// 7. Reverse Array - Array ko ulta karna
function reverseArray(arr) {
    // Explanation: Array ke elements ko reverse order mein arrange karna

    // Method 1: Built-in reverse
    const reversed1 = [...arr].reverse();

    // Method 2: Two pointer approach
    const reversed2 = [...arr];
    let left = 0, right = reversed2.length - 1;
    while (left < right) {
        [reversed2[left], reversed2[right]] = [reversed2[right], reversed2[left]];
        left++;
        right--;
    }

    return reversed2;
}

// 8. Rotate Array - Array ko rotate karna
function rotateArray(arr, k) {
    // Explanation: Array ko k positions se rotate karna
    const n = arr.length;
    k = k % n; // Handle k > n case

    // Method: Reverse approach
    const reverse = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1); // Pura array reverse
    reverse(0, k - 1); // Pehle k elements reverse
    reverse(k, n - 1); // Baaki elements reverse

    return arr;
}

// 9. Find Maximum - Sabse bada element dhundhna
function findMax(arr) {
    // Explanation: Array mein sabse bada element find karna

    // Method 1: Math.max
    const max1 = Math.max(...arr);

    // Method 2: Reduce
    const max2 = arr.reduce((max, curr) => curr > max ? curr : max, arr[0]);

    // Method 3: Loop
    let max3 = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max3) max3 = arr[i];
    }

    return max3;
}

// 10. Find Minimum - Sabse chota element dhundhna
function findMin(arr) {
    // Explanation: Array mein sabse chota element find karna
    return Math.min(...arr);
}

// 11. Sum of Array - Sabhi elements ka sum
function arraySum(arr) {
    // Explanation: Array ke saare elements ko add karna
    return arr.reduce((sum, curr) => sum + curr, 0);
}

// 12. Average of Array - Array ka average
function arrayAverage(arr) {
    // Explanation: Array elements ka average nikalna
    return arraySum(arr) / arr.length;
}

// 13. Remove Duplicates - Duplicate elements hatana
function removeDuplicates(arr) {
    // Explanation: Array se duplicate values remove karna

    // Method 1: Set use karke
    const unique1 = [...new Set(arr)];

    // Method 2: Filter use karke
    const unique2 = arr.filter((item, index) => arr.indexOf(item) === index);

    return unique1;
}

// 14. Merge Two Arrays - Do arrays ko merge karna
function mergeArrays(arr1, arr2) {
    // Explanation: Do arrays ko ek mein combine karna

    // Method 1: Spread operator
    const merged1 = [...arr1, ...arr2];

    // Method 2: Concat
    const merged2 = arr1.concat(arr2);

    return merged1;
}

// 15. Merge Sorted Arrays - Do sorted arrays ko merge karna
function mergeSortedArrays(arr1, arr2) {
    // Explanation: Do sorted arrays ko sorted order mein merge karna
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    // Baaki elements add karo
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}

// ==================== SORTING ALGORITHMS ====================

// 16. Bubble Sort - Bubble sort algorithm
function bubbleSort(arr) {
    // Explanation: Adjacent elements ko compare karke sort karna
    const n = arr.length;
    const sorted = [...arr];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
}

// 17. Selection Sort - Selection sort algorithm
function selectionSort(arr) {
    // Explanation: Har iteration mein minimum element select karke sahi position pe rakhna
    const n = arr.length;
    const sorted = [...arr];

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (sorted[j] < sorted[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
        }
    }
    return sorted;
}

// 18. Insertion Sort - Insertion sort algorithm
function insertionSort(arr) {
    // Explanation: Har element ko uski sahi position pe insert karna
    const n = arr.length;
    const sorted = [...arr];

    for (let i = 1; i < n; i++) {
        const key = sorted[i];
        let j = i - 1;

        while (j >= 0 && sorted[j] > key) {
            sorted[j + 1] = sorted[j];
            j--;
        }
        sorted[j + 1] = key;
    }
    return sorted;
}

// 19. Quick Sort - Quick sort algorithm
function quickSort(arr) {
    // Explanation: Pivot element choose karke array ko partition karna
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// 20. Merge Sort - Merge sort algorithm
function mergeSort(arr) {
    // Explanation: Array ko divide karke sort karna aur phir merge karna
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeSortedArrays(left, right);
}

// ==================== ARRAY PROBLEMS ====================

// 21. Two Sum - Do numbers jinki sum target ke barabar ho
function twoSum(arr, target) {
    // Explanation: Array mein do numbers dhundhna jinki sum target ho
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return null;
}

// 22. Three Sum - Teen numbers jinki sum zero ho
function threeSum(arr) {
    // Explanation: Array mein teen numbers dhundhna jinki sum 0 ho
    arr.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

// 23. Contains Duplicate - Duplicate element check karna
function containsDuplicate(arr) {
    // Explanation: Array mein duplicate element hai ya nahi check karna
    return new Set(arr).size !== arr.length;
}

// 24. Product of Array Except Self - Khud ko chhodkar baaki ka product
function productExceptSelf(arr) {
    // Explanation: Har index pe baaki elements ka product calculate karna
    const n = arr.length;
    const result = new Array(n).fill(1);

    // Left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }

    // Right products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    return result;
}

// 25. Maximum Subarray Sum (Kadane's Algorithm)
function maxSubarraySum(arr) {
    // Explanation: Continuous subarray ka maximum sum find karna
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Export all functions
module.exports = {
    createArray,
    traverseArray,
    insertElement,
    deleteElement,
    searchElement,
    binarySearch,
    reverseArray,
    rotateArray,
    findMax,
    findMin,
    arraySum,
    arrayAverage,
    removeDuplicates,
    mergeArrays,
    mergeSortedArrays,
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSort,
    twoSum,
    threeSum,
    containsDuplicate,
    productExceptSelf,
    maxSubarraySum
};

// Test examples
if (require.main === module) {
    console.log('=== Array Operations Demo ===\n');

    const testArr = [5, 2, 8, 1, 9, 3];
    console.log('Original Array:', testArr);
    console.log('Sorted (Quick Sort):', quickSort(testArr));
    console.log('Reversed:', reverseArray(testArr));
    console.log('Max Element:', findMax(testArr));
    console.log('Sum:', arraySum(testArr));
    console.log('Two Sum (target=10):', twoSum(testArr, 10));
}
