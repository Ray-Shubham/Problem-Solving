// Write a function to find the most frequent character in a string.

function mostFrequentChar() {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > 1) {
      result = str[i];
    }
  }
  return result;
}
let str = "banana";
let frequentChar = mostFrequentChar(str);
console.log(frequentChar);


// Optimized Version


// function mostRepeatedChar() {
//     let charCount = {};

// }
// let string = "banana";
// let res = mostRepeatedChar(string);
// console.log(res)
