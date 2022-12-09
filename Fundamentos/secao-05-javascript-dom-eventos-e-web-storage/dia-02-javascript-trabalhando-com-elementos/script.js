const body = document.getElementById("body");
const h1 = document.getElementsByTagName("h1");

function createInsertChild(father, child, clss) {
  const newchild = document.createElement(child);
  father.appendChild(newchild);
  newchild.classList.add(clss);
}
createInsertChild(body, "h1");
h1[0].innerHTML = "TrybeTrip - Agência de Viagens";
createInsertChild(body, "main", "main-content");
const main = document.getElementsByTagName("main");
createInsertChild(main[0], "section", "center-content");
const section = document.getElementsByTagName("section");
createInsertChild(section[0], "p");
const p = document.getElementsByTagName("p");
p[0].innerHTML = "Hello World!";
createInsertChild(main[0], "section", "left-content");
createInsertChild(main[0], "section", "right-content");
const leftContent = document.getElementsByClassName("left-content");
createInsertChild(leftContent[0], "img", "small-image");
const smallImage = document.getElementsByClassName("small-image");
smallImage[0].src =
  "https://i.picsum.photos/id/1044/200/200.jpg?hmac=HB3e6tTss6J_9wexZ1v1psMlccdyQIrHrrijUgWXFhg";
const rightContent = document.getElementsByClassName("right-content");
createInsertChild(rightContent[0], "ul");
const ul = document.getElementsByTagName("ul");
for (index = 0; index < 10; index += 1) {
  createInsertChild(ul[0], "li");
}
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
for (index = 0; index < 10; index += 1) {
  li[index].innerHTML = writtenNumbers[index];
}
for (index = 0; index < 3; index += 1) {
  createInsertChild(main[0], "h3");
}
