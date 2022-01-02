function solution(array, commands) {
  const answer = [];
  for (const [start, end, target] of commands) {
    const curArr = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(curArr[target - 1]);
  }
  return answer;
}
