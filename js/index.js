const queryId = (id) => document.getElementById(id);
const queryClass = (classes) => document.getElementsByClassName(classes);
const success = document.querySelector(".success");
const password_error = document.querySelector(".error");
const field_error = queryClass("field_error");
const user_name = queryId("username");
const user_email = queryId("email");
const user_password = queryId("password");
const user_repeat_password = queryId("repeat-password");
let userName, email, password, repeatPassword;
const btn_submit = queryId("btn").setAttribute("disabled", "disabled");

const sendUserData = () => {
  userName = user_name.value;
  email = user_email.value;
  password = user_password.value;
  repeatPassword = user_repeat_password.value;
  alert(`Hi ${userName}! Your information has been sent successfully!`);
};

const validatePassword = () => {
  if (user_password.value === user_repeat_password.value) {
    success.style.display = "block";
    password_error.style.display = "none";
    return true;
  } else {
    success.style.display = "none";
    password_error.style.display = "block";
    return false;
  }
};
const validateFields = (id, position, msg) => {
  if (id.value.length !== 0) {
    field_error[position].innerHTML = "";
    id.style.border = "2px solid rgb(6, 229, 6)";
    return true;
  } else {
    field_error[position].innerHTML = msg;
    id.style.border = "2px solid red";
    return false;
  }
};

queryId("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (isValidRequest()) {
    sendUserData();
    location.reload();
  } else {
    queryId("btn").setAttribute("disabled", "disabled");
  }
});
const isValidRequest = () => {
  return (
    validateFields(user_name, 0, null) &&
    validateFields(user_email, 1, null) &&
    validateFields(user_password, 2, null) &&
    validatePassword()
  );
};
const inputData = [user_name, user_email, user_password, user_repeat_password];

inputData.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (isValidRequest()) {
      queryId("btn").removeAttribute("disabled", "disabled");
    } else {
      validateFields(user_name, 0, "Name field cannot be empty");
      validateFields(user_email, 1, "E-mail field cannot be empty");
      validateFields(user_password, 2, "Password field cannot be empty");
      queryId("btn").setAttribute("disabled", "disabled");
    }
  });
});
