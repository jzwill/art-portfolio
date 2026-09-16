const loop1Nav = document.getElementById("loop1-nav");
const loop2Nav = document.getElementById("loop2-nav");

const backNav = document.getElementById("back-nav");

const loop1Page = document.getElementById("loop1page-page");
const loop2Page = document.getElementById("loop2page-page");

loop1Nav.addEventListener("click", showloop1);
loop2Nav.addEventListener("click", showloop2);

backNav.addEventListener("click", showProject4insub);

//

function showProject4insub() {
  displayNone();
  window.scrollTo(0, 0);
  project3Page.style.display = "block"; 
}

function showloop1() {
  window.scrollTo(0, 0);
  project3Page.style.display = "none";
  loop1Page.style.display = "block";
}

function showloop2() {
  window.scrollTo(0, 0);
  project3Page.style.display = "none";
  loop2Page.style.display = "block";
}