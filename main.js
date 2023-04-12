
// function add(){
//  // let empid = document.getElementById('emp_id').value;
//     let empname = document.getElementById('emp_name').value;
//     let empdate = document.getElementById('emp_date').value;

//     let data_id = document.getElementById('id');
//     let data_name = document.getElementById('name');
//     let data_date = document.getElementById('date');



//     data_id.innerHTML = empid;
//     data_name.innerHTML = empname;
//     data_date.innerHTML = empdate;

//     localStorage.setItem('empid',empid);
//     localStorage.setItem('empname',empname);
//     localStorage.setItem('empdate',empdate);
//     window.location.href = 'index.html'

//     // Create a new row for the employee in the table
// let newRow = employeeTable.insertRow();
// newRow.innerHTML = `
// <td>${empid}</td>
// <td>${empname}</td>
// <td>${empdate}</td>
// `;


// console.log(empid,empname,empdate);

// }
// // function generateEmployeeId() {
// // // Generate a random ID or use any other logic to generate the ID
// // // For example, you can use a timestamp or a counter that increments with each addition
// // // This is just a simple example using a random number
// // return Math.floor(Math.random() * 10000) + 1; // Change this as per your requirement
// // }


// function generateEmployeeId() {
//     // Retrieve the current highest employee ID from localStorage
//     let highestEmpId = localStorage.getItem('highestEmpId');
    
//     // If the highestEmpId is null or undefined, set it to 0
//     if (highestEmpId === null || highestEmpId === undefined) {
//         highestEmpId = 0;
//     }
    
//     // Increment the highestEmpId by 1
//     highestEmpId = parseInt(highestEmpId) + 1;
    
//     // Store the updated highestEmpId in localStorage
//     localStorage.setItem('highestEmpId', highestEmpId);
    
//     // Return the updated employee ID
//     return highestEmpId;
// }




// function add(){
//     let empid = generateEmployeeId();
//     let empname = document.getElementById('emp_name').value;
//     let empdate = document.getElementById('emp_date').value;

//     let data_id = document.getElementById('id');
//     let data_name = document.getElementById('name');
//     let data_date = document.getElementById('date');

//     data_id.innerHTML = empid;
//     data_name.innerHTML = empname;
//     data_date.innerHTML = empdate;

//     // Store employee data in local storage
//     localStorage.setItem('empid',empid);
//     localStorage.setItem('empname',empname);
//     localStorage.setItem('empdate',empdate);

//     // Redirect to index.html
//     window.location.href = 'index.html';
// }


// function generateEmployeeId() {
//     // Retrieve the current highest employee ID from localStorage
//     let highestEmpId = localStorage.getItem('highestEmpId');

//     // If the highestEmpId is null or undefined, set it to 0
//     if (highestEmpId === null || highestEmpId === undefined) {
//         highestEmpId = 0;
//     }

//     // Increment the highestEmpId by 1
//     highestEmpId = parseInt(highestEmpId) + 1;

//     // Store the updated highestEmpId in localStorage
//     localStorage.setItem('highestEmpId', highestEmpId);

//     // Return the updated employee ID
//     return highestEmpId;
// }

