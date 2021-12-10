const assert = require("assert");

function solve(arr, n, x, y) {
  const val = arr[x][y];
  let flag = false;

  // n * n 셀 중 다른게 하나라도 있는지 탐색
  for (let i = 0; i < n; i++) {
    if (arr[x + i].slice(y, y + n).some((x) => x !== val)) {
      flag = true;
    }
  }

  // 모두 같으면 undefined로 채워줌
  if (n !== 1 && !flag) {
    for (let i = 0; i < n; i++) {
      arr[x + i].fill(undefined, y, y + n);
    }
    arr[x][y] = val;
    return;
  }

  // 그렇지 않으면 4분할해서 재귀탐색
  const nn = n / 2;
  solve(arr, nn, x, y);
  solve(arr, nn, x + nn, y);
  solve(arr, nn, x, y + nn);
  solve(arr, nn, x + nn, y + nn);
}

function solution(arr) {
  const n = arr.length;
  solve(arr, n, 0, 0);

  // 0의 갯수, 1의 갯수 카운트 후 제출
  const xs = arr.flat();
  const zeros = xs.filter((x) => x === 0).length;
  const ones = xs.filter((x) => x === 1).length;
  const answer = [zeros, ones];
  return answer;
}


// 테스트케이스 #1: [4, 9]
const tc1 = solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);
assert.deepEqual(tc1, [4, 9]);

// 테스트케이스 #2: [10, 15]
const tc2 = solution([
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]);
assert.deepEqual(tc2, [10, 15]);
