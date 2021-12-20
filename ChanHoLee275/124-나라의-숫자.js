function solution(n) {
    var answer = '';
    let start = parseInt(n);
    let divide = 3;
    const stack = [];
    while(Math.floor(start / 3)){
        stack.push(start % divide);
        start = Math.floor(start/3);
    }
    stack.push(start);
    for(let i = 0; i < stack.length; i++){
        if(stack[i] <= 0 && i < stack.length - 1){
            stack[i] = stack[i] + 3;
            stack[i+1] = stack[i+1] - 1;
        }
    }
    if(stack[stack.length-1] === 0) stack.pop();
    stack.reverse().forEach(el => {
        if(el === 3){
            answer += '4'
        }
        else{
            answer += el.toString()
        }
    })
    return answer;
}