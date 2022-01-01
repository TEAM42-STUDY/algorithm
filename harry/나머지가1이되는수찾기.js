function solution(n) {
  const restOne = n - 1;
  // 1을 뺀 수의 약수 중 1을 제외한 숫자는 모두 나머지가 1
  // 따라서 그 중 가장 작은 수를 찾으면 됨
  // 시간 복잡도 n^0.5
  for (let i = 2; i <= Math.ceil(restOne ** 0.5); i++) {
    if (restOne % i === 0) {
      return i;
    }
  }
  return restOne;
}
