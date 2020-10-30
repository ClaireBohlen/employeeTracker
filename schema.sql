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
    -- CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE,
    PRIMARY KEY (id)

);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30),   
    last_name VARCHAR(30),  
    roles_id INT, 
    -- CONSTRAINT fk_roles_id FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INT,
    PRIMARY KEY (id)
    

    

    
);

INSERT INTO department (names) values ('Engineer Department');
INSERT INTO department (names) values ('Intern Department');
INSERT INTO department (names) values ('Manager Department');
INSERT INTO department (names) values ('User Experience Department');

INSERT INTO roles (title, salary, department_id) values ('Engineer', 100000, 1);
INSERT INTO roles (title, salary, department_id) values ('Intern', 25000, 2);
INSERT INTO roles (title, salary, department_id) values ('Manger', 125000, 3);
INSERT INTO roles (title, salary, department_id) values ('User Experience', 110000, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id) values ('Jane', 'Austen');
INSERT INTO employee (first_name, last_name, roles_id, manager_id) values ('Mark', 'Twain');
INSERT INTO employee (first_name, last_name, roles_id, manager_id) values ('Lewis', 'Carroll');
INSERT INTO employee (first_name, last_name, roles_id, manager_id) values ('Andre', 'Asselin');













  