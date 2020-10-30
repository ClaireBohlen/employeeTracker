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
        viewEmployees();
    }
    else if (answer.firstQuestion === "View all Departments"){
      console.log("View all Department Categories")
      // viewDepartments();
    }
    else if (answer.firstQuestion === "View all Roles"){
      console.log("View all Roles Categories")
        // viewRoles();
    }
    else if (answer.firstQuestion === "Add a department"){
      console.log("Add a new Department")
      // addDepartment();
    }
    else if (answer.firstQuestion === "Add a role"){
      console.log("Add a new role")
      // addRole();
    }
    else if (answer.firstQuestion === "Add an employee"){
      console.log("Add a new employee") 
      // addEmployee();
    }
    else if (answer.firstQuestion === "Update an employee") {
      console.log("Update employee info")
      // updateEmployee();
    }

  });
employeeInfo();

viewEmployees();
//Function to view all employees in the table 

viewDepartments();
//View all the differnt department 

viewRoles();
//View all the differnt roles

addDepartment();
//add a new department category

addRole();
//add a new role catergory

addEmployee();
//add a new employee 

updateEmployee();
//update an exsiting employee






}





















// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department
