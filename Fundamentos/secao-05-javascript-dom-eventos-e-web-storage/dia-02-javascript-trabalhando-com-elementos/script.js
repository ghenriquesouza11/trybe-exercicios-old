const body = document.getElementById("body");
const h1 = document.getElementsByTagName("h1");
const main = document.getElementsByTagName("main");
const section = document.getElementsByTagName("section");
const p = document.getElementsByTagName("p");
const leftContent = document.getElementsByClassName("left-content");
const smallImage = document.getElementsByClassName("small-image");
const rightContent = document.getElementsByClassName("right-content");
const ul = document.getElementsByTagName("ul");
const li = document.getElementsByTagName("li");
const writtenNumbers = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
const h3 = document.getElementsByTagName("h3");

function createInsertChild(father, child, clss) {
  const newchild = document.createElement(child);
  father.appendChild(newchild);
  newchild.classList.add(clss);
}
function removeChild(father, child) {
  father.removeChild(child);
}

createInsertChild(body, "h1");
h1[0].innerHTML = "TrybeTrip - Agência de Viagens";
createInsertChild(body, "main", "main-content");
createInsertChild(main[0], "section", "center-content");
createInsertChild(section[0], "p");
p[0].innerHTML = "Hello World!";
createInsertChild(main[0], "section", "left-content");
createInsertChild(main[0], "section", "right-content");
createInsertChild(leftContent[0], "img", "small-image");
smallImage[0].src =
  "https://i.picsum.photos/id/1044/200/200.jpg?hmac=HB3e6tTss6J_9wexZ1v1psMlccdyQIrHrrijUgWXFhg";
createInsertChild(rightContent[0], "ul");
for (index = 0; index < 10; index += 1) {
  createInsertChild(ul[0], "li");
}
for (index = 0; index < 10; index += 1) {
  li[index].innerHTML = writtenNumbers[index];
}
for (index = 0; index < 3; index += 1) {
  createInsertChild(main[0], "h3");
}
h1[0].classList.add("title");
for (index = 0; index < 3; index += 1) {
  h3[index].classList.add("description");
}
removeChild(main[0], section[1]);
section[1].style.margin = "auto";
main[0].style.background = "green";
for (index = 9; index > 7; index -= 1) {
  removeChild(ul[0], li[index]);
}
