const assert = require("assert");

// n <= 12
function solution(n) {
  return [1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200][n - 1];
}

function checkRow(arr, x, n, answer) {
  if (x === n) {
    answer[0] += 1;
    return;
  }

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < x; j++) {
      if (arr[j] === i || Math.abs(x - j) === Math.abs(i - arr[j])) {
        flag = false;
        break;
      }
    }

    if (flag) {
      arr[x] = i;
      checkRow(arr, x + 1, n, answer);
    }
  }
}

function solution2(n) {
  const arr = Array(12).fill(0);
  const answer = [0]
  checkRow(arr, 0, n, answer);
  return answer[0];
}

const arr = Array(12).fill(0).map((_, i) => i + 1);
assert.deepEqual(arr.map(solution), arr.map(solution2));
