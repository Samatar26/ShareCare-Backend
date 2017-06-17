BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
username VARCHAR(30) UNIQUE NOT NULL,
password VARCHAR(30)
);


INSERT INTO users(username, password) VALUES
('Samatar', 'prayingmantis')
RETURNING ID;


COMMIT;
