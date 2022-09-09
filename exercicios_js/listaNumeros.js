//Dada uma lista de numeros, percorra a lista e crie duas novas listas: 
//uma contendo apenas os números pares da lista e outra com os números impares 
//exibir lista de números completa, lista de números pares e lista de números impares 

const listaNumeros = [
    12,
    5,
    25,
    17,
    14,
    16,
    8
]

let listaPares = [];
let listaImpares = [];

for (let i = 0; i < listaNumeros.length; i++) {
    let numero = listaNumeros[i];
    let resultado = numero % 2;
    //console.log(resultado);
    if(resultado === 0) {
       let numeroPar = numero;
        //listaPares[i] = numeroPar
        listaPares.push(numeroPar);
    }else{
        let numeroImpar = numero; 
        //listaImpares[i] = numeroImpar
        listaImpares.push(numeroImpar);              
    }  
    
}

console.log(`Lista de numeros:  ${listaNumeros} \n`,
    `numeros pares:  ${listaPares} \n`,
    `numeros impares:  ${listaImpares}`);
