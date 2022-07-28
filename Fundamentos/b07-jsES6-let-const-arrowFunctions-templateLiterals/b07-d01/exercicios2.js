// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
// Crie uma função que receba uma frase e retorne qual a maior palavra.

const fatorial = number => number > 1 ? number * fatorial(number -1) : 1;

console.log(fatorial(1));

// OR in https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

const factorial = n => !(n-1) ? 1 : factorial (n-1) * n;
console.log(factorial(1));


//  2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

// function longestWord (phrase) {
//     let splited = phrase.split(" ");
//     return splited;
// }
// console.log(longestWord('Uma bela manhã.'));

// Course
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// O QUE É ESSE INDEX 0 NO FINAL??
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
