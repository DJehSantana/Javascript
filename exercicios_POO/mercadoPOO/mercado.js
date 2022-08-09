const readline = require('readline'); //importando método readline
const Produto = require('./Produto'); //importando classe produto

//criando interface de leitura
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

