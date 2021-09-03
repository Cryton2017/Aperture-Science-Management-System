CREATE SCHEMA IF NOT EXISTS `ApertureScienceMS` ;

USE ApertureScienceMS;

CREATE TABLE IF NOT EXISTS `ApertureScienceMS`.`facilitators` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE);

INSERT INTO public.facilitators(username, password)
VALUES ('GLaDOS', 'ISawDeer')