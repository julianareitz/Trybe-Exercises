SELECT * FROM northwind.products;
SELECT product_name FROM northwind.products;

SELECT * FROM northwind.products;

SHOW KEYS FROM products WHERE Key_name = 'PRIMARY';
SELECT id FROM northwind.products;

SELECT COUNT(product_name) FROM northwind.products;

SELECT * FROM northwind.products LIMIT 9 OFFSET 3;

SELECT product_name, id FROM northwind.products ORDER BY product_name;

SELECT id FROM (
	SELECT * FROM northwind.products 
		ORDER BY id DESC LIMIT 5)
Var1 ORDER BY id DESC;



SELECT * FROM northwind.products LIMIT 10 OFFSET 3;

SELECT 5+6 AS 'A', 'de' AS 'Trybe', 2+8 AS 'eh';

SELECT notes FROM northwind.purchase_orders WHERE notes IS NOT NULL;

SELECT * FROM northwind.purchase_orders	
WHERE created_by > 2
ORDER BY created_by DESC;

SELECT notes FROM northwind.purchase_orders	
	WHERE notes 
		BETWEEN 'Purchase generated based on Order #30'
        AND 'Purchase generated based on Order #39';
SELECT submitted_date FROM northwind.purchase_orders;        
SELECT submitted_date FROM northwind.purchase_orders WHERE submitted_date BETWEEN '2006-04-26 00:00:00' AND '2006-04-26 23:59:59';

SELECT 
    submitted_date
FROM
    northwind.purchase_orders
WHERE
    submitted_date LIKE '2006-04-26%';
    

SELECT 
    supplier_id
FROM
    northwind.purchase_orders
WHERE
    supplier_id = 1 OR supplier_id = 3;
    


SELECT 
    supplier_id
FROM
    northwind.purchase_orders
WHERE
    supplier_id BETWEEN 1 AND 3;
    

SELECT HOUR(submitted_date)
     AS submitted_hour
FROM
    northwind.purchase_orders
    ;
    
    

SELECT 
    submitted_date
FROM
    northwind.purchase_orders
WHERE
    submitted_date BETWEEN ('2006-01-26 00:00:00') AND ('2006-03-31 23:59:59');
    

SELECT 
    id, supplier_id
FROM
    northwind.purchase_orders
WHERE
    supplier_id IN (1 , 3, 5, 7);

SELECT 
    *
FROM
    northwind.purchase_orders
WHERE
    supplier_id = 3 AND status_id = 2;
    
SHOW columns from northwind.orders;




SELECT 
    COUNT(*) AS orders_count
FROM
    northwind.orders
WHERE
    employee_id BETWEEN 5 AND 6
        AND shipper_id = 2);
;



SELECT * FROM order_details;

INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id) VALUES (69, 80, 15000, 15000, 0, 2, NULL, NULL, 129);


SELECT * FROM order_details;

UPDATE northwind.order_details SET discount = 15 WHERE discount;


UPDATE northwind.order_details SET discount = 30 WHERE unit_price < 10.0000;

UPDATE northwind.order_details SET discount = 45 WHERE unit_price > 10.0000 AND id BETWEEN 30 AND 40;

select * from northwind.order_details;

DELETE * FROM northwind.order_details WHERE order_details < 10.0000;
