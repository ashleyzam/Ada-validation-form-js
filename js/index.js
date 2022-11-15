const queryId = (id) => document.getElementById(id);
const queryClass = (classes) => document.getElementsByClassName(classes);
const success = document.querySelector(".success");
const password_error = document.querySelector(".error");
const error_campo = queryClass("error_campo");
// console.log(error_campo);
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
const validateFields = (id, posicion, msg) => {
  if (id.value !== "") {
    error_campo[posicion].innerHTML = "";
    id.style.border = "2px solid rgb(6, 229, 6)";
    return true;
  } else {
    error_campo[posicion].innerHTML = msg;
    id.style.border = "2px solid red";
    return false;
  }
};

queryId("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // if(validateFields(a,b,c,d)){
  // sendUserData()
  //}
  sendUserData();
  location.reload();
});

[user_name, user_email, user_password, user_repeat_password].forEach((evt) => {
  evt.addEventListener("keyup", () => {
    if (
      validateFields(user_name, 0, null) &&
      validateFields(user_email, 1, null) &&
      validateFields(user_password, 2, null) &&
      validatePassword()
    ) {
      queryId("btn").removeAttribute("disabled", "disabled");
      console.log("paso");
    } else {
      validateFields(user_name, 0, "User field cannot be empty");
      validateFields(user_email, 1, "E-mail field cannot be empty");
      validateFields(user_password, 2, "Password field cannot be empty");
      console.log("no paso");
      queryId("btn").setAttribute("disabled", "disabled");
    }
  });
});
