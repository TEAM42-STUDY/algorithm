const assert = require("assert");

// stage 수만큼의 배열을 생성
// stages을 순회하며 [도달한 사람수, 아직 클리어하지 못한 사람수]로
// 배열 업데이트
// 배열을 순회하며 실패율 계산
// 실패율을 기준으로 내림차순 정렬
function solution(N, stages) {
  const xs = Array(N);

  for (let i = 0; i < N; i++) {
    const challenged = stages.filter((x) => x >= i + 1).length;
    const notClear = stages.filter((x) => x === i + 1).length;
    xs[i] = [notClear / challenged, i + 1];
  }

  const answer = xs
    .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    .map((x) => x[1]);
  return answer;
}

const tc1 = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
assert.deepEqual(tc1, [3, 4, 2, 1, 5]);

const tc2 = solution(4, [4, 4, 4, 4, 4]);
assert.deepEqual(tc2, [4, 1, 2, 3]);
