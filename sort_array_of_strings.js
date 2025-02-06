/* 11.Create a function that returns an array of strings sorted by length in ascending
order.
Example:
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"] */

function sortByLength(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
  
    return arr
      .map(item => String(item)) // Convert all elements to strings
      .sort((a, b) => a.length - b.length);
  }
  
  // Test Cases
  try {
    console.log(sortByLength(["a", "ccc", "dddd", "bb"])); // ["a", "bb", "ccc", "dddd"]
    console.log(sortByLength(["apple", "banana", "kiwi", "cherry"])); // ["kiwi", "apple", "cherry", "banana"]
    console.log(sortByLength(["longword", "tiny", "medium", "s"])); // ["s", "tiny", "medium", "longword"]
    console.log(sortByLength(["", "abc", "abcd", "a"])); // ["", "a", "abc", "abcd"]
    console.log(sortByLength([])); // []
    console.log(sortByLength(["same", "size", "word"])); // ["same", "size", "word"]
    console.log(sortByLength(["a", "aa", "aaa", "aaaa"])); // ["a", "aa", "aaa", "aaaa"]
    console.log(sortByLength([" ", "  ", "   ", "    "])); // [" ", "  ", "   ", "    "]
  
    // Mixed Data Types
    console.log(sortByLength(["a", 2, "bb", true, null, undefined, "ccc"])); 
    // Converts: ["a", "2", "bb", "true", "null", "undefined", "ccc"]
    // Output: ["a", "2", "bb", "ccc", "true", "null", "undefined"]
  
    console.log(sortByLength([123, "abc", {}, [], 45.67, false])); 
    // Converts: ["123", "abc", "[object Object]", "", "45.67", "false"]
    // Output: ["", "abc", "123", "false", "45.67", "[object Object]"]
  
  } catch (error) {
    console.error(error.message);
  }
  