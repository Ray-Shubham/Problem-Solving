// Print a right-angled triangle pattern using * for a given number of rows.

function rightAngleTrianle(row) {
  for (let i = 1; i <= row; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}

let row = 5;
let result = rightAngleTrianle(row);



