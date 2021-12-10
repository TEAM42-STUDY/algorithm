function getParent(parent, n) {
  if (parent[n] !== n) {
    parent[n] = getParent(parent, parent[n]);
  }
  return parent[n];
}

function unionParent(parent, x, y) {
  x = getParent(parent, x);
  y = getParent(parent, y);
  if (x < y) {
    parent[y] = x;
  } else {
    parent[x] = y;
  }
}

function solution(n, costs) {
  let answer = 0;
  const parent = new Array(n).fill(0).map((_, i) => i);
  costs.sort((a, b) => a[2] - b[2]); // 낮은 가격순으로 정렬
  // 크루스칼 알고리즘
  for (const [a, b, cost] of costs) {
    if (getParent(parent, a) !== getParent(parent, b)) {
      unionParent(parent, a, b);
      answer += cost;
    }
  }
  return answer;
}
