// function bulbOn() {
//   document.getElementById("pic1").src = "./DOM/bulb_on.png";
// }

// function bulbOff() {
//   document.getElementById("pic1").src = "./DOM/bulb_off.png";
// }

function changeBulb() {
  let image = document.querySelector('#pic1');
  if (image.src.match("bulb_on")) {
    image.src = "./DOM/bulb_off.png";
  } else {
    image.src = "./DOM/bulb_on.png";
  }
}
