function secondSmallest(arr) {
  let n = arr.length;
  // If n < 2, return "Array should have at least 2 elements"
  if (n < 2) {
    return "Array should have at least 2 elements";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i <= n; i++) {
    // If arr[i] < smallest, update second smallest with smallest
    // and smallest with arr[i]
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    }
    // If arr[i] < smallest and arr[i] > second smallest,
    // update second smallest with arr[i]
    else if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }

  // If secondSmallest is still Infinity, return "No second smallest element"
  if (secondSmallest === Infinity) {
    return "No second smallest element";
  }
  return secondSmallest;
}

let arr = [4, 6, 9, 3, 6, 5, 8, 7, 1];
let result = secondSmallest(arr);
console.log(result);
