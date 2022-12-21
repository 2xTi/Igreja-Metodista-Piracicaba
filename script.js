const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
var test = 0;

form.addEventListener('submit', (e) => {
   e.preventDefault();
   checkInputs();
})

function checkInputs() {
   const firstnameValue = firstname.value.trim()
   const lastnameValue = lastname.value.trim()
   const emailValue = email.value.trim()
   const numberValue = number.value.trim()

   if (firstnameValue === '') {
      errorValidation(firstname)
   } else {
      successValidation(firstname)
      test + 1;
   }
   if (lastnameValue === '') {
      errorValidation(lastname)
   } else {
      successValidation(lastname)
      test + 1;
   }
   if (emailValue === '') {
      errorValidation(email)
   } else {
      successValidation(email)
      test + 1;
   }
   if (numberValue === '') {
      errorValidation(number)
   } else if (numberValue.length < 11) {
      errorValidation(number)
   }
   else {
      successValidation(number)
      test + 1;
   }

   if (test === 4) {
      changeDiv()
   }
}


function changeDiv(input) {

   const formChange = input.parentElement;
   formChange.className = 'newForm'
}

function errorValidation(input) {

   const inputBox = input.parentElement;

   inputBox.className = 'input-box error'
}


function successValidation(input) {

   const formControl = input.parentElement;
   formControl.className = 'input-box success'
}

