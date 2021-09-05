#Create the database:
CREATE SCHEMA IF NOT EXISTS `ApertureScienceMS` ;

#Set the database as the active database:
USE ApertureScienceMS;

#Create the facilitators table:
CREATE TABLE IF NOT EXISTS `ApertureScienceMS`.`facilitators` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(45) NOT NULL,
	`password` VARCHAR(45) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

#Insert data into the facilitators table:
INSERT INTO facilitators(username, password) VALUES ('GLaDOS', 'ISawDeer');

#create the test subjects table:
CREATE TABLE IF NOT EXISTS `ApertureScienceMS`.`testsubjects` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`SubjectId` VARCHAR(45) NOT NULL,
	`Username` VARCHAR(45) NOT NULL,
	`TestChamber` VARCHAR(45) NOT NULL,
	`DateOfBirth` VARCHAR(45) NOT NULL,
	`TotalScore` VARCHAR(45) NOT NULL,
	`Alive` VARCHAR(45) NOT NULL,
	`Password` VARCHAR(45) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `SubjectId_UNIQUE` (`SubjectId` ASC) VISIBLE,
	UNIQUE INDEX `Username_UNIQUE` (`Username` ASC) VISIBLE);

#insert data intp the test subject table:
INSERT INTO testsubjects(SubjectId, Username, TestChamber, DateOfBirth, TotalScore, Alive, Password)
VALUES ('f1ba33b5-07bf-4d55-9ea4-ea20c4348c49', '1', '14', '1988-04-07', '86', 'true', 'ILoveCube11');

#Select statements to check the data:
SELECT * FROM facilitators;
SELECT * FROM testsubjects;