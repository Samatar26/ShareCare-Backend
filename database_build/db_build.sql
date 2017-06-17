BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
email VARCHAR(30) UNIQUE NOT NULL CHECK (email <> ''),
password VARCHAR(30)
);


INSERT INTO users(email, password) VALUES
('Samatar', 'prayingmantis')
RETURNING ID;


COMMIT;
