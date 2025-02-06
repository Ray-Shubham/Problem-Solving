/* 8. Create a function that takes two strings as arguments and returns either true or
false depending on whether the total number of characters in the first string is
equal to the total number of characters in the second string */

// function equalLength(str1, str2) {
//     return str1.length === str2.length;
// }

// console.log(equalLength("hello", "world"));

function equalLength(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Please enter valid strings.";
  }

  str1.length === str2.length ? console.log(true) : console.log(false);
}

let str1 = "hello";
let str2 = "world";
let result = equalLength(str1, str2);
