// 3. Write a JavaScript function that finds the maximum number in an array

function findMax(arr) {
  // To Handle Empty Array
  if (arr.length === 0) {
    return null;
  }
  // To Find Maximum Number in Array
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let numbers = [12, 4, 7, 4, 87, 90, 3, 5, 44, 65];
let maxNumber = findMax(numbers);
console.log(`The maximum number in the array is ${maxNumber}`);
