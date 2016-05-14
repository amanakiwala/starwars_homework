CREATE DATABASE starwarsCharacter;
USE starwarsCharacter;

CREATE TABLE allcharacters(
  id INT(11) AUTO_INCREMENT NOT NULL,
  routeName VARCHAR( 255) NOT NULL,
  name VARCHAR( 255 ) NOT NULL,
  role VARCHAR( 255 ) NOT NULL,
  age Int(11) NOT NULL,
  forcePoints Int(11) NOT NULL,

	PRIMARY KEY ( id ) 
);
