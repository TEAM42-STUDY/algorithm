function solution(array, commands) {
    var answer = [];
    commands.forEach(el => {
        const [start, end, idx] = el;
        answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1])
    })
    return answer;
}