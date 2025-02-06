// 2. Write a function that takes an integer minutes and converts it to seconds.

function minutesToSeconds(minutes) {
    return minutes * 60;
}

let minutes = 9;
let seconds = minutesToSeconds(minutes);
console.log(`${minutes} minutes is equal to ${seconds} seconds.`);