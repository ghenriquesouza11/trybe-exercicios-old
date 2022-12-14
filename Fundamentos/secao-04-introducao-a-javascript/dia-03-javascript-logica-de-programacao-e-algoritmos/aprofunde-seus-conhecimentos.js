// let number = 10;
// let fatorial = number;
// for (index = 1; index < number; index++) {
//   let parametro = number - index;
//   fatorial = fatorial * parametro;
// }
// console.log(fatorial);

// let word = "tryber";
// let palavraInvertida = [];
// let teste = word.length;
// for (index = word.length - 1; index >= 0; index--) {
//   palavraInvertida.push(word[index]);
// }
// console.log(palavraInvertida);

// let array = ["java", "javascript", "python", "html", "css"];
// bigger = 0;
// maiorPalavra = " ";
// for (index = 0; index < array.length; index++) {
//   let palavraAtual = array[index];
//   let parametro = array[index].length;
//   if (parametro > bigger) {
//     bigger = parametro;
//     maiorPalavra = palavraAtual;
//   }
// }
// console.log(maiorPalavra);

// let array = ["java", "javascript", "python", "html", "css"];
// // let smaller = 0;
// let menorPalavra = " ";
// for (index = 0; index < array.length; index++) {
//   let smaller = array[index].length;
//   let palavraAtual = array[index];
//   if (palavraAtual.length <= smaller) {
//     menorPalavra = palavraAtual;
//   }
// }
// console.log(menorPalavra);

let x = 0;
const numerosPrimos = [];
for (number = 1; number <= 50; number++) {
  for (index = 1; index <= number; index++) {
    for (indexMultiplo = 1; indexMultiplo <= number; indexMultiplo++) {
      if (index * indexMultiplo == number) {
        x += 1;
      }
    }
  }
  if (x == 2) {
    numerosPrimos.push(number);
  }
  x = 0;
}
let bigger = 0;
for (index = 0; index <= numerosPrimos.length; index++) {
  if (numerosPrimos[index] >= bigger) {
    bigger = numerosPrimos[index];
  }
}
// console.log(numerosPrimos);
console.log(bigger);
