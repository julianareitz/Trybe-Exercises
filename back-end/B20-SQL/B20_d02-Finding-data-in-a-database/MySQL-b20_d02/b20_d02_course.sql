USE sakila;
SELECT * FROM city;
SELECT first_name , last_name FROM customer;
SELECT * FROM rental;
SELECT title , description , release_year FROM film;
SELECT * FROM category;
SELECT COUNT(*) FROM address;
SELECT COUNT(DISTINCT city_id), COUNT(DISTINCT district) FROM address;
SELECT COUNT(DISTINCT city_id) AS 'numero de cidades', COUNT(DISTINCT district) AS 'numero de bairros' FROM address;
SELECT COUNT(*) AS quantidade FROM address WhERE district = 'California';
SELECT COUNT(*) AS quantidade FROM address WhERE district != 'California';
SELECT district, COUNT(*) AS quantidade FROM address GROUP BY district;
SELECT rating, COUNT(*) AS quantidade FROM film GROUP BY rating;
SELECT * FROM actor ORDER BY first_name ASC;
SELECT * FROM actor ORDER BY first_name DESC;
SELECT * FROM actor ORDER BY first_name , last_name ASC;

