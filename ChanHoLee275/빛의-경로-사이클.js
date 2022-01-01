const degreeToVector = {
    '0': [0, 1],
    '90': [-1, 0],
    '180': [0, -1],
    '270': [1, 0]
}

const degreeToIndex = {
    '0': 0,
    '90': 1,
    '180': 2,
    '270': 3
}

function solution(grid) {
    var answer = [];
    const matrix = grid.map(el => el.split(''));
    const degrees = [0 , 90, 180, 270];
    const row = matrix.length;
    const column = matrix[0].length;
    const candidate = new Map();
    const flags = Array(row).fill(0).map(() => Array(column).fill(0).map(() => Array(4).fill(0)));
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            for(let k = 0; k < 4; k++){
                if(flags[i][j][k]) continue;
                let nextVector = nextVertexAndVector(i, j, `${degrees[k]}`, matrix);
                let [index1, index2, degree] = nextVector.split(',');
                let count = 0;
                while(flags[parseInt(index1)][parseInt(index2)][degreeToIndex[degree]] === 0){
                    flags[parseInt(index1)][parseInt(index2)][degreeToIndex[degree]] = 1;
                    nextVector = nextVertexAndVector(index1, index2, degree, matrix);
                    [index1, index2, degree] = nextVector.split(',');
                    count += 1;
                }
                answer.push(count);
            }
        }
    }
    return answer.sort((a,b) => a - b);
}

function nextVertexAndVector(i, j, degree, matrix){
    const nextIndex = [parseInt(i), parseInt(j)];
    const vector = degreeToVector[degree];
    nextIndex[0] += vector[0];
    nextIndex[1] += vector[1];
    if(nextIndex[0] < 0){
        nextIndex[0] = matrix.length - 1;
    }
    else if(nextIndex[0] > matrix.length - 1){
        nextIndex[0] = 0;
    }

    if(nextIndex[1] < 0){
        nextIndex[1] = matrix[0].length - 1;
    }
    else if(nextIndex[1] > matrix[0].length - 1){
        nextIndex[1] = 0;
    }
    const nextVertex = matrix[nextIndex[0]][nextIndex[1]];
    let nextDegree = nextVertex === 'L' ? parseInt(degree) + 90 : nextVertex === 'R' ? parseInt(degree) - 90 : parseInt(degree);
    if(nextDegree === 360){
        nextDegree = 0;
    }

    if(nextDegree === -90){
        nextDegree = 270;
    }

    return `${nextIndex[0]},${nextIndex[1]},${nextDegree}`
}