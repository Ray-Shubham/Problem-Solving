function smallestNumber(arr) {
  let n = arr.length;
  // If n < 1, return "Array should have at least 1 element"
  if (n < 1) {
    return "Array should have at least 1 element";
  }
  let smallest = arr[0];
  for (let i = 1; i <= n; i++) {
    // If arr[i] < smallest, update smallest with arr[i]
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [9, 4, 6, 3, 7, 4, 7, 1, 5];
let result = smallestNumber(arr);
console.log(result);
