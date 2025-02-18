// Write a function to check if a number is even or odd

function isEvenOrOdd(num) {
  // if(num % 2 === 0) {
  //     console.log("Given number is Even")
  // } else {
  //     console.log("Given number is Odd")
  // }

  return num % 2 === 0
    ? console.log("Given number is Even")
    : console.log("Given number is Odd");
}
isEvenOrOdd(9);
