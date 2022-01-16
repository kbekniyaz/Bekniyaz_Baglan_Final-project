
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

// let checkmark = document.getElementsByClassName('complete');

// function alphanumeric(data) { 
//   let letters = /^[0-9a-zA-Z]+$/;
//   if (letters.test(data)) {
//     return true;
//   }
//   return false;
// }

// function validateEmail(data) {  
//   let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(testData.test(data)) {
//     return true;
//   }
//   return (false)  
// }  

// function disableButton() {
//   document.getElementById('signup').disabled = true;
// }

// function enableButton() {
//   document.getElementById('signup').disabled = false;
// }


// document.getElementById('username').onblur = function() {
//   let status = document.getElementById('username').value;
//   if (status.length < 5) {
//     document.getElementById('alert-username').innerHTML = 'Username field is empty or less than 5 characters';
//     checkmark[1].classList.remove('active');
//     disableButton();
//   } else if (!alphanumeric(status)) {
//     document.getElementById('alert-username').innerHTML = 'Invalid characters!';
//     checkmark[1].classList.remove('active');
//     disableButton();
//   } else {
//     document.getElementById('alert-username').innerHTML = '';
//     checkmark[1].classList.add('active');
//     enableButton();
//   }
// };

// document.getElementById('email').onblur = function() {
//   let status = document.getElementById('email').value;
//   if (status.length < 0) {
//     document.getElementById('alert-email').innerHTML = 'Email field is empty';
//     checkmark[2].classList.remove('active');
//     disableButton();
//   } else if (!validateEmail(status)) {
//     document.getElementById('alert-email').innerHTML = 'Invalid email address!';
//     checkmark[2].classList.remove('active');
//     disableButton();
//   } else {
//     document.getElementById('alert-email').innerHTML = '';
//     checkmark[2].classList.add('active');
//     enableButton();
//   }
// };

// document.getElementById('password').onblur = function() {
//   let status = document.getElementById('password').value;
//   if (status.length < 6) {
//     document.getElementById('alert-password').innerHTML = 'Password field is empty or less than 6 characters';
//     checkmark[3].classList.remove('active');
//     disableButton();
//   } else {
//     document.getElementById('alert-password').innerHTML = '';
//     checkmark[3].classList.add('active');
//     enableButton();
//   }
  
 
// }

// class Login {
// 	constructor(form, fields) {
// 		this.form = form;
// 		this.fields = fields;
// 		this.validateonSubmit();
// 	}

// 	validateonSubmit() {
// 		let self = this;

// 		this.form.addEventListener("submit", (e) => {
// 			e.preventDefault();
// 			var error = 0;
// 			self.fields.forEach((field) => {
// 				const input = document.querySelector(`#${field}`);
// 				if (self.validateFields(input) == false) {
// 					error++;
// 				}
// 			});
// 			if (error == 0) {
// 				//do login api here
// 				localStorage.setItem("auth", 1);
// 				this.form.submit();
// 			}
// 		});
// 	}

// 	validateFields(field) {
// 		if (field.value.trim() === "") {
// 			this.setStatus(
// 				field,
// 				`${field.previousElementSibling.innerText} cannot be blank`,
// 				"error"
// 			);
// 			return false;
// 		} else {
// 			if (field.type == "password") {
// 				if (field.value.length < 8) {
// 					this.setStatus(
// 						field,
// 						`${field.previousElementSibling.innerText} must be at least 8 characters`,
// 						"error"
// 					);
// 					return false;
// 				} else {
// 					this.setStatus(field, null, "success");
// 					return true;
// 				}
// 			} else {
// 				this.setStatus(field, null, "success");
// 				return true;
// 			}
// 		}
// 	}

// 	setStatus(field, message, status) {
// 		const errorMessage = field.parentElement.querySelector(".error-message");

// 		if (status == "success") {
// 			if (errorMessage) {
// 				errorMessage.innerText = "";
// 			}
// 			field.classList.remove("input-error");
// 		}

// 		if (status == "error") {
// 			errorMessage.innerText = message;
// 			field.classList.add("input-error");
// 		}
// 	}
// }

// const form = document.querySelector(".loginForm");
// if (form) {
// 	const fields = ["username", "password"];
// 	const validator = new Login(form, fields);
// }
// signInBtn.addEventListener('click', ()=>{
//    location.replace("index.html");
	
	
// }
// );
// addForm.addEventListener('submit' , (event) => {
// 	event.preventDefault();

// 	const newUser = addInputName.value;
// 	adminDB.login.push(newUser);
// 	adminDB.login.sort;

// });



