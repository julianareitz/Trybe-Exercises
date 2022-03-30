let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
  //diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo


  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank


  /*Exemplo 3 */

  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


  /* Quarto Exemplo */
  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey
  /*Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.*/


  /* Exercício 1*/

//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };
/*Início resolução*/


/* ver propriedade object. */



let player = {
    name:'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },            
};


console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.');

bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

/*4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".*/

for (i = 0; i <= i.length, i += 1 ) {

}
console.log();

function podeDirigir (idadeMinima, idadePessoa) {
  if (idadePessoa >= idadeMinima) {
    return 'Pode dirigir';
  }
  return 'Não pode dirigir'
}

let pessoa = {
  nomea: 'João',
  pais: 'Alemanha',
  idadeMinima: 16,
  idade: 17,
}


console.log(nomea, podeDirigir(idade, idadeMinima));

// for/in 

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

//  for/of

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

//  for/in irá percorrer a propriedade declarada, e não o seu valor em si.

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;


let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// Para fixar:

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log('Olá,',names[index]);
};

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let carros = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in carros) {
  console.log(index, carros[index]);
}

// Funções


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Função sem parâmetro:

function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!

// Função sem parâmetro

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Exercícios - parte I - é assim????

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// for (let index in info.personagem) {
//   console.log('Bem vinda,',info.personagem);
// }

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
info['recorrente'] = 'Sim';
console.log(info);

// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for (index in info) {
  console.log(index);
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (index in info) {
  console.log(info[index]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

