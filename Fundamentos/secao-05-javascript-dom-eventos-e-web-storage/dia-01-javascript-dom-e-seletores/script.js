const paragraph = document.querySelectorAll("p");
const mainContent = document.querySelectorAll(".main-content");
const centerContent = document.querySelectorAll(".center-content");
const h1 = document.querySelectorAll("h1");

function changeText(selector, text) {
  selector.innerText = text;
}

function changeBackgroundColor(selector, color) {
  selector.style.background = color;
}

function upperCaseText(selector) {
  selector.style.textTransform = "uppercase";
}

changeText(paragraph[1], "Mais culto e mais rico.");
changeBackgroundColor(mainContent[0], "rgb(76,164,109)");
changeBackgroundColor(centerContent[0], "white");
changeText(h1[0], "Desafio - JavaScript");
upperCaseText(paragraph[0]);
