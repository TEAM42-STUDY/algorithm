const toZip = arrays => arrays[0].map((_, i) => arrays.map(array => array[i]));
const toBinary = (value, n) => value.toString(2).padStart(n, 0);

function solution(n, arr1, arr2) {
  const zipList = toZip([arr1, arr2]);
  const binaryList = zipList.map(v => v[0] | v[1]).map(v => toBinary(v, n));
  return binaryList.map(v => v.replace(/1/gi, '#').replace(/0/gi, ' '));
}
