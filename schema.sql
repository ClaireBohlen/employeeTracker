DROP DATABASE IF EXISTS employee_DB; 

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
  
--   PRIMARY KEY (position)
--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name
);

CREATE TABLE roles (
--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to


);

CREATE TABLE employee (
--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

);


  