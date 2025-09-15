/*
Theory: Sorting
- Order elements by comparator. Many algorithms exist with trade-offs.

Implementation: Insertion Sort (O(n^2), stable, good for small/near-sorted arrays).
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; }
    arr[j+1] = key;
  }
  return arr;
}

// Example
(function example() {
  const a = [5,2,9,1,5,6];
  console.log('insertionSort', insertionSort(a.slice()));
})();

/*
Practice Q&A
Q: When is insertion sort preferred?
A: For tiny arrays or nearly sorted data; it's simple and has low overhead.
*/
