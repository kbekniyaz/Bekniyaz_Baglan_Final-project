//CRUD system for register
//User class
class User{
	constructor(username,email,password){
		this.username = username;
		this.email = email;
		this.password = password;

	}
}

//UI class;
class UI{
	static displayUsers(){
		
		const users = Store.getUsers();


		users.forEach((user)=>UI.addUserToList(user));
	};

	static addUserToList(user){
		const list = document.querySelector('#user-list');

		const row = document.createElement('tr');

		row.innerHTML=`
		<td>${user.username}</td>
		<td>${user.email}</td>
		<td>${user.password }</td>
		<td><a href = "#" class="delete">X</a></td>
		`;
		list.appendChild(row);

	};
	static deleteUser(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}
	static showAlert(message,className){
		const div = document.createElement('div')
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.sign-up-container');
		const form = document.querySelector('#user-form');
		container.insertBefore(div,form);

		 setTimeout(()=>document.querySelector('.alert').remove(),3000);
	}

	static clearFields(){
		document.querySelector('#username').value='';
		document.querySelector('#email').value='';
		document.querySelector('#password').value='';
		
	}
}

//Store class
class Store{
	getUsers(){
		let users;
		if(localStorage.getItem('users') === null){
			users = [];
		}else{
			users = JSON.parse(localStorage.getItem('users'));
		}

		return users;
	}
	addUsers(user){
		const users = Store.getUsers();

		users.push(user);

		localStorage.setItem('users', JSON.stringify(users));

	}

	removeUsers(password){
		const users = Store.getUsers();

		users.forEach((user,index)=>{
			if(user.password === password){
				users.splice(index,1);

			}
		});

		localStorage.setItem('users', JSON.stringify(users));

	}
}
//display users
document.addEventListener('DOMContentLoaded',UI.displayUsers);
//add a user
document.querySelector('#user-form').addEventListener('submit',(e)=>
{
	e.preventDefault();

	const username = document.querySelector('#username').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	if(username==='' || email==='' || password===''){
		UI.showAlert('Please fill in all fields','danger');

	}else{

	}

	const user = new User(username,email,password);

	
	UI.addUserToList(user);

	Store.addUsers(user);

	UI.showAlert('User Added','success');


	UI.clearFields();


});
//remove a user
document.querySelector('#user-list').addEventListener('click' , (e)=>{
	UI.deleteUser(e.target);


	UI.showAlert('User Removed','success');

});