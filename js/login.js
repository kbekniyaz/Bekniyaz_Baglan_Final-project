
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('main__container');
const signInBtn = document.getElementById('si');
const addForm = document.querySelector('.RegisterForm'),
addInputName = document.querySelector('.register__name'),
addInputEmail = document.querySelector('.register__email'),
addINputPassword = document.querySelector('.register__password');

const adminDB = {login:"admin",password:"admin"};

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

let checkmark = document.getElementsByClassName('complete');

function alphanumeric(data) { 
  let letters = /^[0-9a-zA-Z]+$/;
  if (letters.test(data)) {
    return true;
  }
  return false;
}

function validateEmail(data) {  
  let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(testData.test(data)) {
    return true;
  }
  return (false)  
}  

function disableButton() {
  document.getElementById('signup').disabled = true;
}

function enableButton() {
  document.getElementById('signup').disabled = false;
}


document.getElementById('username').onblur = function() {
  let status = document.getElementById('username').value;
  if (status.length < 5) {
    document.getElementById('alert-username').innerHTML = 'Username field is empty or less than 5 characters';
    checkmark[1].classList.remove('active');
    disableButton();
  } else if (!alphanumeric(status)) {
    document.getElementById('alert-username').innerHTML = 'Invalid characters!';
    checkmark[1].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-username').innerHTML = '';
    checkmark[1].classList.add('active');
    enableButton();
  }
};

document.getElementById('email').onblur = function() {
  let status = document.getElementById('email').value;
  if (status.length < 0) {
    document.getElementById('alert-email').innerHTML = 'Email field is empty';
    checkmark[2].classList.remove('active');
    disableButton();
  } else if (!validateEmail(status)) {
    document.getElementById('alert-email').innerHTML = 'Invalid email address!';
    checkmark[2].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-email').innerHTML = '';
    checkmark[2].classList.add('active');
    enableButton();
  }
};

document.getElementById('password').onblur = function() {
  let status = document.getElementById('password').value;
  if (status.length < 6) {
    document.getElementById('alert-password').innerHTML = 'Password field is empty or less than 6 characters';
    checkmark[3].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-password').innerHTML = '';
    checkmark[3].classList.add('active');
    enableButton();
  }
  
 
}

signInBtn.addEventListener('click', ()=>{
   location.replace("index.html");
	
	
}
);
addForm.addEventListener('submit' , (event) => {
	event.preventDefault();

	const newUser = addInputName.value;
	adminDB.login.push(newUser);
	adminDB.login.sort;

});

const adm = document.querySelector("#admin");
const ghost = document.querySelector(".container__table")
adm.addEventListener('click',() =>
   ghost.style.opasity = "100%"
);

//login
function validateForm() {
  var user = document.loginForm.email.value;
  var pass = document.loginForm.password.value;
  var email = "email";
  var password = "password";
  if ((email == email) && (password == password)) {


      // User entered the correct input, lets store it so that we later can 
      // ensure that he has done so
      storeData("validatedUserName", user); // Store the user with key "validatedUserName"


      return true;
  }
  else {
      alert ("Login was unsuccessful, please check your username and password");
      return false;
  }
}
//registerValidation

var email = document.forms['regForm']['email'];
var username = document.forms['regForm']['username'];
var password = document.forms['regForm']['password'];


var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

function Validate() {
    // validate email
    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById('email').style.color = "red";
        email_error.textContent = "Email is required";
        email.focus();
        return false;
    }
    // validate username
    if (username.value == "") {
        username.style.border = "1px solid red";
        document.getElementById('RegUser').style.color = "red";
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }
    if (username.value.length < 3) {
        username.style.border = "1px solid red";
        document.getElementById('RegUser').style.color = "red";
        name_error.textContent = "Username must be at least 3 characters";
        username.focus();
        return false;
    }
    // validate password
    if (password.value == "") {
        password.style.border = "1px solid red";
        document.getElementById('RegPass').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.textContent = "Password is required";
        password.focus();
        return false;
    }
    // check if the two passwords match
    if (password.value != confirmPass.value) {
        password.style.border = "1px solid red";
        document.getElementById('pass_confirm_div').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.innerHTML = "The two passwords do not match";
        return false;
    }
}
// event handler functions
function nameVerify() {
    if (username.value != "") {
        username.style.border = "1px solid #5e6e66";
        document.getElementById('RegUser').style.color = "#5e6e66";
        name_error.innerHTML = "";
        return true;
    }
}
function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        document.getElementById('email').style.color = "#5e6e66";
        email_error.innerHTML = "";
        return true;
    }
}
