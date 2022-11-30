function palindromo(palavra) {
  let palavraInvertida = [];
  for (index = palavra.length - 1; index >= 0; index--) {
    palavraInvertida.push(palavra[index]);
  }
  if (palavraInvertida.join("") == palavra) {
    console.log(true);
  } else {
    console.log(false);
  }
}
palindromo("arara");
