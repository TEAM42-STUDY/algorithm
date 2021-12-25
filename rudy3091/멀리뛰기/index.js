const assert = require('assert');

// i번째 칸에 갈수있는 방법의 가짓수 = i - 1 번째 칸에
// 갈수있는 방법에서 1칸 더 가기와 i - 2 번째 칸에 갈수있는
// 방법에서 2칸 더 가기로 분기된 경우의 수를 합한 수
// 이때 i - 2번째 칸에서 i 번째 칸으로 1칸 + 1칸으로 가는 경우는
// i - 1 번째 칸에서 i 번쨰 칸으로 가는 경우의 수에 포함돼있음
// 따라서 dp[i] = dp[i - 1] + dp[i - 2] (dp[i]: i번째 칸까지 가는
// 경우의 수)
// 이 점화식은 피보나치 수열과 같음
// 따라서 그냥 n번째 피보나치 수를 1234567로 나눈 나머지를 구하는
// 문제와 같음
function solution(n) {
  const DIV = 1_234_567;
  const dp = Array(n).fill(0);
  dp[0] = 1; dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % DIV
  }
  return dp[n - 1];
}

assert.equal(solution(4), 5);
assert.equal(solution(3), 3);
