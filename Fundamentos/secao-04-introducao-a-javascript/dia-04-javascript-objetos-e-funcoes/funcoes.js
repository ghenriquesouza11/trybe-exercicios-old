// function palindromo(palavra) {
//   let palavraInvertida = [];
//   for (index = palavra.length - 1; index >= 0; index--) {
//     palavraInvertida.push(palavra[index]);
//   }
//   if (palavraInvertida.join("") == palavra) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

function maiorIndice(array) {
  let maiorValor = 0;
  for (index = 0; index < array.length; index++) {
    if (array[index] >= maiorValor) {
      maiorValor = array[index];
    }
  }
  let maiorValorIndice = 0;
  for (index = 0; index < array.length; index++) {
    if (maiorValor == array[index]) {
      maiorValorIndice = index;
    }
  }
  console.log(maiorValorIndice);
}
maiorIndice([2, 3, 6, 7, 10, 1]);
