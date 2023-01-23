// const str = 'a5b5nf5';
// const test = str.replace(/\D/g, '');
// function sum() {
//   for (let index = 0; index < test.length; index += 1) {
//     x += Number(test[index]);
//   }
//   console.log(x);
// }
// sum();
function hydrate(string) {
  let sum = 0;
  const stringNumbers = string.replace(/\D/g, '');
  for (let index = 0; index < stringNumbers.length; index += 1) {
    sum += Number(stringNumbers[index]);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return null;
}
module.exports = hydrate;
