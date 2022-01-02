function solution(n) {
  const board = [];
  let answer = 0;

  const isQueenHasConflict = row => {
    for (let i = 0; i < row; i++) {
      if (board[i] === board[row] || Math.abs(board[row] - board[i]) === row - i) return true;
    }
    return false;
  };

  const findQueen = row => {
    if (row === n) {
      answer++;
      return;
    }

    for (let col = 0; col < n; col++) {
      board[row] = col;
      if (!isQueenHasConflict(row)) findQueen(row + 1);
    }
  };

  findQueen(0);
  return answer;
}
