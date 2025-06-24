/* 6. Memoization 
  Implemente function memoize(fn) que armazene em cache chamadas 
  anteriores de fn (por argumentos), retornando resultados instantâneos em 
  repetidas invocações.
*/

const fatorial = require('./ex04')

const memoize = (fn) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args); 

    if (key in cache) {
      return cache[key];
    }

    const resultado = fn(...args);
    cache[key] = resultado; 
    return resultado;
  };
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); 
console.log(fatorialMemo(6)); 
console.log(fatorialMemo(5)); 
console.log(fatorialMemo(7))
