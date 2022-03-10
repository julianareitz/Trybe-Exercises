
//Equipe: Juliana Reitz, Letícia Fernandes, Gabriel Faustino, Vitor Valim)

// Exercício 1
// let soma = 0;
// for (let index = 50; index <= 100; index += 1) {
//     soma += index;
// }
// console.log("A soma de 50 a 100 é:",soma);
// Exercício 2
// let div = 0;
// for (let index = 1; index <= 125; index += 1) {
//     if (index % 3 === 0) {
//         div += 1;
//     }
// }
// if (div == 50) {
//     console.log("Atanes o melhor");
// }
// Exercício 4
// let idade = 15;
// if (idade > 17) {
//     console.log("A pessoa é maior de idade");
// }
// Exercício 5
// let nomes = ["Marcella", "Carlos", "Camila"];
// let idades = [65, 80, 90];
// let indice = 0;
// for (let i = 1; i < idades.length; i += 1) {
//     if (idades[indice] > idades[i]) {
//         indice = i;
//     }
// }
// console.log(nomes[indice],"é a pessoa mais nova");
// Exercício 3
let jogador1 = Math.floor(Math.random() * 3);
let jogador2 = Math.floor(Math.random() * 3);
if (jogador1 > jogador2){
    console.log("Jogador 1 vence");
} else if (jogador2 > jogador1) {
    console.log("Jogador 2 vence");
} else {
    console.log("Empate");
}