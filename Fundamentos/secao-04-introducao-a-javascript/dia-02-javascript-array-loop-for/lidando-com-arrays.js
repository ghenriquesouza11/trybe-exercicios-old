let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorre todo o array numbers e imprime cada um dos valores.
// for(index = 0; index < numbers.length; index ++) {
//     console.log(numbers[index]);
// }

// Soma todos os valores do array.
// var soma = 0;
// for(index = 0; index < numbers.length; index ++) {
//     soma = soma + numbers[index];
//     }
// console.log(soma);

// Calcula a média aritimética entre os valores do array
// var soma = 0;
// for (index = 0; index < numbers.length; index++) {
//   soma = soma + numbers[index];
// }
// var media = soma / numbers.length;
// console.log(media);

var soma = 0;
for (index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}
var media = soma / numbers.length;
if (media > 20) {
  console.log("valor maior que 20");
} else if (media < 20) {
  console.log("valor menor que 20");
}
