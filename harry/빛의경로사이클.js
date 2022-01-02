function solution(grid) {
  const answer = [];
  const rowLength = grid.length;
  const colLength = grid[0].length;
  const visited = Array(rowLength)
    .fill(0)
    .map(() =>
      Array(colLength)
        .fill(0)
        .map(() => Array(4).fill(0)),
    ); // visited[row][col][dir]
  const dirMap = { S: 0, R: 1, L: 2 };
  const dx = [-1, 0, 1, 0]; // 위 오 아 왼
  const dy = [0, 1, 0, -1];
  const turnDir = [
    [0, 1, 3],
    [1, 2, 0],
    [2, 3, 1],
    [3, 0, 2],
  ]; // turnDir[dir][S or R or L]

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      for (let dir = 0; dir < 4; dir++) {
        if (visited[i][j][dir]) continue;
        let nx = i;
        let ny = j;
        let nDir = dir;
        let gridValue = grid[nx][ny];
        let count = 0;
        // 특정방향을 향하는 지점을 만나지 않았다면 더 순회
        while (!visited[nx][ny][nDir]) {
          count++;
          visited[nx][ny][nDir] = 1; // 방문 체크
          nDir = turnDir[nDir][dirMap[gridValue]];
          nx = nx + dx[nDir];
          ny = ny + dy[nDir];

          nx = nx >= rowLength ? 0 : nx < 0 ? rowLength - 1 : nx;
          ny = ny >= colLength ? 0 : ny < 0 ? colLength - 1 : ny;
          gridValue = grid[nx][ny];
        }
        if (count) answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
