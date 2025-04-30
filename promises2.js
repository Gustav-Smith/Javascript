function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function tempoDeEspera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all Prromise.race Promise.resolve Promise.reject
const promises = [
    'Promeiro valor',
    tempoDeEspera('Promise 1', 3000),
    tempoDeEspera('Promise 2', 500),
    tempoDeEspera('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro){
        console.log('ERRO:', erro);
    })
