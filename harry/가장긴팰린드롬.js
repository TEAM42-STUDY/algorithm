function solution(s) {
  let answer = 1;
  const dp = new Array(s.length).fill().map((_) => new Array(s.length).fill(false)); // dp 초기화
  // 홀수팰린드롬을 위한 길이1의 팰린드롬;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  // 짝수팰린드롬을 위한 길이2의 팰린드롬
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      answer = 2;
    }
  }
  // 길이 3이상의 팰린드롬 (가운데는 이미 체크하였으므로 양끝만 체크)
  for (let len = 3; len <= s.length; len++) {
    for (let left = 0; left <= s.length - len; left++) {
      const right = left + len - 1;
      const isEqEnds = s[left] === s[right];
      const isEqCenter = dp[left + 1][right - 1];
      if (isEqEnds && isEqCenter) {
        dp[left][right] = true;
        answer = len;
      }
    }
  }
  return answer;
}
