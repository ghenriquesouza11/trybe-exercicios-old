let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log("Bem-vinda,", info.personagem, "");
info["recorrente"] = "Sim";
console.log(info.recorrente);
for (index = 0; index < Object.keys(info).length; index++) {
  let keyName = Object.keys(info)[index];
  console.log(keyName);
}
