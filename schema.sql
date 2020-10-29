DROP DATABASE IF EXISTS employee_DB; 

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30),
    PRIMARY KEY (id) 
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR (30), 
    salary DECIMAL(10,4) NULL, 
    department_id INT,
    PRIMARY KEY (id)

);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30),   
    last_name VARCHAR(30),  
    role_id INT, 
    manager_id INT,
    PRIMARY KEY (id)
    
    
   

);




  