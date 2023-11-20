function bucketSort(arr){
    let evenNums = [];
    let oddNums = [];
    let N = arr.length;
    for(let i = 0 ; i < N ; i++){
        if(arr[i] % 2 == 0)
            evenNums.push(arr[i])
        else
            oddNums.push(arr[i])
    }

    evenNums.sort((a,b) => {return a-b});
    oddNums.sort((a,b) => {return a-b});

    let i =0, j=0;
    let result = [];
    while(i < evenNums.length && j < oddNums.length){
        if(evenNums[i] <= oddNums[j]){
            result.push(evenNums[i]);
            i++;
        }
        else{
            result.push(oddNums[j]);
            j++;
        }
       
    }
    return result;
}

console.log(bucketSort([2,4,3,11,67,98,34]));