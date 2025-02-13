// Write a function to replace all spaces in a string with underscores.

function replaceSpaces(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += "_";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
let str = "My name is Subham ray";
let result = replaceSpaces(str);
console.log(result);
