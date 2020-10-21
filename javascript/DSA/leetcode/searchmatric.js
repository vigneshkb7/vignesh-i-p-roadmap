/**
 * Approach 1
 * @param {*} matrix 2D matrix
 * @param {*} value value to find
 */

const search = (matrix, value) => {
    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] === value) {
                return true;
                break;
            }
        }
    }
    return false;
}




console.log('------->',search([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 9));