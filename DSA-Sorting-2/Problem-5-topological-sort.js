
function topologicalSort(V, adjMat) {
  debugger;
  let inorderArr = new Array(V).fill(0);
  findInorder(adjMat,inorderArr);
  let result = [];
  while (inorderArr.indexOf(0) != -1) {
    let v = inorderArr.indexOf(0);
    result.push(v);
    inorderArr[v] = -1;
    for (let i = 0; i < V; i++) {
      adjMat[v][i] = -1;
    }
    findInorder(adjMat, inorderArr);
  }
  return result;
}

function findInorder(arr, inorderArr) {
  for (let col = 0; col < arr.length; col++) {
    if(inorderArr[col] == -1){
        //do not compute indegree, continue
        continue; 
    }
    let total = 0;
    for (let row = 0; row < arr.length; row++) {
      if (arr[row][col] != -1) {
        total += arr[row][col];
    }
    }
    inorderArr[col] = total;
  }
}

console.log(
  topologicalSort(5, [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ])
);
