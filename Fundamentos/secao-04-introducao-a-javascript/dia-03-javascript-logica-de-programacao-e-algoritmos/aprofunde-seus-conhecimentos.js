// let number = 10;
// let fatorial = number;
// for (index = 1; index < number; index++) {
//   let parametro = number - index;
//   fatorial = fatorial * parametro;
// }
// console.log(fatorial);

let word = "tryber";
let palavraInvertida = [];
let teste = word.length;
for (index = word.length - 1; index >= 0; index--) {
  palavraInvertida.push(word[index]);
}
console.log(palavraInvertida);
