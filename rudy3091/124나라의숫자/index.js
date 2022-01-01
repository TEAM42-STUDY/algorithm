const assert = require("assert");

const f = (x, acc) =>
  x > 0 ? f(Math.floor((x - 1) / 3), "124"[(x - 1) % 3] + acc) : acc;
const solution = (n) => f(n, '');

function solution2(n) {
  let answer = '';
  while (n > 0) {
    n -= 1;
    answer = "124"[n % 3] + answer;
    n = Math.floor(n / 3)
  }
  return answer;
}

assert.equal(solution(1), "1");
assert.equal(solution(2), "2");
assert.equal(solution(3), "4");
assert.equal(solution(4), "11");
assert.equal(solution(5), "12");
assert.equal(solution(6), "14");
assert.equal(solution(7), "21");
assert.equal(solution(8), "22");
assert.equal(solution(9), "24");
