console.log('js loaded');

$(document).ready(function () {
  console.log('jQuery loaded');

  /*
  [x] A 'Submit' button should collect the form information, 
  [x] store the information to calculate monthly costs, 
  [x] append information to the DOM and clear the input fields. 
  [x] Using the stored information, calculate monthly costs 
  [x] and append this to the to DOM. If the total monthly cost exceeds $20,000, 
  [x] add a red background color to the total monthly cost.
  */

  $('#submitEmployeeForm').on('click', submitForm); // event handler for submitButton
  $(document).on('click', '.deleteButton', deleteEmployee);
});

let employees = [];

function submitForm() {
  console.log('Form submitted');
  collectInformation();
  clearInputs();
} // end submitForm

function deleteEmployee() {
  console.log('delete button clicked');
  let idNumber = this.id;
  for (let index = 0; index < employees.length; index++) {
    if (employees[index].idNumber == idNumber) {
      employees.splice(index, 1);
      break;
    }
  }
  renderEmployees();
} // end deleteEmployee

function collectInformation() {
  // collects information from user inputs
  let annualSalary = Number($('#annualSalary').val());
  let idNumber = Number($('#idNumber').val());

  const employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: idNumber,
    jobTitle: $('#jobTitle').val(),
    annualSalary: annualSalary,
    monthlySalary: getMonthlySalary(annualSalary),
  };
  employees.push(employee);
  renderEmployees();
} // end collectInformation

function getMonthlySalary(salary) {
  let employeeMonthly = Math.round(salary / 12);
  return employeeMonthly; // return only the individual monthly income
} // end getMonthlySalary

function getMonthlyCosts() {
  console.log('getting monthly costs');
  let sum = 0;
  for (let employee of employees) {
    sum += employee.monthlySalary;
  }
  return sum;
}

function renderEmployees() {
  console.log('render employees');
  let $employeeInfo = $('#employeeInfo');
  $employeeInfo.empty(); // emptying out previous employee info so it doesn't get added on
  let $monthlyCost = $('#totalMonthly');
  $monthlyCost.empty();
  let monthlyCosts = getMonthlyCosts();
  for (let employee of employees) {
    // Possibly add something on the table for users to delete people
    // TODO: take out function from employeeInfo
    $employeeInfo.append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>$ ${employee.annualSalary}</td>
        <td>$ ${employee.monthlySalary}</td>
        <td><button id="${employee.idNumber}" class="deleteButton">Delete</button></td>
      </tr>
  `);
  }
  $monthlyCost.append(`
    <tr>
      <td>$ ${monthlyCosts}</td>
    </tr>
  `);
  if (monthlyCosts > 20000) {
    $('#monthlyTable').css('background-color', 'red');
  } else {
    $('#monthlyTable').css('background-color', '#27ae60');
  }
} // end renderEmployees

function clearInputs() {
  console.log('clearing inputs');
  // TODO: ADD Form Validation if users forget to put in info, do not erase other info

  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNumber').val('');
  $('#jobTitle').val('');
  $('#annualSalary').val('');
} // end clearInputs
