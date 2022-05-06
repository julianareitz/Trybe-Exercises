// Array.sort ordena em ordem alfabética os elementos do array
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// SINTAXE
// arr.sort([funcaoDeComparacao])
// 
// https://codepen.io/pen/?template=gOMYaXy


const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// Para ordenar números:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

// Para fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  //   Errado: people['age'].sort((a, b) => a - b);
//   people.sort((personA, personB) => personA.age - personB.age);
  
  console.log(people);
  


  // Adicione se código aqui
  
  
  //   2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .
  
  people.sort((personA, personB) => personB.age - personA.age);
  
  console.log(people);