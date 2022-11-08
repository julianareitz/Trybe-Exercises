USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 2 ORDER BY Fornecedor;

SELECT * FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC
;

SELECT COUNT(*) FROM Fornecedores
WHERE name LIKE '%F%'
;

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN '15' AND '40'
ORDER BY Preco
;

SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN CAST('2018-04-15 00:00:00' AS DATETIME) AND CAST('2019-07-30 23:59:59' AS DATETIME);
