function solution(n, arr1, arr2) {
  return arr1.map((elem, index) =>
    (elem | arr2[index])
      .toString(2)
      .padStart(n, '0')
      .split('')
      .map((num) => (num === '1' ? '#' : ' '))
      .join(''),
  );
}
