const assert = require("assert");

// progressses 배열을 순회하며 남은 일수를 계산. 뒤에 있는 기능은 앞에있는 기능이
// 완료되기 전까지 배포될 수 없으므로 남은 일수 배열을 순회하며 일자별 배포
// 가능한 기능 갯수를 계산. 기준값보다 작은 일수면 그날 배포가능, 기준값보다 큰
// 일수면 다음날 배포로 넘어가고 기준값을 업데이트
function solution(progressses, speeds) {
  const arr = progressses.map((x, i) => Math.ceil((100 - x) / speeds[i]));
  const answer = [];
  let pivot = arr[0];
  let feat = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      feat++;
    } else {
      answer.push(feat);
      feat = 1;
      pivot = arr[i];
    }
  }

  answer.push(feat);
  return answer;
}

const tc1 = solution([93, 30, 55], [1, 30, 5]);
assert.deepEqual(tc1, [2, 1]);

const tc2 = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
assert.deepEqual(tc2, [1, 3, 2]);
