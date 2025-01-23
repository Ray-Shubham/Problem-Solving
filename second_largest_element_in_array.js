function secondLargest(arr) {
  let n = arr.length;
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i <= n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [2, 3, 6, 5, 9, 4];
let result = secondLargest(arr);
console.log(result);
