// Find the first non-repeating character in a string

function nonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}
let str = "gig";
let result = nonRepeatingChar(str);
console.log(result);
