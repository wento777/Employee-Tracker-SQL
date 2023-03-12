// in index.js file is where we're going to 
//require inquirer and prompt the user for information
// Import and require mysql2
const mysql = require('mysql2');

const inquirer = require('inquirer');



// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bri2012anna',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


const cTable = require('console.table');

// prompt the user what they want to do, ie. view departments, add a role, etc.

const start = () => {
  inquirer
    .prompt({
      name: 'menu',
      type: 'list',
      message: 'What would you like to do do?',
      choices: [
              'View all departments', 
              'view all roles', 
              'View all employees',
              'Add department', 
              'Add role', 
              'Add employee',
              'Update employee role', 
              'Exit',
            ],
    })
    .then((answer) => {
      switch (answer.menu) {
       
        case 'View all departments':
          viewAllDepartment();
          break;

        case 'view all roles':
          viewAllRoles();
          break;
        
        case 'View all employees':
          viewAllEmployees();
          break;

          case 'Add department':
          addDepartment();
          break;

        case 'Add role':
          addRole();
          break;

        case 'Add employee':
          addEmployee();
          break;
        
        case 'Update employee role':
          updateEmployeeRole();
          break; 
        
          
        case 'Exit':
          connection.end();
          break;

        default:
          console.log(`Invalid menu: ${answer.menu}`);
          break;
      }
    });
};



const viewAllDepartment = () => {
  connection.query(
    'SELECT * FROM department', (err, res)=>{
      if (err) throw err;
      console.table(res);
      start();

    });
};

const viewAllRoles = () => {

  connection.query(
    'SELECT * FROM role', (err, res)=>{
      if (err) throw err;
       console.table(res);
      start();

    });
};

const viewAllEmployees = () => {

  connection.query(
    'SELECT * FROM employee', (err, res)=>{
      if (err) throw err;
      console.table(res);
      start();

    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the new department',
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.name
        },
        (err) => {
          if (err) throw err;
          console.log('New department was added successfully!');
          start();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'What is the name of the new role',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role',
      },
      {
        name: 'department_id',
        type: 'input',
        message: " What is the nr of department",
        
      },
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.title,
          salary: answer.salary,
          
        },
        (err) => {
          if (err) throw err;
          console.log('New role was added successfully!');
          start();
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'What is employee firt name',
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'What is employee last name',
      },
      {
        name: 'role',
        type: 'list',
        message: " What is the employee's role",
        choices: ['Senior accountant', 'Junior sales']
      },
      
      
    ])
    
    .then((answer) => {
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.first_name
        },
        {
          last_name: answer.last_name
        },
        
        (err) => {
          if (err) throw err;
          console.log('New employee information was added successfully!');
          start();
        }
      );
    });
};



const updateEmployeeRole = () => {

  inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter employee id',
      },
      {
        name: 'roleId',
        type: 'input',
        message: 'Enter new role id',
      },
    ])
    .then(answer => {
    connection.query(
      'UPDATE employee SET ? WHERE ?',
      [
        answer.roleId, answer.id
      ],
          function (err, res) {
        if (err) throw err;
        console.log (`Employee role updated!\n`);
        start();
      }
    );
    });
  }


// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  start();
});

