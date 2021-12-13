function solution(N, stages) {
    const answer = [];
    [...Array(N)].map((_,i) => i + 1).forEach(el => {
        const total = stages.filter(ele => ele >= el).length;
        const count = stages.filter(ele => ele === el).length/total;
        answer.push([el, count])
    });
    return answer.sort((a,b) => {
        if(a[1] < b[1]) return 1;
        else if(a[1] > b[1]) return -1;
        if(a[0] < a[1]) return -1;
        else return 1;
    }).map(el => el[0]);
}