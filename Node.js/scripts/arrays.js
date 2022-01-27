const notas = [12, 14, 19];

notas.forEach((nota, index) => {
  console.log('Nota', index + 1, '=', nota);
})

const promedio = notas.reduce((promedioAnterior, notaActual) => {
  return promedioAnterior + notaActual/notas.length;
}, 100);

const notasPares = notas.filter(nota => nota % 2 === 0);

const notaPar = notas.find(nota => nota % 2 === 0);

console.log(notasPares);
console.log(notaPar);
