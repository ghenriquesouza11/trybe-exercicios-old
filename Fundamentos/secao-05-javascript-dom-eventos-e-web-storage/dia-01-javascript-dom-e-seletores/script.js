const paragraph = document.querySelectorAll("p");
function changeText(selector, text) {
  selector[1].innerText = text;
}
changeText(paragraph, "Mais culto e mais rico.");
