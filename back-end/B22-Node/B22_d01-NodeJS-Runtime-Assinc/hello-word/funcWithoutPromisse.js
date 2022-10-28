function calcDivision(num1, num2) {
  if (num2 === 0) throw new Error('Divisions by 0 does not work in this application')
  
  const result = num1/num2;

  return result;
}


try {
  const result = calcDivision(2, 0);
  
  console.log("resultado: %s", result);
} catch (e) {
  console.log("erro: %s", e.message);
}

// To exec: node funcWithoutPromisse.js