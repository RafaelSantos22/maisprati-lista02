/* 2. Jogo de Adivinhação 
  Escreva um script que gere um número aleatório de 1 a 100 e peça ao 
  usuário, para adivinhar. Use while para repetir até acertar, contando 
  tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 
*/

const prompt = require("prompt-sync")();
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
  const numero = parseInt(prompt("Adivinhe o número de 1 a 100: "));
  tentativas++;

  if (numero === numeroSecreto) {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
    acertou = true;
  } else if (numero < numeroSecreto) {
    console.log("Mais alto!");
  } else if (numero > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log("Entrada inválida. Tente novamente.");
  }
}

