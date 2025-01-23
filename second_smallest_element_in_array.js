function secondSmallest(arr) {
  let n = arr.length;
  if (n < 2) {
    return "Array should have at least 2 elements";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i <= n; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }
  if (secondSmallest === Infinity) {
    return "No second smallest element";
  }
  return secondSmallest;
}

let arr = [4, 6, 9, 3, 6, 5, 8, 7, 1];
let result = secondSmallest(arr);
console.log(result);
