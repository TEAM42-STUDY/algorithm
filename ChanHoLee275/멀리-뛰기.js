// 점화식으로 문제 해결
function solution(n) {
    const array = [1, 2];
    if(n === 1) return 1;
    let idx = 1;
    while(idx !== n - 1){
        idx += 1;
        array.push((array[array.length - 1] + array[array.length -2]) % 1234567);
    }
    return array.pop();
}

// 자연수의 분할 문제
// 1과 2의 합으로 자연수를 분할하여라
// 홀수인 경우, 하나의 1과 나머지는 2들의 합으로 나타낼 수 있음
// 짝수인 경우, 모두 2의 합으로 나타낼 수 있음
// overflow로 되지 않음.
function solution(n) {
    var answer = 0;
    let numberOfOnes = n;
    let numberOfTwo = 0;
    const stopCondition = answer % 2;
    while(numberOfOnes >= stopCondition){
        answer += combination(numberOfOnes, numberOfTwo);
        numberOfOnes -= 2;
        numberOfTwo += 1;
    }
    return answer % 1234567;
}

function combination(one, two){
    let total = one + two;
    let select = one > two ? two : one;
    let numerator = 1;
    let denominator = 1;
    while(select > 0){
        denominator *= select;
        numerator *= total
        total -= 1;
        select -= 1;
    }
    return parseInt(numerator/denominator) % 1234567;
}