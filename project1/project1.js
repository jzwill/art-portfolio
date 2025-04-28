let qbutton1 = document.getElementById("q-button-1");

qbutton1.addEventListener("click", openAnswer1);

function openAnswer1() {
  let answer1 = document.getElementById("answer-1");
  let icon1 = document.getElementById("icon-1");
  answer1.classList.toggle("open-answer");
  qbutton1.classList.toggle("hovered-over");
  icon1.classList.toggle("inactive-icon");
}

let qbutton2 = document.getElementById("q-button-2");

qbutton2.addEventListener("click", openAnswer2);

function openAnswer2() {
  let answer2 = document.getElementById("answer-2");
  let icon2 = document.getElementById("icon-2");
  answer2.classList.toggle("open-answer");
  qbutton2.classList.toggle("hovered-over");
  icon2.classList.toggle("inactive-icon");
}

let qbutton3 = document.getElementById("q-button-3");

qbutton3.addEventListener("click", openAnswer3);

function openAnswer3() {
  let answer3 = document.getElementById("answer-3");
  let icon3 = document.getElementById("icon-3");
  answer3.classList.toggle("open-answer");
  qbutton3.classList.toggle("hovered-over");
  icon3.classList.toggle("inactive-icon");
}

let qbutton4 = document.getElementById("q-button-4");

qbutton4.addEventListener("click", openAnswer4);

function openAnswer4() {
  let answer4 = document.getElementById("answer-4");
  let icon4 = document.getElementById("icon-4");
  answer4.classList.toggle("open-answer");
  qbutton4.classList.toggle("hovered-over");
  icon4.classList.toggle("inactive-icon");
}
