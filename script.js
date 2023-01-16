
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const formH = document.getElementById('form-header');
const radioS = document.getElementById('sim');
const radioN = document.getElementById('nao');
const radioNone = document.getElementById('none');
const checkS = document.getElementById('csim');
const checkN = document.getElementById('cnao');
const checkNoite = document.getElementById('cnoite');
const editar = document.getElementById('editar');
const verifica = document.getElementById('verificar');
const enviar = document.getElementById('enviar');


function validateEmail(email) {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
}

verifica.addEventListener('click', (e) => {
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
   }
   if (lastnameValue === '') {
      errorValidation(lastname)
   } else {
      successValidation(lastname)
   }

   if (validateEmail(email.value) == false) {
      errorValidation(email)
   } else {
      successValidation(email)
   }
   if (numberValue === '') {
      errorValidation(number)
   } else if (numberValue.length < 11) {
      errorValidation(number)
   }
   else {
      successValidation(number)
   }

   if (firstnameValue !== '' && lastnameValue !== '' && validateEmail(emailValue) !== false && numberValue !== '' && numberValue > 11) {

      document.getElementById('allPrint').classList.remove('hide')
      document.getElementById('fnome-js').innerHTML = firstname.value;
      document.getElementById('lnome-js').innerHTML = lastname.value;
      document.getElementById('email-js').innerHTML = email.value;
      document.getElementById('number-js').innerHTML = number.value;

      document.getElementById('editar').classList.remove('hide')
      document.getElementById('limpar').classList.remove('hide')
      document.getElementById('enviar').classList.remove('hide')
      document.getElementById('verificar').classList.add('hide')
      document.getElementById('open-modal-btn').classList.add('hide')

      firstname.readOnly = true
      lastname.readOnly = true
      email.readOnly = true
      number.readOnly = true
      radioS.disabled = true
      radioN.disabled = true
      radioNone.disabled = true
      checkS.disabled = true
      checkN.disabled = true
      checkNoite.disabled = true

      editar.addEventListener('click', (e) => {
         e.preventDefault();
         firstname.readOnly = false
         lastname.readOnly = false
         email.readOnly = false
         number.readOnly = false
         radioS.disabled = false
         radioN.disabled = false
         radioNone.disabled = false
         checkS.disabled = false
         checkN.disabled = false
         checkNoite.disabled = false
         document.getElementById('editar').classList.add('hide')
         document.getElementById('limpar').classList.add('hide')
         document.getElementById('enviar').classList.add('hide')
         document.getElementById('verificar').classList.remove('hide')
         document.getElementById('open-modal-btn').classList.remove('hide')

      });
   }
}

function errorValidation(input) {

   const inputBox = input.parentElement;

   inputBox.className = 'input-box error'
}

function successValidation(input) {

   const formControl = input.parentElement;
   formControl.className = 'input-box success'
}
