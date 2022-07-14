// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

test('Testa a função addCity', () => {
    // expect.assertions(number) verifica que um certo número de verificações são chamadas durante um teste. Isto é frequentemente útil ao testar código assíncrono, a fim de certificar-se que as verificações de um "callback" realmente tenham sido chamadas.
    // https://jestjs.io/pt-BR/docs/expect#expectassertionsn%C3%BAmero
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
  
  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });