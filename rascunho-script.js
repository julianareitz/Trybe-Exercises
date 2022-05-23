
   
// Desafio 11
function checkRepeat(array, number) {
    let repeated = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === number) {
        repeated += 1;
      }
    }
    return repeated;
  }
  
  function validNumber(array) {
    let n1 = array[0]; let n2 = array[1]; let n3 = array[2];
    let n4 = array[3]; let n5 = array[4]; let n6 = array[5];
    let n7 = array[6]; let n8 = array[7]; let n9 = array[8];
    let n10 = array[9]; let n11 = array[10];
    let phoneNumber = ("(" + n1 + n2 + ") " + n3 + n4 + n5 + n6 + n7 + '-' + n8 + n9 + n10 + n11);
    return phoneNumber;
  }
  
  function generatePhoneNumber(array) {
    if (array.length !== 11) return 'Array com tamanho incorreto.';
    for (let i = 0; i < array.length; i += 1) {
      if ((checkRepeat(array, array[i]) >= 3) || (array[i] > 9 || array[i] < 0)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return validNumber(array);
  }
  



