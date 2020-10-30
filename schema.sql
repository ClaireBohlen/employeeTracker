DROP DATABASE IF EXISTS employee_DB; 

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    names VARCHAR(30),
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

-- INSERT INTO department (names) values ('Engineer');
-- INSERT INTO department (names) values ('Intern');
-- INSERT INTO department (names) values ('Manager');
-- INSERT INTO department (names) values ('User Experience');

-- INSERT INTO roles (title, salary) values ('Enginner', 100000);
-- INSERT INTO roles (title, salary) values ('Intern', 25000);
-- INSERT INTO roles (title, salary) values ('Manger', 125000);
-- INSERT INTO roles (title, salary) values ('User Experience', 110000);

-- INSERT INTO employee (firstName, lastName) values ('Jane', 'Austen');
-- INSERT INTO employee (firstName, lastName) values ('Mark', 'Twain');
-- INSERT INTO employee (firstName, lastName) values ('Lewis', 'Carroll');
-- INSERT INTO employee (firstName, lastName) values ('Andre', 'Asselin');

-- SELECT * FROM department








  