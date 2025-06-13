document.addEventListener("mouseout", function(e) {
  if (e.clientY < 10) {
    document.getElementById("exitPopup").style.display = "flex";
  }
});

document.getElementById("exitCloseBtn").addEventListener("click", function () {
  document.getElementById("exitPopup").style.display = "none";
});