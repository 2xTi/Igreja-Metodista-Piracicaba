const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const numberValue = number.value.trim()
    

    if(firstnameValue === '') {
        errorValidation(firstname)
     } else {
        successValidation(firstname)
     } 
     if(lastnameValue === '') {
        errorValidation(lastname)
     } else {
        successValidation(lastname)
     } 
     if(emailValue === '') {
        errorValidation(email)
     } else {
        successValidation(email)
     } 
     if(numberValue === '') {
        errorValidation(number)
     }else if(numberValue.length<11){
        errorValidation(number)
     }
      else {
        successValidation(number)
     } 
}


function errorValidation(input){

    const inputBox = input.parentElement; 

    inputBox.className = 'input-box error'
}


function successValidation (input){

    const formControl = input.parentElement;
    formControl.className = 'input-box success'
}