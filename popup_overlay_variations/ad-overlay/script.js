window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("adPopup").style.display = "flex";
  }, 3000);
});

document.getElementById("adCloseBtn").addEventListener("click", () => {
  document.getElementById("adPopup").style.display = "none";
});