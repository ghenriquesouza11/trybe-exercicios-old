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
for (index = 1; index < mainHeaderList[2].children.length; index += 1) {
  mainHeaderList[2].children[index].addEventListener("click", function () {
    // Botões para alterar o tamanho da fonte
    if (event.target === mainHeaderList[2].children[1].children[0]) {
      body.style.fontSize = "11px";
    } else if (event.target === mainHeaderList[2].children[2].children[0]) {
      body.style.fontSize = "13px";
    } else if (event.target === mainHeaderList[2].children[3].children[0]) {
      body.style.fontSize = "16px";
    } else if (event.target === mainHeaderList[2].children[4].children[0]) {
      body.style.fontSize = "19px";
    } else if (event.target === mainHeaderList[2].children[5].children[0]) {
      body.style.fontSize = "27px";
    }
  });
}
for (index = 1; index < mainHeaderList[3].children.length; index += 1) {
  mainHeaderList[3].children[index].addEventListener("click", function () {
    // Botões para alterar o tamanho da fonte
    if (event.target === mainHeaderList[3].children[1].children[0]) {
      body.style.lineHeight = "1";
    } else if (event.target === mainHeaderList[3].children[2].children[0]) {
      body.style.lineHeight = "normal";
    } else if (event.target === mainHeaderList[3].children[3].children[0]) {
      body.style.lineHeight = "1.5";
    } else if (event.target === mainHeaderList[3].children[4].children[0]) {
      body.style.lineHeight = "2.0";
    } else if (event.target === mainHeaderList[3].children[5].children[0]) {
      body.style.lineHeight = "3.0";
    }
  });
}
