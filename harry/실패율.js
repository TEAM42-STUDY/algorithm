function solution(N, stages) {
  const rate = {};
  stages.sort((a, b) => a - b);
  let allNum = stages.length; // 분모
  let thisNum = 0; // 분자
  let stage = 1;
  let index = 0;
  while (stage <= N) {
    if (stages[index] === stage) {
      thisNum++;
      index++;
    } else {
      rate[stage] = thisNum / allNum;
      allNum -= thisNum;
      thisNum = 0;
      stage++;
    }
  }
  return Object.entries(rate)
    .sort((a, b) => {
      if (a[1] == b[1]) return +a[0] - b[0];
      return b[1] - a[1];
    })
    .map((elem) => +elem[0]);
}
