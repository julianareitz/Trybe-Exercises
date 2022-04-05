// RELEMBRANDO ARROW FUNCTIONS

// const sum = (value1, value2) => value1 + value2;
// console.log(sum(3, 50));

// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, '3')); // resultado: 23

// PARA NÃO QUEBRAR O CÓDIGO
// const sum = (value1, value2) => {
//     if (typeof value1 !==  'number' || typeof value2 !==  'number') {
//         return 'Os valores devem ser numeŕicos';
//     }
//     return value1 + value2;
// };
// console.log(sum(2, '3'));

// THROW: Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw :
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//   Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
// Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para que ela não tenha funcionalidades demais.

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));




// Objetos: Parte I - Adicionando novas chaves (keys)
// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

//   SINTAXE:
// objeto.nomeDaPropriedade .
// objeto[variavelQueContemONomeDaPropriedade] .

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

//  PARA PRATICAR
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };


function pratice1 (object, newKey, value) {
    object[newKey] = value;
    return object;
}
console.log(pratice1({nome: 'Roberto', job: 'Teacher'}, nacionalidade, brasileira));

// Sobre a duvida do colega sobre mudar a forma de saída pra usar um separador teria como concatenar as informações do objeto e depois dar um split com o separador que quer?