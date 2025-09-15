/*
Theory: Math Utilities
- GCD/LCM, prime checks, sieve for primes.

Implementation: gcd, lcm, and Sieve of Eratosthenes.
*/

function gcd(a, b) { while (b) [a, b] = [b, a % b]; return Math.abs(a); }
function lcm(a, b) { return Math.abs(a / gcd(a,b) * b); }
function sieve(n) {
  const isPrime = Array(n+1).fill(true); isPrime[0] = isPrime[1] = false;
  for (let p = 2; p*p <= n; p++) if (isPrime[p]) for (let x = p*p; x <= n; x += p) isPrime[x] = false;
  return isPrime.map((v,i) => v ? i : null).filter(v => v !== null);
}

// Example
(function example() {
  console.log('gcd(24, 18) =', gcd(24,18));
  console.log('lcm(4, 6) =', lcm(4,6));
  console.log('primes up to 20', sieve(20));
})();

/*
Practice Q&A
Q: How to compute fast power a^b?
A: Use binary exponentiation: square-and-multiply in O(log b).
*/
