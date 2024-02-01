/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0)
        return false;
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    if(target < matrix[0] || target > matrix[numRows - 1][numCols - 1] ) // target is less than first or greater than last element, return false
        return false;
    let found = false;
    let currentRow = 0;

    while(!found && currentRow < numRows){
        found = findInRow(matrix[currentRow], target, 0 , numCols-1);
        currentRow++;
    }

    return found;
       
};

const findInRow = (array, target, low, high) => {
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(array[mid] == target)
            return true;
        if(array[mid] < target){
            //go right
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));