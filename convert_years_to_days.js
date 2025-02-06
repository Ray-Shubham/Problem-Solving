// 4. Create a function that takes the age in years and returns the age in days.

function yearsToDays(age) {
  if (typeof age !== "number" || age < 0 || !Number.isInteger(age)) {
    console.log("Please enter a valid positive integer.");
  } else {
    console.log(`${age} years is equal to ${age * 365.25} days.`);
  }
}

let age = 37;
let days = yearsToDays(age);