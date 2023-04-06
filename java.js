const prompt = require("prompt-sync")();

let EMPLOYEE_NAME = [];
let DATE = [];
let EMPLOYEE_ID = [];
let loop;

do {
  console.log('\n EMPLOYEE MANAGEMENT SYSTEM    \t\n');
  console.log('  \t  EMPLOYEE LIST   \t\n');

  console.log('EMPLOYEE NAME: \t     EMPLOYEE ID: \t    DATE: \n');

  // Loop through each employee and display their data
  for (let i = 0; i < EMPLOYEE_NAME.length; i++) {
    console.log(EMPLOYEE_NAME[i] + '           \tEM: ' + EMPLOYEE_ID[i]  + '          \t      ' + DATE[i]  );
  }

  console.log('1.ADD EMPLOYEE \n2.REMOVE EMPLOYEE\n3.UPDATE EMPLOYEE');

  let opt = prompt('Enter 1 || 2 || 3:  ');

  if (opt == 1) {
    // Generate a new employee ID
    const newId = EMPLOYEE_NAME.length + 1;

    EMPLOYEE_NAME.push(prompt('Enter your name:  '));
    DATE.push(prompt('Enter A Date:  '));
    EMPLOYEE_ID.push(newId); // Add the new employee ID to the array

    console.log('Employee added successfully. Press Enter to continue.');

  }else if (opt == 2) {

    let employeeId = prompt('Enter the employee ID: ');
    
    if (EMPLOYEE_ID.includes(parseInt(employeeId)) && employeeId != -1 ) {
      EMPLOYEE_ID.pop(employeeId-1);
      EMPLOYEE_NAME.pop(employeeId-1);
      DATE.pop(employeeId-1);

      console.log('Employee removed successfully. Press Enter to continue.');
    } else {
      console.log('Employee not found. Press Enter to continue.');
    }

  }
  else if(opt==3){
    let employeeId1 = prompt('Enter the employee ID to update: ');
    let employeeIndex = employeeId1 -1;
    
    if (EMPLOYEE_ID.includes(parseInt(employeeId1))) {
      EMPLOYEE_NAME[employeeIndex] = prompt('Enter updated name: ');
      DATE[employeeIndex] = prompt('Enter updated date: ');
  
      console.log('Employee updated successfully. Press Enter to continue.');


    } else {

      console.log('Employee not found. Press Enter to continue.');
    }
  }
  else {
    console.log('INVALID NUMBER');
  }

  loop = prompt('Do you want to continue? If yes, enter "yes".');
} while (loop != 'no');



