// 4. Write a JavaScript program that calculates the factorial of a number

function factorial(number) {
  // To Handle Zero
  if (number === 0) {
    return 1;
  }

  // To Calculate Factorial
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}

let number = 1;
let result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);

// Second Method Using Recursion

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let num = 1;
let res = factorial(num);
console.log(`The factorial of ${num} is ${res}`);
