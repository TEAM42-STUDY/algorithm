function solution(sizes) {
    let width = 0;
    let height = 0;
    sizes.forEach(el => {
        const [candidate1, candidate2] = el.sort();
        if(candidate1 > height) height = candidate1;
        if(candidate2 > width) width = candidate2;
    });
    return width*height;
}