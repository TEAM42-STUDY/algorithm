function solution(n, costs) {
    let answer = 0;
    const islands = new Set();
    let board = [...new Array(n)].map((_,i) => i);
    const sortedByCost = costs.sort((a,b) => a[2] > b[2] ? 1 : -1);
    board[sortedByCost[0][0]] = sortedByCost[0][1];
    answer += sortedByCost[0][2];
    sortedByCost.splice(1).every(el => {
        if(board[el[0]] === board[el[1]]) return true;
        if(new Set(board).size === 1) return false;
        answer += el[2];
        if(board[el[0]] === el[0] && board[el[1]] === el[1]){
            board = board.map(ele => ele === el[1] ? el[0] : ele);
        }
        else if(board[el[0]] !== el[0] && board[el[1]] === el[1]){
            board = board.map(ele => ele === board[el[0]] ? el[1] : ele);
        }
        else if(board[el[1]] !== el[1] && board[el[0]] === el[0]){
            board = board.map(ele => ele === board[el[1]] ? el[0] : ele);
        }
        else{
            board = board.map(ele => ele === board[el[0]] ? board[el[1]] : ele);
        }
        return true;
    });
    return answer;
}