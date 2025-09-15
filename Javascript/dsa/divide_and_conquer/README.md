# Divide and Conquer (JavaScript)

Divide and Conquer solves a problem by dividing it into subproblems, solving them recursively, and combining their results.

## Recurrences & Master Theorem
- Typical form: T(n) = a T(n/b) + f(n)
- Master theorem gives asymptotics comparing f(n) with n^{log_b a}.
  - If f(n) = O(n^{c}) with c < log_b a, then T(n) = Θ(n^{log_b a}).
  - If f(n) = Θ(n^{c}) with c = log_b a, then T(n) = Θ(n^{c} log n).
  - If f(n) = Ω(n^{c}) with c > log_b a and regularity holds, then T(n) = Θ(f(n)).

## Classic Problems
- Merge sort, quicksort.
- Binary search (divide range by 2 each step).
- Closest pair of points (plane sweep + DnC).
- Fast exponentiation (binary exponentiation), Karatsuba multiplication.

## Pitfalls
- Incorrect combine step leads to wrong results (e.g., missing cross-boundary cases).
- Quicksort worst-case without good pivot selection.
- Stack depth for naive recursion on very large inputs.

## Practice Prompts
1) Implement merge sort and analyze space.
2) Quickselect for k-th element (average linear).
3) Count inversions using merge procedure.
4) Power function with fast exponentiation.
5) Peak element (binary search variant).

See `index.js` for a quicksort implementation.
