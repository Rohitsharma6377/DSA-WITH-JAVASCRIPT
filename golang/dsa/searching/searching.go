package searching

/*
Hinglish Notes (Searching):
- Linear search O(n); sorted array par Binary Search O(log n).
- Binary Search me mid se compare karke half space discard karte hain.

Basic Question: Binary Search
*/

func BinarySearch(arr []int, target int) int {
	l, r := 0, len(arr)-1
	for l <= r {
		m := l + (r-l)/2
		if arr[m] == target {
			return m
		}
		if arr[m] < target {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	return -1
}
