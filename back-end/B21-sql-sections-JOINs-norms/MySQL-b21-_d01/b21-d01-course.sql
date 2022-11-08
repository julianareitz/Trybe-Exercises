-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou uma string', 6);

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);



SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- PARA FIXAR - MANIPULAÇÃO DE STRINGS
SELECT UCASE('trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?',  'DuckDuckGo', 'Google');

SELECT CHAR_LENGTH('Uma frase qualquer');
-- OR SELECT LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- OR SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-----------------------------------------------------

-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

--

-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

-- PARA FIXAR

SELECT
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating, 
CASE 
WHEN rating = 'G' THEN 'Livre para todos'
WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
WHEN rating = 'R' THEN '“Não recomendado para menores de 17 anos'
ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
FROM sakila.film;

-- MATH FUNCTIONS

SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- Desafios com DIV e MOD
-- 1
SELECT IF (15 MOD 2 = 0, 'PAR', 'ÍMPAR') AS '15 É UM NÚMERO';

-- 2
SELECT 220 DIV 12 AS 'GRUPOS DE 12 PESSOAS';

-- 3
SELECT 220 MOD 12 AS 'LUGARES SOBRANDO';


-- ARREDONDANDO VALORES

-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.5); -- 11
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- EXPONENCIAÇÃO E RAIZ QUADRADA

SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4



-- GERAR VALORES ALEATÓRIOS

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))


-- PARA FIXAR

-- 1
SELECT ROUND(15 + (RAND() * 5));
-- OR SELECT FLOOR(15 + (RAND() * 5));

-- 2
SELECT ROUND(15.7515971, 5) AS 'VALOR ARREDONDDADO PARA 5 CASAS DECIMAIS';

-- 3
SELECT FLOOR(39.494) AS 'VENDA ARREDONDDADA DE CAMISAS POR MÊS';


-- 4
SELECT CEIL(85.234) AS 'PORCENTAGEM APROXIMADA DE INSCRIÇÕES NO CURSO DE FOTOGRAFIA';


-- TRABALHAND COM DATAS

SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

-- PARA FIXAR

-- 1
SELECT DATEDIFF('2030-01-20', CURRENT_DATE()) AS 'DIFERENÇA DE DIAS ENTRE HOJE E 20 DE JANEIRO DE 2030';

-- 2
SELECT TIMEDIFF('10:25:45', '11:00:00') AS '10h25 é ____ minutos antes de 11h';

-- FUNÇÕES DE AGREGAÇÃO

-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

-- PARA FIXAR

-- 1
SHOW TABLES FROM sakila;
SELECT * FROM sakila.film;
SELECT 
    AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
	MAX(length) AS 'Duração Máxima',
	SUM(length) AS 'Tempo de exibição total',
	COUNT(*) AS 'Filmes Registrados'
FROM
    sakila.film;
    

-- GROUP BY E HAVING

SELECT `title` FROM sakila.film
GROUP BY `title` DESC;

SELECT first_name FROM sakila.actor
GROUP BY first_name;
-- 647 row(s) returned
-- GROUP BY REMOVE DOUPLICATAS !!!! ATENÇÃO! FIRST NAME, SE NÃO ASSOCIADO AO LAST NAME, PODE DAR UM RESULTADO ERRADO EM CONSTAGEM COM O GROUP BY

SELECT first_name FROM sakila.actor;
-- 1000 row(s) returned

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;


-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length) AS 'Average Length'
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) AS 'Custo mínimo de substituição'
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) AS 'Custo máximo de substituição'
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost) AS 'Custo total de substituição'
FROM sakila.film
GROUP by rating;

-- Praticando GROUP BY

-- 1
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;

-- 2
SELECT * FROM sakila.customer;
SELECT 
	store_id AS loja,
	IF (active = 0, 'inativos', 'ativos') AS status_cliente,
    COUNT(*) AS numero_clientes
FROM 
	sakila.customer
GROUP BY 
store_id, active;


-- 3




SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS mesmo_nome_de_atores
FROM sakila.actor
GROUP BY first_name
HAVING mesmo_nome_de_atores > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar



-- PARA FIXAR

-- 1
SELECT rating, AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
;

-- 2
SELECT rating, SUM(replacement_cost) AS custo_distribuicao_total_por_classificacao_etaria
FROM sakila.film
GROUP by rating
HAVING custo_distribuicao_total_por_classificacao_etaria > 3950.50
;

------
SELECT AVG(amount) FROM sakila.payment;