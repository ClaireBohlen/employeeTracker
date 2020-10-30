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
     // Need a function that will start inquirer prompts 
});

function employeeInfo(){ //command line application
  inquirer.prompt(
    {
    name:"firstQuestion", //starting prompt that will lead to specific functions 
    type: "list",
    message: "What would you like to do?",
    choices: ["View all employees", "View all Departments", "View all Roles", "Add a department", "Add a role", "Add an employee", "Update an employee"]
  })
  .then(function(answer){
    if (answer.firstQuestion === "View all employees"){
      console.log("View all employees");
    }
    else if (answer.firstQuestion === "View all Departments"){
      console.log("View all Department Categories")
    }
    else if (answer.firstQuestion === "View all Departments"){
      console.log("View all Department Categories")
    }
    else if (answer.firstQuestion === "View all Roles"){
      console.log("View all Department Categories")
    }
    else if (answer.firstQuestion === "Add a department"){
      console.log("Add a new")
    }
    else if (answer.firstQuestion === "Add a role"){
      console.log("Add a new role")
    }
    else if (answer.firstQuestion === "Add an employee"){
      console.log("Add a new employee") 
    }
    else if (answer.firstQuestion === "Update an employee") {
      console.log("Update employee info")
    }

  });
}

employeeInfo();





// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department
