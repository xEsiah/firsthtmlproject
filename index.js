let popupShown = false;

if (!popupShown) {
  setTimeout(() => {
    popupShown = true;
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }, 2000);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function newVersion() {
  window.open("newIndex.html", "_self");
  closePopup();
}
