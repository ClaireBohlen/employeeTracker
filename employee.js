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