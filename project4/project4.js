const rockNav = document.getElementById("rock-nav");

const rockPage = document.getElementById("rockpage-page");

//

rockNav.addEventListener("click", showRock);

//

function showRock() {
  project4Page.style.display = "none";
  rockPage.style.display = "block";
}
