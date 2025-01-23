function secondLargest(arr) {
  let n = arr.length;
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i <= n; i++) {
    // If arr[i] > largest, update second largest with
    // largest and largest with arr[i]
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }

    // If arr[i] < largest and arr[i] > second largest,
    // update second largest with arr[i]
    else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [1, 2, 5, 3, 4, 6];
let result = secondLargest(arr);
console.log(result);
