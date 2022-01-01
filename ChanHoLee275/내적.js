function solution(a, b) {
    return a.reduce((acc, current, currentIndex) => acc + current*b[currentIndex], 0);
}