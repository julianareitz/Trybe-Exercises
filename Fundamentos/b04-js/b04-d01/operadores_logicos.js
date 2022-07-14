// AND OPERATOR &&

const currentHour = 16;
var message = '';

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11) {
    message = "Hora do almoço!!!";
}
else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}
else {
    message = "Volta pra cama que o Sol ainda não raiou!";
}
console.log(message);

// 


// OR OPERATOR ||

// const weekDayToFind = "terça-feira";
// const weekDayToFind = `feriado`;
const weekDayToFind = `sábado`;

if (
  weekDayToFind === `segunda-feira` ||
  weekDayToFind === `terça-feira` ||
  weekDayToFind === `quarta-feira` ||
  weekDayToFind === `quinta-feira` ||
  weekDayToFind === `sexta-feira`
) {
  console.log(`Oba, mais um dia de aprendizado na Trybe >:D`);
} else if (weekDayToFind === `sábado` || weekDayToFind === `domingo`) {
  console.log(`FINALMENTE, descanso merecido UwU`);
} else {
  console.log(`Acho que esse não é um dia da semana! Tente novamente!`);
}

// NOT OPERATOR !

console.log((2 + 2) === 4); // true
console.log(!(2 + 2) === 4); // false

const squirtle = "melhor Pokémon inicial";
console.log(squirtle); // melhor Pokémon inicial
console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true


// SWITCH E CASE OPERATORS 

// var status = "aprovade";
// var status = "lista";
// var status = "reprovade";


// Não ocnsegui entender como resolver o exercício proposto
