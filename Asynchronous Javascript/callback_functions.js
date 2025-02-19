/* Callback Function : Callback function means to take a function and pass it into another function is known as callback function

(or)

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action



*/

setTimeout(function () {
    console.log("Timer");
},5000);

function x(y) {
    console.log("X");
    y();
}
x(function y() {
    console.log("Y")
});