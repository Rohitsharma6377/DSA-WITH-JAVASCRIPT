/*
Theory: Bit Manipulation
- Operate on integers at bit level: AND, OR, XOR, NOT, shifts.
- Tricks: check power of two, count set bits, swap bits, isolate lowest set bit (x & -x).

Implementation: set bit count (Kernighan) and power-of-two check.
*/

function countSetBits(x) { let c = 0; while (x) { x &= (x - 1); c++; } return c; }
function isPowerOfTwo(x) { return x > 0 && (x & (x - 1)) === 0; }

// Example
(function example(){
  console.log('countSetBits(29)=', countSetBits(29)); // 11101 -> 4
  console.log('isPowerOfTwo(32)=', isPowerOfTwo(32));
})();

/*
Practice Q&A
Q: How to find the single number where all others appear twice?
A: XOR all numbers; pairs cancel to 0, leaving the unique one.
*/
