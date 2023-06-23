const form = document.getElementById("form");
const fName = document.getElementById("f-name");
const lName = document.getElementById("l-name");
const email = document.getElementById("mail");
const phone = document.getElementById("phone");
const pwd = document.getElementById("pwd");
const confirmPwd = document.getElementById("confirm-pwd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const pwdValue = pwd.value.trim();
  const confirmPwdValue = confirmPwd.value.trim();

  if (fNameValue === "") {
    setErrorFor(fName, "Username cannnot be empty");
  } else {
    setSuccessFor(fName);
  }

  if (lNameValue === "") {
    setErrorFor(lName, "Username cannot be empty");
  } else {
    setSuccessFor(lName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email must be a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number cannot be empty");
  } else {
    setSuccessFor(phone);
  }

  if (pwdValue === "") {
    setErrorFor(pwd, "Password cannot be empty");
  } else if (!isValid(pwdValue)) {
    setErrorFor(pwd, "Password should have at least 8-16 characters");
  } else {
    setSuccessFor(pwd);
  }

  if (confirmPwdValue === "") {
    setErrorFor(confirmPwd, "Password cannot be empty");
  } else if (confirmPwdValue !== pwdValue) {
    setErrorFor(confirmPwd, "Passwords do not match");
  } else {
    setSuccessFor(confirmPwd);
  }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");

  inputContainer.className = "input-container error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}

function isEmail(userEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    userEmail
  );
}

function isValid(userPwd) {
  return /.{8,16}$/.test(userPwd);
}
