let popupShown = false;

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollPercent >= 20 && !popupShown) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    popupShown = true;
  }
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
function newVersion() {
  window.open("newIndex.html", "_self");
  closePopup();
}
