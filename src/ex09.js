/* 9. Conversão Entre Formatos 
  Escreva duas funções: 
    ○ paresParaObjeto(pares) recebe um array de pares [ [chave, 
    valor], … ] e retorna o objeto equivalente. 
    ○ objetoParaPares(obj) faz o inverso, retornando um array de 
    pares.chave é um cliente e o valor é a soma de todos os seus total.
*/

const paresParaObjeto = (pares) => Object.fromEntries(pares);

const objetoParaPares = (obj) => Object.entries(obj);

const pares = [
  ["nome", "Ana"],
  ["idade", 30],
  ["profissao", "Engenheira"]
];

console.log("Pares para Objeto:");
const obj = paresParaObjeto(pares);
console.log(paresParaObjeto(pares));

console.log("\nObjeto para Pares:");
const paresConvertidos = objetoParaPares(obj);
console.log(paresConvertidos);
