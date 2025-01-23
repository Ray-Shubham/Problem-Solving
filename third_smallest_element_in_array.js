function thirdSmallest(arr) {
  let n = arr.length;
  if (n < 3) {
    return "Array should have at least 3 elements";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  let thirdSmallest = Infinity;
  for (let i = 0; i <= n; i++) {
    if (arr[i] < smallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] > smallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = arr[i];
    } else if (arr[i] < thirdSmallest && arr[i] > secondSmallest) {
      thirdSmallest = arr[i];
    }
  }
  if (thirdSmallest === Infinity) {
    return "No third smallest element";
  }
  return thirdSmallest;
}

let arr = [4, 7, 6, 9, 4, 2, 6, 7, 9, 1];
let result = thirdSmallest(arr);
console.log(result);
