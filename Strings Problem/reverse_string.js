// Reverse a String manually

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

let str = "Hello";
let reversedStr = reverseString(str);
console.log(reversedStr);
