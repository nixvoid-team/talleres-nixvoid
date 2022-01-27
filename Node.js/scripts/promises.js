function sleep(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 10) {
      reject('No se puede dormir más de 10 segundos');
      return;
    }
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  })
}

async function main() {
  console.log('Empezó la función asíncrona');
  await sleep(2);
  console.log('Nos dormimos 2 segundos');
  await sleep(3);
  console.log('La función asíncrona ha terminado');
  sleep(4).then(() => {// Si es mayor que 10 falla y va al catch
    console.log('Se durmió 4 segundos');
  }).catch((err) => {
    console.error(err);
  })
}

main();