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
smallImage[0].src = "https://picsum.photos/200";
