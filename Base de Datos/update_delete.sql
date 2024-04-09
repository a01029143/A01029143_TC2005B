USE sakila;
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM sakila.rental;
DESC sakila.rental;

SELECT * FROM sakila.language;
DELETE FROM sakila.language;


SELECT * FROM sakila.rental;
DELETE FROM sakila.rental WHERE rental_id < 10;

SELECT * FROM sakila.payment;
TRUNCATE TABLE sakila.language;

DROP TABLE sakila.payment;
DROP TABLE sakila.language;

DROP SCHEMA sakila;

USE sakila;
SELECT * FROM sakila.payment;
UPDATE sakila.payment SET amount = amount*1.1;

SELECT * FROM sakila.actor;
UPDATE sakila.actor SET last_name = UPPER('CRUZ') WHERE
first_name LIKE 'PENELOPE' AND last_name LIKE 'GUINESS';
