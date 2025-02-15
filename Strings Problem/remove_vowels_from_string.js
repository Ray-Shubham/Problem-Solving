// Write a function to remove vowels from a string.

function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      res += str[i];
    }
  }
  return res;
}
let str = "hello world";
let result = removeVowels(str);
console.log(result);
