const assert = require("assert");

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}

assert(solution(10) === 3);
assert(solution(12) === 11);
