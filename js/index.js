const queryId = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);
const success = document.querySelector(".success");
const passw_error = document.querySelector(".error");
const error_campo = classes("error_campo");
let email, password, repeatPassword;
console.log(error_campo);
const btn_submit = queryId("btn").setAttribute("disabled", "disabled");

const sendUserData = () => {
  email = queryId("email").value;
  password = queryId("password").value;
  repeatPassword = queryId("repeat-password").value;
  alert("Your information has been sent successfully!");
};

const validatePassword = () => {
  if (queryId("password").value === queryId("repeat-password").value) {
    success.style.display = "block";
    passw_error.style.display = "none";
    return true;
  } else {
    success.style.display = "none";
    passw_error.style.display = "block";
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
const username = queryId("username");
const userEmail = queryId("email");
const userPassw = queryId("password");
const userRepeatPassw = queryId("repeat-password");

queryId("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // if(validateFields(a,b,c,d)){
  // sendUserData()
  //}
  sendUserData();
});

[username, userEmail, userPassw, userRepeatPassw].forEach((evt) => {
  evt.addEventListener("keyup", () => {
    if (
      validateFields(username, 0, null) &&
      validateFields(userEmail, 1, null) &&
      validateFields(userPassw, 2, null) &&
      validatePassword()
    ) {
      queryId("btn").removeAttribute("disabled", "disabled");
      console.log("paso");
    } else {
      validateFields(username, 0, "User field cannot be empty");
      validateFields(userEmail, 1, "E-mail field cannot be empty");
      validateFields(userPassw, 2, "Password field cannot be empty");
      console.log("no paso");
      queryId("btn").setAttribute("disabled", "disabled");
    }
  });
});
