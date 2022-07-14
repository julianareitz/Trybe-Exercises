const a = 13;
const b = 35;
// const operation = "addition";
// const operation = "subtraction";
// const operation = "multiplication";
// const operation = "division";
// const operation = "module";
const operation = "exponentiation";

if (operation === "addition") {
    console.log(a + b);
} else if (operation === "subtraction") {
    console.log(a - b);
} else if (operation === "multiplication") {
    console.log(a * b);
} else if (operation === "division") {
    console.log(a / b);
} else if (operation === "remainder") {
    console.log(a % b);
}
else {
    console.log(`Try a valid operation: addition, subtraction, multiplication, division or remainder.`);
}
//  GOOD REFERENCE: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math

//  2 - Retornar o maior número
if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}

// 3 - Retornar o maior de 3 números
const c = 120;

if (a > b || a > c) {
    console.log(a);
}
else if (b > c){
    console.log(b);
}
else {
    console.log(c);
}

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const numberToAnalise = -15;
// const numberToAnalise = 0;
const numberToAnalise = 15;

if (numberToAnalise > 0) {
    console.log(`positive`);
}
else if (numberToAnalise < 0) {
    console.log(`negative`);
}
else {
    console.log(`zero`);
}


// 5 - 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const aAngle = 90;
const bAngle = 45;
const cAngle = 45;

// const aAngle = 90;
// const bAngle = 45;
// const cAngle = 46;

// const aAngle = 90;
// const bAngle = 90;
// const cAngle = 45;

// const aAngle = 90;
// const bAngle = 135;
// const cAngle = -45;


if ((aAngle > 0) && (bAngle > 0) && (cAngle > 0) && aAngle + bAngle + cAngle == 180) {
    console.log(true);
}
else {
    console.log(false);
}


// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const gradeToAnalise = 100;
// const gradeToAnalise = 90;
// const gradeToAnalise = 80;
// const gradeToAnalise = 70;
// const gradeToAnalise = 60;
// const gradeToAnalise = 50;
// const gradeToAnalise = 49;
// const gradeToAnalise = 0;
// const gradeToAnalise = 110;
// const gradeToAnalise = 'cem';

if (gradeToAnalise < 0 || gradeToAnalise >100) {
    console.log(`Erro! Nota incorreta.`);
} else if (gradeToAnalise >= 90) {
    console.log(`A`);
} else if (gradeToAnalise >= 80) {
    console.log(`B`);
} else if (gradeToAnalise >= 70) {
    console.log(`C`);
} else if (gradeToAnalise >= 60) {
    console.log(`D`);
} else if (gradeToAnalise >= 50) {
    console.log(`E`);
} else if (gradeToAnalise < 50) {
    console.log(`F`);
} else {
    console.log(`Erro! ${gradeToAnalise} é uma string ou bool! Forneça uma nota (numérica) entre 0 e 100.`);
}

// 8 - 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const numberOne = 11;
const numberTwo = 12;
const numberThree = 13;

// const numberOne = 11;
// const numberTwo = 13;
// const numberThree = 13;

if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// // 9 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));