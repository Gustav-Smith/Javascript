function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function tempoDeEspera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });  
}

tempoDeEspera('1 Conexão com o banco de dados', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return tempoDeEspera('2 Exibindo banco de dados', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return tempoDeEspera('3 Processando os dados', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return tempoDeEspera('4 Exibindo os dados na tela', rand(1, 3));
    }).then(resposta =>{
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e);

    });

