const readline = require('readline'); //importando método readline
const Produto = require('./Produto'); //importando classe produto

//criando interface de leitura
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = [
    new Produto ("arroz", 18.50),
    new Produto ("feijao", 7),
    new Produto ("melancia", 5),
    new Produto ("alface", 2),
    new Produto ("suco", 12)

];


//validando a lista
const validarLista = (listaMercado) => {
    //operador ! verifica se a lista está vazia: false, null ou undefined
    if (!listaMercado) {
        //throw : lança um erro e para a execução do escopo
        throw Error ("A lista não pode ser vazia!");
    }
    //transformando string de itens digitados pelo usuário em um array
    // o método split determina um separador para dividir uma string em 
    //índices de um array. Neste caso a vírgula será o delimitador
    const itensDesejados = listaMercado.split(","); 
    //filtrando itens vazios
    //o método trim remove espaços vazios antes e depois da string
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;

    //tratamento de exceção para lista de itens invalidos
    if (itensInvalidos > 0) {
        throw Error (`Existem ${itensInvalidos} itens inválidos!`);
    }

    //retornando o array de itens
    return itensDesejados;

}

