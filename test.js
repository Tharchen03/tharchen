const prompt = require("prompt-sync")();

let EMPLOYEE_NAME = [];
let DATE = [];
let EMPLOYEE_ID = [];

function addEmployee() {
//   const name = prompt("Enter employee name: ");
//   const date = prompt("Enter date: ");
  
  // Generate new ID for the employee
  const newId = EMPLOYEE_NAME.length + 1;

  // Add the employee details to the arrays
  EMPLOYEE_NAME.push(name);
  DATE.push(date);
  EMPLOYEE_ID.push(newId);

  console.log("Employee added successfully!");
}

// Call the addEmployee function to add a new employee
addEmployee();

