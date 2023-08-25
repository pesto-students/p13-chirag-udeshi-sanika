const divideArray = (nums) => {
  let evenNums = [];
  let oddNums = [];
  if (nums.length > 0) {
    nums.forEach((element) => {
      if (element % 2 === 0) evenNums.push(element);
      else oddNums.push(element);
    });
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);
    console.log("Even numbers : ");
    evenNums.length === 0 ? console.log("None") : console.log(evenNums);
    console.log("Odd numbers : ");
    oddNums.length === 0 ? console.log("None") : console.log(oddNums);
  } else {
    console.log("Empty array provided.");
  }
};

let nums = [4, 2, 9, 1, 8];
