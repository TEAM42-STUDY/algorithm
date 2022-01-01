const assert = require("assert");

// 부분문자열: 어떤 문자열의 연속된 일부분
// 완전탐색으로 풀 경우 시간초과
// 문자열을 순회하며 방문중인 문자의 왼쪽과 오른쪽을 확인해 팰린드롬이 되지
// 않는 순간의 인덱스 차이 계산.  이때 총 팰린드롬의 길이가 홀수인 경우,
// 짝수인 경우 두 경우에 대해 계산 후 최댓값을 선택
function getLength(s, l, r) {
  while (l >= 0 && r < s.length) {
    if (s[l] !== s[r]) break;
    l -= 1;
    r += 1;
  }
  return r - l - 1;
}

function solution(s) {
  const n = s.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const p1 = getLength(s, i, i);
    const p2 = getLength(s, i, i + 1);
    answer = Math.max(...[p1, p2, answer]);
  }
  return answer;
}

assert.equal(solution("abcdcba"), 7);
assert.equal(solution("abacde"), 3);
