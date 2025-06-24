/* 3. Palavras Únicas 
  Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair 
  todas as palavras únicas e exibi-las em um array.
*/

const frase = "olá olá mundo mundo bem vindo ao mundo";
const palavras = frase.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let repetida = false;

  for (let j = 0; j < palavras.length; j++) {
    if (i !== j && palavras[i] === palavras[j]) {
      repetida = true;
      break;
    }
  }

  if (!repetida) {
    unicas.push(palavras[i]);
  }
}

console.log(unicas);

