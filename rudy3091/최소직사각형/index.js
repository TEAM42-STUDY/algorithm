const assert = require("assert");

function solution(sizes) {
  const [w, h] = sizes
    .map(([w, h]) => (w < h ? [w, h] : [h, w]))
    .reduce(([mw, mh], [w, h]) =>
      [Math.max(mw, w), Math.max(mh, h)], [[], []]);
  return w * h;
}

assert.equal(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
  4000
);
assert.equal(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]),
  120
);
assert.equal(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ]),
  133
);
