let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

button1.addEventListener("click", close1);
button2.addEventListener("click", close2);
button3.addEventListener("click", close3);
button4.addEventListener("click", close4);

function close1() {
  let answer1 = document.getElementById("answer1");
  answer1.classList.toggle("close-answer1");
}
function close2() {
  let answer1 = document.getElementById("answer2");
  answer1.classList.toggle("close-answer2");
}
function close3() {
  let answer1 = document.getElementById("answer3");
  answer1.classList.toggle("close-answer3");
}
function close4() {
  let answer1 = document.getElementById("answer4");
  answer1.classList.toggle("close-answer4");
}
