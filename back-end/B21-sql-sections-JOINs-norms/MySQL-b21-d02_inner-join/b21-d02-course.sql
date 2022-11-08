-- USING INNER JOIN: INTERSECTIONS BETWEEN TABLES

SELECT * FROM sakila.city;

SELECT city.city, city.country_id AS id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id
;

SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;

-- --------------------------------------------------------------
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
-- --------------------------------------------------------------

-- ALIAS without AS
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- PARA FIXAR - Como utilizar o INNER JOIN

-- 1
SHOW COLUMNS FROM sakila.actor;
SHOW COLUMNS FROM sakila.film_actor;
SHOW COLUMNS FROM sakila.film;

SELECT filminfo.title, CONCAT(actor.first_name, _utf8 ' ', actor.last_name) AS `actor name`, actor.actor_id AS `actor id`
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film
INNER JOIN sakila.film AS filminfo
ON (actor.actor_id = film.actor_id) AND (film.film_id = filminfo.film_id)
ORDER BY filminfo.title DESC, actor.first_name ASC
;

-- 2
SHOW COLUMNS FROM sakila.staff;
SHOW COLUMNS FROM sakila.address;
SHOW COLUMNS FROM sakila.city;

SELECT CONCAT(s.first_name, _utf8 ' ', s.last_name) AS `EMPLOYEE`, CONCAT(a.address, _utf8 ' ', a.district, _utf8 ' ', c.city ) AS `ADDRESS`
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
INNER JOIN sakila.city AS c
ON (s.address_id = a.address_id) AND (a.city_id = c.city_id);

-- 3
SELECT * FROM sakila.address;
SHOW COLUMNS FROM sakila.address;
SHOW COLUMNS FROM sakila.customer;

SELECT c.customer_id AS `id`,
		CONCAT(UCASE(SUBSTRING(c.first_name, 1, 1)), LCASE(SUBSTRING(c.first_name, 2)), _utf8 ' ', UCASE(SUBSTRING(c.last_name, 1 , 1)), LCASE(SUBSTRING(c.last_name, 2)))  AS `Customer`,
		LCASE(c.email) AS `email`, 
        a.address_id AS `add_id`,
        a.address AS `address`
FROM sakila.address AS a
INNER JOIN sakila.customer AS c
ON (c.address_id = a.address_id)
ORDER BY c.first_name, c.last_name
LIMIT 100
;

