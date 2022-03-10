/*Exercício 1 - Percorrer a array imprimindo todos os valores contidos*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

/*Exercício 2 - Somar todos os valores e imprimir o resultado*/
/*referencia - https://www.horadecodar.com.br/2021/01/18/como-somar-elementos-de-um-array-de-maneira-performaica/ */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (var i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum);


/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;*/
/*minha tentativa sozinha*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum;
let ma;
for (var i = 0; i < numbers.length; i += 1) {
    ma = sum += numbers[i] / numbers.length;
}

console.log(ma);
/*o que encontrei na web: https://www.delftstack.com/pt/howto/javascript/javascript-average-function/#:~:text=Para%20encontrar%20a%20m%C3%A9dia%20de,encontrar%20usando%20a%20fun%C3%A7%C3%A3o%20length%20.*/
function ArrayAvg(numbers) {
    var i = 0, summ = 0, ArrayLen = numbers.length;
    while (i < ArrayLen) {
        summ = summ + numbers[i++];
    }
    return summ / ArrayLen;
}
var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];;
var mediaAritmetica = ArrayAvg(numbers);
console.log(mediaAritmetica);

/*Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var mediaAritmetica = Array(numbers);
function Array(numbers) {
    var i = 0, summ = 0, ArrayLen = numbers.length;
    while (i < ArrayLen) {
        summ = summ + numbers[i++];
    }
    return summ / ArrayLen;
}

if (mediaAritmetica > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor que 20")
}

/* Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
Exercício feito na aula do Atanes*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let larger = numbers[0];

for (i=1; i<numbers.length; i+=1) {
    if (larger < numbers[i]) {
        larger = numbers [i];
    }
}

console.log('O maior núero do array é: ', larger);

/*Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let rest = numbers%2
let impar;

for (i=1; i<rest.rest; i+=1) {
    if (rest[i] = 0 ) {
        console.log(numbers[i])
    } else {
        console.log("nenhum valor ímpar encontrado")
    }
}

/*Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let larger = numbers[0];

for (i=1; i<numbers.length; i+=1) {
    if (larger < numbers[i]) {
        larger = numbers [i];
    }
}