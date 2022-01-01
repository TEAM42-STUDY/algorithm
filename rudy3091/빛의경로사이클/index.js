const assert = require("assert");

// 0: 위쪽, 1: 오른쪽, 2: 아랫쪽, 3: 왼쪽
function resolveDirection(dir, node) {
  switch (node) {
    case "S":
      return [0, 1, 2, 3][dir];
    case "R":
      return [1, 2, 3, 0][dir];
    case "L":
      return [3, 0, 1, 2][dir];
  }
  return -1;
}

function resolveCoords(nx, ny, h, w) {
  return [
    (nx = nx >= h ? 0 : nx < 0 ? h - 1 : nx),
    (ny = ny >= w ? 0 : ny < 0 ? w - 1 : ny),
  ];
}

function solution(grid) {
  const h = grid.length;
  const w = grid[0].length;
  const answer = [];
  const offsets = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const visited = Array(grid.length)
    .fill(0)
    .map(() => Array(grid[0].length).fill(0)
        .map(() => [false, false, false, false]));

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      for (let k = 0; k < 4; k++) {
        if (visited[i][j][k]) continue;

        let dir = k;
        let x = i;
        let y = j;
        let cnt = 0;

        while (!visited[x][y][dir]) {
          cnt += 1;
          visited[x][y][dir] = true;
          dir = resolveDirection(dir, grid[x][y]);
          x += offsets[dir][0];
          y += offsets[dir][1];
          [x, y] = resolveCoords(x, y, h, w);
        }

        answer.push(cnt);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

assert.deepEqual(solution(["SL", "LR"]), [16]);
assert.deepEqual(solution(["S"]), [1, 1, 1, 1]);
assert.deepEqual(solution(["R", "R"]), [4, 4]);
