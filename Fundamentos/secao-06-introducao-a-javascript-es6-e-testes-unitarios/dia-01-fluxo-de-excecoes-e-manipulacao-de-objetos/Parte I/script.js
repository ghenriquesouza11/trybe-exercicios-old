const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');

function checkErros(number1, number2) {
  if (!number1 || !number2) {
    throw new Error('Preencha todos os campos!');
  }
  if (Number.isNaN(Number(number1)) || Number.isNaN(Number(number2))) {
    throw new Error('Insira apenas números!');
  }
}

function sum() {
  try {
    checkErros(value1.value, value2.value);
    const result = Number(value1.value) + Number(value2.value);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `${error}`;
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
