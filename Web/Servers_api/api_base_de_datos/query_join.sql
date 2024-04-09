USE cards_db;
SELECT * FROM card;
SELECT * FROM effect;
SELECT * FROM card_effect;

SELECT * FROM card AS C
JOIN effect AS E
JOIN card_effect AS ce
ON c.card_id = ce.card_id AND e.effect_id = ce.effect_id;
