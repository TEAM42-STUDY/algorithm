function solution(n) {
  const DEFAULT_NUMBER = 1;
  const dp = new Array(n + 1).fill(DEFAULT_NUMBER);
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}
