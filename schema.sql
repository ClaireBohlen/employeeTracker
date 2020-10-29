DROP DATABASE IF EXISTS employee_DB; 

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, --   PRIMARY KEY (position)
    name VARCHAR(30) --   * **name** - VARCHAR(30) to hold department name
    PRIMARY KEY (id) --   * **id** - INT PRIMARY KEY
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT, --   * **id** - INT PRIMARY KEY
    title VARCHAR (30), --   * **title** -  VARCHAR(30) to hold role title
    salary DECIMAL(10,4) NULL, --   * **salary** -  DECIMAL to hold role salary
    department_id INT --   * **department_id** -  INT to hold reference to department role belongs to
--!!!!! FIGURE OUT HOW TO CONNECT THIS ID WITH PRIMARY KEY OF DEPARTMENT TABLE


);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, --   * **id** - INT PRIMARY KEY
    first_name VARCHAR(30),   --   * **first_name** - VARCHAR(30) to hold employee first name
    last_name VARCHAR(30),   --   * **last_name** - VARCHAR(30) to hold employee last name
    role_id INT,             --!!!! CONNECT TO ROLES   * **role_id** - INT to hold reference to role employee has
    manager_id INT --   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

);


  