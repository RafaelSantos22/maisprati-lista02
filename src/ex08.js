/* 8. Agrupamento por Propriedade 
  Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde 
  cada chave é um cliente e o valor é a soma de todos os seus total.
*/

const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 },
  { cliente: "Maria", total: 300 },
  { cliente: "João", total: 150 }
];

const totalPorCliente = vendas.reduce((acc, venda) => {
  if (acc[venda.cliente]) {
    acc[venda.cliente] += venda.total;
  } else {
    acc[venda.cliente] = venda.total;
  }
  return acc;
}, {});

console.log(totalPorCliente);
