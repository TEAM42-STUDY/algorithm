const assert = require('assert');

// union-find 기법을 이용한 kruskal 알고리즘으로 풀이
function solution(n, costs) {
  // cost순으로 오름차순 정렬
  const arr = Array.from(costs).sort((a, b) => a[2] - b[2]);
  // parent[i] === i번째 노드의 부모 노드 번호
  const parent = Array(n).fill(0).map((_, i) => i);

  // 현재 연결되어있는 부모 노드를 탐색
  // 탐색과정에서 재귀적으로 자신의 부모를 갱신
  const findParent = x => {
    if (parent[x] !== x) parent[x] = findParent(parent[x]);
    return parent[x];
  }

  // x, y 노드를 연결
  // 번호가 낮은 노드를 부모로 설정
  const union = (x, y) => {
    const a = findParent(x);
    const b = findParent(y);
    if (a > b) parent[a] = b;
    else parent[b] = a;
  }

  // cost가 낮은 순으로 정렬된 edge들을 순회하며 노드를 연결
  // edge의 양끝 노드의 부모가 같다면 이미 연결된 노드
  // 부모가 다르다면 연결시켜줌
  let ans = 0;
  arr.forEach((item) => {
    const a = item[0];
    const b = item[1];
    const cost = item[2];

    if (findParent(a) !== findParent(b)) {
      union(a, b);
      ans += cost;
    }
  });
  return ans;
}

const tc = solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])
assert.equal(tc, 4);
