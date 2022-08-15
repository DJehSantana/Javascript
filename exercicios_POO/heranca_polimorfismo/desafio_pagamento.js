//importar o Enum
const TipoPagamento = require('./TipoPagamento');

//receber a forma de pagamento e o valor
const forma_pagamento = process.argv[2];
const valor = process.argv[3];

//validar os parametros de entrada
if(!forma_pagamento || !valor) {
    console.log('Forma de pagamento ou valor inválidos!');
    return;
}

//identificar a forma de pagamento
if (forma_pagamento.toLowerCase() !== TipoPagamento.BOLETO.toLowerCase() &&
forma_pagamento.toLowerCase() !== TipoPagamento.PIX.toLowerCase()){
    console.log('Forma de pagamento inválida!');
    return;
}
//efetuar o pagamento

