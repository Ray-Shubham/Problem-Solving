// Make a function without any built-in sort functions that use two sorted arrays and merge them into one array

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // Append remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    // Append remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
