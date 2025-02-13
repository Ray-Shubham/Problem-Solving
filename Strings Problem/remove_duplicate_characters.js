// Write a function to remove duplicate characters from a string.

function removeDuplicateChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result += str[i];
    }
  }
  return result;
}
let str = "hello";
let uniqueChar = removeDuplicateChar(str);
console.log(uniqueChar);
