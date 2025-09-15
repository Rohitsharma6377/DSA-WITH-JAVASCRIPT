# Bit Manipulation (JavaScript)

 Operate directly on integer bits to achieve O(1) tricks and optimizations.

 ## Fundamentals
 - AND `&`, OR `|`, XOR `^`, NOT `~`, shifts `<<` `>>` `>>>`.
 - Set i-th bit: `x | (1 << i)`; clear i-th bit: `x & ~(1 << i)`; toggle: `x ^ (1 << i)`.
 - Check i-th bit: `(x >> i) & 1` or `(x & (1 << i)) !== 0`.

 ## Common Tricks
 - Power of two: `x > 0 && (x & (x - 1)) === 0`.
 - Count set bits: Kernighan's algorithm: repeatedly `x &= (x - 1)`.
 - Lowest set bit: `x & -x` (two's complement).
 - Swap without temp: `a ^= b; b ^= a; a ^= b;` (educational; use temp in practice).
 - XOR to find unique number when others appear twice; variants for thrice/etc.

 ## Masks & Packing
 - Build masks to extract fields, toggle flags, or represent subsets (bitmask DP).
 - Subset iteration: `for (let s = mask; s; s = (s - 1) & mask) { ... }`.

 ## Pitfalls
 - JS bitwise ops use 32-bit signed integers; beware beyond 2^31-1.
 - For large integers, prefer BigInt or arithmetic without bitwise operators.
 - Sign issues with `>>` vs `>>>` (arithmetic vs logical right shift).

 ## Practice Prompts
 1) Single number (others appear twice/thrice).
 2) Count bits for 0..n (DP + last set bit).
 3) Reverse bits of 32-bit integer.
 4) Subset sum with bitmasking for small n.
 5) Hamming distance sum over array.

 See `index.js` for examples like set bit count and power-of-two check.
