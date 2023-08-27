//Closures

const counter = () => {
    let count = 0;
    const incrementCount = () => {
        count++;
        return count;
    }
    return incrementCount;
}

const firstCounter = counter();
const secondCounter = counter();
let firstValues = [];
let secondValues= [];

//Caling firstCounter 5 times
for (let i = 0 ; i < 5 ; i++){
    firstValues.push(firstCounter());
}

//Caling secondCounter 3 times
for (let i = 0 ; i < 3 ; i++){
    secondValues.push(secondCounter());
}

console.log("First Values : " + firstValues);
console.log("Second Values : " + secondValues);
