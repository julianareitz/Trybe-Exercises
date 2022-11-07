SHOW TABLES FROM Pixar;
SHOW COLUMNS FROM Movies;
SHOW COLUMNS FROM BoxOffice;

SELECT 
	movies_data.title AS `Filme`,
    sales.domestic_sales AS `Vendas Nacionais`,
    sales.international_sales AS `Vendas Internacionais`
FROM Pixar.BoxOffice AS sales
INNER JOIN Pixar.Movies AS movies_data
ON movies_data.id = sales.movie_id
WHERE sales.international_sales > sales.domestic_sales
;

-- 3 

SELECT 
	movies_data.title AS `Filme`,
    sales.rating AS `Avaliação`
FROM Pixar.BoxOffice AS sales
INNER JOIN Pixar.Movies AS movies_data
ON movies_data.id = sales.movie_id
ORDER BY sales.rating DESC
;

-- 4

USE pixar;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
LEFT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;


-- 5

USE pixar;

SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
RIGHT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;


-- EXERCICIO BONUS
USE pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    movies m
INNER JOIN
    box_office b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;