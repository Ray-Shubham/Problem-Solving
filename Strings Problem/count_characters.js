// Count the occurrences of each character in a string

function countOccurrences(str) {
  str = str.toLowerCase();
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (char === str[j]) {
        count++;
      }
    }
    result[char] = count;
  }
  return result;
}
let str = "RAayYSs";
let result = countOccurrences(str);
console.log(result);

// Optimized Approach

function countEachChar(string) {
  // str = str.toLowerCase();
  let results = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (results[char]) {
      results[char]++;
    } else {
      results[char] = 1;
    }
  }
  return results;
}
let string = "WwoORLldD";
let res = countEachChar(string);
console.log(res);
