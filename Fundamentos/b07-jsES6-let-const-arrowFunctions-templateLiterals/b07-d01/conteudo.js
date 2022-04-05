if (true) {
    // inicio do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

//   Const e Let
const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// Mudando propriedades de objeto com const

const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//   Mudando propriedades de objetos com array

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// Hoisting

var age;

age = 20;

console.log(age); // 20

// Se não atribuir valor, não rola hoisting

var age;

console.log(age); // undefined

age = 20;

// TEMPLATE LITERALS

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// ARROW FUNCTIONS

const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

//   
const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

//   

const printName = () => 'Lucas';
console.log(printName());

// Na arrow function, só usa parênteses na propriedade se tem mais de uma propriedade.

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

console.log(objetoPessoa('Joaquim', 25));




// TERNARY OPERATOR

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira


// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
  );
  
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!