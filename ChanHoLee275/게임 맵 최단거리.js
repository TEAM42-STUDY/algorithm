function solution(maps) {
    var answer = -1;
    const start = [0,0,1];
    const end = [maps.length - 1, maps[0].length - 1];
    const queue = [];
    if(start[0] === end[0] && start[1] === end[1] && maps[0][0]){
        return 1;
    }
    maps[0][0] = 0;
    queue.push(start);
    while(queue.length){
        const target = queue.shift();
        if(target[0] === end[0] && target[1] === end[1]){
            answer = target[2];
            break;
        }
        const nexts = nextStep(maps, target);
        nexts.forEach(el => queue.push(el));
    }
    return answer;
}

function nextStep(maps, target){
    const answer = [];
    if(target[0] - 1 >= 0 && maps[target[0] - 1][target[1]]){
        maps[target[0] - 1][target[1]] = 0;
        answer.push([target[0] - 1, target[1], target[2] + 1]);
    }
    if(target[1] - 1 >= 0 && maps[target[0]][target[1] - 1]){
        maps[target[0]][target[1] - 1] = 0;
        answer.push([target[0], target[1] - 1, target[2] + 1]);
    }
    if(target[0] + 1 < maps.length && maps[target[0] + 1][target[1]]){
        maps[target[0] + 1][target[1]] = 0;
        answer.push([target[0] + 1, target[1], target[2] + 1]);
    }
    if(target[1] + 1 < maps[0].length && maps[target[0]][target[1] + 1]){
        maps[target[0]][target[1] + 1] = 0;
        answer.push([target[0], target[1] + 1, target[2] + 1]);
    }
    return answer;
}