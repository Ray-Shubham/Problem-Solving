// 7. Create a function that takes two arguments. Both arguments are integers, a and
// b. Return true if one of them is 10 or if their sum is 10.


function sumIsTen(a, b) {
    return a === 10 || b === 10 || a + b === 10
}

console.log(sumIsTen(1, 1));