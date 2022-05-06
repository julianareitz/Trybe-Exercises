// Parâmetro Rest

//  REVISANDO o array.reduce()
// FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// REDUCE SINTAXE
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
// A função reducer recebe quatro parâmetros:

// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)
// O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.