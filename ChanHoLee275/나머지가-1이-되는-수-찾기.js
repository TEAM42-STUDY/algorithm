// 재귀 이용
function solution(n) {
    return isPrime(n - 1) ? n - 1 : isFactor(n - 1, 2);
}

function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i ++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function isFactor(target, candidate){
    return target % candidate ? isFactor(target, candidate + 1) : candidate;
}

// 브루트 포스
function solution(n) {
    return new Array(n).fill(0).map((_, i) => i + 1).findIndex(el => n % el === 1) + 1;
}