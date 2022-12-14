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
// palindromo("arara");

// function maiorIndice(array) {
//   let maiorValor = 0;
//   for (index = 0; index < array.length; index++) {
//     if (array[index] >= maiorValor) {
//       maiorValor = array[index];
//     }
//   }
//   let maiorValorIndice = 0;
//   for (index = 0; index < array.length; index++) {
//     if (maiorValor == array[index]) {
//       maiorValorIndice = index;
//     }
//   }
//   console.log(maiorValorIndice);
// }
// maiorIndice([2, 3, 6, 7, 10, 1]);

// function menorIndice(array) {
//   let menorValor = 0;
//   for (index = 0; index < array.length; index++) {
//     if (menorValor >= array[index]) {
//       menorValor = array[index];
//     }
//   }
//   let menorValorIndice = 0;
//   for (index = 0; index < array.length; index++) {
//     if (menorValor == array[index]) {
//       menorValorIndice = index;
//     }
//   }
//   console.log(menorValorIndice);
// }
// menorIndice([2, 4, 6, 7, 10, 0, -3]);

// function maiorNome(array) {
//   let bigger = "";
//   for (index = 0; index < array.length; index++) {
//     if (array[index].length >= bigger.length) {
//       bigger = array[index];
//     }
//   }
//   console.log(bigger);
// }
// maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);

// function maisRepetido(array) {
//   let x = -1;
//   let y = 0;
//   let numeroMaisRepetido = 0;
//   for (index = 0; index < array.length; index++) {
//     for (index2 = 0; index2 < array.length; index2++) {
//       if (array[index] == array[index2]) {
//         x += 1;
//       }
//     }
//     if (x > y) {
//       numeroMaisRepetido = array[index];
//     }
//     y = x;
//     x = -1;
//   }
//   console.log(numeroMaisRepetido);
// }
// maisRepetido([2, 3, 2, 5, 8, 2, 3]);

// function somatorio(numero) {
//   let soma = 0;
//   for (index = 1; index <= numero; index++) {
//     soma = soma + index;
//   }
//   console.log(soma);
// }
// somatorio(5);

function final(stringWord, endWord) {
  let x = endWord.length - 1;
  let y = 0;
  for (index = stringWord.length - 1; index > endWord.length - 1; index--) {
    if (stringWord[index] == endWord[x]) {
      y += 1;
    }
    x = x - 1;
  }
  if (y == endWord.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
final("trybe", "be");
