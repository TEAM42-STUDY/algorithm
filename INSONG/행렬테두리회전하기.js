function solution(rows, columns, queries) {
  const board = new Array(rows + 1).fill().map((_, i) => new Array(columns + 1).fill(0));
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      board[i][j] = (i - 1) * columns + j;
    }
  }

  const answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const stack = [];

    for (let i = y1; i < y2; i++) stack.push(board[x1][i]);
    for (let i = x1; i < x2; i++) stack.push(board[i][y2]);
    for (let i = y2; i > y1; i--) stack.push(board[x2][i]);
    for (let i = x2; i > x1; i--) stack.push(board[i][y1]);

    answer.push(Math.min(...stack));

    const upperLeftPoint = stack.pop();
    stack.unshift(upperLeftPoint);

    for (let i = x1 + 1; i < x2; i++) board[i][y1] = stack.pop();
    for (let i = y1; i < y2; i++) board[x2][i] = stack.pop();
    for (let i = x2; i > x1; i--) board[i][y2] = stack.pop();
    for (let i = y2; i >= y1; i--) board[x1][i] = stack.pop();
  }

  return answer;
}
