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
    choices: ["View all employees",  "Add a department", "Add a role", "Add an employee", "Update an employee"]
  })
  .then(function(answer){
    if (answer.firstQuestion === "View all employees"){
      console.log("View all employees");
        viewEmployees(); // done 
    }
    else if (answer.firstQuestion === "Add a department"){
      // console.log("Add a new Department")
      addDepartment(); // done 
    }
    else if (answer.firstQuestion === "Add a role"){
      console.log("Add a new role")
      addRole();
    }
    else if (answer.firstQuestion === "Add an employee"){
      console.log("Add a new employee") 
      addEmployee();
    }
    else if (answer.firstQuestion === "Update an employee") {
      console.log("Update employee info")
      updateEmployee();
    }

  });
}

//Function to view all employees in the table 
function viewEmployees (){  
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.names AS department FROM employee LEFT JOIN roles ON employee.roles_id = roles.id LEFT JOIN department ON roles.department_id = department.id", (err, res) => {
    if (err) throw err;
    console.table(res);
    employeeInfo();
  })
}


//add a new department category
function addDepartment (){
  // viewEmployees(); 
  console.log ("ask");
  inquirer
    .prompt ([
      {
        name: "newDepartmentName",
        type: "input",
        message: "Insert the name of the new department you would like to add?" 

      },
    ])
    .then(function(answer){
      connection.query("INSERT INTO department SET ?",
      {
        names: answer.newDepartmentName,
      },
      function(err){
        if (err) throw err;
        console.log("Department was added");
        employeeInfo();
      }
      )
    })
}

//add a new role catergory
function addRole(){
  // viewEmployees(); 
  inquirer
    .prompt ([
      {
        name: "titleRole",
        type: "input",
        message: "What is the title of the role? "
      },
      {
        name: "salaryRole",
        type: "input",
        message: "What is the salary of the role?"
      },
      {
        name: "departmentRole",
        type: "input",
        message: "What department does this role belong in??"
      }

    ])
    .then(function(answer){
      connection.query("INSERT INTO roles SET ?",
      {
        title: answer.titleRole,
        salary: answer.salaryRole,
        department_id: answer.departmentRole,

      },
      function(err){
        if (err) throw err;
        console.log("New role was added");
        employeeInfo();
      }
      );
    });
}
  



//Add a new employee
function addEmployee (){ 
  // viewEmployees(); 
  inquirer
  .prompt([
    {
      name: "newFirstName",
      type: "input",
      message: "Enter in the employee's first name?"
    },
    {
      name: "newLastName",
      type: "input",
      message: "Enter in the employee's last name?"
    },
    {
      name: "newRoleId",
      type: "input",
      message: "What is the employees ID?",
      
    },
    {
      name: "newManagerId",
      type: "input",
      message: "Please enter in the employee's manager (ID)?",
      
    }
  ])
  .then(function(answer) {
    // when finished prompting, insert a new item into the db with that info
    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.newFirstName,
        last_name: answer.newLastName,
        roles_id: answer.newRoleId,
        manager_id: answer.newManagerId
      },
      function(err) {
        if (err) throw err;
        console.log("Your auction was created successfully!");
        // re-prompt the user for if they want to bid or post
        // viewEmployees();
      }
    );
  });
}




//update an exsiting employee
function updateEmployee (){
  // viewEmployees(); 
  inquirer
    .prompt ([
      {
        name: "updateID",
        type: "input",
        message: "Please enter the employee ID."
      },
      {
        name: "updateSalary",
        type: "input",
        message: "Please enter in the new salary."
      },
      {
        name: "updateTitle",
        type: "input",
        message: "Please enter the new title."
      },
      {
        name: "updateDepartment",
        type: "input",
        message: "What department does this employee belong to?"
      }
    ])
    .then(function(answer){
      console.log("updating");
      connection.query("UPDATE employee SET ? WHERE id = " + answer.updateID,
      [
        {
          title: answer.updateTitle ,
          salary: answer.updateSalary,
          department_id: answer.updateDepartment


        }
      ],
      function(err, res) {
        if (err) throw err;
        employeeInfo();
      }
      );
    })

}















employeeInfo();












// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department
