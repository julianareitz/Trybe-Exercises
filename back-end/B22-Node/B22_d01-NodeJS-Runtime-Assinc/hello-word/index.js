// https://www.npmjs.com/package/readline-sync
const readline = require('readline-sync');

const name = readline.question('Qual seu nome?');
const age = readline.questionInt('Qual a sua idade?');

console.log(`Hello, ${name}! You're ${age} years old!`);
// console.log('Hello, world!');
// Then, npm start to see the action