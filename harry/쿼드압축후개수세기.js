function compress(graph, size, result, startPos) {
  const startNum = graph[startPos[0]][startPos[1]];
  if (size === 1) {
    // 가장 잘게 쪼개진 경우
    result[startNum]++;
    return;
  }

  let isAllEqual = true;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const thisNum = graph[startPos[0] + i][startPos[1] + j];
      if (startNum !== thisNum) {
        isAllEqual = false;
        break;
      }
    }
    if (!isAllEqual) break;
  }

  if (isAllEqual) {
    result[startNum]++;
    return;
  }
  // 4등분하여 진행
  const half = size / 2;
  compress(graph, size / 2, result, startPos);
  compress(graph, size / 2, result, [startPos[0], startPos[1] + half]);
  compress(graph, size / 2, result, [startPos[0] + half, startPos[1]]);
  compress(graph, size / 2, result, [startPos[0] + half, startPos[1] + half]);
}

function solution(arr) {
  var answer = [0, 0];
  compress(arr, arr.length, answer, [0, 0]);
  return answer;
}
