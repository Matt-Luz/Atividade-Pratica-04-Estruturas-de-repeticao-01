// Atividade 04 - 01

/*

    Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
    programa deverá calcular e mostrar:

        a. A menor altura do grupo;
        b. A maior altura do grupo;

*/

const alturas = [1.89, 1.83, 1.63, 1.69, 1.55, 1.56, 1.84, 1.63, 1.50, 2.03, 1.96, 1.70, 1.75, 1.61, 1.91]

let index = 0;
let maiorAltura = alturas[index];
let menorAltura = alturas[index];

while(index < 14) {
if(alturas[index] > maiorAltura) {
    maiorAltura = alturas[index];
}
if(alturas[index] < menorAltura) {
    menorAltura = alturas[index];
}
index++
}
     
console.log(`Maior altura:`, maiorAltura);
console.log(`Menor altura:`, menorAltura);


// Atividade 04 - 02

/* 

    Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
    Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
    Construa um algoritmo que calcule e imprima quantos anos serão
    necessários para que:

    a. Lucas e Pedro tenham o mesmo tamanho;
    b. Lucas seja maior que Pedro.


    -- Variaveis:

    const pedro = 1.50;
    const lucas = 1.10;
    let ano = 0

    while(pedro > lucas) {
        pedro = pedro + 0.02;
        lucas = lucas + 0.03;
        ano++
    }


*/

    let pedro = 1.50;
    let lucas = 1.10;
    let ano = 0;
    let anoMaior = 0;

    while(pedro > lucas) {
        pedro = (pedro + 0.02);
        lucas = (lucas + 0.03);
        ano++
        anoMaior = ano;
    }

    console.log(`Lucas e Pedro terão a mesma altura em: ${ano - 1} anos.`);
    console.log(`Lucas será maior que Pedro em ${anoMaior} anos.`);



// Atividade 04 - 03

/* 
    
    Escreva um algoritmo que faça a tabuada de um número e
    apresente o resultado de acordo com o modelo a seguir, sabendo
    que o multiplicando deverá ser fornecido pelo usuário (n) e a
    quantidade de iterações também (i).

    1 * 2 = 2
    2 * 2 = 4
    3 * 2 = 6
    ...
    
*/

let multiplo = Number (prompt('Digite aqui o seu multiplo:'));
let iteracoes = Number (prompt('Digite aqui a quantidade de iterações:'));

for (let contador = 1; contador <= iteracoes; contador++) {
    console.log(`${contador} * ${multiplo} = ${contador * multiplo}`);
}



// Atividade 04 - 04

/* 

    Escreva um algoritmo que percorra os números inteiros entre 1 e 250
    e verifique quais números são múltiplos de 3 e quais são múltiplos
    de 5.

*/

for (i = 1; i <= 250; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}, são multiplos de 3 e 5.`);
    }
    if (i % 3 === 0) {
        console.log(`${i}, são multiplos de 3.`);
    }
    if (i % 5 === 0) {
        console.log(`${i}, são multiplos de 5.`);
    }
}



// Atividade 04 - 05

/* 

    Faça um programa usando a estrutura “for” que leia um número
    inteiro positivo e mostre na tela uma contagem de 0 até o valor
    digitado:
    Ex: Digite um valor: 9
    Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

*/

let valor = Number (prompt('Digite aqui seu valor:'));
let valor1 = 0;

for (let contador = 0; contador <= valor; contador++) {
        valor1 = valor1 + contador + ','; 
}
console.log(`Contagem: ${valor1} FIM!`);



// Atividade 04 - 06

/* 

    Desenvolva um algoritmo que mostre uma contagem regressiva de
    30 até 1, marcando os números que forem primos, exatamente
    como mostrado abaixo:

    30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

*/

let contagem;

for (let index = 30; index >= 1; index--) {
    for (let isPrimo = 30; isPrimo >= 1; isPrimo--) {
      if (index % isPrimo === 0) {
        contagem++;
      }
    }
    if (contagem == 2) {
      console.log(`[${index}]`);
    } else {
      console.log(index);
      contagem = 0;
    }
  }



// Atividade 04 - 07

/* 

    Desenvolva um algoritmo que leia 10 números, calcule e escreva a
    média aritmética dos valores lidos, a quantidade de valores
    positivos, a quantidade de valores negativos e o percentual de
    valores negativos e positivos.

*/

let valores = [8, -2, 7, 9, 2, -6, 3, -9, 5, 10];
let media = 0;
let negativos = 0;
let positivos = 0;

for(i = 0; i <= 10; i++){

    if (valores[i] <= 0) {
        negativos++
    }

    if (valores[i] >= 0) {
        positivos++
    }

media = valores[0] + valores[1] + valores[2] + valores[3] + valores[4] + valores[5] + valores[6] + valores[7] + valores[8] + valores[9]
media = media / 10    
}

console.log(`A media dos valores é ${media}`);
console.log(`A quantidade de valores negativos é ${negativos}`);
console.log(`A quantidade de valores positivos é ${positivos}`);
console.log(`O percentual de valores negativos é ${(negativos / 10) * 100}%`);
console.log(`O percentual de valores positivos é ${(positivos / 10) * 100}%`);