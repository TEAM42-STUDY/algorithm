function solution(n) {
  let answer = '';
  while (n > 0) {
    if (n % 3) {
      answer += n % 3;
      n = Math.floor(n / 3);
    } else {
      answer += 4;
      n = Math.floor((n - 1) / 3);
    }
  }
  return answer.split('').reverse().join('');
}
