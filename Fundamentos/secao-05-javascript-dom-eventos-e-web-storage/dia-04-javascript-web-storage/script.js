const body = document.getElementById("body");
const mainHeaderList = document.getElementsByClassName("main-header__list");

for (index = 1; index < mainHeaderList[0].children.length; index += 1) {
  mainHeaderList[0].children[index].addEventListener("click", function () {
    // Botões para alter a cor de fundo.
    if (event.target === mainHeaderList[0].children[1].children[0]) {
      body.style.backgroundColor = "white";
    } else if (event.target === mainHeaderList[0].children[2].children[0]) {
      body.style.backgroundColor = "black";
    } else if (event.target === mainHeaderList[0].children[3].children[0]) {
      body.style.backgroundColor = "green";
    } else if (event.target === mainHeaderList[0].children[4].children[0]) {
      body.style.backgroundColor = "blue";
    } else if (event.target === mainHeaderList[0].children[5].children[0]) {
      body.style.backgroundColor = "yellow";
    }
  });
}
for (index = 1; index < mainHeaderList[1].children.length; index += 1) {
  mainHeaderList[1].children[index].addEventListener("click", function () {
    // Botões para alterar a cor da fonte
    if (event.target === mainHeaderList[1].children[1].children[0]) {
      body.style.color = "black";
    } else if (event.target === mainHeaderList[1].children[2].children[0]) {
      body.style.color = "red";
    } else if (event.target === mainHeaderList[1].children[3].children[0]) {
      body.style.color = "white";
    }
  });
}
