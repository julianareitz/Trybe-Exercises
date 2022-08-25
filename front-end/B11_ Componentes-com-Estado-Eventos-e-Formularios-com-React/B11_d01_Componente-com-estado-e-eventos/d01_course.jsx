// INTRODUÇÃO AO ESTADO

// A informação deve ser salva no estado do componente.
// "O Estado de um componente é um lugar especial que todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada. É o filtro selecionado, o item da lista destacado, o carrinho de compras, tudo isso e mais!"

// Hierarquia: cada componente cuida das suas informações

//  - Estado do componente 1
//  - Componente 1

//  - Estado do componente 2
//  - Componente 2




// INTRODUÇÃO AOS EVENTOS

// Os mesmos eventos usados no JS - addEventListener
// A diferença está na forma de ligar (Elemento que está reagindo) à (Ação que ele irá executar)

// import React from 'react';
// import './App.css';

// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */
// function handleClick() {
//   console.log('Clicou no botão!')
// }

// class App extends React.Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render() {
//     return <button onClick={handleClick}>Meu botão</button>
//   }
// }

// export default App;


// VINCULANDO FUNÇÕES À CLASSE COM THIS E BIND NO CONSTRUTOR

//  Para usar o this dentro do constructor() é preciso chamar o super() antes.
// "O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente. Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:"

// STATE VS PROPS

// props: Forma de passar dados de pai para filho - componente recebe, mas não altera
// state: reservado para dados que seu componete controla - do componente e será atualizada na utilização



// Para fixar
// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons. Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log(). Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.




// AULA BRADOCK

// DEFINIÇÕES DE COMPONETES, PROPS E ESTADO

// COMPONETES:
// - Pedacinho de tela
// - Reusabilidade
// - Facilita manutenção
// - Função retorna jsx

// PROPS:
//  - Informações passadas entre componentes: Pai -> Filho
//  - Read only

// STATE:
//  - Representa o momento atual do dado
//  - Quando altera força um novo Render
//  - Informação dinâmica
//  - Partes que interagem com pessoa usuária

