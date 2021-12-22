function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length){
        featureDevelop(progresses, speeds);
        let count = 0;
        while(progresses[0] >= 100){
            count += 1;
            progresses.shift();
            speeds.shift();
        }
        count && answer.push(count);
    }
    return answer;
}

function featureDevelop(progresses, speeds){
    for(let i = 0; i < progresses.length; i++){
        progresses[i] += speeds[i];
    }
}