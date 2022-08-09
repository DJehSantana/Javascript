const readline = require('readline'); //importando método readline
const Produto = require('./Produto'); //importando classe produto

//criando interface de leitura
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//criando array de objetos da classe Produto
const produtosMercado = [
    //instanciando objetos
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


// função criar lista de produtos disponíveis e de produtos indisponíveis
const verificarDisponibilidade = (listaValida) => {

    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();

        //find - percorre o array comparando a propriedade nome dos objetos,
        // com o nome do produto digitado pelo usuário
        const produto = produtosMercado.find (
            produtoMercado => produtoMercado.nome === itemFormatado
        );

        if (produto) {
            produtosDisponiveis.push(produto);
        } else{
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    //retornando valor dos arrays como objeto
    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }

}

//Recebendo lista de produtos do usuário
leitor.question('Digite a lista de produtos separados por vírgula: \n',
    listaProdutos => {
        //tratamento de exceção
        try{
            //recebe lista de produtos validada
            const listaValida = validarLista(listaProdutos);

            const disponibilidade = verificarDisponibilidade(listaValida);
            //exibindo lista de produtos disponíveis e indisponíveis
            console.log (
                'Produtos disponíveis: ', disponibilidade.produtosDisponiveis
            );
            console.log (
                'Produtos indisponíveis', disponibilidade.produtosIndisponiveis
            );

            const produtosOrdenados = produtosMercado.sort((produto1, produto2) => 
                produto1.nome.localeCompare(produto2.nome));

            console.log('Produtos em estoque:', produtosOrdenados);

        } catch (e){
            console.log(`Erro ao validar a lista: ${e.message}`);
        } finally{
            leitor.close();
        }

    }
);

