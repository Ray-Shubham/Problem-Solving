// Write a function to convert all uppercase letters to lowercase without using ".toLowerCase()" method.

function convertToLowerCase(str) {
  let lowerStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      lowerStr += String.fromCharCode(charCode + 32);
    } else {
      lowerStr += str[i];
    }
  }
  return lowerStr;
}
let str = "HELLO";
let lowerCaseStr = convertToLowerCase(str);
console.log(lowerCaseStr);
