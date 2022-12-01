// let status = "ligado";
// let ligarDesligar = () =>
//   status === "ligado" ? "O motor está ligado" : "O motor está desligado";
// console.log(ligarDesligar());

function biggerWord(phrase) {
  let phraseArray = phrase.split(" ");
  let bigger = 0;
  let word = "";
  for (index = 0; index < phraseArray.length; index++) {
    if (phraseArray[index].length >= bigger) {
      bigger = phraseArray[index].length;
      word = phraseArray[index];
    }
  }
  console.log(word);
}
biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu");
