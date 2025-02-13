// Write a function to check if a string is a palindrome or not.

function isPalindrome(str) {
  let length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
let str = "racecar";
let palindromeStr = isPalindrome(str);
console.log(palindromeStr);

// Optimized Version

function palindrome(string) {
  let cleanedStr = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      cleanedStr += char;
    }
  }
  let length = cleanedStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
let string = "M  a  D  Am";
let result = palindrome(string);
console.log(result);
