// Write a javascript function to find the factorial of a given number.

function factorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
}
let num = 4;
let fact = factorial(num);
console.log(fact);
