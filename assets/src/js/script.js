/*
Lógica -
Uma função para cada input, verificando:
- Se foi marcado/digitado
- O Seu valor

Uma função para o botão, que vai chamar cada função anterioremente

Dados:
- Variaveis para cada input e pro botão
*/

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("message");
const consentmentCheckbox = document.getElementById("consentment");
const submitButton = document.getElementById("submitButton");

let errorAmount = 0

function validateFirstName() {
  const firstName = firstNameInput.value;
  const firstNameError = document.getElementById("firstNameError");

  if (firstName === "") {
    firstNameError.classList.add("activeErrorMessage");
    firstNameInput.style.outline = "2px solid hsl(0, 66%, 54%)";
    errorAmount++;
    return false;
  } else {
    firstNameError.classList.remove("activeErrorMessage");
    firstNameInput.style.outline = "none";
    firstNameInput.value = " "
    return firstName;
  }
}

function validateLastName() {
  const lastName = lastNameInput.value;
  const lastNameError = document.getElementById("lastNameError");

  if (lastName === "") {
    lastNameError.classList.add("activeErrorMessage");
    lastNameInput.style.outline = "2px solid hsl(0, 66%, 54%)";
    errorAmount++;
    return false;
  } else {
    lastNameError.classList.remove("activeErrorMessage");
    lastNameInput.style.outline = "none";
    lastNameInput.value = " "
    return;
  }
}

function validateEmail() {
  const email = emailInput.value;
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !emailRegex.test(email)) {
    emailError.classList.add("activeErrorMessage");
    emailInput.style.outline = "2px solid hsl(0, 66%, 54%)";
    errorAmount++;
    return false;
  } else {
    emailError.classList.remove("activeErrorMessage");
    emailInput.style.outline = "none";
    emailInput.value = " "
    return email;
  }
}

function validateQueryType() {
  const queryTypeChecked = document.querySelector(
    'input[name="queryType"]:checked',
  );
  const queryTypeError = document.getElementById("queryTypeError");

  if (!queryTypeChecked) {
    queryTypeError.classList.add("activeErrorMessage");
    errorAmount++;
    return false;
  } else {
    queryTypeError.classList.remove("activeErrorMessage");
    queryTypeChecked.checked = false
    return queryTypeChecked.value;
  }
}

function validateMessage() {
  const message = messageTextarea.value;
  const messageError = document.getElementById("messageError");

  if (message === "") {
    messageError.classList.add("activeErrorMessage");
    messageTextarea.style.outline = "2px solid hsl(0, 66%, 54%)";
    errorAmount++;
    return false;
  } else {
    messageError.classList.remove("activeErrorMessage");
    messageTextarea.style.outline = "none";
    messageTextarea.value = " "
    return message;
  }
}

function validateConsentment() {
  const consentmentChecked = consentmentCheckbox.checked;
  const consentmentError = document.getElementById("consentmentError");

  if (!consentmentChecked) {
    consentmentError.classList.add("activeErrorMessage");
    errorAmount++;
    return false;
  } else {
    consentmentError.classList.remove("activeErrorMessage");
    consentmentCheckbox.checked = false;
    return consentmentChecked;
  }
}

function submitForm() {

    const successMessage = document.getElementById("successMessage");

    validateFirstName();
    validateLastName();
    validateEmail();
    validateQueryType();
    validateMessage();
    validateConsentment();

    if (errorAmount > 0){
        console.log(errorAmount)
        successMessage.classList.remove("activeSuccessMessage");
        errorAmount = 0;
        return false
    } else {
        successMessage.classList.add("activeSuccessMessage");
        return true
    }

}
