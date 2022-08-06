//importando módulo readline
const readline = require('readline');
//criando interface de leitura
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//criando array de produtos disponíveis no mercado
const produtosMercado = [
    "feijão", 
    "arroz",
    "melancia",
    "alface"
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
    //declaração dos arrays vazios
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];
    //percorre o array de produtos, verifica se o produto está na listaMercado
    //se sim, inclui o produto no array produtosDisponíveis usando o método push,
    //se não, inclui o produto no array produtos indisponíveis
    for (const item of listaValida) {
        //removendo espaços dos itens digitados
        //método toLowerCase transforma todas as letras em minúsculas
        const itemFormatado = item.trim().toLowerCase();

        if (produtosMercado.includes(itemFormatado)) {
            produtosDisponiveis.push(itemFormatado);
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

            //método sort ordena os itens do array de acordo a condição estabelecida
            //método localeCompare, ordena string por ordem alfabética 
            //ignorando os acentos 
            const produtosOrdenados = produtosMercado.sort((produto1, produto2) => 
                produto1.localeCompare(produto2));

            console.log('Produtos em estoque:', produtosOrdenados);

        } catch (e){
            console.log(`Erro ao validar a lista: ${e.message}`);
        } finally{
            leitor.close();
        }

    }
);