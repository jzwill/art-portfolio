var slideIndex = 1;
showDivs3D(slideIndex);

function plusDivs3D(n) {
  showDivs3D((slideIndex += n));
}

function showDivs3D(n) {
  var i;
  var x = document.getElementsByClassName("3DSlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}