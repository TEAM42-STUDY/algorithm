function solution(n) {
  return Number(parseInt(n.toString(3).split('').reverse().join(''), 3).toString(10));
}
