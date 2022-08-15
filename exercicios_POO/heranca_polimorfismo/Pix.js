const FormaPagamento = require('./FormaPagamento');

class Pix extends FormaPagamento {
    efetuarPagamento(valor) {
        console.log(`Pagamento de R$ ${valor} realizado com Pix!`);
    }
}

module.exports = Pix;