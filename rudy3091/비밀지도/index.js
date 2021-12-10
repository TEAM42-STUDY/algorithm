const assert = require("assert");

// 10진수로 표현된 row를 이진수로 변환
// 두개의 이진수 matrix를 겹쳤을때 하나라도 1이면 '#'
// 둘 다 0이면 ' '을 할당
function solution(n, arr1, arr2) {
  const dec2bin = (dec) => dec.toString(2).padStart(n, "0").split("");
  const map1 = arr1.map((x) => dec2bin(x, n));
  const map2 = arr2.map((x) => dec2bin(x, n));

  const answer = map1
    .map((row, i) =>
      row.map((x, j) => (x === "1" || map2[i][j] === "1" ? "#" : " "))
    )
    .map((row) => row.join(""));
  return answer;
}

const tc1 = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
assert.deepEqual(tc1, [
  "#####",
  "# # #",
  "### #",
  "#  ##" /* 프로그래머스에 오류있음, 공백 두칸 */,
  "#####",
]);

const tc2 = solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
assert.deepEqual(tc2, [
  "######",
  "###  #" /* 여기도 공백 두칸 */,
  "##  ##" /* 여기도 공백 두칸 */,
  " #### ",
  " #####",
  "### # ",
]);
