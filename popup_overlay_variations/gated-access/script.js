document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("gatedPopup").style.display = "none";
  document.getElementById("blurContent").classList.remove("blur");
});