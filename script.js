let password = document.getElementById("password");

let passwordConfirmation = document.getElementById("password_confirmation");

let result = document.getElementById("message");

function checkPasswordsMatch() {
  if (password.value !== passwordConfirmation.value) {
    result.innerText = "*Passwords do not match";

    result.style.color = "red";

    password.setCustomValidity("invalid");
    passwordConfirmation.setCustomValidity("invalid");
  } else {
    result.innerText = "";

    password.setCustomValidity("");
    passwordConfirmation.setCustomValidity("");
  }
}

passwordConfirmation.addEventListener("keyup", checkPasswordsMatch);

/Writing function to show password/;

let showPasswordCheckbox = document.getElementById("show_password");

function showPassword() {
  if (showPasswordCheckbox.checked) {
    password.type = "text";
    passwordConfirmation.type = "text";
  } else {
    password.type = "password";
    passwordConfirmation.type = "password";
  }
}

showPasswordCheckbox.addEventListener("change", showPassword);
