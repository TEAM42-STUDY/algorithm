function solution(new_id) {
  let answer = new_id
    .toLowerCase() // 1 단계
    .replace(/[^.\w\-_]/gm, '') // 2 단계
    .replace(/\.\.+/gm, '.') // 3 단계
    .replace(/^\.|\.$/gm, '') // 4 단계
    .padStart(1, 'a') // 5 단계
    .slice(0, 15)
    .replace(/\.$/gm, ''); // 6 단계
  return answer.padEnd(3, answer[answer.length - 1]); // 7 단계
}
