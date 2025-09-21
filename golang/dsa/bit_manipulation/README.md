# Bit Manipulation (Go)

 Operate on integers via bitwise ops for O(1) tricks and optimizations.

 ## Fundamentals
 - AND `&`, OR `|`, XOR `^`, NOT `^x` (bitwise complement), shifts `<<` `>>`.
 - Set i-th bit: `x | (1 << i)`; clear: `x & ^(1 << i)`; toggle: `x ^ (1 << i)`.
 - Check i-th bit: `(x>>i)&1`.

 ## Common Tricks
 - Power of two: `x > 0 && (x&(x-1))==0`.
 - Count set bits: Kernighan (`for x>0 { x &= x-1; cnt++ }`).
 - Lowest set bit: `x & -x` (two's complement).
 - XOR aggregation to find unique element.

 ## Masks & Bitsets
 - Represent subsets with `uint` mask; iterate submasks: `for s:=mask; s>0; s=(s-1)&mask {}`.

 ## Pitfalls
 - Sign with right shift on signed ints; prefer `uint` for masks.
 - Overflow on shifts when using large i; always ensure width.

 ## Practice Prompts
 1) Single number (others twice/thrice)
 2) Reverse bits of 32-bit integer
 3) Hamming weight and Hamming distance
 4) Subset DP state compression
