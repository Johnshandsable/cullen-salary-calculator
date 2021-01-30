console.log('js loaded');

$(document).ready(function () {
  console.log('jQuery loaded');

  /*
  [x] A 'Submit' button should collect the form information, 
  [x] store the information to calculate monthly costs, 
  [x] append information to the DOM and clear the input fields. 
  [] Using the stored information, calculate monthly costs 
  [] and append this to the to DOM. If the total monthly cost exceeds $20,000, 
  [] add a red background color to the total monthly cost.
  */

  $('#submitEmployeeForm').on('click', submitForm); // event handler for submitButton
});

let monthlyCosts = 0;
let employees = [];

function submitForm() {
  console.log('Form submitted');
  collectInformation();
} // end submitForm

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
  };
  // console.log(employee);
  employees.push(employee);
  renderEmployees();
} // end collectInformation

function addToMonthlyCosts(salary) {
  // adds up monthly costs
  let employeeMonthly = Math.round(salary / 12);
  console.log(employeeMonthly);
  monthlyCosts += employeeMonthly; // salary represent annual income here
  return employeeMonthly; // return only the individual monthly income
} // end addToMonthlyCosts

function renderEmployees() {
  console.log('render employees');
  let $employeeInfo = $('#employeeInfo');
  $employeeInfo.empty(); // emptying out previous employee info so it doesn't get added on
  let $monthlyCost = $('#totalMonthly');
  $monthlyCost.empty();

  for (let employee of employees) {
    // Possibly add something on the table for users to delete people
    $employeeInfo.append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>$ ${employee.annualSalary}</td>
        <td>$ ${addToMonthlyCosts(employee.annualSalary)}</td>
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
  }
} // end renderEmployees

function clearInputs() {
  console.log('clearing inputs');
}
