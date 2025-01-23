function thirdLargest(arr) {
  let n = arr.length;
  let largest = -1;
  let secondLargest = -1;
  let thirdLargest = -1;
  for (let i = 0; i <= n; i++) {
    // If arr[i] > largest, update third largest with
    // second largest and second largest with largest
    // and largest with arr[i]
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    }

    // If arr[i] < largest and arr[i] > second largest,
    // update third largest with second largest and
    // second largest with arr[i]
    else if (arr[i] < largest && arr[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    }

    // If arr[i] < second largest and arr[i] > third largest,
    // update third largest with arr[i]
    else if (arr[i] < secondLargest && arr[i] > thirdLargest) {
      thirdLargest = arr[i];
    }
  }
  return thirdLargest;
}

let arr = [2, 3, 16, 5, 9, 24];
let result = thirdLargest(arr);
console.log(result);
