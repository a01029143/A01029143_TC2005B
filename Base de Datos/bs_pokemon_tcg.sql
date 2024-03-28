DROP DATABASE IF EXISTS pokemon_tcg;
CREATE DATABASE pokemon_tcg;
USE pokemon_tcg;

CREATE TABLE Usuarios (
	id_usuario varchar(20),
    nombre VARCHAR(20),
    
    PRIMARY KEY (id_usuario)
);

INSERT INTO Usuarios VALUES
    ('U1', 'Pedro'),
    ('U2', 'Sebas'),
    ('U3', 'Rodrigo'),
    ('ID', 'Nombre');

CREATE TABLE Energias (
	id_energia VARCHAR(20),
    nombre VARCHAR(20),
    debilidad VARCHAR(20),
    
	PRIMARY KEY(id_energia)
);

INSERT INTO Energias VALUES
	('M1', 'Planta', 'Fuego'),
    ('M2', 'Fuego', 'Agua'),
    ('M3', 'Agua', 'Rayo'),
    ('M4', 'Rayo', 'Lucha'),
    ('M5', 'Psiquico', 'Metalica'),
    ('M6', 'Lucha', 'Psiquico'),
    ('M7', 'Oscura', 'Planta'),
    ('M8', 'Metalica', 'Fuego'),
    ('M9', 'Incolora', 'Lucha'),
    ('M10', 'Hada', 'Metalica'),
    ('M11', 'Dragon', 'Dragon');

CREATE TABLE Pokemon (
	id_pokemon VARCHAR(20),
    nombre VARCHAR(20),
    id_energia VARCHAR(20),
    fase VARCHAR(20),
    ps INT,
    
    debilidad VARCHAR(20),
    resistencia VARCHAR(20) NULL,
    coste_retirada VARCHAR(20),
    
    ataque_1 VARCHAR(40),
    ataque_2 VARCHAR(40),
    
    descripcion VARCHAR(50),
    
    PRIMARY KEY (id_pokemon),
    FOREIGN KEY (id_energia) REFERENCES id_energias(id_energia)
);

CREATE TABLE Partida (
	id_partida VARCHAR(20),
    tiempo VARCHAR(20),
    turnos VARCHAR(20),
    id_resultado VARCHAR(20),

	PRIMARY KEY (id_partida),
    FOREIGN KEY (id_resultado) REFERENCES id_resultado(id_resultado)
);

CREATE TABLE Resultado (
	id_resultado VARCHAR(20),
    ganador VARCHAR(20),
    
    PRIMARY KEY (id_resultado)
);