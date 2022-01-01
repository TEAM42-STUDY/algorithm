function solution(sizes) {
  const sizeDic = { max: [], min: [] };
  sizes.forEach(([w, h]) => {
    sizeDic['max'].push(Math.max(w, h));
    sizeDic['min'].push(Math.min(w, h));
  });
  return Math.max(...sizeDic['max']) * Math.max(...sizeDic['min']);
}
