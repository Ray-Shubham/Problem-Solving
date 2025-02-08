// Write a JavaScript function to find the largest element in the nested array

function findLargestElement(nestedArray) {
    let largest = -Infinity; // Initialize with the smallest possible number

    // Loop through the outer array
    for (let i = 0; i < nestedArray.length; i++) {
        // Loop through the inner array
        for (let j = 0; j < nestedArray[i].length; j++) {
            // Check if the current element is larger than the largest found so far
            if (nestedArray[i][j] > largest) {
                largest = nestedArray[i][j];
            }
        }
    }

    return largest;
}

// Example usage:
const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(findLargestElement(nestedArray)); // Output: 9