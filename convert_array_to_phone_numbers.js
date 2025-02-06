/* 10.Create a function that takes an array of 10 numbers (between 0 and 9) and
returns a string of those numbers formatted as a phone number (e.g. (555) 555-
5555). */

function arrayToPhoneNumber(arr) {
  if (arr.length !== 10 || arr.some((num) => num < 0 || num > 9 || typeof num !== "number")) {
    return "Invalid input. Please enter an array of 10 numbers between 0 and 9.";
  }
  const areaCode = arr.slice(0, 3).join("");
  const exchangeCode = arr.slice(3, 6).join("");
  const subscriberNumber = arr.slice(6, 10).join("");
  return `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
}

let arr = [9, 1, 3, 8, 5, 6, 7, 8, 9, 0];
const result = arrayToPhoneNumber(arr);
console.log(result);
