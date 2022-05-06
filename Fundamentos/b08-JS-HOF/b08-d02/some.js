// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// Retorna true or false

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


// Para fixar
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

// names = ['Mônica', 'Juliana', 'Lua'];

// const verificaSeTemEsseNome = (array, name) => {
//     return array.some((currentName) => currentName === name);oooooo[
    
]
// }

// console.log(verificaSeTemEsseNome('Lua', names));

const familia = ['Mônica', 'Juliana', 'Lua'];
const colegas = ['Leila', 'Claudir'];

const ehDesseArray = (arr, name) => {return arr.some((currentName) => currentName === name);}

console.log(ehDesseArray(familia, 'Lua'));
console.log(ehDesseArray(familia, 'Claudir'));
console.log(ehDesseArray(colegas, 'Claudir'));
