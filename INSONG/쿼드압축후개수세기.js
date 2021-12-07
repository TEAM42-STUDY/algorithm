// 분할 정복
function solution(arr) {
  const answer = [0, 0];
  let n = arr.length;

  while (n >= 2) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i += n) {
      for (let j = 0; j < arr[i].length; j += n) {
        const square = arr.slice(i, i + n).map(v => v.slice(j, j + n));
        const sum = square.flatMap(v => v).reduce((a, b) => a + b);
        sum % (n * n) === 0 ? answer[sum / (n * n)]++ : tempArr.push(square);
      }
    }

    arr = tempArr.flatMap(v => v);
    n /= 2;
  }

  arr.flatMap(v => v).forEach(v => answer[v]++);
  return answer;
}
