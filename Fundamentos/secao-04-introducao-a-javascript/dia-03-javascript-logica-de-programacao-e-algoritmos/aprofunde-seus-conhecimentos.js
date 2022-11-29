let number = 7;
let fatorial = number;
for (index = 1; index < number; index++) {
  let parametro = number - index;
  fatorial = fatorial * parametro;
}
console.log(fatorial);
