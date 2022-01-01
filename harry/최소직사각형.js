function solution(sizes) {
  const wallet = [0, 0]; // w, h (w >= h)
  for (const size of sizes) {
    const [w, h] = [Math.max(...size), Math.min(...size)];
    wallet[0] = Math.max(w, wallet[0]);
    wallet[1] = Math.max(h, wallet[1]);
  }
  return wallet[0] * wallet[1];
}
