package arrays

/*
Hinglish Notes (Arrays):
- Array ordered collection hota hai. Index se access O(1) average.
- Push/pop end O(1) (slice me append amortized), beech me insert/delete O(n).

Basic Question: Reverse array in-place
Approach: Do pointer i,j se swap karte jao.
*/

func ReverseInPlace[T any](arr []T) {
	i, j := 0, len(arr)-1
	for i < j {
		arr[i], arr[j] = arr[j], arr[i]
		i++
		j--
	}
}
