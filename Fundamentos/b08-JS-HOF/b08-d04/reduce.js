// REFERENCES:

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://www.w3schools.com/jsref/jsref_reduce.asp
// https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47


// A função reducer recebe quatro parâmetros:

// acumulator / total (acc)
// currentValue / Valor Atual (cur)
// currentIndex / Index Atual (idx)
// arr / rray original (src)

// SINTAXE
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

// 1) Retorna apenas um valor;
// 2) o valor de retorno é atribuído ao acumulador, que é chamado como primeiro elemento e sobrescrito até a interação final;
// 3) o acumulador é setado como a primeira interação do array a ser varrido;
// 4) a callback será executada em cada elemento do array, ou a partir do acumulador;
// 5) se não fornecer valor inicial, será buscado o primeiro elemento do array;
// 6) se o reduce() for chamado em uma array vazia e sem valor iniciail, retornará um erro;
// 7) o resultado final guardado no acumulador é obtido a partir da ultima interação com a callbackFunction;
// 8) pega os elementos sendo assim, dispensa a utilização de um for tradicional e a utilização da grafia dos index, já que ele vai necessariamente varrer todo o array.
// 9) para começar a varredura/soma do array com um valor, utiliza-se o valorInicial;
// 10) "Map, Filter and Reduce can also be used with arrays of objects. They are not limited to working with numeric values."
// 11) Pode ser usado com outro parâmetro depois da função através do valor inicial.


// Substituindo o for pelo reduce
// COM O FOR
const numbersA = [32, 15, 3, 2, -5, 56, 10];
let sumNumbersA = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbersA.length; index += 1) {
  sumNumbersA += numbersA[index];
}
console.log(sumNumbersA); // 113

// COM O REDUCE
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113
// Como não foi setado valor inicial, ele pega o primeiro elemento da array atribuindo result ao numbers[0] e utilizando o valor atual como os outros elementos do array a serem varridos.

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbersb = numbers.reduce(getSum);
console.log(sumNumbersb); // 113

// Exemplo
const collection = [1, 2, 3, 4, 5];

const getSumC = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbersC = collection.reduce(getSumC);
console.log(sumNumbersC); // 15



// REDUCE SEM VALOR INICIAL
const numbersD = [32, 15, 3, 2, -5, 56, 10];

const getSumD = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbersD = numbersD.reduce(getSumD);
console.log(sumNumbersD); // 113

// REDUCE COM VALOR INICIAL
const numbersE = [32, 15, 3, 2, -5, 56, 10];

const getSumE = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbersE = numbersE.reduce(getSumE, 10);
console.log(sumNumbersE); // 123



//COMPARANDO VALORES PARA ACHAR O MAIOR ELEMENTO DO ARRAY
// Primeiro a função retorna true or false do ternário, depois o reduce captura o valor índice do array dado como true.
const numbersF = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbersF.reduce(getBigger, 0);
console.log(bigger); // 85

// PARA FIXAR - Somar todos os pares do array'
const numbersG = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEvenNumbers = (even, number) => ((number % 2 === 0) ? even + number : even);
const sumEven = (array) => array.reduce(getEvenNumbers, 0);
console.log(sumEven(numbersG)); //


// COM O ARRAY DE ESTUDANTES DO 8.3 USANDO REDUCE AO INVÉS DE MAP

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];
// SOLUÇÃO
// primeiro retorna a matéria de maio nota
const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
  };
//   depois monta o objeto de retorno chamamdo sem a necessidade do for
  const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name}));
  
  console.log(reportBetter(estudantes));


