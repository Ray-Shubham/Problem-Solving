// Write a function to convert all lowercase letters to uppercase without using ".toUpperCase()" method.

function convertToUpperCase(str) {
  let upperStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      upperStr += String.fromCharCode(charCode - 32);
    } else {
      upperStr += str[i];
    }
  }
  return upperStr;
}
let str = "hEllo!";
let upperCaseStr = convertToUpperCase(str);
console.log(upperCaseStr);
