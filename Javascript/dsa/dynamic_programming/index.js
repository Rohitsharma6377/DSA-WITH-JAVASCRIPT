/*
Theory: Dynamic Programming (DP)
- Optimize recursive problems by storing results of overlapping subproblems.
- Two styles: Top-down (memoization) and Bottom-up (tabulation).

Implementation: Fibonacci (tabulation) and 0/1 knapsack (small demo).
*/

function fib(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
  return dp[n];
}

function knap01(weights, values, W) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      dp[i][w] = dp[i-1][w];
      if (weights[i-1] <= w) dp[i][w] = Math.max(dp[i][w], values[i-1] + dp[i-1][w - weights[i-1]]);
    }
  }
  return dp[n][W];
}

// Example
(function example() {
  console.log('fib(10) =', fib(10)); // 55
  console.log('knap01 =', knap01([2,3,4], [4,5,10], 5)); // 9
})();

/*
Practice Q&A
Q: When to use DP?
A: When optimal substructure and overlapping subproblems exist. If greedy fails, try DP.
*/
