const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('main__container');

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

document.getElementById('name').onblur = function() {
  let status = document.getElementById('name').value;
  if (status.length < 3) {
    document.getElementById('alert-name').innerHTML = 'Name field is empty or less than 3 characters!';
    checkmark[0].classList.remove('active');
    disableButton();
  } else if (!alphanumeric(status)) {
    document.getElementById('alert-name').innerHTML = 'Invalid characters!';
    checkmark[0].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-name').innerHTML = '';
    checkmark[0].classList.add('active');
    enableButton();
  }
};

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
