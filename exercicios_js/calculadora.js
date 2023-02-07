// importando módulo readline do node através do método padrão 'require'
//para ler o que o usuário digita no console
const readline = require('readline');
// criando leitor 
const leitor = readline.createInterface({
    input: process.stdin, //entrada padrão do SO
    output: process.stdout //saída padrão do SO
});


function fatorial(numero) {
    if (numero === 0) {
        return 1;
    }
    return numero * fatorial(numero - 1);
}

// construindo arrow function para realizar o cálculo
const realizarCalculo = (primeiroNumero, segundoNumero, operacao) => {

    if (!parseInt(primeiroNumero) || !parseInt(segundoNumero)) {
        console.log("Número inválido");
    }

    const num1 = parseInt(primeiroNumero);
    const num2 = parseInt(segundoNumero);

    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        case 'potenciacao':
            return Math.pow(num1, num2);
        case 'raiz quadrada':
            return Math.sqrt(num1);
        case 'fatorial':
            return fatorial(num1);
        case 'porcentagem':
            return (num1 * 100) / num2;
        case 'media':
            return (num1 + num2) / 2;
        default:
            return 'Operação inválida!';
    }

}

console.log('Vamos realizar uma operação matemática?\n')


const pergunta1 = 'Digite o primeiro número:\n';
const pergunta2 = 'Digite o segundo número:\n';
const pergunta3 = 'Digite a operacao matematica a ser realizada (sem acentos, letras maiúsculas e caracteres especiais):\n';

//chamando método question para obter o primeiro número
// a arrow function devolve o que o usuário digitou em 
//um argumento numa função callback
leitor.question(pergunta1, (primeiroNumero) => {
    //repete o mesmo pra obter o segundo número e o operador
    leitor.question(pergunta2, (segundoNumero) => {
        leitor.question(pergunta3, (operacao) => {
            //constante chama a função realizar calculo
            //que retorna o resultado da operação
            const resultado = realizarCalculo(
                //parametros
                primeiroNumero,
                segundoNumero,
                operacao
            );

            console.log({ resultado });
            //chamando método que fecha o leitor    
            leitor.close();
        })
    })

})