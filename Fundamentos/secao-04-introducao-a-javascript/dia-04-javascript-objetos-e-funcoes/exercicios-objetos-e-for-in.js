let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log("Bem-vinda,", info.personagem, "");
// info["recorrente"] = "Sim";
// console.log(info.recorrente);

// for (index = 0; index < Object.keys(info).length; index++) {
//   let keyName = Object.keys(info)[index];
//   console.log(keyName);
// }

// for (index = 0; index < Object.keys(info).length; index++) {
//   console.log(Object.values(info)[index]);
// }

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
for (index = 0; index < Object.keys(info).length; index++) {
  console.log(Object.values(info)[index], " e ", Object.values(info2)[index]);
}
