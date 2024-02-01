function mergeSort(arr){
    if(arr.length <= 1)
        return arr;

    let mid = Math.floor(arr.length/2);

   
    return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)) )
}

function merge(left, right){
    
    let i = 0, j=0;
    let result = [];
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }
        else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
let input = ["2022-03-15","2023-01-01","2022-12-31","2022-05-20"];
for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split('-').join('');
}
//console.log(input);
let result = mergeSort(input);

for(let i = 0 ; i < result.length ; i++){
    result[i] = result[i].slice(0,4) + '-' + result[i].slice(4,6) + '-' + result[i].slice(6);
}
console.log(result);