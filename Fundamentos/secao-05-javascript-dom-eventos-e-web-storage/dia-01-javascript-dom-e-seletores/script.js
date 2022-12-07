const paragraph = document.querySelectorAll("p");
const mainContent = document.querySelectorAll(".main-content");
const centerContent = document.querySelectorAll(".center-content");

function changeText(selector, text) {
  selector[1].innerText = text;
}
changeText(paragraph, "Mais culto e mais rico.");

function changeBackgroundColor(selector, color) {
  selector[0].style.background = color;
}
changeBackgroundColor(mainContent, "rgb(76,164,109)");
changeBackgroundColor(centerContent, "white");
