const body = document.getElementById("body");
const h1 = document.getElementsByTagName("h1");

function createInsertChild(father, child, clss) {
  const newchild = document.createElement(child);
  father.appendChild(newchild);
  newchild.classList.add(clss);
}
