// in index.js file is where we're going to 
//require inquirer and prompt the user for information
// you're also potentially going to import your custom class
// which contains all the methods for altering your MySQL data tables
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// prompt the user what they want to do, ie. view departments, add a role, etc.




inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'Menu ',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

