package main

import (
	"fmt"
	"c:\\Users\\ASUS\\Desktop\\DSA-WITH-JAVASCRIPT\\golang\\dsa\\arrays"
	"c:\\Users\\ASUS\\Desktop\\DSA-WITH-JAVASCRIPT\\golang\\dsa\\searching"
)

func runArrays() {
	a := []int{1,2,3,4,5}
	arrays.ReverseInPlace(a)
	fmt.Println("Go Arrays ReverseInPlace:", a)
}

func runSearching() {
	a := []int{1,3,4,6,8,10}
	fmt.Println("Go Searching BinarySearch 6 ->", searching.BinarySearch(a, 6))
}

func main() {
	fmt.Println("--- Go DSA Runner ---")
	runArrays()
	runSearching()
}
