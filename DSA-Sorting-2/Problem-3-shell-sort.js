function shellSort(arr){
    let N = arr.length;
     for(let gap = Math.floor(N/2) ; gap >= 1 ; gap = Math.floor(gap/2)){
        
        let i = 0, j = gap;

        while(j < N){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                let prev = i;
                while(prev - gap >= 0){
                    if(arr[prev-gap] > arr[prev]){
                        [arr[prev-gap], arr[prev]] = [arr[prev], arr[prev-gap]];
                    }
                    prev--;
                }
                
            }
            i++; j++;
        }
    }
}

let input = ["2023-07-03 12:30:15", "2023-07-03 10:15:00", "2023-07-02 18:45:30", "2023-07-01 20:00:00"];
for(let i = 0 ; i < input.length ; i++){
    input[i] = new Date(input[i])
}
shellSort(input);
for(let i = 0 ; i < input.length ; i++){
    input[i] = new Date(input[i]).toISOString()
}
console.log(input)