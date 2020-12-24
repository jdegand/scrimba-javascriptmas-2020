/*
function extractMatrixColumn(matrix, column) {
let result = [];
let combined = matrix.flat()

for(let i = column; i < combined.length; i+=4){
	result.push(combined[i])
}
	return result;
}

*/


function extractMatrixColumn(matrix, column) {
    //  write code here.
    const result = [];

    for(let row of matrix){
        result.push(row[column])
    }

    return result;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]],2))
