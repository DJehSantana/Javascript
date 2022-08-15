const FormaPagamento = require('./FormaPagamento');

class Boleto extends FormaPagamento {
    efetuarPagamento(valor){
        console.log(`Pagamento de R$ ${valor} realizado no boleto!`);
    }
}

module.exports = Boleto;