// BLOCO 01 - AULA 8.5 - USANDO O SPREAD


const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// To fixed para arrendondar para 2 casas depois da vírgula
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


// Spread com o Math.max e Math.min
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

//  Spread com objetos

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */


// Para fixar
// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['vergamota', 'abacaxi', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'mel', 'iogurte'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitsAndAdds = [...specialFruit, ...additionalItens];
  return fruitsAndAdds;
};

console.log(fruitSalad(specialFruit, additionalItens));
// https://www.w3schools.com/jsref/jsref_sort.asp
console.log(fruitSalad(specialFruit, additionalItens).sort());
console.log(fruitSalad(specialFruit, additionalItens).reverse());


// The splice() method adds and/or removes array elements.array.splice(index, howmany, item1, ....., itemX)
// The splice() method overwrites the original array.
// 
// https://www.w3schools.com/jsref/jsref_splice.asp

console.log(fruitSalad(specialFruit, additionalItens).splice(2, 3));
// [ 'banana', 'granola', 'mel' ]
// do índice dois por 3 índices: i[2], i[3] e i[4]

//The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
//  https://www.w3schools.com/jsref/jsref_slice_array.asp

console.log(fruitSalad(specialFruit, additionalItens).slice(0, 2));
// [ 'vergamota', 'abacaxi' ]
// A primeira entrada é o índice, i[0] = vergamota; já a segunda entrada é relacionada à quantidade de elementos do array que irá percorrer, no caso, dos elementos, i[0] e i[1].