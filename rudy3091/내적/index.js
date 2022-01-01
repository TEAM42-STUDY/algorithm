const assert = require("assert");

function solution(a, b) {
  return a.reduce((acc, x, i) => acc + x * b[i], 0);
}

assert.equal(solution([1, 2, 3, 4], [-3, -1, 0, 2]), 3);
assert.equal(solution([-1, 0, 1], [1, 0, -1]), -2);
