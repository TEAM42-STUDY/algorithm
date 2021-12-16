const assert = require("assert");

// bfs 탐색
// 프로그래머스에선 자바스크립트를 쓸때 재귀로 풀면 잘 터졌던걸로 기억함..
// dfs보다는 bfs에 익숙해지자
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const visited = Array(n).fill(0).map(() => Array(m).fill(false));

  const queue = [[0, 0, 1]];
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, w] = queue.shift();
    if (x === n - 1 && y === m - 1) return w;

    moves.forEach(([offsetX, offsetY]) => {
      const nx = x + offsetX;
      const ny = y + offsetY;
      const bdry = 0 <= nx && nx < n && 0 <= ny && ny < m;

      if (bdry && !visited[nx][ny] && maps[nx][ny]) {
        queue.push([nx, ny, w + 1]);
        visited[nx][ny] = true;
      }
    });
  }

  return -1;
}

const tc1 = solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
assert.equal(tc1, 11);

const tc2 = solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
assert.equal(tc2, -1);
