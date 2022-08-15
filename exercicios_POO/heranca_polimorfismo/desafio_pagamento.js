//receber a forma de pagamento e o valor
const forma_pagamento = process.argv[2];
const valor = process.argv[3];

//validar os parametros de entrada
if(!forma_pagamento || !valor) {
    console.log('Forma de pagamento ou valor inválidos!');
}

//identificar a forma de pagamento
//efetuar o pagamento

