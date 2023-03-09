INSERT INTO department (name)
VALUES ("Accounting"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Senior accountant", 150000.00, 1),
       ("Junior Sales", 60000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", 1, NULL),
       ("Amira", "Afzal", 2, 1);