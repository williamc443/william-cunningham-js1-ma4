const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("The form was submitted");

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}

function checkInputLength(value) {
  // trim the value
  const trimmedValue = value.trim();

  // if the value's length is greater than 2 return true
  if (trimmedValue.length > 1) {
    return true;
  } else {
    alert("minimum 2 characters");
  }
}
