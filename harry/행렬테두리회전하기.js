function solution(rows, columns, queries) {
  const answer = [];
  const graph = new Array(rows).fill(0).map((_, i) => new Array(columns).fill(0).map((_, j) => i * columns + j + 1));
  // 쿼리 숫자 1씩 낮추기
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < queries[0].length; j++) {
      queries[i][j] -= 1;
    }
  }
  // 돌리기
  for (const [LR, LC, RR, RC] of queries) {
    const tmp = graph[LR][LC];
    let min = tmp;
    // 왼쪽 라인 끌어올리기
    for (let i = LR; i < RR; i++) {
      const newData = graph[i + 1][LC];
      graph[i][LC] = newData;
      min = Math.min(min, newData);
    }
    // 아래 라인 왼쪽으로 밀기
    for (let i = LC; i < RC; i++) {
      const newData = graph[RR][i + 1];
      graph[RR][i] = newData;
      min = Math.min(min, newData);
    }
    // 오른쪽 라인 끌어내리기
    for (let i = RR; i > LR; i--) {
      const newData = graph[i - 1][RC];
      graph[i][RC] = newData;
      min = Math.min(min, newData);
    }
    // 위쪽 라인 오른쪽으로 밀기
    for (let i = RC; i > LC; i--) {
      const newData = graph[LR][i - 1];
      graph[LR][i] = newData;
      min = Math.min(min, newData);
    }
    // 임시저장했던 숫자 한칸 오른쪽
    graph[LR][LC + 1] = tmp;
    answer.push(min);
  }
  return answer;
}
