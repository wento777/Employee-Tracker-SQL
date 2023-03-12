# Employee-Tracker-SQL





 ## Description 

- This project was designed as a homework assignment for KU coding bootcamp in Module 12 Challenge, SQL Challenge: Employee Tracker


-  Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

- Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.


- A major aspect of this challenge was the balance between figuring out which solution made sense and the solution that would be most efficient.





 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
 
 
 
 ## Installation

  - In order to install inquirer, please use npm i inquirer@8.2.4.

  - Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

  -Refer to the Video Submission GuideLinks to an external site. on the Full-Stack Blog for additional guidance on creating a video.


## Usage

 You’ll need to use the MySQL2 packageLinks to an external site. to connect to your MySQL database and perform queries, the Inquirer packageLinks to an external site. to interact with the user via the command line, and the console.table packageLinks to an external site. to print MySQL rows to the console

## User Story

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business


## Acceptance Criteria


- GIVEN a command-line application that accepts user input

- WHEN I start the application

- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

- WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

- WHEN I choose to view all role,

- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees

- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

- WHEN I choose to add a department

- THEN I am prompted to enter the name of the department and that department is added to the database

- WHEN I choose to add a role

- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

- WHEN I choose to add an employee

- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

- WHEN I choose to update an employee role

- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Tests

  none

 

  ## This project has been deployed to GitHub, here is the link:

  *
 


## Summary

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.



## Author
 * ANDREI FLOREA - Initial work - Git Hub Profile
 * Challenge 12 |   SQL Challenge: Employee Tracker