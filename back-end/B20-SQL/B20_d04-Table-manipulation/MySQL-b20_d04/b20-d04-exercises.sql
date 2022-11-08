USE sakila;

SHOW tables;

SHOW COLUMNS FROM staff; 

SELECT 
    first_name, last_name, address_id, store_id, active_username
FROM
    staff;
INSERT INTO `staff` (first_name, last_name, address_id, email, store_id, active, username, password) VALUES ('Joan', 'of Arc', 2, 'joan_of_arc@francesavoir.fr', 2, 1, 'jo-jo', 'egaliteFraterniteLiberte');

SELECT 
    first_name, last_name, address_id, store_id, active_username
FROM
    staff;
INSERT INTO `staff` (first_name, last_name, address_id, email, store_id, active, username, password) VALUES 
('Aria', 'Stark', 2, 'noface@got.com', 2, 1, 'Woman of no face', 'knolage'),
('Hermione', 'Granger', 2, 'granger@misnisteryofmagic.hp', 2, 1, 'mione', 'studyandworkhard');



INSERT INTO `actor`(first_name, last_name)
SELECT first_name, last_name
FROM `customer`
ORDER BY customer_id
LIMIT 5;

SHOW COLUMNS FROM `category`;
SELECT * FROM `category`;

INSERT INTO `category` (name) VALUES ('LGBT+'), ('Investigation'), ('Norwigian Investigation');

SELECT * FROM `category`;



SELECT * FROM `store`;
SHOW COLUMNS FROM `store`;
INSERT INTO `store` (manager_staff_id, address_id) VALUES (3, 3);
SELECT * FROM `store`;



SET SQL_SAFE_UPDATES = 0;
UPDATE `actor`
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM `category`;
UPDATE `category` 
SET 
    name = 'Science-Fiction'
WHERE
    name = 'Sci-Fi';

SELECT * FROM `category`;



UPDATE `category` 
SET 
    name = 'Science Fiction'
WHERE
    name = 'Science-Fiction';

SELECT * FROM `category`;


SELECT * FROM `film`;

UPDATE `film` 
SET 
    replacement_cost = 25
WHERE
    (length > 100)
        AND (rating IN ('G' , 'PG', 'PG-13'))
        AND (replacement_cost > 20);


SELECT * FROM `film` WHERE (length > 100) AND (rating IN ('G', 'PG', 'PG-13')) AND ( replacement_cost > 20);


UPDATE `film`
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);
