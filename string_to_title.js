// Write a JavaScript program to change the string to title (first letter of every word should be in upper case)

// function capitalizeFirstLetterofEachWord(str) {
//     const words = str.split(" ");
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
// }
// const inputString = "hello world this is a sample string";
// const capitalizedString = capitalizeFirstLetterofEachWord(inputString);
// console.log("Capitalized string:", capitalizedString);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function toTitleCaseForLoop(str) {
  if (typeof str !== "string") {
    return "Invalid input: Input must be a string.";
  }

  str = str.trim().toLowerCase();
  let words = str.split(/\s+/); // Use the split for multiple spaces
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
      if (i < words.length - 1) {
        result += " ";
      }
    }
  }
  return result;
}

readline.question("Enter a string: ", (inputString) => {
  const titleCasedString = toTitleCaseForLoop(inputString);
  console.log("Title-cased string:", titleCasedString, titleCasedString.length);
  readline.close(); // Close the readline interface
});
