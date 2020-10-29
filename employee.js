var mysql = require("mysql"); // My Sql 
var inquirer = require("inquirer"); // Inquirer Prompts 

var connection = mysql.createConnection({  // make connection with local server & mySql 
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "112392Cb!", 
  database: "employee_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch(); // Need a function that will start inquirer prompts 
});

// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department
