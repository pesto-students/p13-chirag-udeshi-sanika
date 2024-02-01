function binarySearch(arr, target, left, right){
    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid] == target)
            return true;

        if(arr[mid] > target){
            right = mid -1;
        }
        if(arr[mid] < target){
            left = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch([1,3,5,7,9,5], 10,0,5));
console.log(binarySearch([1,3,5,7,9,5], 1,0,5))