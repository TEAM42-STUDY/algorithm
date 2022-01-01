function solution(rows, columns, queries) {
    var answer = [];
    const matrix = [... new Array(rows)].map((_, idx1) => 
        [... new Array(columns)].map((_, idx2) => idx2 + 1 + idx1*columns) 
    );
    queries.forEach(el => {
        const [row1, column1, row2, column2] = el;
        answer.push(extractElements(matrix, [row1 - 1, column1 - 1, row2 - 1, column2 - 1]));
    });
    return answer;
}

function extractElements(matrix, query){
    const [x1, y1, x2, y2] = query;
    const row1 = new Array(y2 - y1).fill(0).map((_, idx) => matrix[x1][y1 + idx]);
    const row2 = new Array(y2 - y1).fill(0).map((_, idx) => matrix[x2][y1 + idx + 1]);
    const column1 = new Array(x2 - x1).fill(0).map((_, idx) => matrix[x1 + idx + 1][y1]);
    const column2 = new Array(x2 - x1).fill(0).map((_, idx) => matrix[x1 + idx][y2]);
    row1.forEach((el, idx) => {
        matrix[x1][y1 + idx + 1] = el;
    });
    row2.forEach((el, idx) => {
        matrix[x2][y1 + idx] = el;
    });
    column1.forEach((el, idx) => {
        matrix[x1 + idx][y1] = el;
    });
    column2.forEach((el, idx) => {
        matrix[x1 + idx + 1][y2] = el;
    });
    return Math.min(...row1, ...row2, ...column1, ...column2);
}