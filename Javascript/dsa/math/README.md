# Math (JavaScript)

 Math utilities commonly needed in DSA: number theory, combinatorics, and arithmetic tricks.

 ## Number Theory
 - GCD/LCM: `gcd(a,b)` via Euclid; `lcm(a,b)=|a/gcd(a,b)*b|`.
 - Primes: Sieve of Eratosthenes to precompute primes up to n in O(n log log n).
 - Fast power: binary exponentiation O(log b); with mod for large numbers.
 - Modular arithmetic: beware negative `%` in JS; normalize `((a % m) + m) % m`.

 ## Combinatorics
 - nCr with factorials and modular inverses (precompute factorials/modInv for many queries).
 - DP for counting problems (e.g., coin change ways).

 ## Floating Point & BigInt
 - JS numbers are IEEE-754 double; beware precision for very large integers.
 - Use `BigInt` for exact large integer arithmetic; cannot mix with `Number` directly.

 ## Practice Prompts
 1) Count primes < n (sieve)
 2) Power(a,b) mod m (binary exponentiation)
 3) Sum of gcd over pairs
 4) Combinations modulo 1e9+7 with precomputation
 5) Happy number / digital root

 See `index.js` for gcd, lcm, and sieve examples.
