/*-----------Variable and Data Types-----------*/

// Declare a variable using let and log it's value.

let a = 12;
console.log(a); // Output: 12

// Create a constant to store the value of PI

const pi = Math.PI;
console.log(pi); // Output: 3.141592653589793

// Reassign a value to a variable declared with let and log the result.

let b = 10;
b = 15;
console.log(b); // Output: 15

// Check the type of null and log it

let c = null;
console.log(typeof c); // Output: object

// Create a variable with a number as a string (eg: "10") and log it's type.

let d = "10";
console.log(typeof d); // Output: string

// Use typeof to check the type of a boolean variable.

let e = true;
console.log(typeof e); // Output: boolean

// Create three variables of types string, number and boolean, and log their values.

let f = "Hello";
let g = 10;
let h = true;
console.log(f, g, h); // Output: Hello 10 true

// Declare a variable without assigning a value. Log it's type.

let i;
console.log(typeof i); // Output: undefined

// Create a variable with undefined and log its type.

let j = undefined;
console.log(typeof j); // Output: undefined

// Use const to create an array. Try reassigning the array and observe the error.

const arr = [1, 2, 3];
// arr = [4, 5, 6];
console.log(arr); // Output: TypeError: Assignment to constant variable.

/*-----------Loops-----------*/

// Write a for loop to print numbers from 1 to 50.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Output: 1 2 3 4 5 6 7 8 9 10.

// use a while loop to sum the numbers from 1 to 10.

let index = 1;
let sum = 0;
while (index <= 10) {
  sum += index;
  index++;
}

console.log(sum); // Output: 55

// Create a for...of loop to log each character of the string "Javascript".

let str = "Javascript";
let result = [];
for (let char of str) {
  console.log(char);
}

// Output: J a v a s c r i p t

// Write a for loop that skips even numbers between 1 to 20.

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Output: 1 3 5 7 9 11 13 15 17 19

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Output: 1 3 5 7 9 11 13 15 17 19

// Shortcut to skip even numbers

for (let i = 1; i <= 20; i = i + 2) {
  console.log(i);
}

// Output: 1 3 5 7 9 11 13 15 17 19

// Use a do...while loop to print numbers from 5 to 1.

let count = 5;
do {
  console.log(count);
  count--;
} while (count >= 1);

// Output: 5 4 3 2 1

// Create a for loop that calculates the factorial of a number.

let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact); // Output: 120


// Write a nested loop to print 3x3 grid of numbers.

for (let i =1; i<=3; i++) {
  for (let j=1; j<=3; j++){
    console.log(i,j);
  }
}


// 