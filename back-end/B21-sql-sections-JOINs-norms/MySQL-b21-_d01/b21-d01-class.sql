-- Pixar

SELECT * FROM Pixar.Movies;

SHOW COLUMNS FROM Pixar.Movies;

SELECT GROUP_CONCAT(title), COUNT(title), director, AVG(length_minutes) AS media_tempo FROM Pixar.Movies GROUP BY director;

-- Sakila

SELECT 
    ROUND(AVG(rental_rate), 2) AS media_taxa_aluguel, rating
FROM
    sakila.film
GROUP BY
 rating
;

SELECT 
    COUNT(*) AS `quantidade`, district AS `endereços em`
FROM
    sakila.address
GROUP BY district
HAVING quantidade >= 2;



SELECT @age = 14;

SELECT IF(@age >= 18, 'Maior de idade', 'Menor de idade') AS `Maior ou menor de idade`;


SELECT title AS titulo_do_filme, length AS duracao, IF(length <= 60, 'Curta', 'Longa') AS classificação FROM sakila.film;


-- DANDO ERRO NA SAÍDA
SET @entrada = 1;
SELECT IF(@entrada = true, 'Entrada liberada', 'Entrada proibída');
--
--
--
--

SELECT title, length,
CASE WHEN length < 60 THEN 'Curta Duração'
WHEN length > 60 AND length < 150 THEN 'Média Duração'
ELSE 'Longa Duração'
END AS classificacao
FROM sakila.film;

SELECT LENGTH('Curso BeTrybe');
SELECT UCASE('Curso BeTrybe');
SELECT lCASE('Curso BeTrybe');
SELECT LEFT('Curso BeTrybe', 2);
SELECT RIGHT('Curso BeTrybe', 5);
SELECT UCASE('Curso BeTrybe');
SELECT SUBSTRING('Curso BeTrybe', 6);
SELECT SUBSTRING('Curso BeTrybe', 9, 5);
SELECT SUBSTRING('Curso BeTrybe', -13, 6);
