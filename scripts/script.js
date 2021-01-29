console.log('js loaded');

$(document).ready(function () {
  console.log('jQuery loaded');

  /*
  A 'Submit' button should collect the form information, 
  store the information to calculate monthly costs, 
  append information to the DOM and clear the input fields. 
  Using the stored information, calculate monthly costs 
  and append this to the to DOM. If the total monthly cost exceeds $20,000, 
  add a red background color to the total monthly cost.
  */

  $('#submitEmployeeForm').on('click', submitForm);
});

let monthlyCosts = 0;
let employees = [];

function submitForm() {
  console.log('Form submitted');
  collectInformation();
}

function collectInformation() {
  console.log('Collecting information from the input fields');

  const employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: Number($('#idNumber').val()),
    jobTitle: $('#jobTitle').val(),
    annualSalary: Number($('#annualSalary').val()),
  };
  console.log(employee);
  employees.push(employee);
}
