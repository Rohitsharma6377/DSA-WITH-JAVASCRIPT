/*
Hinglish Notes (Runner):
- Ye file sab topics ke basic examples ko ek saath run karne ke liye hai.
- Run: ts-node typescript/dsa/run_all.ts (ya compile karke node se run karein).
*/

import { reverseInPlace as reverseArray } from './arrays/index';
import { binarySearch } from './searching/index';

function runArrays() {
  const a = [1,2,3,4,5];
  console.log('TS Arrays reverseInPlace:', reverseArray(a.slice()));
}

function runSearching() {
  const a = [1,3,4,6,8,10];
  console.log('TS Searching binarySearch 6 ->', binarySearch(a, 6));
}

function main() {
  console.log('--- TypeScript DSA Runner ---');
  runArrays();
  runSearching();
}

main();
