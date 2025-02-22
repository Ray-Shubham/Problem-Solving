/*
What is Higher Order Functions?
Answer: A higher-order function is a function that takes another function as an argument or returns a function as a result.


What is a callback function?
Answer: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action


*/

// Example 1:

function x() {
  console.log("Hello");
}
function y(x) {
  x();
}
y(x);

/*
Explanation:

Here function y() is a higher-order function. It takes a function x() as an argument and calls it.
whereas function y() is a callback function.
*/

// Example 2:(General Approach)

const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
};

console.log(calculateDiameter(radius));
