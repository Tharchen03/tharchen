function add() {
    let empid = generateEmployeeId();
    let empname = document.getElementById('emp_name').value;
    let empdate = document.getElementById('emp_date').value;

    let table = document.getElementById('employeeTable');

    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = empid;
    cell2.innerHTML = empname;
    cell3.innerHTML = empdate;

    // Create Edit button with Bootstrap icon
    let editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn btn-info btn-sm';
    editBtn.innerHTML = '<i class="fas fa-edit" color="white"></i>';
    editBtn.addEventListener('click', function() {

         let empIdToUpdate = empid;
         let empNameToUpdate = empname;
         let empDateToUpdate = empdate;

// Show a prompt to update employee name
let updatedEmpName = prompt('Enter updated Employee Name:', empNameToUpdate);
if (updatedEmpName !== null && updatedEmpName !== '') {
  empNameToUpdate = updatedEmpName;
  cell2.innerHTML = empNameToUpdate;
}

// Show a prompt to update employee date
let updatedEmpDate = prompt('Enter updated Date:', empDateToUpdate);
if (updatedEmpDate !== null && updatedEmpDate !== '') {
    empDateToUpdate = updatedEmpDate;
  cell3.innerHTML = empDateToUpdate;
}

// Update the localStorage with the updated employee data
localStorage.setItem('empname', empNameToUpdate);
localStorage.setItem('empdate', empDateToUpdate);

console.log('Edit button clicked for employee ID: ' + empIdToUpdate);
});
    cell4.appendChild(editBtn);


    // Create Delete button with Bootstrap icon
    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt" color="danger"></i>';
    deleteBtn.addEventListener('click', function() {
        // Handle delete button click event
        // Remove the corresponding row from the table
        table.deleteRow(row.rowIndex);

        // Update the localStorage to remove the deleted employee ID
        let employeeIds = JSON.parse(localStorage.getItem('employeeIds'));
        let index = employeeIds.indexOf(empid.toString());
        if (index !== -1) {
            employeeIds.splice(index, 1);
            localStorage.setItem('employeeIds', JSON.stringify(employeeIds));
        }

        console.log('Delete button clicked for employee ID: ' + empid);
    });
    cell4.appendChild(deleteBtn);

    // Store employee data in local storage
    localStorage.setItem('empid', empid);
    localStorage.setItem('empname', empname);
    localStorage.setItem('empdate', empdate);

    // Reset the form
    document.getElementById('emp_name').value = '';
    document.getElementById('emp_date').value = '';
}

function generateEmployeeId() {
    // Retrieve the current highest employee ID from localStorage
    let highestEmpId = localStorage.getItem('highestEmpId');

    // If the highestEmpId is null or undefined, set it to 0
    if (highestEmpId === null || highestEmpId === undefined) {
        highestEmpId = 0;
    }
    // Increment the highestEmpId by 1
    highestEmpId = parseInt(highestEmpId) + 1;

    // Store the updated highestEmpId in localStorage
    localStorage.setItem('highestEmpId', highestEmpId);

    // Return the updated employee ID
    return highestEmpId;
}