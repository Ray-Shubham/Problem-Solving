// var x= 1;
// a();
// b();
// console.log(x)

// function a() {
//     var x=10;
//     console.log(x);
// }

// function b() {
//     var x=20
//     console.log(x);
// }

// function a() {
//     console.log("a called")
// }

// var b = function () {
//     console.log("b called")
// }
// a();
// b();

// function xyz(param1) {
//     console.log(param1)
// }
// function y() {
//     console.log("y called")
// }
// xyz(y);

// let c = function (x) {
//     return function xyz() {

//     }
// }
// console.log(c())



setTimeout(() => {
    console.log("Timer")
}, 5000);
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y")
})
