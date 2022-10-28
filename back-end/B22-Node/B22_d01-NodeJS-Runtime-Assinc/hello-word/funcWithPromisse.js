function calcDivision(num1, num2) {
  const promisse = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error("Divisions by 0 does not work in this application"));

    const result = num1 / num2;

    resolve(result);
  });

  return promisse;
}


calcDivision(2, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log("erro: %s", err.message))

// To exec: node funcWithPromisse.js