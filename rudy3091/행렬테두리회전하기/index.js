const assert = require("assert");

function rotate(x1, y1, x2, y2, mat, answer) {
  let min = Infinity;
  let former = mat[x1][y1];
  // 위
  for (let i = y1 + 1; i <= y2; i++) {
    min = Math.min(min, former);
    [mat[x1][i], former] = [former, mat[x1][i]];
  }
  // 오른쪽
  for (let i = x1 + 1; i <= x2; i++) {
    min = Math.min(min, former);
    [mat[i][y2], former] = [former, mat[i][y2]];
  }
  // 아래
  for (let i = y2 - 1; i > y1; i--) {
    min = Math.min(min, former);
    [mat[x2][i], former] = [former, mat[x2][i]];
  }
  // 왼쪽
  for (let i = x2; i >= x1; i--) {
    min = Math.min(min, former);
    [mat[i][y1], former] = [former, mat[i][y1]];
  }
  answer.push(min);
}

function solution(rows, columns, queries) {
  const answer = [];
  const mat = Array(rows)
    .fill(0)
    .map((_, i) =>
      Array(columns)
        .fill(0)
        .map((__, j) => i * columns + j + 1)
    );
  queries.forEach(([x1, y1, x2, y2]) =>
    rotate(x1 - 1, y1 - 1, x2 - 1, y2 - 1, mat, answer)
  );
  return answer;
}

const tc1 = solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
assert.deepEqual(tc1, [8, 10, 25]);

const tc2 = solution(3, 3, [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
]);
assert.deepEqual(tc2, [1, 1, 5, 3]);

const tc3 = solution(100, 97, [[1, 1, 100, 97]]);
assert.deepEqual(tc3, [1]);
