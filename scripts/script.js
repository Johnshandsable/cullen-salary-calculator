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
}

function collectInformation() {
  console.log('Collecting information from the input fields');
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
}

function addToMonthlyCosts(salary) {
  console.log('adding monthly costs up');
  monthlyCosts += salary;
  console.log(monthlyCosts);
}
