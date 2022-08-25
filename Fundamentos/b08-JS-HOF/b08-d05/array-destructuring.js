// Para fixar

// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(`${saudacao} ${saudacao} ${saudacao}`)];

// saudacoes[1](saudacoes[0]); // Olá


const [ saudacaoOla, funcaoSaudacao ] = saudacoes;
console.log(funcaoSaudacao(saudacaoOla));


// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// 3 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];


[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];