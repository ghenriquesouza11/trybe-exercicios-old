const paragraph = document.querySelectorAll("p");
let maincontent = document.getElementsByClassName("main-content");

function changeText(selector, text) {
  selector[1].innerText = text;
}
changeText(paragraph, "Mais culto e mais rico.");

function changeBackgroundColor(selector, color) {
  selector[0].style.background = color;
}
changeBackgroundColor(maincontent, "rgb(76,164,109)");
