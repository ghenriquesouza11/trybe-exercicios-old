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

let array = ["java", "javascript", "python", "html", "css"];
// let smaller = 0;
let menorPalavra = " ";
for (index = 0; index < array.length; index++) {
  let smaller = array[index].length;
  let palavraAtual = array[index];
  if (palavraAtual.length <= smaller) {
    menorPalavra = palavraAtual;
  }
}
console.log(menorPalavra);
