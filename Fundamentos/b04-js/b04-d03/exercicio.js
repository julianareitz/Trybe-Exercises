/*1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

1- atribuir variavel numero
2- zerar a variavel fatorial
3 - multiplicar o numero pelo antecessor
*/

// let numero = 10;

//let fatorial = 1;

//for (let i = numero; i > 0; i -= 1) {
//    fatorial = fatorial * i;
//}

//console.log(fatorial);
//


/*2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
Copiar
let word = 'tryber';
Uma string comporta-se como uma array contendo como cada elemento seu, nessa caso cada letra, um elemento da array.
*/

let word = 'tryber';
let drow = '';

for (let index = (word.length - 1); index >= 0; index-= 1) {
    drow += word[index];
}
console.log(drow);

