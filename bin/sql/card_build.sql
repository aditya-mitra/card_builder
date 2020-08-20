CREATE TABLE characters(
	id SERIAL PRIMARY KEY,
	img TEXT,
	name VARCHAR(200) UNIQUE NOT NULL,
	createdAt TIMESTAMP NOT NULL
);

CREATE TABLE shows(
	id SERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	character_id INT,
	CONSTRAINT fk_character
		FOREIGN KEY(character_id) 
			REFERENCES characters(id)
			ON DELETE CASCADE
);

CREATE TABLE abilities(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	character_id INT,
	CONSTRAINT fk_character
		FOREIGN KEY(character_id) 
			REFERENCES characters(id)
			ON DELETE CASCADE
);