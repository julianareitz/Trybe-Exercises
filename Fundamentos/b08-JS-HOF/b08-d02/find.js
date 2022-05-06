// O .find retorna APENAS o primeiro elemento com as definições buscadas.
// Ele é perfeito para quando se quer encontrar um parâmetro que retorne apenas um resultado dentro de um array.
// 
// 1) retono bool, TRUE or FALSE, se TRUE, retorna o primeiro elemento que satisfaça a condição
// 2) trata todos os elementos de referência como um array, então propriedades como .length podem ser utilizadas para se descobrir o tamanho de um elemento

// - Quando se passa uma arrow function para uma HOF, o primeiro parâmetro recebido simpre é o elemento do array. Veja:
// meuArray.find(elemento => elemento % 5 === 0)
// "Sua única preocupação deve ser "O que eu quero fazer com cada elemento do array?", e não "Como eu acesso cada elemento do array?""



// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// Sem o .find
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
50

// Com o .find
const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf52 = numbers2.find((number2) => number2 % 5 === 0);

console.log(firstMultipleOf52);
// 50

// Exemplo
// Primeiro observe a função verifyEven . Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
// Quando a passamos como callback , o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.

const numbersTwo = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbersTwo.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbersTwo.find((number) => number % 2 === 0);

console.log(isEven2); // 30


// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbersZ = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbersZ.find((number) => number % 3 === 0 && number % 5 === 0);
}

// Da forma a seguir não imprime o resultado. Então é necessário uma função para chamar como retorno essa callback.
// const findDivisibleBy3And5 = numbersZ.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5())


// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());


// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((musica) => musica.id === id );
  }
  
  console.log(findMusic('31031685'));