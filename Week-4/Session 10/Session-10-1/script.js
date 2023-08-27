//Call, apply and bind methods
class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    if (num2 == 0) return "Invalid input. Second argument cannot be 0";
    else return num1 / num2;
  }
}
class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }
  cube(num) {
    return num * num * num;
  }
  power(num1, num2) {
    let result = num1;
    if (num2 == 0) return 1;
    for (let i = 0; i < num2; i++) {
      result = result * num1;
    }
    return num1;
  }
}

const sciCal = new ScientificCalculator();
console.log("Addition : " + sciCal.add.call(this, 10, 5));
console.log("Subtraction : " + sciCal.subtract.apply(this, [5, 15]));

function multiplyByTwo(num) {
  return num * 2;
}

function powerOfThree(num) {
  return num * num * num;
}

const boundFunction1 = multiplyByTwo.bind(sciCal);
console.log("Multiply by 2 : " + boundFunction1(5));

const boundFunction2 = powerOfThree.bind(sciCal);
console.log("Power of 3 : " + boundFunction2(2));