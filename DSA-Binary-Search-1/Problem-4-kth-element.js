function kthElement(arr1,arr2,k){
    debugger;
    let n = arr1.length;
    let m = arr2.length;

    if(m < n)
        return kthElement(arr2,arr1,k);


    let low = m < k ? (k-m) : 0, high = n;
   
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let l1 = mid > 0 ? mid-1 : 0; //0-based indexing
        //if 0 elements from array1 are picked

        if(mid == 0 && arr2[k-1] <= arr1[0]){
            //return k-th element of second array;
            return arr2[k-1];
        }
        if(mid == k && arr1[k-1] <= arr2[0]){
            return arr1[k-1];
        }
        if(mid == n && arr1[l1] <= arr2[l2+1]){
            return Math.max(arr1[l1],arr2[l2]);
        }
        let l2 = (k - mid) - 1;
       // let l2 = mid == k ? Number.POSITIVE_INFINITY : k - mid ;
        if(l2+1 == m && l1<n && arr2[l2] <= arr1[l1]){
            //all elements from array2 are selected
            return Math.max(arr1[l1], arr2[l2]);

        }
        if(l2+1<m && l1+1 < n && arr1[l1] <= arr2[l2+1] && arr2[l2] <= arr1[l1+1]){
            return Math.max(arr1[l1], arr2[l2]);
        }

        //Add more elements from array1, move right

        if(l2+1<m && arr1[l1] > arr2[l2+1]){
            high = mid-1;
        }

        if(l1+1<n && arr2[l2] > arr1[11 + 1]){
            low = mid+1;
        }
    }
}

console.log(kthElement([1,3,7,8,9],[4,10,16],3))