// Write a JavaScript function that uses an array of numbers and only gives a new array with even numbers

function evenNumbers(numbers) {
  let evenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      continue;
    }
    if (numbers[i] % 2 === 0) {
      evenArray += numbers[i] + " ";
    }
  }
  return evenArray;
}
let numbers = [12, "b", true, "r", 87, 90, 32, 5, 44, 65, "a"];
let evenArray = evenNumbers(numbers);
console.log(evenArray);
