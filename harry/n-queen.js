function isValid(board, col) {
  for (let i = 0; i < col; i++) {
    // 같은 행에 속하는가
    if (board[i] === board[col]) return false;
    // 같은 대각선에 속하는가
    if (Math.abs(i - col) === Math.abs(board[i] - board[col])) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;

  function backTrack(board, col) {
    if (col === n - 1) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board[col + 1] = i;
      if (isValid(board, col + 1)) backTrack(board, col + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    const board = new Array(n).fill(-1); // 인덱스는 열, 값은 행
    board[0] = i; // 첫번째 열의 i행에 퀸 배치
    backTrack(board, 0);
  }

  return answer;
}
