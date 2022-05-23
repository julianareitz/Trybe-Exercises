// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (generateEmployee) => {
  const employees = {
    id1: generateEmployee("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmployee("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmployee("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};


const generateEmployee = (fullName) => {
  const email = fullName.toLowerCase().replace(" ", "_");
  return { fullName, email: `${email}@betrybe.com` };
};
console.log(newEmployees(generateEmployee));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const Sorteio = (numeroApostado, confereNumero) =>{
//   // gera numero aleatório entre 1 e 5 
//   let min = 1;
//   let max = 5;
//   let numeroSorteado = '';
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     numeroSorteado = Math.floor(Math.random() * (max - min)) + min;
//     return numeroSorteado;
//   }  
//   // console.log(getRandomInt(1, 5));
//   confereNumero (numeroApostado, numeroSorteado);
// };

// const confereNumero = (numeroApostado, numeroSorteado) => {(numeroApostado === numeroSorteado ? 'Parabéns você ganhou' : 'Tente novamente' )};

// Essa const só vai checar realmente se os números são iguais, o resto vai na outra função, na HOF. Essa é a callback
const confereNumero = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado;

const resultadoSorteio = (numeroApostado, confereNumero) => {
  // gerando número aleatório entre 1 e 5
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return confereNumero(numeroApostado, numeroSorteado) ? 'Parabéns, você ganhou!' : '=( Tente novamente';
};

console.log(resultadoSorteio(5, confereNumero));


// 3 - Crie uma HOF que receberá três parâmetros:
// Utilize os seguintes arrays:
// O primeiro será um array de respostas corretas (Gabarito);
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// criar uma variável para armazanar o total de pontos
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
const callbackComparaGabaritoRespostaEstudante = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  // Uma resposta correta adiciona 1 ponto à pontuação final;
  if (STUDENT_ANSWERS === RIGHT_ANSWERS) { return 1
  } else if (STUDENT_ANSWERS === 'N.A') {
    // A ausência de uma resposta não altera a pontuação (quando for "N.A");
    return 0;
  }
  // Uma resposta incorreta reduz a pontuação final em 0.5 ponto. 
  return -0.5;
}


// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. 
const countPoints = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
  let notaEstudante = '';
  for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    const actionReturn = action(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
    notaEstudante += actionReturn;
  }
  return `Resultado final: ${notaEstudante}; pontos`;
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, callbackComparaGabaritoRespostaEstudante));