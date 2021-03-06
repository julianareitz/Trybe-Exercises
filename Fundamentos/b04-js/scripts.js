let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

/*Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.*/

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe'];

tasksList.unshift('Brincar com o gato');  // retira uma tarefa
console.log(tasksList);

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];


/*Bacana, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens. Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?" . Simples, veja este exemplo:*/

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);

/*Procura o índice de um item*/
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1

/*Exercício 1 - Obtenha o valor "Serviços" do array menu :*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');
console.log(menuServices);

/*Exercício 2 - Procure o índice do valor "Portfólio" do array menu :*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);  

/*Exercício 3 - Adicione o valor "Contato" no final do array menu :*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);