// .forEach(function) e suas vantagens:

// 1) Diminui quantidade de linhas de código diminuindo assim, a chance de um erro.
// 2) Permite buscar por um elemento dentro de um arrray, independente se é string, bool, array ou objeto.
// 3) substitui o for tradicional em inúmeras aplicações, mas não em todas.
// 
// - Quando se passa uma arrow function para uma HOF, o primeiro parâmetro recebido simpre é o elemento do array. Veja:
// meuArray.forEach((elemento) => {
//     if (elemento % 2 === 0) {
//       console.log(`${elemento} é divísivel por 2!`);
//     }
//   });
// 
// "Sua única preocupação deve ser "O que eu quero fazer com cada elemento do array?", e não "Como eu acesso cada elemento do array?""
// 
// .forEach possui:
// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.

// Documentações
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://codepen.io/pen/?template=LYZPEwV

const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
          students[index].approved = 'Recuperação';
        }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  // [
      //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
      //   { name: 'José', grade: 56, approved: 'Recuperação' },
      //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
      //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
      // ]
      
      

// SINTAXE
// arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
// funcaoDoArray.forEach(oQueDeveSerBuscadoOuImpressoParaCadaUmDosElementos);

// callback é invocado com três argumentos:

// o valor do elemento
// o índice do elemento
// o array que está sendo percorrido

// function logArrayElements(element, index, array) {
//     console.log(`a[${index}] = ${element}`);
// }
// [2, 5, 9].forEach(logArrayElements);
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[2] = 9


const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }


// Acessando mais infos do array com a HOF
const arrayOfValuess = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValuess.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]


//  Outro exemplo
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]



// Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
//   console.log(showEmailList.forEach(emailListInData));
  
  // Adicione seu código aqui
  console.log(emailListInData.forEach(showEmailList));
  
