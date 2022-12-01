// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log("Idade dentro do for:", idade);
//   }
//   //   console.log("Idade fora do for:", idade); // retire essa linha ao implementar o tipo de variável correta.
// }
// imprimeIdade();

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
// let pessoa = {
//   nome: "Henri",
//   idade: 20,
// };
// pessoa = {
//   nome: "Luna",
//   idade: 19,
// }; // Altere essa estrutura para corrigir o erro.
// console.log("Nome:", pessoa.nome);
// console.log("Idade:", pessoa.idade);

// let favoriteFood = "Lasanha";
// favoriteFood = "Hamburguer";
// console.log(favoriteFood);

// const name = "Adriana";
// const lastName = "Soares";
// console.log(`Olá, ${name} ${lastName}!`);
// function soma(a, b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de  ${a} + ${b} é: ${soma(a, b)}`);

// const numeroAleatorio = () => {
//   return Math.random();
// };
// console.log(numeroAleatorio());

hello = (nome) => {
  return `Olá, ${nome}!`;
};
const nome = "Ivan";
console.log(hello(nome));
