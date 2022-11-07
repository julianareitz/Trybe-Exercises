SELECT * FROM sakila.country;

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name;



SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- o RIGHT JOIN e o LEFT JOIN têm como referência a tabela da esquerda ou a tabela da direita e vê o que se repete na outra tabela usada na comparação. O que aparece na tabela que não a LEFT ou RIGHT, retorna NULL.

-- a seguir, a tabela actor, usada de comparação tem, por exemplo, o ator Humphrey Garland, que tem a id de ator 184, mas não consta no cadastro de clientes. Já o ator Rafael Abney tem 3 id de ator e uma id no cadastro de cliente.
-- Ou seja, os joins mostram os corrrespondentes nas tabelas de comparação.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;



-- SELF JOIN : Faz o join em uma mesma tabela

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;
    
    
-- 

-- PARA FIXAR

-- 1

SHOW TABLES FROM hr;

SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
WHERE
    employee.department_id <> manager.department_id
    ORDER BY manager.manager_id, employee.first_name
    ;


-- 2

SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
    hr.employees AS manager
INNER JOIN
    hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY
    manager.employee_id;
    
