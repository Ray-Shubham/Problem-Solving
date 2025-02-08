// 4. Write a JavaScript function that directs whether the given strings are anagrams

function areAnagrams(str1, str2) {
    // Check if the strings have different lengths
    if (str1.length !== str2.length) {
        return false;
    }
    // Create character count objects for both strings
    const charCount1 = {};
    const charCount2 = {};
    // Count characters in the first string
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    // Count characters in the second string
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    // Compare character counts
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }
    return true;
}
// Example usage:
const str1 = "gum";
const str2 = "mug";
if (areAnagrams(str1, str2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}          
