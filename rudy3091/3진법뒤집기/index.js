const assert = require("assert");

function solution(n) {
  const s = n.toString(3).split('').reverse().join('');
  return parseInt(s, 3);
}

assert.equal(solution(45), 7);
assert.equal(solution(125), 229);
