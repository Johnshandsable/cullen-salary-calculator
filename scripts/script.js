console.log('js loaded');

$(document).ready(function () {
  console.log('jQuery loaded');

  /*
  [x] A 'Submit' button should collect the form information, 
  [x] store the information to calculate monthly costs, 
  [] append information to the DOM and clear the input fields. 
  [] Using the stored information, calculate monthly costs 
  [] and append this to the to DOM. If the total monthly cost exceeds $20,000, 
  [] add a red background color to the total monthly cost.
  */

  $('#submitEmployeeForm').on('click', submitForm);
});

let monthlyCosts = 0;
let employees = [];

function submitForm() {
  console.log('Form submitted');
  collectInformation();
} // end submitForm

function collectInformation() {
  // console.log('Collecting information from the input fields');
  let annualSalary = Number($('#annualSalary').val());
  let idNumber = Number($('#idNumber').val());
  const employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: idNumber,
    jobTitle: $('#jobTitle').val(),
    annualSalary: annualSalary,
  };
  // console.log(employee);
  addToMonthlyCosts(annualSalary);
  employees.push(employee);
  renderEmployees();
} // end collectInformation

function addToMonthlyCosts(salary) {
  // console.log('adding monthly costs up');
  let employeeMonthly = Math.round(salary / 12);
  monthlyCosts += employeeMonthly; // salary represent annual income here
  return employeeMonthly; // return only the individual monthly income
} // end addToMonthlyCosts

function renderEmployees() {
  console.log('render employees');
  let $employeeInfo = $('#employeeInfo');
  $employeeInfo.empty();
  for (let employee of employees) {
    // console.log(employee.firstName);
    // Possibly add something on the table for users to delete people
    console.log(employee.annualSalary);
    console.log(employee.annualSalary / 12);
    $employeeInfo.append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>$ ${employee.annualSalary}</td>
        <td>$ ${addToMonthlyCosts(employee.annualSalary)}</td>
      </tr>
  }
  `);
  }
}
