CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artist(
artist_id INT PRIMARY KEY AUTO_INCREMENT,
artist_name VARCHAR(90) NOT NULL
) ENGINE=InnoDB;

INSERT INTO artist(artist_id, artist_name) VALUES ('1, Back Street Boys');
INSERT INTO artist(artist_id, artist_name) VALUES ('2, Britney Spears');


CREATE TABLE album(
album_id INT PRIMARY KEY AUTO_INCREMENT,
FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
album_title VARCHAR(45) NOT NULL,
album_price DECIMAL(5,2),
style_id VARCHAR(25) NOT NULL
) ENGINE=InnoDB;]

INSERT INTO album(album_id, artist_id, album_title, album_price, style_id) VALUES (01, 01, 'Backstreet Back', 05.99, 01);
INSERT INTO album(album_id, artist_id, album_title, album_price, style_id) VALUES (02, 01, 'Millenium', 03.99, 01);
INSERT INTO album(album_id, artist_id, album_title, album_price, style_id) VALUES (01, 02, 'Toxic', 35.99);

CREATE TABLE song(
song_id  INT PRIMARY KEY AUTO_INCREMENT,
song_title VARCHAR(45) NOT NULL,
FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;

INSERT INTO song(song_title) VALUES	('Everybody');
INSERT INTO song(song_title) VALUES	('As Long as You Love Me');
INSERT INTO song(song_title) VALUES	('Larger Then Life');
INSERT INTO song(song_title) VALUES	('Toxic');
            
CREATE TABLE style(
style_id  INT PRIMARY KEY AUTO_INCREMENT,
style_title VARCHAR(25) NOT NULL
) ENGINE=InnoDB;

INSERT INTO style(style_title) VALUES (`90's pop`);
