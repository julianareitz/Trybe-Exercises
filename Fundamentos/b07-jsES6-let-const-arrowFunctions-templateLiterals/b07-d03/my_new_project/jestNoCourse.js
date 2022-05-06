// JEST

// Documentação Jest
// https://jestjs.io/pt-BR/docs/expect

// No course: Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes no JavaScript . Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:

test('array and object equality', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });

  // Falsy: false, null, indefined
  // https://jestjs.io/docs/using-matchers#truthiness

  // Números expect(value).toBe
  // https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros

  // usando strings (diversos)
  // https://jestjs.io/pt-BR/docs/expect#tomatchregexporstring

  // Arrays
  //item específico: to contain 
  // https://jestjs.io/pt-BR/docs/expect#tocontainitem
  // Com estrutura complexa
  // https://jestjs.io/pt-BR/docs/expect#tocontainequalitem 
  // tamanho de array/string
  // https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber

  // Objetos
  // toHaveProperty(keyPath, value(interrogação))
  // https://jestjs.io/pt-BR/docs/expect#tohavepropertykeypath-value

  // Exceções
  // Lançar um erro quando executada
  const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

  // not - testar o oposto de algo
  const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});

// describle
// juntar ou separar testes
// https://jestjs.io/pt-BR/docs/api#describename-fn