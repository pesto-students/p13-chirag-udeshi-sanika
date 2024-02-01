function lastOccurence(arr, target){
    if(arr.length < 2)
        return arr;

   let index = binarySearch(arr, 0, arr.length-1, target, -1);
   return index;
    
}

function binarySearch(arr, left, right, target, result){
    
    if(left > right || left < 0 || right >= arr.length)
        return result;
    let mid = Math.floor((left+right)/2);
   // let result = -1;
    if(arr[mid] < target)
    return binarySearch(arr, mid+1, right, target, result)

    if(arr[mid] > target)
    return binarySearch(arr, 0, mid-1, target, result)

    if(arr[mid] == target){
        result = mid;
        //store result in case this is the right-most occurence. Move right
        return binarySearch(arr, mid+1, right, target, result)
    }
    
  
}

console.log(lastOccurence([1,3,5,7,8,8,8,8,8,8,8,10],1)) //9