DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id INTEGER PRIMARY KEY AUTOINCREMENT,
	username VARCHAR,
	password VARCHAR,
	name TEXT,
	email VARCHAR

);

INSERT INTO users (username, password, name, email) VALUES ('DK', '1234', 'dan', 'dan@dk.com');