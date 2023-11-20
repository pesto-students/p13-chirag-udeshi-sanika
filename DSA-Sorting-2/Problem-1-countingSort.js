function countingSort(arr) {
    // Find the minimum and maximum values in the input array.
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Create a count array to store the occurrences of values.
    const count = new Array(max - min + 1).fill(0);

    // Count the occurrences of each value in the input array.
    for (let num of arr) {
        count[num - min]++;
    }

    // Create the sorted output array based on the counts.
    const output = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            output.push(i + min);
            count[i]--;
        }
    }

    return output;
}


let input = prompt("Enter comma-separated string of positive integers");
let unsortedArray = input.split(',');
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);

