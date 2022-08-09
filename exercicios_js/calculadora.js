 // importando módulo readline do node através do método padrão 'require'
 //para ler o que o usuário digita no console
 const readline = require('readline');
 // criando leitor 
 const leitor = readline.createInterface({
     input: process.stdin, //entrada padrão do SO
     output: process.stdout //saída padrão do SO
 });
 
 const pergunta1 = 'Digite o primeiro número:\n';  // o \n realiza uma 
 const pergunta2 = 'Digite o segundo número:\n'; //quebra de linha
 const pergunta3 = 'Digite o operador matemático (+, -, *, /):\n';
 
 // construindo arrow function para realizar o cálculo
 const realizarCalculo = (primeiroNumero, segundoNumero, operacao) => {
     const num1 = parseInt(primeiroNumero);  //transformando os valores 
     const num2 = parseInt(segundoNumero);  //em numero inteiro
 
     switch (operacao){
         case '+' : 
             return num1 + num2;
         case '-' :
             return num1 - num2;
         case '*' :
             return num1 * num2;
         case '/' :
             return num1 / num2;
         default:
             return 'Operação inválida!';
     }
 
 }
 
 console.log('Vamos realizar uma operação matemática?\n')
 
 //chamando método question para obter o primeiro número
 // a arrow function devolve o que o usuário digitou em 
 //um argumento numa função callback
 leitor.question(pergunta1, (primeiroNumero) => { 
     //repete o mesmo pra obter o segundo número e o operador
     leitor.question(pergunta2, (segundoNumero) => {
         leitor.question (pergunta3, (operacao) => {
             //constante chama a função realizar calculo
             //que retorna o resultado da operação
             const resultado = realizarCalculo(
                 //parametros
                 primeiroNumero,
                 segundoNumero,
                 operacao
             );
 
             console.log({resultado});
             //chamando método que fecha o leitor    
             leitor.close();
         })
     } ) 
 
 })